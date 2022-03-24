(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
    /***/
    "2BwX":
    /*!*************************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loading-indicator.decorator.ts ***!
      \*************************************************************************/

    /*! exports provided: LoadingIndicator */

    /***/
    function BwX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function () {
        return LoadingIndicator;
      });
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This property decorator is supposed to be used along with the @Loader decorator.
       * As the @Loader decorator keeps track of all the active loading operations,
       * we can easily know if all the loading is completed. If there are any ongoing loading
       * operations, the property decorated with @LoadingIndicator will be set to "true", otherwise - it will be "false".
       * You can have as many properties decorated with @LoadingIndicator as you want, but they need to have different names.
       * The LoadingIndicator will show the loading state of the Loader methods with the same name.
       *
       * <pre>
       * @Loader()
       * loadDataSync(): any {
       *    // Load some data
       * }
       *
       * @Loader()
       * loadDataAsync(): Promise<any> {
       *    // Load some data
       * }
       *
       * @LoadingIndicator
       * isLoading: boolean; // The field will be set to "false" when the both the methods are complete and the Promise is resolved.
       * </pre>
       */


      function LoadingIndicator(props) {
        props = props || {};
        return function (targetClass, propertyKey) {
          Object.defineProperty(targetClass, propertyKey, {
            get: function get() {
              var _this = this;

              if (Array.isArray(props.name)) {
                return props.name.some(function (loaderName) {
                  return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](_this, loaderName).isLoading;
                });
              }

              return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, props.name).isLoading;
            }
          });
        };
      }
      /***/

    },

    /***/
    "8V30":
    /*!**************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loader.decorator.ts ***!
      \**************************************************************/

    /*! exports provided: Loader */

    /***/
    function V30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Loader", function () {
        return Loader;
      });
      /* harmony import */


      var _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/function-wrapper */
      "7ZNc");
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* harmony import */


      var _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/screen-reader-announcer.service */
      "wnqS");
      /* harmony import */


      var _util_reflection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/reflection */
      "bM2O");
      /* harmony import */


      var _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../vsan-app.module */
      "Uag/");
      /* Copyright 2021-2022 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Method decorator that does the following:
       *  - watches for errors and if such appear:
       *       - the error is logged in the browser's console
       *       - the error is logged in the H5C server log
       *       - the related @ErrorMessage fields are populated
       *       - the related @ErrorHandler methods are invoked
       *  - Updates the @LoadingIndicator decorated fields
       *  - Invokes the screen reader service once the loading operation completes successfully
       */


      function Loader(params) {
        // If no params are passed, initialize the variable in order to avoid multiple null-checks
        params = params || {};
        return function (targetClass, functionName, descriptor) {
          // Use the component name as tag in order easily find where the error was thrown.
          var tag = _util_reflection__WEBPACK_IMPORTED_MODULE_3__["Reflection"].getClassName(targetClass);

          var loaderName = params.name;
          var originalFn = descriptor.value;

          descriptor.value = function () {
            var loadingFlowWrapper = new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_1__["LoadingFlowWrapper"](this, loaderName);
            return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["FunctionWrapper"](originalFn).preExecute(function () {
              loadingFlowWrapper.error = undefined;
              loadingFlowWrapper.incrementLoads();

              _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.preLoadSrMessage || params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADING);
            }).postExecute(function () {
              _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["ScreenReaderAnnouncerService"].invoke(params.srMessage, params.srMessageType, _service_screen_reader_announcer_service__WEBPACK_IMPORTED_MODULE_2__["SrEvent"].LOADED);
            }).onError(function (ex) {
              processError(loadingFlowWrapper, tag, ex);
              var rethrow = shouldRethrow(loadingFlowWrapper, params);

              if (!rethrow) {
                ex = invokeErrorHandler(loadingFlowWrapper, ex);
              }

              return new _service_flow_function_wrapper__WEBPACK_IMPORTED_MODULE_0__["ErrorContext"](rethrow, ex);
            })["finally"](function () {
              loadingFlowWrapper.decrementLoads();
            }).invoke(loadingFlowWrapper.backingObject, arguments);
          };
        };
      }
      /**
       * Handles the given error by:
       *  - logging the error in the browsers console
       *  - logging the error in the H5C backend log
       *  - updates all @ErrorMessage fields
       */


      function processError(wrapper, tag, ex) {
        // Log the error to the backend
        _vsan_app_module__WEBPACK_IMPORTED_MODULE_4__["GlobalLogger"].error(tag, ex); // Cache the error so it can be retrieved by @ErrorMessage decorated fields


        wrapper.error = ex;
      }
      /**
       * Invokes the error handler (if defined)
       */


      function invokeErrorHandler(wrapper, ex) {
        var handler = wrapper.errorHandler;
        return !!handler ? handler.call(wrapper.backingObject, ex) : null;
      }
      /**
       * Reject the promise only if:
       * 1. there are no handlers declared
       * 2. the components has explicitly requested the error to be rethrown
       */


      function shouldRethrow(wrapper, params) {
        return !wrapper.errorHandler && !wrapper.errorMessageGetter || !!params.rethrow;
      }
      /***/

    },

    /***/
    "dmSP":
    /*!***********************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/loading-flow-wrapper.data.ts ***!
      \***********************************************************************/

    /*! exports provided: LoadingFlowWrapper */

    /***/
    function dmSP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingFlowWrapper", function () {
        return LoadingFlowWrapper;
      });
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This class is used internally by the @Loader decorator and the decorators related to it.
       * It encapsulates the logic for accessing internal properties needed for the decorators to work.
       * The state of this class is kept in the "backingObject" passed to the constructor. This allows
       * the wrapper class to be easily recreated wherever it is needed without worrying about keeping its reference.
       *
       * <pre>
       * const obj: any = {};
       *
       * // Create a new LoadingFlowWrapper over obj
       * const wrapper1: LoadingFlowWrapper = new LoadingFlowWrapper(obj);
       * // Set the error field to "alabala" string
       * wrapper1.error = "alabala";
       *
       * // Create a new LoadingFlowWrapper over obj
       * const wrapper2: LoadingFlowWrapper = new LoadingFlowWrapper(obj);
       * console.log(wrapper2.error); // Prints "alabala" because the backing object is the same
       * </pre>
       */


      var LoadingFlowWrapper = /*@__PURE__*/function () {
        var LoadingFlowWrapper = /*#__PURE__*/function () {
          function LoadingFlowWrapper(_backingObject, loaderName) {
            _classCallCheck(this, LoadingFlowWrapper);

            this._backingObject = _backingObject;
            this.loaderName = loaderName;
            this.loaderName = loaderName || LoadingFlowWrapper.DEFAULT_NAME; // Init all collections

            this.initCollection(LoadingFlowWrapper.ERROR_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER);
            this.initCollection(LoadingFlowWrapper.LOADS_COUNT_HOLDER);
          }

          _createClass(LoadingFlowWrapper, [{
            key: "initCollection",
            value: function initCollection(collectionName) {
              // Check first if the collection hasn't been initialized by another wrapper.
              // If so, do nothing as we don't want to override the data already set.
              if (!this.backingObject[collectionName]) {
                this.backingObject[collectionName] = [];
              }
            }
            /**
             * The original object which methods/properties were decorated
             */

          }, {
            key: "backingObject",
            get: function get() {
              return this._backingObject;
            }
            /**
             * Returns the thrown error
             */

          }, {
            key: "error",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName];
            }
            /**
             * Sets the thrown error
             */
            ,
            set: function set(val) {
              this.backingObject[LoadingFlowWrapper.ERROR_HOLDER][this.loaderName] = val;
            }
            /**
             * Returns the number of active loading operations
             */

          }, {
            key: "loadsCount",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName];
            }
            /**
             * Returns true if there are running loader methods or promises.
             */

          }, {
            key: "isLoading",
            get: function get() {
              return !!this.loadsCount;
            }
            /**
             * Increase the number of active loading operations by one
             */

          }, {
            key: "incrementLoads",
            value: function incrementLoads() {
              // Initialize the counter if it hasn't been initialized yet
              if (!this.loadsCount) {
                this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] = 0;
              }

              this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] += 1;
            }
            /**
             * Decreases the number of active loading operations by one
             */

          }, {
            key: "decrementLoads",
            value: function decrementLoads() {
              this.backingObject[LoadingFlowWrapper.LOADS_COUNT_HOLDER][this.loaderName] -= 1;
            }
          }, {
            key: "errorHandler",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName];
            }
            /**
             * Registers a new error handler.
             */
            ,
            set: function set(errorHandler) {
              if (!!this.errorHandler) {
                throw new Error("ErrorHandler for loader \"".concat(this.loaderName, "\" already registered!"));
              }

              this.backingObject[LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER][this.loaderName] = errorHandler;
            }
          }, {
            key: "errorMessageGetter",
            get: function get() {
              return this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName];
            },
            set: function set(getter) {
              if (!!this.errorMessageGetter) {
                throw new Error("ErrorMessage for loader \"".concat(this.loaderName, "\" already registered!"));
              }

              this.backingObject[LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER][this.loaderName] = getter;
            }
          }]);

          return LoadingFlowWrapper;
        }();

        LoadingFlowWrapper.ERROR_HOLDER = "__ex__";
        LoadingFlowWrapper.ERROR_HANDLERS_REF_HOLDER = "__errorHandlers__";
        LoadingFlowWrapper.ERROR_MESSAGE_GETTERS_REF_HOLDER = "__errorMessageGetters__";
        LoadingFlowWrapper.LOADS_COUNT_HOLDER = "__loadsCount__";
        LoadingFlowWrapper.DEFAULT_NAME = "default-loader";
        return LoadingFlowWrapper;
      }();
      /***/

    },

    /***/
    "puuD":
    /*!*********************************************************************!*\
      !*** ./src/app/vsan/common/service/flow/error-message.decorator.ts ***!
      \*********************************************************************/

    /*! exports provided: ErrorMessage */

    /***/
    function puuD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessage", function () {
        return ErrorMessage;
      });
      /* harmony import */


      var _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @service/flow/loading-flow-wrapper.data */
      "dmSP");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* Copyright 2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * This property decorator is supposed to be used along with the @Loader decorator.
       * If an exception is thrown during the execution of the method decorated with @Loader
       * the ErrorMessage field will be populated with the thrown error. You can define as many ErrorMessage as you want,
       * but they must be with different names. The name can be provided as input to the decorator.
       * If a name is set to the ErrorMessage it will handle only the errors thrown by Loader functions
       * with the same name. If no name is passed to the ErrorMessage, it will handle only the errors
       * from Loader functions with no name.
       *
       * You can set a custom message to be used if an error is thrown. This is useful when
       * you don't care about the error but just want to show a user friendly message in the UI.
       * Just pass the message or its localization key as a paramter of the decorator.
       *
       * <pre>
       * // Example 1:
       * @Loader()
       * loadSyncData(): any {
       *    throw new Error("Failed to load sync data");
       * }
       *
       * @ErrorMessage()
       * error: string; // Will be set to "Failed to load sync data";
       *...
       *
       * // Example 2
       *
       * @Loader()
       * async loadAsyncData(): Promise<any> {
       *    return Promise.reject("Failed to load async data");
       * }
       *
       * @ErrorMessage()
       * error: string; // Will be set to "Failed to load async data"
       * ...
       *
       * // Example 3
       *
       * @Loader()
       * async loadData(): Promise<any> {
       *    return Promise.reject("Failed to load data");
       * }
       *
       * @ErrorMessage({msg: "Cannot load the data"})
       * error: string; // Will be set to "Cannot load the data" when the "loadData" method's promise is rejected
       * ...
       *
       * // Example 4
       *
       * @Loader({name: "loading-data-flow"})
       * async loadData(): Promise<any> {
       *    return Promise.reject("Failed to load data");
       * }
       *
       * @ErrorMessage({
       *    name: "loading-data-flow",
       *    msg: "com.vmware.vsan.generic.error",
       * })
       * error: string; // Will be set to the localized version of "com.vmware.vsan.generic.error" when the "loadData" method's promise is rejected
       * ...
       * </pre>
       */


      function ErrorMessage(props) {
        props = props || {};
        return function (targetClass, propertyKey) {
          var loaderName = props.name;
          setErrorMessageGetter(loaderName, targetClass, propertyKey);
          Object.defineProperty(targetClass, propertyKey, {
            get: function get() {
              var exception = getException.call(this, loaderName); // If there is no exception, just return an empty string

              if (!exception) {
                return "";
              } // If there is a hardcoded message, use it instead of the error message


              if (!!props.msg) {
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString(props.msg);
              } // Try to extract the error message from the error


              if (!!exception.message) {
                return exception.message;
              } // Fallback to the string representation of the error


              return String(exception);
            },
            set: function set(val) {
              setException.call(this, loaderName, val);
            }
          });
        };
      }

      function setErrorMessageGetter(loaderName, targetClass, propertyKey) {
        if (Array.isArray(loaderName)) {
          loaderName.forEach(function (name) {
            new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](targetClass, name).errorMessageGetter = propertyKey;
          });
        } else {
          new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](targetClass, loaderName).errorMessageGetter = propertyKey;
        }
      }

      function getException(loaderName) {
        var singleLoaderName = Array.isArray(loaderName) ? loaderName[0] // Get the error from the first wrapper, because all wrappers have the same error
        : loaderName;
        return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, singleLoaderName).error;
      }

      function setException(loaderName, val) {
        var _this2 = this;

        if (Array.isArray(loaderName)) {
          // The error is the same for all wrappers, because the loaders use the same error message property
          loaderName.forEach(function (name) {
            return new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](_this2, name).error = val;
          });
        } else {
          new _service_flow_loading_flow_wrapper_data__WEBPACK_IMPORTED_MODULE_0__["LoadingFlowWrapper"](this, loaderName).error = val;
        }
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=5-es5.js.map