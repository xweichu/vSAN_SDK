(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121], {
    /***/
    "2lkI":
    /*!*********************************************************!*\
      !*** ./src/app/vsan/file-services/file-service-util.ts ***!
      \*********************************************************/

    /*! exports provided: FileServiceUtil */

    /***/
    function lkI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileServiceUtil", function () {
        return FileServiceUtil;
      });
      /* harmony import */


      var _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/affinity-site-location */
      "6Yrg");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2020-2022 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Holds the common properties and methods used for file service UI
       */


      var FileServiceUtil = /*@__PURE__*/function () {
        var FileServiceUtil = /*#__PURE__*/function () {
          function FileServiceUtil() {
            _classCallCheck(this, FileServiceUtil);
          }

          _createClass(FileServiceUtil, null, [{
            key: "getAffinitySiteLabel",
            value: function getAffinitySiteLabel(site, availableDomains) {
              switch (site) {
                case _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_0__["AffinitySiteLocation"].PREFERRED_DOMAIN:
                  var preferredDomain = availableDomains.find(function (domain) {
                    return domain.isPreferred;
                  });
                  return preferredDomain ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.affinitySite.preferred.label", preferredDomain.label) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.cluster.configure.summary.preferredFd");

                case _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_0__["AffinitySiteLocation"].NON_PREFERRED_DOMAIN:
                  var secondaryDomain = availableDomains.find(function (domain) {
                    return !domain.isPreferred && !domain.isHost;
                  });
                  return secondaryDomain ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.affinitySite.nonPreferred.label", secondaryDomain.label) : _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.cluster.configure.summary.secondaryFd");

                default:
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.affinitySite.none.label");
              }
            }
            /**
             * Returns the IP addresses from the File Service configuration in the form of a string, separated by commas.
             */

          }, {
            key: "getIpSettings",
            value: function getIpSettings(vdfsConfig, availableDomains) {
              var _this = this;

              if (!vdfsConfig || !vdfsConfig.config || !vdfsConfig.config.domainConfig || !vdfsConfig.config.domainConfig.ipSettings) {
                return [];
              }

              return vdfsConfig.config.domainConfig.ipSettings.map(function (ipSetting) {
                return {
                  ip: _this.getIpLabel(ipSetting),
                  fqdn: ipSetting.dnsName,
                  affinitySite: FileServiceUtil.getAffinitySiteLabel(ipSetting.affinityLocation, availableDomains)
                };
              });
            }
          }, {
            key: "getIpLabel",
            value: function getIpLabel(ipSetting) {
              return ipSetting.isDefault ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.services.fileservices.primaryIp", ipSetting.address) : ipSetting.address;
            }
          }]);

          return FileServiceUtil;
        }(); // properties used for API fileServiceConfigService.getFileShareAttributes


        FileServiceUtil.SHARE_NAME_PROPERTY = "sharenames";
        FileServiceUtil.SHARE_UUID_PROPERTY = "shareuuids";
        FileServiceUtil.SHARE_FILE_INDEXING_ENABLED_PROPERTY = "fileIndexingEnabled";
        return FileServiceUtil;
      }();
      /***/

    },

    /***/
    "3iRN":
    /*!**********************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-wizard.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CreateShareWizardComponent */

    /***/
    function iRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareWizardComponent", function () {
        return CreateShareWizardComponent;
      });
      /* harmony import */


      var _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/wizard/flow-wizard.component */
      "YxSn");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/vsan-file-shares-service */
      "DiBh");
      /* harmony import */


      var _create_share_review_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-share-review-page.component */
      "Z2VR");
      /* harmony import */


      var _create_share_general_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create-share-general-page.component */
      "fZoz");
      /* harmony import */


      var _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-size */
      "JJYf");
      /* harmony import */


      var _create_share_net_permissions_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-share-net-permissions-page.component */
      "dkHk");
      /* harmony import */


      var _generated_vsan_file_service_share_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-config */
      "dW9q");
      /* harmony import */


      var _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-access-type */
      "/h2T");
      /* harmony import */


      var _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/vsan-file-share-protocol */
      "A6b3");
      /* harmony import */


      var _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @generated/vsan-file-share-nfs-security-type */
      "x66q");
      /* harmony import */


      var _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @generated/affinity-site-location */
      "6Yrg");
      /* harmony import */


      var _create_share_file_analytics_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./create-share-file-analytics-page.component */
      "I5IY");
      /* harmony import */


      var _generated_smb_share_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @generated/smb-share-options */
      "odiE");
      /* harmony import */


      var _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @generated/smb-encryption-option */
      "sCPh");

      var CreateShareWizardComponent = /*#__PURE__*/function () {
        function CreateShareWizardComponent() {
          _classCallCheck(this, CreateShareWizardComponent);

          this.services = [_generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_2__["VsanFileSharesService"]];

          this.createOrCloneShare = function (share, domainName) {
            // Clone the existing file share object
            if (share) {
              return JSON.parse(JSON.stringify(share));
            }

            return _generated_vsan_file_service_share_config__WEBPACK_IMPORTED_MODULE_7__["VsanFileServiceShareConfig"].Factory.create("", domainName, null, _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_5__["VsanFileServiceShareSize"].GB, null, _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_5__["VsanFileServiceShareSize"].GB, [], "", [], _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_8__["VsanFileServiceShareAccessType"].NO_ACCESS, _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSV3_AND_NFSV4, // Default value of protocol since the first FS release
            _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].AUTH_SYS, // Default value of the security type is auth_sys at backend
            _generated_smb_share_options__WEBPACK_IMPORTED_MODULE_13__["SmbShareOptions"].Factory.create(_generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_14__["SmbEncryptionOption"].DISABLED, false), _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_11__["AffinitySiteLocation"].NONE, false);
          };
        }

        _createClass(CreateShareWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var modalContext = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext(); // We have to clone the passed in share object, otherwise if user changes a property of this share,
            // and then close the dialog, the shares list will be updated.


            var share = this.createOrCloneShare(modalContext.share, modalContext.domain.name);
            this.pages = [new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_0__["PageSet"]([_create_share_general_page_component__WEBPACK_IMPORTED_MODULE_4__["CreateShareGeneralPageComponent"]]), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_0__["PageSet"]([_create_share_net_permissions_page_component__WEBPACK_IMPORTED_MODULE_6__["CreateShareNetPermissionsPageComponent"]], function () {
              return share.protocol !== _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].SMB;
            }), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_0__["PageSet"]([_create_share_file_analytics_page_component__WEBPACK_IMPORTED_MODULE_12__["CreateShareFileAnalyticsPageComponent"]], function () {
              return modalContext.isFileAnalyticsEnabledOnCluster;
            }), new _component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_0__["PageSet"]([_create_share_review_page_component__WEBPACK_IMPORTED_MODULE_3__["CreateShareReviewPageComponent"]])]; // If a share is passed to the context, this means the user is editing an existing share

            var isEdit = !!modalContext.share;

            if (isEdit) {
              this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.edit.title");
              this.methodName = "updateShare";

              if (!share.quotaSize) {
                share.quotaSize = _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_5__["VsanFileServiceShareSize"].GB;
              }

              if (!share.softQuotaSize) {
                share.softQuotaSize = _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_5__["VsanFileServiceShareSize"].GB;
              }
            } else {
              this.title = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.fileservices.shares.create.title");
              this.methodName = "createShare";
            }

            this.context = {
              isEdit: isEdit,
              clusterRef: modalContext.clusterRef,
              share: share,
              fsDomainConfig: modalContext.domain,
              isAffinitySiteSupported: modalContext.isAffinitySiteSupported,
              shareUuid: modalContext.shareUuid,
              isFileAnalyticsEnabledOnCluster: modalContext.isFileAnalyticsEnabledOnCluster,
              isSmbProtocolSupported: modalContext.isSmbProtocolSupported,
              isKerberosSupported: modalContext.isKerberosSupported,
              isSmbAbeSupported: modalContext.isSmbAbeSupported,
              policies: modalContext.policies,
              vcCapabilityData: modalContext.vcCapabilityData
            };
          }
        }]);

        return CreateShareWizardComponent;
      }();
      /***/

    },

    /***/
    "6jzl":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-file-analytics-page.scss.shim.ngstyle.js ***!
      \*******************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function jzl(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9maWxlLXNlcnZpY2VzL2NyZWF0ZS1zaGFyZS9jcmVhdGUtc2hhcmUtZmlsZS1hbmFseXRpY3MtcGFnZS5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi11dGlscy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1taXhpbnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tZGVmYXVsdHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tY29sb3JzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLDZFQUFBO0FER0EsYUFBQTtBRG1CQTs7OztDQUFBO0FBdUJBOzs7RUFBQTtBRzdDQSw2RUFBQTtBTEdBO0VBRUcsYUFBQTtFQUNBLGNBQUE7QUFhSDtBRStCRztFQUNHLGdDQUFBO0FGN0JOO0FFK0JHOztFQUdHLGdDQUFBO0FGOUJOO0FFZ0NHO0VBQ0csOEJBQUE7QUY5Qk4iLCJmaWxlIjoic3JjL2FwcC92c2FuL2ZpbGUtc2VydmljZXMvY3JlYXRlLXNoYXJlL2NyZWF0ZS1zaGFyZS1maWxlLWFuYWx5dGljcy1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAyMCBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMCAwIGF1dG87XG59IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "8HBW":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-general-page.component.ngfactory.js ***!
      \**************************************************************************************************/

    /*! exports provided: RenderType_CreateShareGeneralPageComponent, View_CreateShareGeneralPageComponent_0, View_CreateShareGeneralPageComponent_Host_0, CreateShareGeneralPageComponentNgFactory */

    /***/
    function HBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateShareGeneralPageComponent", function () {
        return RenderType_CreateShareGeneralPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareGeneralPageComponent_0", function () {
        return View_CreateShareGeneralPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareGeneralPageComponent_Host_0", function () {
        return View_CreateShareGeneralPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareGeneralPageComponentNgFactory", function () {
        return CreateShareGeneralPageComponentNgFactory;
      });
      /* harmony import */


      var _create_share_general_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-share-general-page.scss.shim.ngstyle */
      "8Muu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../common/directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../common/util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/directive/reactive-forms/autofocus-control.directive */
      "KYLT");
      /* harmony import */


      var _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../common/service/task-monitor-service */
      "81c+");
      /* harmony import */


      var _create_share_general_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./create-share-general-page.component */
      "fZoz");
      /* harmony import */


      var _generated_pbm_data_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../generated/pbm-data-provider */
      "9L1J");
      /* harmony import */


      var _create_share_general_page_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./create-share-general-page.service */
      "ztDp");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateShareGeneralPageComponent = [_create_share_general_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateShareGeneralPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateShareGeneralPageComponent,
        data: {}
      });

      function View_CreateShareGeneralPageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["alertType", "warning"], ["id", "nfs-protocol-change-warning"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = "warning";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.edit.nfs.protocol.warning"));

          var currVal_2 = false;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_CreateShareGeneralPageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "clr-col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol"));

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.nfsv3_and_nfsv41"));

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.value;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.value;

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _v.context.$implicit.label;

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "clr-control-helper", [], [[2, "clr-subtext", null], [1, "id", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrControlHelper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrControlHelper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[9, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrControlHelper"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbf"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), "vsan.fileservices.shares.create.protocol.tooltip"));

          _ck(_v, 2, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 31, "clr-select-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 3, "label", [["class", "clr-col-4"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, [[6, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 16777216, null, 1, 10, "select", [["class", "clr-col-7"], ["clrSelect", ""], ["id", "protocol-select"], ["name", "protocol-select"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.protocolChange($event) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.selectedProtocol = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_CreateShareGeneralPageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 13, 0);

          var currVal_14 = "protocol-select";
          var currVal_15 = _co.selectedProtocol;

          _ck(_v, 20, 0, currVal_14, currVal_15);

          var currVal_16 = "protocol-select";

          _ck(_v, 23, 0, currVal_16);

          var currVal_17 = _co.protocols;

          _ck(_v, 26, 0, currVal_17);

          var currVal_18 = !_co.isEdit && _co.isSmbProtocolSupported && !_co.activeDirectoryEnabled;

          _ck(_v, 30, 0, currVal_18);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).addGrid();

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).forAttr;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.fileservices.shares.create.protocol"));

          _ck(_v, 14, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

          var currVal_12 = true;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).id;

          _ck(_v, 17, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        });
      }

      function View_CreateShareGeneralPageComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "clr-col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).forAttr;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.fileservices.shares.create.protocol"));

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.fileservices.shares.create.protocol.nfs"));

          _ck(_v, 9, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.value;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.value;

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _v.context.$implicit.label;

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "clr-select-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 3, "label", [["class", "clr-col-4"], ["id", "protocol-version-select-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, [[11, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 16777216, null, 1, 10, "select", [["class", "clr-col-7"], ["clrSelect", ""], ["id", "protocol-version-select"], ["name", "protocol-version-select"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.share.protocol = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _co.onEditNfsVersion() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 13, 0);

          var currVal_14 = "protocol-version-select";
          var currVal_15 = _co.share.protocol;

          _ck(_v, 20, 0, currVal_14, currVal_15);

          var currVal_16 = "protocol-version-select";

          _ck(_v, 23, 0, currVal_16);

          var currVal_17 = _co.nfsProtocols;

          _ck(_v, 26, 0, currVal_17);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).addGrid();

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).forAttr;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.fileservices.shares.create.protocol.versions.label"));

          _ck(_v, 14, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

          var currVal_12 = true;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).id;

          _ck(_v, 17, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        });
      }

      function View_CreateShareGeneralPageComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["nfs_only", 2]], null, 0, null, View_CreateShareGeneralPageComponent_8)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.isEdit;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5);

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_2 = !_co.isSmbProtocolSelected;

          _ck(_v, 8, 0, currVal_2);
        }, null);
      }

      function View_CreateShareGeneralPageComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !(_co.isEdit && _co.isSmbProtocolSelected);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 48);

          _ck(_v, 2, 0, currVal_0, currVal_1);
        }, null);
      }

      function View_CreateShareGeneralPageComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "clr-col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).forAttr;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol"));

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb"));

          _ck(_v, 9, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "clr-control-helper", [], [[2, "clr-subtext", null], [1, "id", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrControlHelper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrControlHelper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrControlHelper"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbf"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.fileservices.shares.create.security.tooltip"));

          _ck(_v, 2, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "clr-control-container clr-col-md-7"], ["id", "security-mode-auth-sys-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.isKerberosSupported && !_co.activeDirectoryEnabled;

          _ck(_v, 4, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.authSys"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CreateShareGeneralPageComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "bottom-middle"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_3 = "bottom-middle";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.authSys.info"));

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_CreateShareGeneralPageComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "bottom-middle"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n                     ", "\n                  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_3 = "bottom-middle";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.info"));

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_CreateShareGeneralPageComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 61, "div", [["aria-labelledby", "security-mode-label"], ["class", "clr-control-container clr-col-md-7"], ["role", "radiogroup"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 28, "div", [["class", "clr-radio-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "input", [["id", "auth-sys"], ["name", "security-mode"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onChange() !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_6 = (_co.securityMode = $event) !== false;
            ad = pd_6 && ad;
          }

          if ("change" === en) {
            var pd_7 = _co.invalidate() !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], {
          name: [0, "name"],
          value: [1, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "label", [["class", "clr-control-label clr-col-2"], ["for", "auth-sys"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 12, "clr-signpost", [["class", "indent clr-col-1"], ["id", "auth-sys-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](25, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareGeneralPageComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 28, "div", [["class", "clr-radio-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "input", [["id", "kerberos"], ["name", "security-mode"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onChange() !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_6 = (_co.securityMode = $event) !== false;
            ad = pd_6 && ad;
          }

          if ("change" === en) {
            var pd_7 = _co.invalidate() !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], {
          name: [0, "name"],
          value: [1, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "label", [["class", "clr-control-label clr-col-2"], ["for", "kerberos"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, null, ["\n                  ", "\n               "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](46, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 12, "clr-signpost", [["class", "indent clr-col-1"], ["id", "kerberos-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](55, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareGeneralPageComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = "security-mode";
          var currVal_8 = _co.AUTH_SYS;

          _ck(_v, 7, 0, currVal_7, currVal_8);

          var currVal_9 = "security-mode";
          var currVal_10 = _co.securityMode;

          _ck(_v, 9, 0, currVal_9, currVal_10);

          var currVal_12 = "auth-sys";

          _ck(_v, 14, 0, currVal_12);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _ck(_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.authSys.signpost.label"));

          _ck(_v, 24, 0, currVal_15);

          var currVal_16 = null;

          _ck(_v, 29, 0, currVal_16);

          var currVal_24 = "security-mode";
          var currVal_25 = _co.KERBEROS;

          _ck(_v, 37, 0, currVal_24, currVal_25);

          var currVal_26 = "security-mode";
          var currVal_27 = _co.securityMode;

          _ck(_v, 39, 0, currVal_26, currVal_27);

          var currVal_29 = "kerberos";

          _ck(_v, 44, 0, currVal_29);

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 54, 0, _ck(_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.signpost.label"));

          _ck(_v, 54, 0, currVal_32);

          var currVal_33 = null;

          _ck(_v, 59, 0, currVal_33);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending;

          _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).forAttr;

          _ck(_v, 13, 0, currVal_11);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.authSys"));

          _ck(_v, 15, 0, currVal_13);

          var currVal_14 = true;

          _ck(_v, 18, 0, currVal_14);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending;

          _ck(_v, 35, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).forAttr;

          _ck(_v, 43, 0, currVal_28);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 45, 0, _ck(_v, 46, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos"));

          _ck(_v, 45, 0, currVal_30);

          var currVal_31 = true;

          _ck(_v, 48, 0, currVal_31);
        });
      }

      function View_CreateShareGeneralPageComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "control-full-width clr-form-control clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"], ["id", "security-mode-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n         ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["security_mode_radio_group", 2]], null, 0, null, View_CreateShareGeneralPageComponent_15)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 3, 0);

          var currVal_2 = !_co.isKerberosAllowed;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10);

          _ck(_v, 8, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.label"));

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_CreateShareGeneralPageComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          ngValue: [0, "ngValue"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          ngValue: [0, "ngValue"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n               ", "\n            "]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.value;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.value;

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _v.context.$implicit.label;

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 31, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 28, "clr-select-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "label", [["class", "clr-col-4"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 212992, [[18, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 16777216, null, 1, 10, "select", [["class", "clr-col-7"], ["clrSelect", ""], ["id", "kerberos-requirement"], ["name", "kerberos-requirement"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.share.securityType = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _co.invalidate() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 6, 0);

          _ck(_v, 15, 0);

          var currVal_14 = "kerberos-requirement";
          var currVal_15 = _co.share.securityType;

          _ck(_v, 22, 0, currVal_14, currVal_15);

          var currVal_16 = "kerberos-requirement";

          _ck(_v, 25, 0, currVal_16);

          var currVal_17 = _co.krbOptions;

          _ck(_v, 28, 0, currVal_17);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).addGrid();

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).forAttr;

          _ck(_v, 14, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.requirements.label"));

          _ck(_v, 16, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending;

          var currVal_12 = true;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).id;

          _ck(_v, 19, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        });
      }

      function View_CreateShareGeneralPageComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "right-bottom"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_3 = "right-bottom";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.fileservices.shares.create.protocol.smb.mandatory.desc"));

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_CreateShareGeneralPageComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "div", [["class", "control-full-width clr-form-control clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "div", [["class", "clr-col-4 label-signpost-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "label", [["class", "clr-control-label clr-col-auto"], ["for", "smb-encryption-option"], ["id", "smb-encryption-option-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 12, "clr-signpost", [["id", "smb-encryption-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareGeneralPageComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 12, "div", [["class", "clr-control-container clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "div", [["class", "clr-toggle-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 16777216, null, null, 6, "input", [["clrToggle", ""], ["id", "smb-encryption-option"], ["name", "smb-encryption-option"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.smbEncryptionEnabled = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, ""]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "smb-encryption-option";

          _ck(_v, 5, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.encryption.signpost.label"));

          _ck(_v, 15, 0, currVal_4);

          var currVal_5 = null;

          _ck(_v, 20, 0, currVal_5);

          var currVal_14 = "smb-encryption-option";
          var currVal_15 = _co.smbEncryptionEnabled;

          _ck(_v, 31, 0, currVal_14, currVal_15);

          var currVal_16 = "smb-encryption-option";

          _ck(_v, 34, 0, currVal_16);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).forAttr;

          _ck(_v, 4, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.encryption"));

          _ck(_v, 6, 0, currVal_2);

          var currVal_3 = true;

          _ck(_v, 9, 0, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).id;

          _ck(_v, 28, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        });
      }

      function View_CreateShareGeneralPageComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "right-bottom"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_3 = "right-bottom";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.fileservices.shares.create.protocol.smb.abe.desc"));

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_CreateShareGeneralPageComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, "div", [["class", "control-full-width clr-form-control clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "div", [["class", "clr-col-4 label-signpost-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "label", [["class", "clr-control-label clr-col-auto"], ["for", "smb-abe-option"], ["id", "smb-abe-option-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 12, "clr-signpost", [["id", "smb-abe-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareGeneralPageComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 12, "div", [["class", "clr-control-container clr-col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "div", [["class", "clr-toggle-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 16777216, null, null, 6, "input", [["clrToggle", ""], ["id", "smb-abe-option"], ["name", "smb-abe-option"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.share.smbShareOptions.accessBasedEnumeration = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, ""]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "smb-abe-option";

          _ck(_v, 5, 0, currVal_1);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.abe.signpost.label"));

          _ck(_v, 15, 0, currVal_4);

          var currVal_5 = null;

          _ck(_v, 20, 0, currVal_5);

          var currVal_14 = "smb-abe-option";
          var currVal_15 = _co.share.smbShareOptions.accessBasedEnumeration;

          _ck(_v, 31, 0, currVal_14, currVal_15);

          var currVal_16 = "smb-abe-option";

          _ck(_v, 34, 0, currVal_16);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).forAttr;

          _ck(_v, 4, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.abe"));

          _ck(_v, 6, 0, currVal_2);

          var currVal_3 = true;

          _ck(_v, 9, 0, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).id;

          _ck(_v, 28, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        });
      }

      function View_CreateShareGeneralPageComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["id", "abe-info"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"],
          isSmall: [3, "isSmall"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = "info";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.abe.info"));

          var currVal_2 = false;
          var currVal_3 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_CreateShareGeneralPageComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          ngValue: [0, "ngValue"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          ngValue: [0, "ngValue"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n            ", "\n         "]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _v.context.$implicit.name;

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "right-top"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_3 = "right-top";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.fileservices.share.create.affinitySite.signpost"));

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_CreateShareGeneralPageComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          ngValue: [0, "ngValue"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          ngValue: [0, "ngValue"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n            ", "\n         "]))], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.getAffinitySiteLabel(_v.context.$implicit);

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 47, "clr-select-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 17, "label", [["class", "clr-control-label clr-col-4"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, [[30, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["\n         ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 12, "clr-signpost", [["id", "share-affinity-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](23, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareGeneralPageComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 16777216, null, 1, 10, "select", [["class", "clr-col-7"], ["clrSelect", ""], ["id", "affinity-location"], ["name", "affinity-location"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("change" === en) {
            var pd_3 = _co.toggleAffinitySiteWarning() !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.share.affinityLocation = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 2, 3, "clr-control-helper", [], [[2, "clr-subtext", null], [1, "id", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrControlHelper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrControlHelper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 49152, [[33, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrControlHelper"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbf"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, 0, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](46, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          _ck(_v, 13, 0);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.affinitySite.signpost.label"));

          _ck(_v, 22, 0, currVal_6);

          var currVal_7 = null;

          _ck(_v, 27, 0, currVal_7);

          var currVal_17 = "affinity-location";
          var currVal_18 = _co.share.affinityLocation;

          _ck(_v, 34, 0, currVal_17, currVal_18);

          var currVal_19 = "affinity-location";

          _ck(_v, 37, 0, currVal_19);

          var currVal_20 = _co.affinitySites;

          _ck(_v, 40, 0, currVal_20);
        }, function (_ck, _v) {
          var currVal_0 = true;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control.disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).addGrid();

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).forAttr;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.affinitySite.label"));

          _ck(_v, 14, 0, currVal_4);

          var currVal_5 = true;

          _ck(_v, 16, 0, currVal_5);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending;

          var currVal_15 = true;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).id;

          _ck(_v, 31, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

          var currVal_21 = true;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).id;

          _ck(_v, 43, 0, currVal_21, currVal_22);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 45, 0, _ck(_v, 46, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.affinitySite.selection.disabled.reason"));

          _ck(_v, 45, 0, currVal_23);
        });
      }

      function View_CreateShareGeneralPageComponent_29(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["alertType", "info"], ["id", "affinity-site-change-warning"], ["isSmall", "true"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          isSmall: [2, "isSmall"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var currVal_0 = "info";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.share.affinitySite.change.warning"));

          var currVal_2 = "true";

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_CreateShareGeneralPageComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[1, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n                     ", "\n                  "]))], function (_ck, _v) {
          var currVal_1 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.warningThresholdSize === _v.context.$implicit;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _co.getSizeLabel(_v.context.$implicit);

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_CreateShareGeneralPageComponent_31(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[1, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["\n                     ", "\n                  "]))], function (_ck, _v) {
          var currVal_1 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.hardQuotaSize === _v.context.$implicit;

          _ck(_v, 0, 0, currVal_0);

          var currVal_3 = _co.getSizeLabel(_v.context.$implicit);

          _ck(_v, 3, 0, currVal_3);
        });
      }

      function View_CreateShareGeneralPageComponent_32(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "clr-signpost-content", [["clrPosition", "right-top"]], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, 0, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1)], function (_ck, _v) {
          var currVal_3 = "right-top";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.label.signpost"));

          _ck(_v, 3, 0, currVal_4);
        });
      }

      function View_CreateShareGeneralPageComponent_33(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "button", [["class", "label label-light-blue btn-link"]], [[1, "aria-label", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](1, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["\n            ", "\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "badge badge-light-blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "clr-icon", [["class", "btn-close"], ["shape", "times"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeLabel(_v.context.$implicit.key) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_9__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.removeLabel"));

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.key;

          _ck(_v, 2, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.value;

          _ck(_v, 4, 0, currVal_2);
        });
      }

      function View_CreateShareGeneralPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_10__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 270, "form", [["clrForm", ""], ["clrLayout", "horizontal"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-form", null], [2, "clr-form-horizontal", null], [2, "clr-form-compact", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("submit" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onFormSubmit() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbi"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbi"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrForm"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbi"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          labels: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 81920, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLayout"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], {
          layout: [0, "layout"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 25, "clr-input-container", [["class", "control-full-width"], ["id", "share-name"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrInputContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrInputContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 1228800, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrInputContainer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 3, "label", [["class", "clr-col-4"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 212992, [[2, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](30, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 16777216, null, 1, 8, "input", [["autocomplete", "off"], ["autofocus", ""], ["class", "clr-col-7"], ["clrInput", ""], ["id", "name"], ["name", "name"], ["type", "text"], ["vsan-auto-focus", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-input", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("blur" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).triggerValidation() !== false;
            ad = pd_4 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_5 = (_co.share.name = $event) !== false;
            ad = pd_5 && ad;
          }

          if ("change" === en) {
            var pd_6 = _co.invalidate() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__["ReferenceWatcher"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 4210688, null, 0, _common_directive_reactive_forms_autofocus_control_directive__WEBPACK_IMPORTED_MODULE_12__["AutofocusControlDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service_task_monitor_service__WEBPACK_IMPORTED_MODULE_13__["TaskMonitorService"], _common_util_reference_watcher__WEBPACK_IMPORTED_MODULE_11__["ReferenceWatcher"]], {
          appAutoFocus: [0, "appAutoFocus"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["protocolSelection", 2]], null, 0, null, View_CreateShareGeneralPageComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["smb_only", 2]], null, 0, null, View_CreateShareGeneralPageComponent_11)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 28, "clr-select-container", [["class", "control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          multiple: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, 0, 3, "label", [["class", "clr-col-4"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 212992, [[25, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](80, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](81, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 16777216, null, 1, 10, "select", [["class", "clr-col-7"], ["clrSelect", ""], ["id", "policy"], ["name", "policy"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("change" === en) {
            var pd_3 = _co.invalidate() !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.selectedPolicy = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 15, "clr-input-container", [], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrInputContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrInputContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 1228800, null, 4, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrInputContainer"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbh"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, 0, 3, "label", [["class", "clr-col-4"], ["id", "storage-space-quotas-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 212992, [[36, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](115, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](116, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 48, "div", [["aria-labelledby", "storage-space-quotas-label"], ["class", "clr-row"], ["role", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 18, "clr-checkbox-wrapper", [["class", "clr-col-4 indent"]], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 40, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["id", "warning-threshold-check"], ["name", "warning-threshold-check"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("change" === en) {
            var pd_3 = _co.invalidate() !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.isWarningThresholdSelected = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](133, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, 1, 3, "label", [["class", "clr-col-12"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 212992, [[40, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](137, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](138, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 25, "div", [["class", "clr-col-7 clr-row quota-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 5, "input", [["class", "clr-col-3 clr-input"], ["id", "warning-threshold-value"], ["name", "warning-threshold-value-1"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.warningThresholdValue = $event) !== false;
            ad = pd_4 && ad;
          }

          if ("change" === en) {
            var pd_5 = _co.invalidate() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _co.VsanUiUtils.numberValidator($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 15, "div", [["class", "clr-col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 12, "div", [["class", "clr-select-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 9, "select", [["id", "warning-threshold-size"], ["name", "warning-threshold-size"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("change" === en) {
            var pd_2 = _co.invalidate() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.warningThresholdSize = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](155, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](157, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](162, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 48, "div", [["aria-labelledby", "storage-space-quotas-label"], ["class", "clr-row"], ["role", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 18, "clr-checkbox-wrapper", [["class", "clr-col-4 indent"]], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 41, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["id", "hard-quota-check"], ["name", "hard-quota-check"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("change" === en) {
            var pd_3 = _co.invalidate() !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.isHardQuotaSelected = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](182, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, 1, 3, "label", [["class", "clr-col-12"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](186, 212992, [[41, 4], [1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](187, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](188, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 25, "div", [["class", "clr-col-7 clr-row quota-field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 5, "input", [["class", "clr-col-3 clr-input"], ["id", "hard-quota-value"], ["name", "hard-quota-value"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.hardQuotaValue = $event) !== false;
            ad = pd_4 && ad;
          }

          if ("change" === en) {
            var pd_5 = _co.invalidate() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _co.VsanUiUtils.numberValidator($event) !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](196, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 15, "div", [["class", "clr-col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 12, "div", [["class", "clr-select-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 9, "select", [["class", "clr-select"], ["id", "hard-quota-size"], ["name", "hard-quota-size"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 205).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 205).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("change" === en) {
            var pd_2 = _co.invalidate() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.hardQuotaSize = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](205, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](207, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](209, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](212, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 43, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](221, 0, null, null, 17, "label", [["class", "clr-control-label clr-col-4"], ["for", "label-key"], ["id", "share-labels-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](222, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](223, null, ["\n         ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](224, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 12, "clr-signpost", [["id", "share-labels-signpost"]], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](229, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](231, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_8__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](232, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareGeneralPageComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](236, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 21, "div", [["aria-labelledby", "share-labels-label"], ["class", "clr-col-7 labels"], ["role", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 6, "input", [["class", "clr-col-4 clr-input"], ["id", "label-key"], ["name", "label-key"]], [[8, "placeholder", 0], [8, "title", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 243)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.labelKey = $event) !== false;
            ad = pd_4 && ad;
          }

          if ("change" === en) {
            var pd_5 = _co.invalidate() !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](243, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](245, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](247, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](248, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](250, 0, null, null, 6, "input", [["class", "clr-col-4 clr-input label-value"], ["id", "label-value"], ["name", "label-value"]], [[8, "placeholder", 0], [8, "title", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 251)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 251).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 251)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 251)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_co.labelValue = $event) !== false;
            ad = pd_4 && ad;
          }

          if ("change" === en) {
            var pd_5 = _co.invalidate() !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](251, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](253, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](255, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](256, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 2, "button", [["class", "btn btn-link btn-sm btn-add clr-col-3"], ["id", "add-label"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addLabel() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](259, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](260, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](264, 0, null, null, 7, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 4, "div", [["class", "clr-col-8 clr-offset-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareGeneralPageComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](269, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_10 = "horizontal";

          _ck(_v, 11, 0, currVal_10);

          var currVal_11 = _co.nfsVersionChangedWarning;

          _ck(_v, 14, 0, currVal_11);

          _ck(_v, 28, 0);

          var currVal_26 = "name";
          var currVal_27 = _co.share.name;

          _ck(_v, 35, 0, currVal_26, currVal_27);

          var currVal_28 = "name";

          _ck(_v, 38, 0, currVal_28);

          var currVal_29 = "";

          _ck(_v, 40, 0, currVal_29);

          var currVal_30 = !_co.isKerberosSupported;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46);

          _ck(_v, 44, 0, currVal_30, currVal_31);

          var currVal_32 = _co.isKerberosSupported && !_co.isSmbProtocolSelected;

          _ck(_v, 51, 0, currVal_32);

          var currVal_33 = _co.securityMode === _co.KERBEROS && _co.isKerberosAllowed;

          _ck(_v, 54, 0, currVal_33);

          var currVal_34 = _co.isSmbProtocolSelected;

          _ck(_v, 58, 0, currVal_34);

          var currVal_35 = _co.isSmbProtocolSelected && _co.isSmbAbeSupported;

          _ck(_v, 61, 0, currVal_35);

          var currVal_36 = _co.share == null ? null : _co.share.smbShareOptions == null ? null : _co.share.smbShareOptions.accessBasedEnumeration;

          _ck(_v, 64, 0, currVal_36);

          _ck(_v, 70, 0);

          _ck(_v, 79, 0);

          var currVal_51 = "policy";
          var currVal_52 = _co.selectedPolicy;

          _ck(_v, 86, 0, currVal_51, currVal_52);

          var currVal_53 = "policy";

          _ck(_v, 89, 0, currVal_53);

          var currVal_54 = _co.policies;

          _ck(_v, 92, 0, currVal_54);

          var currVal_55 = _co.displayAffinitySiteSelection;

          _ck(_v, 97, 0, currVal_55);

          var currVal_56 = _co.displayAffinitySiteSelection && _co.isAffinitySiteChangeWarningShown;

          _ck(_v, 100, 0, currVal_56);

          _ck(_v, 114, 0);

          _ck(_v, 123, 0);

          var currVal_72 = "warning-threshold-check";
          var currVal_73 = _co.isWarningThresholdSelected;

          _ck(_v, 130, 0, currVal_72, currVal_73);

          var currVal_74 = "warning-threshold-check";

          _ck(_v, 133, 0, currVal_74);

          _ck(_v, 136, 0);

          var currVal_84 = "warning-threshold-value-1";
          var currVal_85 = !_co.isWarningThresholdSelected;
          var currVal_86 = _co.warningThresholdValue;

          _ck(_v, 146, 0, currVal_84, currVal_85, currVal_86);

          var currVal_94 = "warning-threshold-size";
          var currVal_95 = !_co.isWarningThresholdSelected;
          var currVal_96 = _co.warningThresholdSize;

          _ck(_v, 157, 0, currVal_94, currVal_95, currVal_96);

          var currVal_97 = _co.sizes;

          _ck(_v, 162, 0, currVal_97);

          _ck(_v, 173, 0);

          var currVal_108 = "hard-quota-check";
          var currVal_109 = _co.isHardQuotaSelected;

          _ck(_v, 180, 0, currVal_108, currVal_109);

          var currVal_110 = "hard-quota-check";

          _ck(_v, 183, 0, currVal_110);

          _ck(_v, 186, 0);

          var currVal_120 = "hard-quota-value";
          var currVal_121 = !_co.isHardQuotaSelected;
          var currVal_122 = _co.hardQuotaValue;

          _ck(_v, 196, 0, currVal_120, currVal_121, currVal_122);

          var currVal_130 = "hard-quota-size";
          var currVal_131 = !_co.isHardQuotaSelected;
          var currVal_132 = _co.hardQuotaSize;

          _ck(_v, 207, 0, currVal_130, currVal_131, currVal_132);

          var currVal_133 = _co.sizes;

          _ck(_v, 212, 0, currVal_133);

          var currVal_135 = "label-key";

          _ck(_v, 222, 0, currVal_135);

          var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 231, 0, _ck(_v, 232, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.label.signpost.label"));

          _ck(_v, 231, 0, currVal_138);

          var currVal_139 = null;

          _ck(_v, 236, 0, currVal_139);

          var currVal_149 = "label-key";
          var currVal_150 = _co.isLabelInputDisabled;
          var currVal_151 = _co.labelKey;

          _ck(_v, 245, 0, currVal_149, currVal_150, currVal_151);

          var currVal_161 = "label-value";
          var currVal_162 = _co.isLabelInputDisabled;
          var currVal_163 = _co.labelValue;

          _ck(_v, 253, 0, currVal_161, currVal_162, currVal_163);

          var currVal_166 = _co.share.labels;

          _ck(_v, 269, 0, currVal_166);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

          var currVal_7 = true;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).layoutService.isHorizontal();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).layoutService.isCompact();

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_12 = true;
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).control.disabled;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).addGrid();

          _ck(_v, 16, 0, currVal_12, currVal_13, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).forAttr;

          _ck(_v, 27, 0, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _ck(_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.name"));

          _ck(_v, 29, 0, currVal_16);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending;

          var currVal_24 = true;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).id;

          _ck(_v, 32, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

          var currVal_37 = true;
          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).control.disabled;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).addGrid();

          _ck(_v, 66, 0, currVal_37, currVal_38, currVal_39);

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).forAttr;

          _ck(_v, 78, 0, currVal_40);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 80, 0, _ck(_v, 81, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.storagePolicy"));

          _ck(_v, 80, 0, currVal_41);

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassUntouched;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassTouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassPristine;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassDirty;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassValid;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassInvalid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassPending;

          var currVal_49 = true;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).id;

          _ck(_v, 83, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50);

          var currVal_57 = true;
          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).control.disabled;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).addGrid();

          _ck(_v, 102, 0, currVal_57, currVal_58, currVal_59);

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).forAttr;

          _ck(_v, 113, 0, currVal_60);

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 115, 0, _ck(_v, 116, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.quota"));

          _ck(_v, 115, 0, currVal_61);

          var currVal_62 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).toggle;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).toggle;

          _ck(_v, 121, 0, currVal_62, currVal_63);

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassUntouched;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassTouched;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassPristine;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassDirty;

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassValid;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassInvalid;

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassPending;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).id;

          _ck(_v, 127, 0, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71);

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).forAttr;

          _ck(_v, 135, 0, currVal_75);

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 137, 0, _ck(_v, 138, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.shareWarningThreshold"));

          _ck(_v, 137, 0, currVal_76);

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassUntouched;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassTouched;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassPristine;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassDirty;

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassValid;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassInvalid;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).ngClassPending;

          _ck(_v, 143, 0, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83);

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassUntouched;

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassTouched;

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassPristine;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassDirty;

          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassValid;

          var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassInvalid;

          var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ngClassPending;

          _ck(_v, 154, 0, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93);

          var currVal_98 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).toggle;

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).toggle;

          _ck(_v, 171, 0, currVal_98, currVal_99);

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassUntouched;

          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassTouched;

          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassPristine;

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassDirty;

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassValid;

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassInvalid;

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).ngClassPending;

          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).id;

          _ck(_v, 177, 0, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107);

          var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).forAttr;

          _ck(_v, 185, 0, currVal_111);

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 187, 0, _ck(_v, 188, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.shareHardQuota"));

          _ck(_v, 187, 0, currVal_112);

          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassUntouched;

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassTouched;

          var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPristine;

          var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassDirty;

          var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassValid;

          var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassInvalid;

          var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPending;

          _ck(_v, 193, 0, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119);

          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassUntouched;

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassTouched;

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassPristine;

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassDirty;

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassValid;

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassInvalid;

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).ngClassPending;

          _ck(_v, 204, 0, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129);

          var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).forAttr;

          _ck(_v, 221, 0, currVal_134);

          var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 223, 0, _ck(_v, 224, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.label"));

          _ck(_v, 223, 0, currVal_136);

          var currVal_137 = true;

          _ck(_v, 225, 0, currVal_137);

          var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 242, 0, _ck(_v, 248, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.label.key.placeholder")), "");

          var currVal_141 = _co.labelInputTitle;

          var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassUntouched;

          var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassTouched;

          var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassPristine;

          var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassDirty;

          var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassValid;

          var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassInvalid;

          var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 247).ngClassPending;

          _ck(_v, 242, 0, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148);

          var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 250, 0, _ck(_v, 256, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.label.value.placeholder")), "");

          var currVal_153 = _co.labelInputTitle;

          var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassUntouched;

          var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassTouched;

          var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassPristine;

          var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassDirty;

          var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassValid;

          var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassInvalid;

          var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).ngClassPending;

          _ck(_v, 250, 0, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158, currVal_159, currVal_160);

          var currVal_164 = !_co.isAddEnabled;

          _ck(_v, 258, 0, currVal_164);

          var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 259, 0, _ck(_v, 260, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.add"));

          _ck(_v, 259, 0, currVal_165);
        });
      }

      function View_CreateShareGeneralPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CreateShareGeneralPageComponent_0, RenderType_CreateShareGeneralPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_share_general_page_component__WEBPACK_IMPORTED_MODULE_14__["CreateShareGeneralPageComponent"], [_generated_pbm_data_provider__WEBPACK_IMPORTED_MODULE_15__["PbmDataProvider"], _create_share_general_page_service__WEBPACK_IMPORTED_MODULE_16__["CreateShareGeneralPageService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CreateShareGeneralPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _create_share_general_page_component__WEBPACK_IMPORTED_MODULE_14__["CreateShareGeneralPageComponent"], View_CreateShareGeneralPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "8Muu":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-general-page.scss.shim.ngstyle.js ***!
      \************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Muu(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".clr-control-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.clr-control-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .clr-control-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.clr-control-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 0rem;\n}\n.label-signpost-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%]    > clr-signpost[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%]    > clr-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0rem !important;\n}\n.label-signpost-container[_ngcontent-%COMP%]   .clr-col-auto[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.btn-close[_ngcontent-%COMP%], .btn-add[_ngcontent-%COMP%] {\n  margin-left: 0.6rem;\n  padding: 0;\n  min-width: auto;\n  cursor: pointer;\n}\n.quota-field[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.labels[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.label-value[_ngcontent-%COMP%] {\n  margin-left: 0.6rem;\n}\n.clr-control-label[_ngcontent-%COMP%]     .signpost-content-body {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9maWxlLXNlcnZpY2VzL2NyZWF0ZS1zaGFyZS9jcmVhdGUtc2hhcmUtZ2VuZXJhbC1wYWdlLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FIa0RHO0VBQ0csZ0NBQUE7QUZqQ047QUVtQ0c7O0VBR0csZ0NBQUE7QUZsQ047QUVvQ0c7RUFDRyw4QkFBQTtBRmxDTjtBQWxCQTtFQUNHLGFBQUE7RUFDQSxjQUFBO0FBcUJIO0FFa0NHO0VBQ0ssK0JBQUE7QUZoQ1I7QUVrQ0c7RUFJRywrQkFBQTtBRm5DTjtBRW9DTTtFQUNHLDRCQUFBO0FGbENUO0FFcUNHO0VBRUcsK0JBQUE7QUZwQ047QUVzQ007RUFDRyw0QkFBQTtBRnBDVDtBRXVDRztFQUNHLDZCQUFBO0FGckNOO0FBcENHO0VBQ0csVUFBQTtBQXNDTjtBQWxDQTtFQUNHLG1CR0RPO0VIRVAsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBcUNIO0FBbENBO0VBQ0csZUFBQTtBQXFDSDtBQWxDQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtBQXFDSDtBQWxDQTtFQUNHLG1CR2pCTztBSHNEVjtBQWpDRztFQUNHLGdCR2dHb0I7QUg1RDFCIiwiZmlsZSI6InNyYy9hcHAvdnNhbi9maWxlLXNlcnZpY2VzL2NyZWF0ZS1zaGFyZS9jcmVhdGUtc2hhcmUtZ2VuZXJhbC1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOC0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4uY2xyLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4ubGFiZWwtc2lnbnBvc3QtY29udGFpbmVyIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIEBpbmNsdWRlIHNpYmxpbmctcmlnaHQtc3BhY2luZygkdnNhbi1lbGVtZW50LXNwYWNpbmcgLyAyKTtcblxuICAgLmNsci1jb2wtYXV0byB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgfVxufVxuXG4uYnRuLWNsb3NlLCAuYnRuLWFkZCB7XG4gICBtYXJnaW4tbGVmdDogJHZzYW4tZWxlbWVudC1zcGFjaW5nO1xuICAgcGFkZGluZzogMDtcbiAgIG1pbi13aWR0aDogYXV0bztcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnF1b3RhLWZpZWxkIHtcbiAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmxhYmVscyB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxhYmVsLXZhbHVlIHtcbiAgIG1hcmdpbi1sZWZ0OiAkdnNhbi1lbGVtZW50LXNwYWNpbmc7XG59XG5cbi5jbHItY29udHJvbC1sYWJlbCB7XG4gICA6Om5nLWRlZXAgLnNpZ25wb3N0LWNvbnRlbnQtYm9keSB7XG4gICAgICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtbm9ybWFsO1xuICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "BmSV":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-file-analytics-page.component.ngfactory.js ***!
      \*********************************************************************************************************/

    /*! exports provided: RenderType_CreateShareFileAnalyticsPageComponent, View_CreateShareFileAnalyticsPageComponent_0, View_CreateShareFileAnalyticsPageComponent_Host_0, CreateShareFileAnalyticsPageComponentNgFactory */

    /***/
    function BmSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateShareFileAnalyticsPageComponent", function () {
        return RenderType_CreateShareFileAnalyticsPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareFileAnalyticsPageComponent_0", function () {
        return View_CreateShareFileAnalyticsPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareFileAnalyticsPageComponent_Host_0", function () {
        return View_CreateShareFileAnalyticsPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareFileAnalyticsPageComponentNgFactory", function () {
        return CreateShareFileAnalyticsPageComponentNgFactory;
      });
      /* harmony import */


      var _create_share_file_analytics_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-share-file-analytics-page.scss.shim.ngstyle */
      "6jzl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/edit-share-file-analytics.component.ngfactory */
      "EFX+");
      /* harmony import */


      var _shared_edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/edit-share-file-analytics.component */
      "vnkt");
      /* harmony import */


      var _create_share_file_analytics_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create-share-file-analytics-page.component */
      "I5IY");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateShareFileAnalyticsPageComponent = [_create_share_file_analytics_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateShareFileAnalyticsPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateShareFileAnalyticsPageComponent,
        data: {}
      });

      function View_CreateShareFileAnalyticsPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "vsan-edit-share-file-analytics", [], null, null, null, _shared_edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_EditShareFileAnalyticsComponent_0"], _shared_edit_share_file_analytics_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_EditShareFileAnalyticsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_edit_share_file_analytics_component__WEBPACK_IMPORTED_MODULE_3__["EditShareFileAnalyticsComponent"], [], {
          share: [0, "share"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.share;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_CreateShareFileAnalyticsPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CreateShareFileAnalyticsPageComponent_0, RenderType_CreateShareFileAnalyticsPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_share_file_analytics_page_component__WEBPACK_IMPORTED_MODULE_4__["CreateShareFileAnalyticsPageComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CreateShareFileAnalyticsPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _create_share_file_analytics_page_component__WEBPACK_IMPORTED_MODULE_4__["CreateShareFileAnalyticsPageComponent"], View_CreateShareFileAnalyticsPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "EMcy":
    /*!********************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-wizard.component.ngfactory.js ***!
      \********************************************************************************************/

    /*! exports provided: RenderType_CreateShareWizardComponent, View_CreateShareWizardComponent_0, View_CreateShareWizardComponent_Host_0, CreateShareWizardComponentNgFactory */

    /***/
    function EMcy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateShareWizardComponent", function () {
        return RenderType_CreateShareWizardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareWizardComponent_0", function () {
        return View_CreateShareWizardComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareWizardComponent_Host_0", function () {
        return View_CreateShareWizardComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareWizardComponentNgFactory", function () {
        return CreateShareWizardComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_wizard_flow_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/component/wizard/flow-wizard.component.ngfactory */
      "QsXF");
      /* harmony import */


      var _common_component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/wizard/flow-wizard.component */
      "YxSn");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create-share-wizard.component */
      "3iRN");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateShareWizardComponent = [];

      var RenderType_CreateShareWizardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_CreateShareWizardComponent,
        data: {}
      });

      function View_CreateShareWizardComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "vsan-flow-wizard", [], null, null, null, _common_component_wizard_flow_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_FlowWizardComponent_0"], _common_component_wizard_flow_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_FlowWizardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _common_component_wizard_flow_wizard_component__WEBPACK_IMPORTED_MODULE_2__["FlowWizardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"]], {
          startingTaskProperty: [0, "startingTaskProperty"],
          title: [1, "title"],
          contextProperties: [2, "contextProperties"],
          pageSets: [3, "pageSets"],
          services: [4, "services"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.methodName;
          var currVal_1 = _co.title;
          var currVal_2 = _co.context;
          var currVal_3 = _co.pages;
          var currVal_4 = _co.services;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_CreateShareWizardComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "vsan-file-services-create-share-wizard", [], null, null, null, View_CreateShareWizardComponent_0, RenderType_CreateShareWizardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_4__["CreateShareWizardComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CreateShareWizardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("vsan-file-services-create-share-wizard", _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_4__["CreateShareWizardComponent"], View_CreateShareWizardComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "I5IY":
    /*!***********************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-file-analytics-page.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CreateShareFileAnalyticsPageComponent */

    /***/
    function I5IY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareFileAnalyticsPageComponent", function () {
        return CreateShareFileAnalyticsPageComponent;
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

      var CreateShareFileAnalyticsPageComponent = /*@__PURE__*/function () {
        var CreateShareFileAnalyticsPageComponent = /*#__PURE__*/function () {
          function CreateShareFileAnalyticsPageComponent() {
            _classCallCheck(this, CreateShareFileAnalyticsPageComponent);
          }

          _createClass(CreateShareFileAnalyticsPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              if (!this.isEdit) {
                // When creating file share - file analytics should be enabled by default.
                this.share.isFileAnalyticsEnabled = true;
              }
            }
          }]);

          return CreateShareFileAnalyticsPageComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareFileAnalyticsPageComponent.prototype, "share", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareFileAnalyticsPageComponent.prototype, "isEdit", void 0);
        CreateShareFileAnalyticsPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.create.fileAnalytics.title"))], CreateShareFileAnalyticsPageComponent);
        return CreateShareFileAnalyticsPageComponent;
      }();
      /***/

    },

    /***/
    "Menj":
    /*!********************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-net-permissions-page.scss.shim.ngstyle.js ***!
      \********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Menj(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  font-size: 0.65rem;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n[_nghost-%COMP%]    > clr-button-group[_ngcontent-%COMP%], [_nghost-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.radio-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.radio-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.radio-container[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .radio-container[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.radio-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  color: var(--vsan-gray-color);\n}\n.header-row[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9maWxlLXNlcnZpY2VzL2NyZWF0ZS1zaGFyZS9jcmVhdGUtc2hhcmUtbmV0LXBlcm1pc3Npb25zLXBhZ2Uuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxNQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkcrR2lCO0FIcEdwQjtBRTZCRztFQUNHLGdDQUFBO0FGM0JOO0FFNkJHOztFQUdHLGdDQUFBO0FGNUJOO0FFOEJHO0VBQ0csOEJBQUE7QUY1Qk47QUFqQkE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7QUFvQkg7QUVjRztFQUNHLGdDQUFBO0FGWk47QUVjRzs7RUFHRyxnQ0FBQTtBRmJOO0FFZUc7RUFDRyw4QkFBQTtBRmJOO0FBMUJBO0VBQ0csNkJJWFM7QUp3Q1o7QUExQkE7RUFDRyxnQkc2RzBCO0FIaEY3QiIsImZpbGUiOiJzcmMvYXBwL3ZzYW4vZmlsZS1zZXJ2aWNlcy9jcmVhdGUtc2hhcmUvY3JlYXRlLXNoYXJlLW5ldC1wZXJtaXNzaW9ucy1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kc2hhcmUtbmV0LWZvbnQtc2l6ZTogJHZzYW4tZm9udC1zaXplLXNtO1xuJGljb24tYnV0dG9uLWNvbG9yOiAkdnNhbi1ncmF5O1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDEgMCBhdXRvO1xuICAgZm9udC1zaXplOiAkc2hhcmUtbmV0LWZvbnQtc2l6ZTtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nO1xufVxuXG4ucmFkaW8tY29udGFpbmVyIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgQGluY2x1ZGUgY2hpbGQtYm90dG9tLXNwYWNpbmc7XG59XG5cbi5idG4taWNvbiB7XG4gICBjb2xvcjogJGljb24tYnV0dG9uLWNvbG9yO1xufVxuXG4uaGVhZGVyLXJvdyB7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0O1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "Z2VR":
    /*!***************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-review-page.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CreateShareReviewPageComponent */

    /***/
    function Z2VR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareReviewPageComponent", function () {
        return CreateShareReviewPageComponent;
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


      var _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/vsan-file-share-protocol */
      "A6b3");
      /* harmony import */


      var _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/vsan-file-share-nfs-security-type */
      "x66q");
      /* harmony import */


      var _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shares/file-share-util */
      "PbIg");
      /* harmony import */


      var _file_service_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../file-service-util */
      "2lkI");
      /* harmony import */


      var _services_service_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/service.utils */
      "Tl2E");

      var CreateShareReviewPageComponent = /*@__PURE__*/function () {
        var CreateShareReviewPageComponent = /*#__PURE__*/function () {
          function CreateShareReviewPageComponent() {
            _classCallCheck(this, CreateShareReviewPageComponent);

            this.VsanFileShareProtocol = _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_3__["VsanFileShareProtocol"];
            this.ServiceUtils = _services_service_utils__WEBPACK_IMPORTED_MODULE_7__["ServiceUtils"];
          }

          _createClass(CreateShareReviewPageComponent, [{
            key: "getProtocolText",
            value: function getProtocolText() {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__["VsanFileShareUtils"].getShareProtocolLabel(this.share.protocol);
            }
          }, {
            key: "getEncryptionText",
            value: function getEncryptionText() {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__["VsanFileShareUtils"].getSmbEncryptionText(this.share.smbShareOptions.encryption);
            }
          }, {
            key: "getSecurityModeText",
            value: function getSecurityModeText() {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__["VsanFileShareUtils"].getSecurityModeText(this.share.securityType);
            }
          }, {
            key: "isKerberos",
            value: function isKerberos() {
              return this.share.protocol !== _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_3__["VsanFileShareProtocol"].SMB && this.share.securityType !== _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_4__["VsanFileShareNfsSecurityType"].AUTH_SYS;
            }
          }, {
            key: "getKerberosText",
            value: function getKerberosText() {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__["VsanFileShareUtils"].getKerberosText(this.share.securityType);
            }
          }, {
            key: "getSizeLabel",
            value: function getSizeLabel(size) {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__["VsanFileShareUtils"].getSizeLabel(size);
            }
          }, {
            key: "getLocalizedNumber",
            value: function getLocalizedNumber(number) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].localizeNumber(number);
            }
          }, {
            key: "getAffinitySiteLabel",
            value: function getAffinitySiteLabel(site) {
              return _file_service_util__WEBPACK_IMPORTED_MODULE_6__["FileServiceUtil"].getAffinitySiteLabel(site, this.availableDomains);
            }
          }, {
            key: "getSmbAbeOptionText",
            value: function getSmbAbeOptionText() {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_5__["VsanFileShareUtils"].getSmbAbeOptionText(this.share.smbShareOptions.accessBasedEnumeration);
            }
          }]);

          return CreateShareReviewPageComponent;
        }();

        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareReviewPageComponent.prototype, "selectedPolicy", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareReviewPageComponent.prototype, "share", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareReviewPageComponent.prototype, "isVsanStretchedCluster", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareReviewPageComponent.prototype, "isAffinitySiteSupported", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CreateShareReviewPageComponent.prototype, "availableDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareReviewPageComponent.prototype, "isFileAnalyticsEnabledOnCluster", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareReviewPageComponent.prototype, "isSmbAbeSupported", void 0);
        CreateShareReviewPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.create.page.review.title"))], CreateShareReviewPageComponent);
        return CreateShareReviewPageComponent;
      }();
      /***/

    },

    /***/
    "dkHk":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-net-permissions-page.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: CreateShareNetPermissionsPageComponent */

    /***/
    function dkHk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareNetPermissionsPageComponent", function () {
        return CreateShareNetPermissionsPageComponent;
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


      var _generated_vsan_file_service_ip_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @generated/vsan-file-service-ip-type */
      "9n5H");
      /* harmony import */


      var _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-access-type */
      "/h2T");
      /* harmony import */


      var _generated_vsan_file_service_share_net_permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-net-permission */
      "Rnvn");
      /* harmony import */


      var _service_ip_parser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/ip-parser.service */
      "u7SK");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var CreateShareNetPermissionsPageComponent_1;

      var CreateShareNetPermissionsPageComponent = /*@__PURE__*/function () {
        var CreateShareNetPermissionsPageComponent = CreateShareNetPermissionsPageComponent_1 = /*#__PURE__*/function () {
          function CreateShareNetPermissionsPageComponent(ipParser) {
            var _this2 = this;

            _classCallCheck(this, CreateShareNetPermissionsPageComponent);

            this.ipParser = ipParser;
            this.PermissionType = PermissionType;
            this.AccessType = _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileServiceShareAccessType"];

            this.populatePermissions = function () {
              _this2.share.netPermissions = _this2.netPermissions.map(function (p) {
                return _generated_vsan_file_service_share_net_permission__WEBPACK_IMPORTED_MODULE_4__["VsanFileServiceShareNetPermission"].Factory.create(p.ipAddress, +p.permissionType === PermissionType.READONLY, +p.permissionType === PermissionType.READWRITE, p.isRootSquashed, +p.permissionType === PermissionType.NOACCESS);
              });
            };
          }

          _createClass(CreateShareNetPermissionsPageComponent, [{
            key: "accessWarningMessage",
            get: function get() {
              if (this.share.accessType === _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileServiceShareAccessType"].ALL_ACCESS) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.fileservices.shares.create.allowAllAccess.warning");
              } else if (this.share.accessType === _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileServiceShareAccessType"].NO_ACCESS) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.fileservices.shares.create.allowNoAccess.warning");
              }
            }
          }, {
            key: "isCustomAccess",
            get: function get() {
              return _generated_vsan_file_service_share_access_type__WEBPACK_IMPORTED_MODULE_3__["VsanFileServiceShareAccessType"].CUSTOM_ACCESS === this.share.accessType;
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this3 = this;

              // Initially add one empty permission
              if (!this.share.netPermissions || this.share.netPermissions.length === 0) {
                this.netPermissions = [new NetPermissionWrapper()];
              } else {
                this.netPermissions = this.share.netPermissions.map(function (permission) {
                  var p = new NetPermissionWrapper();
                  p.permissionType = _this3.getPermissionType(permission);
                  p.isRootSquashed = permission.isRootSquashed;
                  p.ipAddress = permission.ipAddress;
                  return p;
                });
              }
            }
          }, {
            key: "getPermissionType",
            value: function getPermissionType(permission) {
              if (permission.isReadonly) {
                return PermissionType.READONLY;
              }

              if (permission.isWriteAllowed) {
                return PermissionType.READWRITE;
              }

              return PermissionType.NOACCESS;
            }
          }, {
            key: "add",
            value: function add() {
              this.netPermissions.push(new NetPermissionWrapper());
            }
          }, {
            key: "remove",
            value: function remove(id) {
              this.netPermissions.splice(id, 1);
            }
          }, {
            key: "invalidate",
            value: function invalidate() {
              this.pageControls.rebuildToc();
            }
          }, {
            key: "validate",
            value: function validate() {
              var _this4 = this;

              var validationErrors = [];

              if (this.isCustomAccess) {
                this.populatePermissions();

                if (this.share.netPermissions.find(function (permission) {
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].isEmpty(permission.ipAddress);
                })) {
                  validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.noIpAddress"));
                  return validationErrors;
                }

                var permit = this.share.netPermissions.find(function (perm) {
                  return !_this4.isValidIpData(perm.ipAddress);
                });

                if (permit) {
                  validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.invalidIpAddresses", permit.ipAddress));
                  return validationErrors;
                }
              }

              return null;
            }
          }, {
            key: "isValidIpData",
            value: function isValidIpData(ipString) {
              var ipStringTrimmed = ipString.trim();

              if ("*" === ipStringTrimmed) {
                // We allow customer to use * to match all the IPs
                return true;
              }

              var type = this.getIpDataType(ipStringTrimmed);

              switch (type) {
                case IpRangeType.SINGLE:
                  if (!this.isValidIpAddress(ipStringTrimmed)) {
                    return false;
                  }

                  break;

                case IpRangeType.RANGE:
                  var chunks = ipStringTrimmed.split("-");

                  if (chunks.length !== 2 || !this.isValidIpAddress(chunks[0]) || !this.isValidIpAddress(chunks[1])) {
                    // TODO [kaleksandrov] Probably we need to verify if the IPs are in the same network but for that we need a mask. Waiting for input from Yang.
                    return false;
                  }

                  break;

                case IpRangeType.SUBNET:
                  var ipSections = ipStringTrimmed.split("/");

                  if (!this.isValidIpAddress(ipSections[0]) || !this.ipParser.isSubnetForIpValid(ipStringTrimmed)) {
                    return false;
                  }

                  break;

                default:
                  return false;
              }

              return true;
            }
          }, {
            key: "isValidIpAddress",
            value: function isValidIpAddress(ip) {
              return this.isIpv6() ? this.ipParser.isIpv6AddressValid(ip) : this.ipParser.isIpv4AddressValid(ip);
            }
          }, {
            key: "isIpv6",
            value: function isIpv6() {
              return this.fsDomainConfig.ipType === _generated_vsan_file_service_ip_type__WEBPACK_IMPORTED_MODULE_2__["VsanFileServiceIpType"].V6;
            }
          }, {
            key: "getIpDataType",
            value: function getIpDataType(data) {
              if (CreateShareNetPermissionsPageComponent_1.SINGLE_IP_ADDRESS.test(data)) {
                return IpRangeType.SINGLE;
              }

              if (CreateShareNetPermissionsPageComponent_1.IP_ADDRESS_RANGE.test(data)) {
                return IpRangeType.RANGE;
              }

              if (CreateShareNetPermissionsPageComponent_1.IP_ADDRESS_SUBNET.test(data)) {
                return IpRangeType.SUBNET;
              }

              return null;
            }
          }]);

          return CreateShareNetPermissionsPageComponent;
        }();

        CreateShareNetPermissionsPageComponent.SINGLE_IP_ADDRESS = /^[\a-z\d:.]+$/;
        CreateShareNetPermissionsPageComponent.IP_ADDRESS_RANGE = /^[\a-z\d:.]+-[\a-z\d:.]+$/;
        CreateShareNetPermissionsPageComponent.IP_ADDRESS_SUBNET = /^[\a-z\d:.\/]+$/;
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareNetPermissionsPageComponent.prototype, "share", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareNetPermissionsPageComponent.prototype, "fsDomainConfig", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareNetPermissionsPageComponent.prototype, "pageControls", void 0);
        CreateShareNetPermissionsPageComponent = CreateShareNetPermissionsPageComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_6__["VsanUiUtils"].getString("vsan.fileservices.shares.create.page.netAccessControl.title"))], CreateShareNetPermissionsPageComponent);
        return CreateShareNetPermissionsPageComponent;
      }();
      /**
       * Wrapper class for VsanFileServiceShareNetPermission
       * We need this because the readonly and writeAllowed can't be true at the same time
       */


      var NetPermissionWrapper = /*#__PURE__*/_createClass(function NetPermissionWrapper() {
        _classCallCheck(this, NetPermissionWrapper);

        this.permissionType = PermissionType.READONLY;
      });

      var IpRangeType = /*@__PURE__*/function (IpRangeType) {
        IpRangeType[IpRangeType["SINGLE"] = 0] = "SINGLE";
        IpRangeType[IpRangeType["RANGE"] = 1] = "RANGE";
        IpRangeType[IpRangeType["SUBNET"] = 2] = "SUBNET";
        return IpRangeType;
      }({});

      var PermissionType = /*@__PURE__*/function (PermissionType) {
        PermissionType[PermissionType["NOACCESS"] = 0] = "NOACCESS";
        PermissionType[PermissionType["READONLY"] = 1] = "READONLY";
        PermissionType[PermissionType["READWRITE"] = 2] = "READWRITE";
        return PermissionType;
      }({});
      /***/

    },

    /***/
    "fZoz":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-general-page.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: CreateShareGeneralPageComponent */

    /***/
    function fZoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareGeneralPageComponent", function () {
        return CreateShareGeneralPageComponent;
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


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _generated_pbm_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @generated/pbm-data-provider */
      "9L1J");
      /* harmony import */


      var _generated_storage_policy_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @generated/storage-policy-data */
      "seBL");
      /* harmony import */


      var _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-size */
      "JJYf");
      /* harmony import */


      var _create_share_general_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-share-general-page.service */
      "ztDp");
      /* harmony import */


      var _generated_label_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @generated/label-data */
      "uNFC");
      /* harmony import */


      var _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @generated/vsan-file-share-protocol */
      "A6b3");
      /* harmony import */


      var _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @generated/vsan-file-share-nfs-security-type */
      "x66q");
      /* harmony import */


      var _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @generated/smb-encryption-option */
      "sCPh");
      /* harmony import */


      var _shares_file_share_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../shares/file-share-util */
      "PbIg");
      /* harmony import */


      var _generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @generated/vsan-stretched-cluster-service */
      "bxEx");
      /* harmony import */


      var _generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @generated/affinity-site-location */
      "6Yrg");
      /* harmony import */


      var _file_service_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../file-service-util */
      "2lkI");

      var CreateShareGeneralPageComponent_1;

      var CreateShareGeneralPageComponent = /*@__PURE__*/function () {
        var CreateShareGeneralPageComponent = CreateShareGeneralPageComponent_1 = /*#__PURE__*/function () {
          function CreateShareGeneralPageComponent(spbmService, generalPageService) {
            var _this5 = this;

            _classCallCheck(this, CreateShareGeneralPageComponent);

            this.spbmService = spbmService;
            this.generalPageService = generalPageService;
            this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"];
            this.AUTH_SYS = CreateShareGeneralPageComponent_1.AUTH_SYS;
            this.KERBEROS = CreateShareGeneralPageComponent_1.KERBEROS;
            this.removedLabelKeys = [];
            this.protocols = [];
            this.sizes = [_generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_6__["VsanFileServiceShareSize"].MB, _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_6__["VsanFileServiceShareSize"].GB, _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_6__["VsanFileServiceShareSize"].TB];
            this.kerberosTypes = [_generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5P, _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5I, _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5];
            this._securityMode = CreateShareGeneralPageComponent_1.AUTH_SYS;
            this._selectedProtocol = _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSV3_AND_NFSV4; // Supported Kerberos security requirements

            this.krbOptions = [{
              value: _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5,
              label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.krb5")
            }, {
              value: _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5I,
              label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.krb5i")
            }, {
              value: _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5P,
              label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.krb5p")
            }]; // Supported NFS protocols

            this.nfsProtocols = [{
              label: _shares_file_share_util__WEBPACK_IMPORTED_MODULE_12__["VsanFileShareUtils"].getShareProtocolLabel(_generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSv3),
              value: _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSv3
            }, {
              label: _shares_file_share_util__WEBPACK_IMPORTED_MODULE_12__["VsanFileShareUtils"].getShareProtocolLabel(_generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSv4),
              value: _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSv4
            }, {
              label: _shares_file_share_util__WEBPACK_IMPORTED_MODULE_12__["VsanFileShareUtils"].getShareProtocolLabel(_generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSV3_AND_NFSV4),
              value: _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSV3_AND_NFSV4
            }];
            this.warningThresholdSize = _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_6__["VsanFileServiceShareSize"].MB;
            this.hardQuotaSize = _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_6__["VsanFileServiceShareSize"].MB;
            this.nfsVersionChangedWarning = false;
            this.isAffinitySiteChangeWarningShown = false;
            /**
             * If all the validation is successful we check if there is some data left in the "label" fields.
             * If so we assume that the user has entered the data but forgot to click "Add" so we have to do it for them.
             * For more infor see https://bz3-prod-wwwd.eng.vmware.com/show_bug.cgi?id=2218701
             */

            this.updateLabels = function () {
              if (_this5.isAddEnabled) {
                _this5.addLabel();
              }
            };
          }

          _createClass(CreateShareGeneralPageComponent, [{
            key: "securityMode",
            get: function get() {
              return this._securityMode;
            },
            set: function set(val) {
              this._securityMode = val;

              if (val === CreateShareGeneralPageComponent_1.AUTH_SYS) {
                this.share.securityType = _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].AUTH_SYS;
              } else {
                // Only change the value when the previous value is not kerberos related
                if (!this.isKerberos()) {
                  this.share.securityType = _generated_vsan_file_share_nfs_security_type__WEBPACK_IMPORTED_MODULE_10__["VsanFileShareNfsSecurityType"].KRB5;
                }
              }
            }
          }, {
            key: "smbEncryptionEnabled",
            get: function get() {
              return this._smbEncryptionEnabled;
            },
            set: function set(enabled) {
              this._smbEncryptionEnabled = enabled;
              this.share.smbShareOptions.encryption = enabled ? _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_11__["SmbEncryptionOption"].MANDATORY : _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_11__["SmbEncryptionOption"].DISABLED;
              this.invalidate();
            }
          }, {
            key: "selectedProtocol",
            get: function get() {
              return this._selectedProtocol;
            },
            set: function set(val) {
              this._selectedProtocol = val;

              if (val === _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].SMB) {
                this.share.protocol = val;
              } else {
                this.share.protocol = _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSV3_AND_NFSV4;
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var error;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.initPageValues();

                        if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(this.policies)) {
                          error = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.noPolicies");
                          this.pageControls.addValidationErrors([error]);
                        } else {
                          this.isEdit ? this.setPolicyForEdittingShare() : this.setPolicyForNewShare();
                        }

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }, {
            key: "initPageValues",
            value: function initPageValues() {
              var _a;

              this.activeDirectoryEnabled = !!((_a = this.fsDomainConfig.adConfig) === null || _a === void 0 ? void 0 : _a.domain);
              this.isHardQuotaSelected = !!this.share.quota;
              this.hardQuotaValue = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].localizeNumber(this.share.quota);
              this.hardQuotaSize = this.share.quotaSize;
              this.isWarningThresholdSelected = !!this.share.softQuota;
              this.warningThresholdValue = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].localizeNumber(this.share.softQuota);
              this.warningThresholdSize = this.share.softQuotaSize;
              this.protocols = this.getAvailableProtocols();

              if (this.isEdit) {
                this.originalShareName = this.share.name;
                this.originalProtocol = this.share.protocol;
                this.originalAffinitySiteLocation = this.share.affinityLocation;
                this.securityMode = this.isKerberos() ? CreateShareGeneralPageComponent_1.KERBEROS : CreateShareGeneralPageComponent_1.AUTH_SYS;

                if (this.share.protocol === _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].SMB) {
                  this.smbEncryptionEnabled = this.share.smbShareOptions.encryption === _generated_smb_encryption_option__WEBPACK_IMPORTED_MODULE_11__["SmbEncryptionOption"].MANDATORY;
                }
              } // kerberosSupported === false means it's FS 7.0, but protocol is not acceptable in 7.0 release.
              // so UI has to set it null


              if (!this.isKerberosSupported) {
                this.share.protocol = null;
              }
            }
          }, {
            key: "setPolicyForEdittingShare",
            value: function setPolicyForEdittingShare() {
              var _this6 = this;

              var currentPolicy = this.policies.find(function (p) {
                return p.id === _this6.share.policyId;
              });

              if (currentPolicy) {
                this.selectedPolicy = currentPolicy;
              } else {
                // The share's policy cannot be found in the list of existing policies. This could mean either the
                // share was created without a policy (e.g. by directly using the API or the policy the share is
                // assigned with was deleted. In that case we are adding a new fake policy to the policies list
                // which is going to act like "leave it as it is"
                var fakePolicy = _generated_storage_policy_data__WEBPACK_IMPORTED_MODULE_5__["StoragePolicyData"].Factory.create(this.share.policyId, _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.create.emptyPolicy"), // name
                false, // isDefault
                true, // hasVsanNamespace
                false, // isVmCrypt
                0, // ftt
                null, // locality
                true); // isCompatible


                this.policies.unshift(fakePolicy);
                this.selectedPolicy = fakePolicy;
              }
            }
          }, {
            key: "setPolicyForNewShare",
            value: function setPolicyForNewShare() {
              var defaultPolicy = this.policies.find(function (p) {
                return p.isDefault;
              });
              this.selectedPolicy = defaultPolicy ? defaultPolicy : this.policies[0];
              this.share.policyId = this.selectedPolicy.id;
            }
            /**
             * Logic of determine if the share is using kerberos security mode
             */

          }, {
            key: "isKerberos",
            value: function isKerberos() {
              return this.kerberosTypes.indexOf(this.share.securityType) !== -1;
            }
            /**
             * Kerberos is only allowd when the protocol is nfsv4
             */

          }, {
            key: "isKerberosAllowed",
            get: function get() {
              return this.isKerberosSupported && this.activeDirectoryEnabled && this.share.protocol === _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSv4;
            }
          }, {
            key: "isSmbProtocolSelected",
            get: function get() {
              return this.share.protocol === _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].SMB;
            }
          }, {
            key: "getAvailableProtocols",
            value: function getAvailableProtocols() {
              var protocols = [];

              if (this.activeDirectoryEnabled && this.isSmbProtocolSupported && !this.isEdit) {
                protocols.push({
                  label: _shares_file_share_util__WEBPACK_IMPORTED_MODULE_12__["VsanFileShareUtils"].getShareProtocolLabel(_generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].SMB),
                  value: _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].SMB
                });
              }

              protocols.push({
                label: _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.create.protocol.nfs"),
                value: _generated_vsan_file_share_protocol__WEBPACK_IMPORTED_MODULE_9__["VsanFileShareProtocol"].NFSV3_AND_NFSV4
              });
              return protocols;
            }
          }, {
            key: "addLabel",
            value: function addLabel() {
              this.share.labels = this.share.labels || [];
              var trimmedKey = this.labelKey.trim();
              var trimmedVal = this.labelValue.trim();
              var existingLabel = this.share.labels.find(function (label) {
                return label.key === trimmedKey;
              });

              if (existingLabel) {
                existingLabel.value = trimmedVal;
              } else {
                this.share.labels.push(_generated_label_data__WEBPACK_IMPORTED_MODULE_8__["LabelData"].Factory.create(trimmedKey, trimmedVal));
              }

              if (this.isEdit) {
                // due to the vmodl API change, we have to pass an array of the keys of the removed labels,
                // otherwise the labels wont be removed.
                // If user first removes a label, and then adds a new label with the same key,
                // we have to remove the key from removedLabelKeys
                this.removedLabelKeys = this.removedLabelKeys.filter(function (key) {
                  return key !== trimmedKey;
                });
              }

              this.labelKey = "";
              this.labelValue = "";
            }
          }, {
            key: "removeLabel",
            value: function removeLabel(labelKey) {
              var trimmedKey = labelKey.trim();
              this.share.labels = this.share.labels.filter(function (label) {
                return label.key !== trimmedKey;
              });

              if (this.isEdit) {
                // due to the vmodl API change, we have to pass an array of the keys of the removed labels,
                // otherwise the labels wont be removed. We build the array here, but we should not add duplicated records
                if (!this.removedLabelKeys.some(function (key) {
                  return key === trimmedKey;
                })) {
                  this.removedLabelKeys.push(trimmedKey);
                }
              }
            }
          }, {
            key: "isLabelInputDisabled",
            get: function get() {
              return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].isEmpty(this.share.labels) && this.share.labels.length >= CreateShareGeneralPageComponent_1.LABELS_MAX_COUNT;
            }
          }, {
            key: "labelInputTitle",
            get: function get() {
              return this.isLabelInputDisabled ? _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.create.label.maximum") : "";
            }
          }, {
            key: "isAddEnabled",
            get: function get() {
              return this.generalPageService.isLabelValid(this.labelKey, this.labelValue);
            }
          }, {
            key: "invalidate",
            value: function invalidate() {
              this.pageControls.rebuildToc();
            }
          }, {
            key: "validate",
            value: function validate() {
              var _this7 = this;

              var validationErrors = []; // Validate name

              var nameValidationError = this.generalPageService.validateName(this.share);

              if (nameValidationError) {
                validationErrors.push(nameValidationError);
              } // Validate the policy


              var policyError = this.generalPageService.validatePolicy(this.selectedPolicy);

              if (policyError) {
                validationErrors.push(policyError);
              } else {
                this.share.policyId = this.selectedPolicy.id;
              } // Validate thresholds


              var thresholdsErrors = this.generalPageService.validateThresholds(this.isWarningThresholdSelected, this.warningThresholdValue, this.warningThresholdSize, this.isHardQuotaSelected, this.hardQuotaValue, this.hardQuotaSize);

              if (thresholdsErrors) {
                validationErrors.push.apply(validationErrors, _toConsumableArray(thresholdsErrors));
              } else {
                if (this.isWarningThresholdSelected) {
                  this.share.softQuota = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].convertLocalizedStringToNumber(this.warningThresholdValue);
                  this.share.softQuotaSize = this.warningThresholdSize;
                } else {
                  this.share.softQuota = null;
                  this.share.softQuotaSize = null;
                }

                if (this.isHardQuotaSelected) {
                  this.share.quota = _util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].convertLocalizedStringToNumber(this.hardQuotaValue);
                  this.share.quotaSize = this.hardQuotaSize;
                } else {
                  this.share.quota = null;
                  this.share.quotaSize = null;
                }
              }

              if (validationErrors.length) {
                return validationErrors;
              }

              if (!this.isEdit || this.nameChanged) {
                this.pageControls.setBusyState();
                return this.generalPageService.validateDuplicatedName(this.share.name).then(function (result) {
                  _this7.pageControls.clearBusyState();

                  _this7.updateLabels();

                  return result;
                })["catch"](function (err) {
                  _this7.pageControls.clearBusyState();

                  return [err];
                });
              } else {
                this.updateLabels();
              }

              return null;
            }
          }, {
            key: "nameChanged",
            get: function get() {
              return this.share.name !== this.originalShareName;
            }
          }, {
            key: "protocolChange",
            value: function protocolChange(value) {
              this.invalidate();
            }
          }, {
            key: "getSizeLabel",
            value: function getSizeLabel(size) {
              return _shares_file_share_util__WEBPACK_IMPORTED_MODULE_12__["VsanFileShareUtils"].getSizeLabel(size);
            }
          }, {
            key: "onEditNfsVersion",
            value: function onEditNfsVersion() {
              // No need to show the warning if it's creating a file share
              if (!this.isEdit) {
                return;
              }

              this.nfsVersionChangedWarning = this.share.protocol !== this.originalProtocol;
            }
          }, {
            key: "getAffinitySiteLabel",
            value: function getAffinitySiteLabel(site) {
              return _file_service_util__WEBPACK_IMPORTED_MODULE_15__["FileServiceUtil"].getAffinitySiteLabel(site, this.availableDomains);
            }
          }, {
            key: "affinitySites",
            get: function get() {
              var sites = new Set(this.fsDomainConfig.ipSettings.map(function (ipSetting) {
                return ipSetting.affinityLocation;
              })); // it's possible that 'Either' is not included in the configuration, but it can't be missed here

              if (!sites.has(_generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_14__["AffinitySiteLocation"].NONE)) {
                sites.add(_generated_affinity_site_location__WEBPACK_IMPORTED_MODULE_14__["AffinitySiteLocation"].NONE);
              }

              return Array.from(sites);
            }
          }, {
            key: "displayAffinitySiteSelection",
            get: function get() {
              return this.isAffinitySiteSupported && this.isVsanStretchedCluster;
            }
          }, {
            key: "toggleAffinitySiteWarning",
            value: function toggleAffinitySiteWarning() {
              this.isAffinitySiteChangeWarningShown = this.isEdit && this.share.affinityLocation !== this.originalAffinitySiteLocation;
            }
          }]);

          return CreateShareGeneralPageComponent;
        }();

        CreateShareGeneralPageComponent.AUTH_SYS = "auth_sys";
        CreateShareGeneralPageComponent.KERBEROS = "kerberos";
        CreateShareGeneralPageComponent.LABELS_MAX_COUNT = 5;
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareGeneralPageComponent.prototype, "isEdit", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _service_managed_object__WEBPACK_IMPORTED_MODULE_3__["ManagedObject"])], CreateShareGeneralPageComponent.prototype, "clusterRef", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareGeneralPageComponent.prototype, "share", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareGeneralPageComponent.prototype, "fsDomainConfig", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareGeneralPageComponent.prototype, "isAffinitySiteSupported", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareGeneralPageComponent.prototype, "isKerberosSupported", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareGeneralPageComponent.prototype, "isSmbProtocolSupported", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CreateShareGeneralPageComponent.prototype, "policies", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareGeneralPageComponent.prototype, "pageControls", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareGeneralPageComponent.prototype, "vcCapabilityData", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareGeneralPageComponent.prototype, "isVsanStretchedCluster", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CreateShareGeneralPageComponent.prototype, "availableDomains", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CreateShareGeneralPageComponent.prototype, "selectedPolicy", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CreateShareGeneralPageComponent.prototype, "removedLabelKeys", void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["InputProperty"])(), Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["OutputProperty"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CreateShareGeneralPageComponent.prototype, "isSmbAbeSupported", void 0);
        CreateShareGeneralPageComponent = CreateShareGeneralPageComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_component_wizard_flow_metadata__WEBPACK_IMPORTED_MODULE_1__["WizardPage"])(_util_vsan_util__WEBPACK_IMPORTED_MODULE_2__["VsanUiUtils"].getString("vsan.fileservices.shares.create.page.general.title"), null, [_generated_vsan_stretched_cluster_service__WEBPACK_IMPORTED_MODULE_13__["VsanStretchedClusterService"]])], CreateShareGeneralPageComponent);
        return CreateShareGeneralPageComponent;
      }();
      /***/

    },

    /***/
    "hYgp":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-net-permissions-page.component.ngfactory.js ***!
      \**********************************************************************************************************/

    /*! exports provided: RenderType_CreateShareNetPermissionsPageComponent, View_CreateShareNetPermissionsPageComponent_0, View_CreateShareNetPermissionsPageComponent_Host_0, CreateShareNetPermissionsPageComponentNgFactory */

    /***/
    function hYgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateShareNetPermissionsPageComponent", function () {
        return RenderType_CreateShareNetPermissionsPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareNetPermissionsPageComponent_0", function () {
        return View_CreateShareNetPermissionsPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareNetPermissionsPageComponent_Host_0", function () {
        return View_CreateShareNetPermissionsPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareNetPermissionsPageComponentNgFactory", function () {
        return CreateShareNetPermissionsPageComponentNgFactory;
      });
      /* harmony import */


      var _create_share_net_permissions_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-share-net-permissions-page.scss.shim.ngstyle */
      "Menj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component.ngfactory */
      "fdDr");
      /* harmony import */


      var _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/component/validation/validation.component */
      "ie44");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
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


      var _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../common/directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../common/directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _create_share_net_permissions_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./create-share-net-permissions-page.component */
      "dkHk");
      /* harmony import */


      var _common_service_ip_parser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../common/service/ip-parser.service */
      "u7SK");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateShareNetPermissionsPageComponent = [_create_share_net_permissions_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateShareNetPermissionsPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateShareNetPermissionsPageComponent,
        data: {}
      });

      function View_CreateShareNetPermissionsPageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-validation", [["alertType", "warning"], ["id", "all-access-warning"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"],
          isSmall: [3, "isSmall"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "warning";
          var currVal_1 = _co.accessWarningMessage;
          var currVal_2 = false;
          var currVal_3 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        }, null);
      }

      function View_CreateShareNetPermissionsPageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "clr-signpost-content", [], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var currVal_3 = "right-bottom";

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.allowAllAccess.tooltip"));

          _ck(_v, 5, 0, currVal_4);
        });
      }

      function View_CreateShareNetPermissionsPageComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "vsan-validation", [["alertType", "info"], ["id", "custom-access-warning"]], null, null, null, _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ValidationComponent_0"], _common_component_validation_validation_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ValidationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _common_component_validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"], [], {
          alertType: [0, "alertType"],
          alert: [1, "alert"],
          allowClose: [2, "allowClose"],
          alertsExpanded: [3, "alertsExpanded"],
          isSmall: [4, "isSmall"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var currVal_0 = "info";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.customizeAccess.info"));

          var currVal_2 = false;
          var currVal_3 = true;
          var currVal_4 = true;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        }, null);
      }

      function View_CreateShareNetPermissionsPageComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "button", [["class", "btn btn-icon btn-link"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.remove(_v.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](1, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "clr-icon", [["class", "remove-icon"], ["shape", "times-circle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "remove-", _v.parent.context.index, "");

          var currVal_1 = !_co.isCustomAccess;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 2, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.fileservices.shares.add"));

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      function View_CreateShareNetPermissionsPageComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 91, "div", [["aria-labelledby", "customize-network-access-label"], ["class", "indent clr-row"], ["role", "group"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "clr-col-5 control-full-width"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "input", [["class", "clr-input control-full-width"], ["type", "text"]], [[8, "id", 0], [8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_v.context.$implicit.ipAddress = $event) !== false;
            ad = pd_4 && ad;
          }

          if ("change" === en) {
            var pd_5 = _co.invalidate() !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 38, "clr-select-container", [["class", "clr-col-3 control-full-width"]], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrSelectContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrSelectContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1294336, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelectContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          multiple: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 16777216, null, 1, 25, "select", [["clrSelect", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "clr-select", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_v.context.$implicit.permissionType = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = _co.invalidate() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 4, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](37, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 4, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](43, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 4, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](48, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](49, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 34, "div", [["class", "clr-col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 31, "clr-checkbox-container", [], [[2, "clr-form-control", null], [2, "clr-form-control-disabled", null], [2, "clr-row", null], [1, "role", 0]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrCheckboxContainer_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrCheckboxContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbf"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 1228800, null, 5, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxContainer"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbh"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          controlSuccessComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          controlErrorComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          controlHelperComponent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          checkboxes: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, 1, 18, "clr-checkbox-wrapper", [], [[2, "clr-checkbox-wrapper", null], [2, "clr-toggle-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrCheckboxWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrCheckboxWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["isToggleFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 245760, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxWrapper"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["IS_TOGGLE"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 16777216, null, 0, 6, "input", [["clrCheckbox", ""], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onChange($event.target.checked) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).triggerValidation() !== false;
            ad = pd_2 && ad;
          }

          if ("change" === en) {
            var pd_3 = _co.invalidate() !== false;
            ad = pd_3 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_4 = (_v.context.$implicit.isRootSquashed = $event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          isDisabled: [1, "isDisabled"],
          model: [2, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 212992, [[14, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, 1, 3, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 212992, [[15, 4], [10, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](84, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareNetPermissionsPageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "ip-set-", _v.context.index, "");

          var currVal_11 = !_co.isCustomAccess;
          var currVal_12 = _v.context.$implicit.ipAddress;

          _ck(_v, 7, 0, currVal_10, currVal_11, currVal_12);

          _ck(_v, 18, 0);

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "permission-select-", _v.context.index, "");

          var currVal_26 = !_co.isCustomAccess;
          var currVal_27 = _v.context.$implicit.permissionType;

          _ck(_v, 28, 0, currVal_25, currVal_26, currVal_27);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "permission-select-", _v.context.index, "");

          _ck(_v, 31, 0, currVal_28);

          var currVal_29 = _co.PermissionType.NOACCESS;

          _ck(_v, 34, 0, currVal_29);

          var currVal_30 = _co.PermissionType.NOACCESS;

          _ck(_v, 35, 0, currVal_30);

          var currVal_32 = _co.PermissionType.READONLY;

          _ck(_v, 40, 0, currVal_32);

          var currVal_33 = _co.PermissionType.READONLY;

          _ck(_v, 41, 0, currVal_33);

          var currVal_35 = _co.PermissionType.READWRITE;

          _ck(_v, 46, 0, currVal_35);

          var currVal_36 = _co.PermissionType.READWRITE;

          _ck(_v, 47, 0, currVal_36);

          _ck(_v, 69, 0);

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "is-root-squash-", _v.context.index, "");

          var currVal_53 = !_co.isCustomAccess;
          var currVal_54 = _v.context.$implicit.isRootSquashed;

          _ck(_v, 76, 0, currVal_52, currVal_53, currVal_54);

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "is-root-squash-", _v.context.index, "");

          _ck(_v, 79, 0, currVal_55);

          _ck(_v, 82, 0);

          var currVal_58 = _v.context.index !== 0;

          _ck(_v, 90, 0, currVal_58);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "permission-list-item-", _v.context.index, "");

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "ip-set-", _v.context.index, "");

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 1, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.ipSet.placeholder")), "");

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending;

          _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_13 = true;
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).control.disabled;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).addGrid();

          _ck(_v, 13, 0, currVal_13, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;

          var currVal_23 = true;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).id;

          _ck(_v, 25, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 36, 0, _ck(_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.noaccess"));

          _ck(_v, 36, 0, currVal_31);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 42, 0, _ck(_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.read"));

          _ck(_v, 42, 0, currVal_34);

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 48, 0, _ck(_v, 49, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.write"));

          _ck(_v, 48, 0, currVal_37);

          var currVal_38 = true;
          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).control == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).control.disabled;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).addGrid();

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).role;

          _ck(_v, 55, 0, currVal_38, currVal_39, currVal_40, currVal_41);

          var currVal_42 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).toggle;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).toggle;

          _ck(_v, 67, 0, currVal_42, currVal_43);

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassUntouched;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassTouched;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPristine;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassDirty;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassValid;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassInvalid;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPending;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).id;

          _ck(_v, 73, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51);

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).forAttr;

          _ck(_v, 81, 0, currVal_56);

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 0, _ck(_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.rootSquash"));

          _ck(_v, 83, 0, currVal_57);
        });
      }

      function View_CreateShareNetPermissionsPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareNetPermissionsPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 75, "div", [["class", "radio-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 18, "clr-radio-wrapper", [], [[2, "clr-radio-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrRadioWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrRadioWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrRadioWrapper"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 1, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, 0, 7, "input", [["clrRadio", ""], ["id", "no-access-allowed"], ["name", "network-access-allowed"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onChange() !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).triggerValidation() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.share.accessType = $event) !== false;
            ad = pd_7 && ad;
          }

          if ("change" === en) {
            var pd_8 = _co.invalidate() !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], {
          name: [0, "name"],
          value: [1, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrRadio"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 3, "label", [["for", "no-access-allowed"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 212992, [[1, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 32, "clr-radio-wrapper", [], [[2, "clr-radio-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrRadioWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrRadioWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 114688, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrRadioWrapper"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 16777216, null, 0, 7, "input", [["clrRadio", ""], ["id", "all-access-allowed"], ["name", "network-access-allowed"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onChange() !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).triggerValidation() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.share.accessType = $event) !== false;
            ad = pd_7 && ad;
          }

          if ("change" === en) {
            var pd_8 = _co.invalidate() !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], {
          name: [0, "name"],
          value: [1, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrRadio"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 1, 3, "label", [["for", "all-access-allowed"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 212992, [[2, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](44, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 12, "clr-signpost", [], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 4210688, null, 0, _common_directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_10__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](53, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CreateShareNetPermissionsPageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 18, "clr-radio-wrapper", [], [[2, "clr-radio-wrapper", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ClrRadioWrapper_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ClrRadioWrapper"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 114688, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrRadioWrapper"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
          label: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 16777216, null, 0, 7, "input", [["clrRadio", ""], ["id", "customize-network-access"], ["name", "network-access-allowed"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [8, "id", 0]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).onChange() !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).triggerValidation() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.share.accessType = $event) !== false;
            ad = pd_7 && ad;
          }

          if ("change" === en) {
            var pd_8 = _co.invalidate() !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], {
          name: [0, "name"],
          value: [1, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrRadio"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          id: [0, "id"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, 1, 3, "label", [["for", "customize-network-access"], ["id", "customize-network-access-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 212992, [[4, 4]], 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          forAttr: [0, "forAttr"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](77, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](78, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareNetPermissionsPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 13, "div", [["class", "indent header-row clr-row"]], [[2, "disable-action", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 2, "div", [["class", "clr-col-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](88, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](89, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 2, "div", [["class", "clr-col-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](92, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](93, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 2, "div", [["class", "clr-col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](96, null, ["\n      ", "\n   "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](97, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareNetPermissionsPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 9, "div", [["class", "indent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 6, "button", [["class", "btn btn-icon btn-link"], ["id", "add-ip-btn"], ["type", "button"]], [[8, "disabled", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.add() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](106, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 2, "clr-icon", [["shape", "plus-circle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 4210688, null, 0, _common_directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = !_co.isCustomAccess;

          _ck(_v, 3, 0, currVal_0);

          _ck(_v, 8, 0);

          var currVal_10 = "network-access-allowed";
          var currVal_11 = _co.AccessType.NO_ACCESS;

          _ck(_v, 14, 0, currVal_10, currVal_11);

          var currVal_12 = "network-access-allowed";
          var currVal_13 = _co.share.accessType;

          _ck(_v, 16, 0, currVal_12, currVal_13);

          var currVal_14 = "no-access-allowed";

          _ck(_v, 19, 0, currVal_14);

          var currVal_16 = "no-access-allowed";

          _ck(_v, 22, 0, currVal_16);

          _ck(_v, 28, 0);

          var currVal_27 = "network-access-allowed";
          var currVal_28 = _co.AccessType.ALL_ACCESS;

          _ck(_v, 34, 0, currVal_27, currVal_28);

          var currVal_29 = "network-access-allowed";
          var currVal_30 = _co.share.accessType;

          _ck(_v, 36, 0, currVal_29, currVal_30);

          var currVal_31 = "all-access-allowed";

          _ck(_v, 39, 0, currVal_31);

          var currVal_33 = "all-access-allowed";

          _ck(_v, 42, 0, currVal_33);

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _ck(_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.allowAllAccess.signpost.label"));

          _ck(_v, 52, 0, currVal_36);

          var currVal_37 = null;

          _ck(_v, 57, 0, currVal_37);

          _ck(_v, 62, 0);

          var currVal_47 = "network-access-allowed";
          var currVal_48 = _co.AccessType.CUSTOM_ACCESS;

          _ck(_v, 68, 0, currVal_47, currVal_48);

          var currVal_49 = "network-access-allowed";
          var currVal_50 = _co.share.accessType;

          _ck(_v, 70, 0, currVal_49, currVal_50);

          var currVal_51 = "customize-network-access";

          _ck(_v, 73, 0, currVal_51);

          var currVal_53 = "customize-network-access";

          _ck(_v, 76, 0, currVal_53);

          var currVal_55 = _co.isCustomAccess;

          _ck(_v, 83, 0, currVal_55);

          var currVal_60 = _co.netPermissions;

          _ck(_v, 101, 0, currVal_60);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = true;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassUntouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassTouched;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPristine;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassDirty;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassValid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassInvalid;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPending;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).id;

          _ck(_v, 12, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).forAttr;

          _ck(_v, 21, 0, currVal_15);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.noaccess"));

          _ck(_v, 23, 0, currVal_17);

          var currVal_18 = true;

          _ck(_v, 27, 0, currVal_18);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassUntouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassTouched;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPristine;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassDirty;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassValid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassInvalid;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPending;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).id;

          _ck(_v, 32, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).forAttr;

          _ck(_v, 41, 0, currVal_32);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 43, 0, _ck(_v, 44, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.allowAllAccess"));

          _ck(_v, 43, 0, currVal_34);

          var currVal_35 = true;

          _ck(_v, 46, 0, currVal_35);

          var currVal_38 = true;

          _ck(_v, 61, 0, currVal_38);

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassUntouched;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassTouched;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassPristine;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassDirty;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassValid;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassInvalid;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassPending;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).id;

          _ck(_v, 66, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46);

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).forAttr;

          _ck(_v, 75, 0, currVal_52);

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 77, 0, _ck(_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.customizeAccess"));

          _ck(_v, 77, 0, currVal_54);

          var currVal_56 = !_co.isCustomAccess;

          _ck(_v, 85, 0, currVal_56);

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 88, 0, _ck(_v, 89, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.ipSet"));

          _ck(_v, 88, 0, currVal_57);

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 92, 0, _ck(_v, 93, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.permission"));

          _ck(_v, 92, 0, currVal_58);

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 96, 0, _ck(_v, 97, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.squashOption"));

          _ck(_v, 96, 0, currVal_59);

          var currVal_61 = !_co.isCustomAccess;

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 105, 1, _ck(_v, 106, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.remove"));

          _ck(_v, 105, 0, currVal_61, currVal_62);
        });
      }

      function View_CreateShareNetPermissionsPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CreateShareNetPermissionsPageComponent_0, RenderType_CreateShareNetPermissionsPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_share_net_permissions_page_component__WEBPACK_IMPORTED_MODULE_11__["CreateShareNetPermissionsPageComponent"], [_common_service_ip_parser_service__WEBPACK_IMPORTED_MODULE_12__["IpParserService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CreateShareNetPermissionsPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _create_share_net_permissions_page_component__WEBPACK_IMPORTED_MODULE_11__["CreateShareNetPermissionsPageComponent"], View_CreateShareNetPermissionsPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "qpck":
    /*!*************************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-review-page.component.ngfactory.js ***!
      \*************************************************************************************************/

    /*! exports provided: RenderType_CreateShareReviewPageComponent, View_CreateShareReviewPageComponent_0, View_CreateShareReviewPageComponent_Host_0, CreateShareReviewPageComponentNgFactory */

    /***/
    function qpck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateShareReviewPageComponent", function () {
        return RenderType_CreateShareReviewPageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareReviewPageComponent_0", function () {
        return View_CreateShareReviewPageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateShareReviewPageComponent_Host_0", function () {
        return View_CreateShareReviewPageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareReviewPageComponentNgFactory", function () {
        return CreateShareReviewPageComponentNgFactory;
      });
      /* harmony import */


      var _create_share_net_permissions_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-share-net-permissions-page.scss.shim.ngstyle */
      "Menj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shared_share_net_permission_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/share-net-permission.component.ngfactory */
      "tdlQ");
      /* harmony import */


      var _shared_share_net_permission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/share-net-permission.component */
      "mdsO");
      /* harmony import */


      var _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _create_share_review_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-share-review-page.component */
      "Z2VR");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateShareReviewPageComponent = [_create_share_net_permissions_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateShareReviewPageComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateShareReviewPageComponent,
        data: {}
      });

      function View_CreateShareReviewPageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          _ck(_v, 5, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).forAttr;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.encryption"));

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _co.getEncryptionText();

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_CreateShareReviewPageComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.kerberos.requirements.label"));

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _co.getKerberosText();

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_CreateShareReviewPageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 4, 0);

          var currVal_3 = _co.isKerberos();

          _ck(_v, 13, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).forAttr;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.services.fileservices.wizard.activeDirectoryPage.security.label"));

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.getSecurityModeText();

          _ck(_v, 9, 0, currVal_2);
        });
      }

      function View_CreateShareReviewPageComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.protocol.smb.abe"));

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _co.getSmbAbeOptionText();

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_CreateShareReviewPageComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["id", "shareWarningThreshold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", " ", "\n         "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getLocalizedNumber(_co.share.softQuota);

          var currVal_1 = _co.getSizeLabel(_co.share.softQuotaSize);

          _ck(_v, 1, 0, currVal_0, currVal_1);
        });
      }

      function View_CreateShareReviewPageComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["id", "noShareWarningThreshold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.na.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CreateShareReviewPageComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["id", "shareHardQuota"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", " ", "\n         "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _co.getLocalizedNumber(_co.share.quota);

          var currVal_1 = _co.getSizeLabel(_co.share.quotaSize);

          _ck(_v, 1, 0, currVal_0, currVal_1);
        });
      }

      function View_CreateShareReviewPageComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["id", "noShareHardQuota"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.na.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CreateShareReviewPageComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [["class", "label label-light-blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n               ", "\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "badge badge-light-blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.key;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.value;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_CreateShareReviewPageComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [["id", "labels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.share.labels;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_CreateShareReviewPageComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["id", "noLabels"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.na.label"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_CreateShareReviewPageComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["id", "affinity-site"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["\n            ", "\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).forAttr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.affinitySite.label"));

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _co.getAffinitySiteLabel(_co.share.affinityLocation);

          _ck(_v, 8, 0, currVal_2);
        });
      }

      function View_CreateShareReviewPageComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["id", "netAccessControl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "indent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "vsan-file-share-net-permission", [], null, null, null, _shared_share_net_permission_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ShareNetPermissionComponent_0"], _shared_share_net_permission_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ShareNetPermissionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _shared_share_net_permission_component__WEBPACK_IMPORTED_MODULE_5__["ShareNetPermissionComponent"], [], {
          shareConfig: [0, "shareConfig"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.share;

          _ck(_v, 9, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.page.netAccessControl.title"));

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_CreateShareReviewPageComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["id", "fileAnalytics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "indent clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          _ck(_v, 9, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.fileAnalytics.title"));

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).forAttr;

          _ck(_v, 8, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.fileservices.shares.create.fileAnalytics.title"));

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _co.ServiceUtils.enabledStateLabel(_co.share.isFileAnalyticsEnabled);

          _ck(_v, 14, 0, currVal_3);
        });
      }

      function View_CreateShareReviewPageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 94, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 87, "div", [["class", "indent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["id", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](26, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"],
          ngIfElse: [1, "ngIfElse"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["non_smb_security_mode", 2]], null, 0, null, View_CreateShareReviewPageComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 9, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](44, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](45, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "span", [["id", "policy"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](48, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 12, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](55, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](56, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 12, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](70, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 12, "div", [["class", "clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 3, "label", [["class", "clr-col-4 clr-control-label"]], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, ["\n            ", "\n         "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](84, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateShareReviewPageComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 13, 0);

          _ck(_v, 24, 0);

          var currVal_7 = _co.share.protocol === _co.VsanFileShareProtocol.SMB;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35);

          _ck(_v, 33, 0, currVal_7, currVal_8);

          var currVal_9 = _co.share.protocol === _co.VsanFileShareProtocol.SMB && _co.isSmbAbeSupported;

          _ck(_v, 38, 0, currVal_9);

          _ck(_v, 43, 0);

          _ck(_v, 54, 0);

          var currVal_15 = _co.share.softQuota && _co.share.softQuotaSize;

          _ck(_v, 59, 0, currVal_15);

          var currVal_16 = !_co.share.softQuota || !_co.share.softQuotaSize;

          _ck(_v, 62, 0, currVal_16);

          _ck(_v, 68, 0);

          var currVal_19 = _co.share.quota && _co.share.quotaSize;

          _ck(_v, 73, 0, currVal_19);

          var currVal_20 = !_co.share.quota || !_co.share.quotaSize;

          _ck(_v, 76, 0, currVal_20);

          _ck(_v, 82, 0);

          var currVal_23 = _co.share.labels == null ? null : _co.share.labels.length;

          _ck(_v, 87, 0, currVal_23);

          var currVal_24 = !(_co.share.labels == null ? null : _co.share.labels.length);

          _ck(_v, 90, 0, currVal_24);

          var currVal_25 = _co.isAffinitySiteSupported && _co.isVsanStretchedCluster;

          _ck(_v, 94, 0, currVal_25);

          var currVal_26 = _co.share.protocol !== _co.VsanFileShareProtocol.SMB;

          _ck(_v, 99, 0, currVal_26);

          var currVal_27 = _co.isFileAnalyticsEnabledOnCluster;

          _ck(_v, 102, 0, currVal_27);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.page.general.title"));

          _ck(_v, 5, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).forAttr;

          _ck(_v, 12, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.name"));

          _ck(_v, 14, 0, currVal_2);

          var currVal_3 = _co.share.name;

          _ck(_v, 18, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).forAttr;

          _ck(_v, 23, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 25, 0, _ck(_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.protocol"));

          _ck(_v, 25, 0, currVal_5);

          var currVal_6 = _co.getProtocolText();

          _ck(_v, 29, 0, currVal_6);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).forAttr;

          _ck(_v, 42, 0, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 44, 0, _ck(_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.storagePolicy"));

          _ck(_v, 44, 0, currVal_11);

          var currVal_12 = _co.selectedPolicy.name;

          _ck(_v, 48, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).forAttr;

          _ck(_v, 53, 0, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 55, 0, _ck(_v, 56, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.shareWarningThreshold"));

          _ck(_v, 55, 0, currVal_14);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).forAttr;

          _ck(_v, 67, 0, currVal_17);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 69, 0, _ck(_v, 70, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.shareHardQuota"));

          _ck(_v, 69, 0, currVal_18);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).forAttr;

          _ck(_v, 81, 0, currVal_21);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 0, _ck(_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.fileservices.shares.create.label"));

          _ck(_v, 83, 0, currVal_22);
        });
      }

      function View_CreateShareReviewPageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CreateShareReviewPageComponent_0, RenderType_CreateShareReviewPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _create_share_review_page_component__WEBPACK_IMPORTED_MODULE_7__["CreateShareReviewPageComponent"], [], null, null)], null, null);
      }

      var CreateShareReviewPageComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _create_share_review_page_component__WEBPACK_IMPORTED_MODULE_7__["CreateShareReviewPageComponent"], View_CreateShareReviewPageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "vVPD":
    /*!*****************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-wizard.module.ngfactory.js ***!
      \*****************************************************************************************/

    /*! exports provided: CreateShareWizardModuleNgFactory */

    /***/
    function vVPD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareWizardModuleNgFactory", function () {
        return CreateShareWizardModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _create_share_wizard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-share-wizard.module */
      "wpEN");
      /* harmony import */


      var _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@clr/angular/clr-angular.ngfactory */
      "zl1X");
      /* harmony import */


      var _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../common/directive/show-title/clipboard-icon.component.ngfactory */
      "1zpS");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _create_share_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-share-wizard.component.ngfactory */
      "EMcy");
      /* harmony import */


      var _create_share_general_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-share-general-page.component.ngfactory */
      "8HBW");
      /* harmony import */


      var _create_share_review_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-share-review-page.component.ngfactory */
      "qpck");
      /* harmony import */


      var _create_share_net_permissions_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./create-share-net-permissions-page.component.ngfactory */
      "hYgp");
      /* harmony import */


      var _create_share_file_analytics_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./create-share-file-analytics-page.component.ngfactory */
      "BmSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _create_share_general_page_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./create-share-general-page.service */
      "ztDp");
      /* harmony import */


      var _generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../generated/vsan-file-shares-service */
      "DiBh");
      /* harmony import */


      var _common_service_ip_parser_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../common/service/ip-parser.service */
      "u7SK");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../common/pipe/common-pipe.module */
      "yVHT");
      /* harmony import */


      var _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../common/directive/common-directive.module */
      "uf8S");
      /* harmony import */


      var _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../common/component/validation/validation.module */
      "90Ln");
      /* harmony import */


      var _common_component_wizard_flow_wizard_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../common/component/wizard/flow-wizard.module */
      "pOC0");
      /* harmony import */


      var _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../shared/file-services-common.module */
      "DwxB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./create-share-wizard.component */
      "3iRN");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var CreateShareWizardModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_create_share_wizard_module__WEBPACK_IMPORTED_MODULE_1__["CreateShareWizardModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrControlContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵblNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDateContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrPasswordContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRadioWrapperNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrSelectContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrRangeContainerNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ClrDraggableGhostNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedCellNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedColumnNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ÇlrWrappedRowNgFactory"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdzNgFactory"], _common_directive_show_title_clipboard_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ClipboardIconNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _create_share_wizard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CreateShareWizardComponentNgFactory"], _create_share_general_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CreateShareGeneralPageComponentNgFactory"], _create_share_review_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["CreateShareReviewPageComponentNgFactory"], _create_share_net_permissions_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["CreateShareNetPermissionsPageComponentNgFactory"], _create_share_file_analytics_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CreateShareFileAnalyticsPageComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _create_share_general_page_service__WEBPACK_IMPORTED_MODULE_13__["CreateShareGeneralPageService"], _create_share_general_page_service__WEBPACK_IMPORTED_MODULE_13__["CreateShareGeneralPageService"], [_generated_vsan_file_shares_service__WEBPACK_IMPORTED_MODULE_14__["VsanFileSharesService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _common_service_ip_parser_service__WEBPACK_IMPORTED_MODULE_15__["IpParserService"], _common_service_ip_parser_service__WEBPACK_IMPORTED_MODULE_15__["IpParserService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrIconModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrConditionalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrConditionalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDropdownModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrAlertModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrEmphasisModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrEmphasisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrCommonFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrCommonFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵbk"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵbk"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrCheckboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵbm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ÇlrClrPopoverModuleNext"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ÇlrClrPopoverModuleNext"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrSpinnerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrComboboxModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrComboboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ÇlrClrFocusTrapModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ÇlrClrFocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDatepickerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrInputModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrPasswordModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrPasswordModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrRadioModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrSelectModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTextareaModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrRangeModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDatalistModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDatalistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrFormsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrLoadingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrLoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵce"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵce"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵch"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵch"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDragAndDropModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDragAndDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrFocusOnViewInitModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrFocusOnViewInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDatagridModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDatagridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrStackViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrStackViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTreeViewModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTreeViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDataModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrModalModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrLoadingButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrLoadingButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrButtonGroupModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrButtonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrMainContainerModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrMainContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrNavigationModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵdx"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ɵdx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTabsModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrVerticalNavModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrVerticalNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrLayoutModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrSignpostModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrSignpostModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTooltipModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrPopoverModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrWizardModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrAccordionModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrStepperModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrProgressBarModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTimelineModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClrTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClarityModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_16__["ClarityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_19__["CommonPipeModule"], _common_pipe_common_pipe_module__WEBPACK_IMPORTED_MODULE_19__["CommonPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_20__["CommonDirectiveModule"], _common_directive_common_directive_module__WEBPACK_IMPORTED_MODULE_20__["CommonDirectiveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_21__["ValidationModule"], _common_component_validation_validation_module__WEBPACK_IMPORTED_MODULE_21__["ValidationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_component_wizard_flow_wizard_module__WEBPACK_IMPORTED_MODULE_22__["FlowWizardModule"], _common_component_wizard_flow_wizard_module__WEBPACK_IMPORTED_MODULE_22__["FlowWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_23__["FileServicesCommonModule"], _shared_file_services_common_module__WEBPACK_IMPORTED_MODULE_23__["FileServicesCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _create_share_wizard_module__WEBPACK_IMPORTED_MODULE_1__["CreateShareWizardModule"], _create_share_wizard_module__WEBPACK_IMPORTED_MODULE_1__["CreateShareWizardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _clr_angular__WEBPACK_IMPORTED_MODULE_16__["FOCUS_ON_VIEW_INIT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], function () {
          return [[{
            path: "",
            component: _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_25__["CreateShareWizardComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "wLY2":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/common/directive/icon-title/icon-title.directive.ts ***!
      \**************************************************************************/

    /*! exports provided: IconTitleDirective */

    /***/
    function wLY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconTitleDirective", function () {
        return IconTitleDirective;
      });
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");
      /**
       * Attribute directive for setting the title of clr-icon according to its shape.
       */


      var IconTitleDirective = /*#__PURE__*/function () {
        function IconTitleDirective(el) {
          _classCallCheck(this, IconTitleDirective);

          this.el = el;
          this.SHAPE_ATTRIBUTE = "shape";
          this.TITLE_ATTRIBUTE = "title";
        }

        _createClass(IconTitleDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Return if clr-icon already has title attribute.
            if (this.el.nativeElement.getAttribute(this.TITLE_ATTRIBUTE)) {
              return;
            }

            var title = this.iconTitle;

            if (!title) {
              var shape = this.el.nativeElement.getAttribute(this.SHAPE_ATTRIBUTE);
              title = _util_icon__WEBPACK_IMPORTED_MODULE_0__["Icon"].getDefaultVsanIconTitle(shape);
            }

            if (title) {
              this.el.nativeElement.setAttribute(this.TITLE_ATTRIBUTE, title);
            }
          }
        }]);

        return IconTitleDirective;
      }();
      /***/

    },

    /***/
    "wpEN":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-wizard.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CreateShareWizardModule */

    /***/
    function wpEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareWizardModule", function () {
        return CreateShareWizardModule;
      });
      /* harmony import */


      var _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-share-wizard.component */
      "3iRN");

      var fileSharesRoutes = [{
        path: "",
        component: _create_share_wizard_component__WEBPACK_IMPORTED_MODULE_0__["CreateShareWizardComponent"]
      }];

      var CreateShareWizardModule = /*#__PURE__*/_createClass(function CreateShareWizardModule() {
        _classCallCheck(this, CreateShareWizardModule);
      });
      /***/

    },

    /***/
    "ztDp":
    /*!**************************************************************************************!*\
      !*** ./src/app/vsan/file-services/create-share/create-share-general-page.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: CreateShareGeneralPageService */

    /***/
    function ztDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateShareGeneralPageService", function () {
        return CreateShareGeneralPageService;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @generated/vsan-file-service-share-size */
      "JJYf");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");

      var CreateShareGeneralPageService = /*@__PURE__*/function () {
        var CreateShareGeneralPageService = /*#__PURE__*/function () {
          function CreateShareGeneralPageService(shareService) {
            _classCallCheck(this, CreateShareGeneralPageService);

            this.shareService = shareService;
          }
          /**
           * Validates if both the key and value are not empty strings
           */


          _createClass(CreateShareGeneralPageService, [{
            key: "isLabelValid",
            value: function isLabelValid(key, value) {
              return key && key.trim().length !== 0 && value && value.trim().length !== 0;
            }
            /**
             * Validates that the name matches the backend requirements
             */

          }, {
            key: "validateName",
            value: function validateName(share) {
              if (!share.name) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.emptyName");
              } else {
                if (!CreateShareGeneralPageService.ALLOWED_CHARS.test(share.name) || CreateShareGeneralPageService.MULTIPLE_DASHES.test(share.name)) {
                  return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.invalidName");
                }
              }
            }
            /**
             * Validates if the share name is existing or not
             */

          }, {
            key: "validateDuplicatedName",
            value: function validateDuplicatedName(shareName) {
              var _this8 = this;

              return new Promise(function (accept, reject) {
                _this8.shareService.queryShareByName(_service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].contextObject, shareName).then(function (share) {
                  if (share) {
                    return accept([_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.duplicateName", shareName)]);
                  }

                  return accept(null);
                })["catch"](function (err) {
                  reject(err);
                });
              });
            }
            /**
             * Validates if the given policy is not null and is compatible with the underlying vSAN datastore
             * @param policy
             */

          }, {
            key: "validatePolicy",
            value: function validatePolicy(policy) {
              if (!policy) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.noPolicy");
              } else if (!policy.isCompatible) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.nonCompatiblePolicy");
              }
            }
            /**
             * Validates share's quotas
             */

          }, {
            key: "validateThresholds",
            value: function validateThresholds(isSoftQuotaSelected, softQuotaValue, softQuotaSize, isHardQuotaSelected, hardQuotaValue, hardQuotaSize) {
              var validationErrors = [];
              var softQuotaInKB;
              var hardQuotaInKB;

              if (isSoftQuotaSelected) {
                if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(softQuotaValue)) {
                  validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.emptyWarningThreshold"));
                } else {
                  softQuotaInKB = CreateShareGeneralPageService.toKilobytes(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].convertLocalizedStringToNumber(softQuotaValue), softQuotaSize);

                  if (isNaN(softQuotaInKB)) {
                    validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.invalidWarningThreshold"));
                  } else if (softQuotaInKB < CreateShareGeneralPageService.MINIMUM_QUOTA_SIZE_IN_KB) {
                    validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.warningThresholdTooLittle"));
                  } else if (softQuotaInKB > CreateShareGeneralPageService.MAXIMUM_QUOTA_SIZE_IN_KB) {
                    validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.warningThresholdTooBig"));
                  }
                }
              }

              if (isHardQuotaSelected) {
                if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(hardQuotaValue)) {
                  validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.emptyHardQuota"));
                } else {
                  hardQuotaInKB = CreateShareGeneralPageService.toKilobytes(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].convertLocalizedStringToNumber(hardQuotaValue), hardQuotaSize);

                  if (isNaN(hardQuotaInKB)) {
                    validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.invalidHardQuota"));
                  } else if (hardQuotaInKB < CreateShareGeneralPageService.MINIMUM_QUOTA_SIZE_IN_KB) {
                    validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.hardQuotaTooLittle"));
                  } else if (hardQuotaInKB > CreateShareGeneralPageService.MAXIMUM_QUOTA_SIZE_IN_KB) {
                    validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.hardQuotaTooBig"));
                  }
                }
              }

              if (isSoftQuotaSelected && softQuotaValue && isHardQuotaSelected && hardQuotaValue && softQuotaInKB > hardQuotaInKB) {
                validationErrors.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.fileservices.shares.validation.softQuotaGreaterThanHardQuota"));
              }

              return !!validationErrors.length ? validationErrors : null;
            }
            /**
             * Converts threshold's value to KBs so different thresholds can be compared
             */

          }], [{
            key: "toKilobytes",
            value: function toKilobytes(value, size) {
              if (isNaN(value) || !size) {
                return NaN;
              }

              var power = 1;

              switch (size) {
                case _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_1__["VsanFileServiceShareSize"].MB:
                  power = 1;
                  break;

                case _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_1__["VsanFileServiceShareSize"].GB:
                  power = 2;
                  break;

                case _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_1__["VsanFileServiceShareSize"].TB:
                  power = 3;
                  break;

                default:
                  throw new Error("Not supported size.");
              }

              return value * Math.pow(1024, power);
            }
          }]);

          return CreateShareGeneralPageService;
        }(); // More info about share's name requirements - https://bugzilla.eng.vmware.com/show_bug.cgi?id=2156239#c2


        CreateShareGeneralPageService.ALLOWED_CHARS = /^[\da-zA-Z][\da-zA-Z-]{1,61}[\da-zA-Z]$/;
        CreateShareGeneralPageService.MULTIPLE_DASHES = /--/;
        CreateShareGeneralPageService.MAXIMUM_QUOTA_SIZE_IN_KB = CreateShareGeneralPageService.toKilobytes(16777215, _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_1__["VsanFileServiceShareSize"].TB);
        CreateShareGeneralPageService.MINIMUM_QUOTA_SIZE_IN_KB = CreateShareGeneralPageService.toKilobytes(1, _generated_vsan_file_service_share_size__WEBPACK_IMPORTED_MODULE_1__["VsanFileServiceShareSize"].MB);
        return CreateShareGeneralPageService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=121-es5.js.map