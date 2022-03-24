(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
    /***/
    "+V9f":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/highcharts-static.factory.ts ***!
      \**************************************************************************/

    /*! exports provided: extendHighcharts, enableRoundedBarChartExtention */

    /***/
    function V9f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extendHighcharts", function () {
        return extendHighcharts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableRoundedBarChartExtention", function () {
        return enableRoundedBarChartExtention;
      });
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! highcharts */
      "6n/F");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! highcharts/modules/pattern-fill */
      "FE7Q");
      /* harmony import */


      var highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! highcharts/modules/accessibility */
      "YGCj");
      /* harmony import */


      var highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! highcharts/modules/histogram-bellcurve */
      "haik");
      /* harmony import */


      var highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3__);
      /* Copyright 2018-2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      function extendHighcharts() {
        highcharts_modules_pattern_fill__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
        highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
        highcharts_modules_histogram_bellcurve__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
        enableRoundedBarChartExtention(highcharts__WEBPACK_IMPORTED_MODULE_0__);
      }
      /**
       * This code is copied from https://github.com/highcharts/rounded-corners/blob/master/rounded-corners.js
       * The npm install of the rounded-corners component fails due to missing "Highcharts" dependency
       * The issue is known and tracked here: https://github.com/highcharts/rounded-corners/issues/21
       * Once this gets fixed we can remove this and install the component as a regular npm package.
       */


      function enableRoundedBarChartExtention(Highcharts) {
        var rel = Highcharts.relativeLength;
        Highcharts.wrap(Highcharts.seriesTypes.column.prototype, 'translate', function (proceed) {
          var _a;

          var options = this.options,
              topMargin = options.topMargin || 0,
              bottomMargin = options.bottomMargin || 0;
          proceed.call(this);
          (_a = this.points) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
            var shapeArgs = point.shapeArgs,
                w = shapeArgs.width,
                h = shapeArgs.height,
                x = shapeArgs.x,
                y = shapeArgs.y; // Get the radius

            var rTopLeft = rel(options.borderRadiusTopLeft || 0, w),
                rTopRight = rel(options.borderRadiusTopRight || 0, w),
                rBottomRight = rel(options.borderRadiusBottomRight || 0, w),
                rBottomLeft = rel(options.borderRadiusBottomLeft || 0, w);

            if (rTopLeft || rTopRight || rBottomRight || rBottomLeft) {
              var maxR = Math.min(w, h) / 2;

              if (rTopLeft > maxR) {
                rTopLeft = maxR;
              }

              if (rTopRight > maxR) {
                rTopRight = maxR;
              }

              if (rBottomRight > maxR) {
                rBottomRight = maxR;
              }

              if (rBottomLeft > maxR) {
                rBottomLeft = maxR;
              } // Preserve the box for data labels


              point.dlBox = point.shapeArgs;
              point.shapeType = 'path';
              point.shapeArgs = {
                d: ['M', x + rTopLeft, y + topMargin, // top side
                'L', x + w - rTopRight, y + topMargin, // top right corner
                'C', x + w - rTopRight / 2, y, x + w, y + rTopRight / 2, x + w, y + rTopRight, // right side
                'L', x + w, y + h - rBottomRight, // bottom right corner
                'C', x + w, y + h - rBottomRight / 2, x + w - rBottomRight / 2, y + h, x + w - rBottomRight, y + h + bottomMargin, // bottom side
                'L', x + rBottomLeft, y + h + bottomMargin, // bottom left corner
                'C', x + rBottomLeft / 2, y + h, x, y + h - rBottomLeft / 2, x, y + h - rBottomLeft, // left side
                'L', x, y + rTopLeft, // top left corner
                'C', x, y + rTopLeft / 2, x + rTopLeft / 2, y, x + rTopLeft, y, 'Z']
              };
            }
          });
        });
      }
      /***/

    },

    /***/
    "1+Dr":
    /*!*************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/chart.module.ts ***!
      \*************************************************************/

    /*! exports provided: VsanChartModule */

    /***/
    function Dr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VsanChartModule", function () {
        return VsanChartModule;
      });
      /* harmony import */


      var _component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-dialog.component */
      "xuXY");
      /* harmony import */


      var _component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/chart/performance/set-threshold-dialog.component */
      "AYan");
      /* harmony import */


      var _component_chart_highcharts_static_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/highcharts-static.factory */
      "+V9f");

      Object(_component_chart_highcharts_static_factory__WEBPACK_IMPORTED_MODULE_2__["extendHighcharts"])();
      var routes = [{
        path: "expandChart",
        component: _component_chart_performance_perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_0__["PerfChartDialogComponent"]
      }, {
        path: "setThreshold",
        component: _component_chart_performance_set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SetThresholdDialogComponent"]
      }];

      var VsanChartModule = /*#__PURE__*/_createClass(function VsanChartModule() {
        _classCallCheck(this, VsanChartModule);
      });
      /***/

    },

    /***/
    "1Ga+":
    /*!*****************************************************************!*\
      !*** ./src/app/vsan/common/service/space-efficiency-service.ts ***!
      \*****************************************************************/

    /*! exports provided: SpaceEfficiencyService */

    /***/
    function Ga(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpaceEfficiencyService", function () {
        return SpaceEfficiencyService;
      });
      /* harmony import */


      var _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @generated/space-efficiency-config */
      "j0c3");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");

      var SpaceEfficiencyService = /*#__PURE__*/function () {
        function SpaceEfficiencyService() {
          _classCallCheck(this, SpaceEfficiencyService);
        }

        _createClass(SpaceEfficiencyService, [{
          key: "isSpaceEfficiencySupported",
          value: function isSpaceEfficiencySupported(clusterCapabilities) {
            // Space Efficiency is supported if one of these is supported
            return clusterCapabilities.isDeduplicationAndCompressionSupported || clusterCapabilities.isCompressionOnlySupported;
          }
        }, {
          key: "isOnlyAllFlashSupportedForClaimingDisks",
          value: function isOnlyAllFlashSupportedForClaimingDisks(spaceEfficiency) {
            return spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].COMPRESSION || spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].DEDUPLICATION_AND_COMPRESSION;
          }
        }, {
          key: "isOnlyAllFlashSupportedForRemovingDisk",
          value: function isOnlyAllFlashSupportedForRemovingDisk(spaceEfficiency) {
            return spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].DEDUPLICATION_AND_COMPRESSION;
          }
        }, {
          key: "isDiskPreCheckEvacuationSupported",
          value: function isDiskPreCheckEvacuationSupported(spaceEfficiency) {
            return spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].NONE || spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].COMPRESSION;
          }
        }, {
          key: "toLabel",
          value: function toLabel(spaceEfficiency) {
            switch (spaceEfficiency) {
              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].NONE:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("configureVsan.settings.spaceEfficiency.noneLabel");

              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].COMPRESSION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("configureVsan.settings.spaceEfficiency.compressionLabel");

              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].DEDUPLICATION_AND_COMPRESSION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("configureVsan.settings.spaceEfficiency.dedupAndCompressionLabel");

              default:
                return null;
            }
          }
        }, {
          key: "capacityTotalUsedSpace",
          value: function capacityTotalUsedSpace(capacity, systemUsageCapacity) {
            return capacity.usedSpaceBefore + systemUsageCapacity.spaceEfficiencyOverhead;
          }
        }, {
          key: "capacitySavingsLabel",
          value: function capacitySavingsLabel(spaceEfficiency, spaceEfficiencySavings, spaceEfficiencyRatio, isVsanMaxEnabled) {
            if (this.isCompressionEnabled(spaceEfficiency, isVsanMaxEnabled)) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.overview.compressionOnly.label", spaceEfficiencySavings, spaceEfficiencyRatio);
            } else if (this.isDedupAndCompressionEnabled(spaceEfficiency)) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.overview.deduplicationAndCompression.label", spaceEfficiencySavings, spaceEfficiencyRatio);
            }

            return "";
          } // For vSAN Max enabled cluster the space efficiency is policy based and should always be considered.

        }, {
          key: "isCompressionEnabled",
          value: function isCompressionEnabled(spaceEfficiency, isVsanMaxEnabled) {
            return spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].COMPRESSION || isVsanMaxEnabled;
          }
        }, {
          key: "isDedupAndCompressionEnabled",
          value: function isDedupAndCompressionEnabled(spaceEfficiency) {
            return spaceEfficiency === _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].DEDUPLICATION_AND_COMPRESSION;
          }
        }, {
          key: "capacitySpaceOverheadLabel",
          value: function capacitySpaceOverheadLabel(spaceEfficiency) {
            switch (spaceEfficiency) {
              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].COMPRESSION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.usage.breakdown.category.system.compressionOnly");

              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].DEDUPLICATION_AND_COMPRESSION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.usage.breakdown.category.system.deduplicationAndCompression");

              default:
                return "";
            }
          }
        }, {
          key: "capacityBreakdownLabel",
          value: function capacityBreakdownLabel(spaceEfficiency) {
            switch (spaceEfficiency) {
              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].COMPRESSION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.usage.breakdown.compressionOnly.title");

              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].DEDUPLICATION_AND_COMPRESSION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.usage.breakdown.deduplicationAndCompression.title");

              case _generated_space_efficiency_config__WEBPACK_IMPORTED_MODULE_0__["SpaceEfficiencyConfig"].NONE:
              default:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.capacity.usage.breakdown.title");
            }
          }
        }]);

        return SpaceEfficiencyService;
      }();
      /***/

    },

    /***/
    "1op0":
    /*!********************************************************!*\
      !*** ./node_modules/highcharts/modules/export-data.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function op0(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      Highcharts JS v8.2.0 (2020-08-20)
      Exporting module
      (c) 2010-2019 Torstein Honsi
      License: www.highcharts.com/license
      */


      (function (a) {
        true && module.exports ? (a["default"] = a, module.exports = a) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "6n/F"), __webpack_require__(
        /*! highcharts/modules/exporting */
        "AxlJ")], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
          a(g);
          a.Highcharts = g;
          return a;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function (a) {
        function g(a, d, e, c) {
          a.hasOwnProperty(d) || (a[d] = c.apply(null, e));
        }

        a = a ? a._modules : {};
        g(a, "Extensions/DownloadURL.js", [a["Core/Globals.js"]], function (a) {
          var d = a.win,
              e = d.navigator,
              c = d.document,
              g = d.URL || d.webkitURL || d,
              u = /Edge\/\d+/.test(e.userAgent),
              v = a.dataURLtoBlob = function (f) {
            if ((f = f.match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/)) && 3 < f.length && d.atob && d.ArrayBuffer && d.Uint8Array && d.Blob && g.createObjectURL) {
              var a = d.atob(f[3]),
                  c = new d.ArrayBuffer(a.length);
              c = new d.Uint8Array(c);

              for (var e = 0; e < c.length; ++e) {
                c[e] = a.charCodeAt(e);
              }

              f = new d.Blob([c], {
                type: f[1]
              });
              return g.createObjectURL(f);
            }
          };

          a = a.downloadURL = function (a, p) {
            var f = c.createElement("a");

            if ("string" === typeof a || a instanceof String || !e.msSaveOrOpenBlob) {
              a = "" + a;
              if (u || 2E6 < a.length) if (a = v(a) || "", !a) throw Error("Failed to convert to blob");
              if ("undefined" !== typeof f.download) f.href = a, f.download = p, c.body.appendChild(f), f.click(), c.body.removeChild(f);else try {
                var g = d.open(a, "chart");
                if ("undefined" === typeof g || null === g) throw Error("Failed to open window");
              } catch (E) {
                d.location.href = a;
              }
            } else e.msSaveOrOpenBlob(a, p);
          };

          return {
            dataURLtoBlob: v,
            downloadURL: a
          };
        });
        g(a, "Extensions/ExportData.js", [a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/Utilities.js"], a["Extensions/DownloadURL.js"]], function (a, d, e, c, g) {
          function u(a, d) {
            var b = p.navigator,
                f = -1 < b.userAgent.indexOf("WebKit") && 0 > b.userAgent.indexOf("Chrome"),
                c = p.URL || p.webkitURL || p;

            try {
              if (b.msSaveOrOpenBlob && p.MSBlobBuilder) {
                var q = new p.MSBlobBuilder();
                q.append(a);
                return q.getBlob("image/svg+xml");
              }

              if (!f) return c.createObjectURL(new p.Blob(["\uFEFF" + a], {
                type: d
              }));
            } catch (M) {}
          }

          var v = e.doc,
              f = e.seriesTypes,
              p = e.win;
          e = c.addEvent;
          var I = c.defined,
              J = c.extend,
              E = c.find,
              D = c.fireEvent,
              K = c.getOptions,
              L = c.isNumber,
              w = c.pick;
          c = c.setOptions;
          var F = g.downloadURL;
          c({
            exporting: {
              csv: {
                annotations: {
                  itemDelimiter: "; ",
                  join: !1
                },
                columnHeaderFormatter: null,
                dateFormat: "%Y-%m-%d %H:%M:%S",
                decimalPoint: null,
                itemDelimiter: null,
                lineDelimiter: "\n"
              },
              showTable: !1,
              useMultiLevelHeaders: !0,
              useRowspanHeaders: !0
            },
            lang: {
              downloadCSV: "Download CSV",
              downloadXLS: "Download XLS",
              exportData: {
                annotationHeader: "Annotations",
                categoryHeader: "Category",
                categoryDatetimeHeader: "DateTime"
              },
              viewData: "View data table",
              hideData: "Hide data table"
            }
          });
          e(d, "render", function () {
            this.options && this.options.exporting && this.options.exporting.showTable && !this.options.chart.forExport && !this.dataTableDiv && this.viewData();
          });

          d.prototype.setUpKeyToAxis = function () {
            f.arearange && (f.arearange.prototype.keyToAxis = {
              low: "y",
              high: "y"
            });
            f.gantt && (f.gantt.prototype.keyToAxis = {
              start: "x",
              end: "x"
            });
          };

          d.prototype.getDataRows = function (b) {
            var d = this.hasParallelCoordinates,
                f = this.time,
                c = this.options.exporting && this.options.exporting.csv || {},
                e = this.xAxis,
                q = {},
                g = [],
                p = [],
                n = [],
                r;
            var t = this.options.lang.exportData;

            var A = t.categoryHeader,
                x = t.categoryDatetimeHeader,
                G = function G(l, d, f) {
              if (c.columnHeaderFormatter) {
                var h = c.columnHeaderFormatter(l, d, f);
                if (!1 !== h) return h;
              }

              return l ? l instanceof a ? l.options.title && l.options.title.text || (l.dateTime ? x : A) : b ? {
                columnTitle: 1 < f ? d : l.name,
                topLevelColumnTitle: l.name
              } : l.name + (1 < f ? " (" + d + ")" : "") : A;
            },
                H = function H(l, a, b) {
              var d = {},
                  f = {};
              a.forEach(function (a) {
                var c = (l.keyToAxis && l.keyToAxis[a] || a) + "Axis";
                c = L(b) ? l.chart[c][b] : l[c];
                d[a] = c && c.categories || [];
                f[a] = c && c.dateTime;
              });
              return {
                categoryMap: d,
                dateTimeValueAxisMap: f
              };
            },
                y = function y(a, b) {
              return a.data.filter(function (a) {
                return "undefined" !== typeof a.y && a.name;
              }).length && b && !b.categories && !a.keyToAxis ? a.pointArrayMap && a.pointArrayMap.filter(function (a) {
                return "x" === a;
              }).length ? (a.pointArrayMap.unshift("x"), a.pointArrayMap) : ["x", "y"] : a.pointArrayMap || ["y"];
            },
                h = [];

            var z = 0;
            this.setUpKeyToAxis();
            this.series.forEach(function (a) {
              var x = a.xAxis,
                  l = a.options.keys || y(a, x),
                  g = l.length,
                  m = !a.requireSorting && {},
                  C = e.indexOf(x),
                  A = H(a, l),
                  k;

              if (!1 !== a.options.includeInDataExport && !a.options.isInternal && !1 !== a.visible) {
                E(h, function (a) {
                  return a[0] === C;
                }) || h.push([C, z]);

                for (k = 0; k < g;) {
                  r = G(a, l[k], l.length), n.push(r.columnTitle || r), b && p.push(r.topLevelColumnTitle || r), k++;
                }

                var t = {
                  chart: a.chart,
                  autoIncrement: a.autoIncrement,
                  options: a.options,
                  pointArrayMap: a.pointArrayMap
                };
                a.options.data.forEach(function (b, h) {
                  d && (A = H(a, l, h));
                  var y = {
                    series: t
                  };
                  a.pointClass.prototype.applyOptions.apply(y, [b]);
                  b = y.x;
                  var e = a.data[h] && a.data[h].name;
                  k = 0;
                  if (!x || "name" === a.exportKey || !d && x && x.hasNames && e) b = e;
                  m && (m[b] && (b += "|" + h), m[b] = !0);
                  q[b] || (q[b] = [], q[b].xValues = []);
                  q[b].x = y.x;
                  q[b].name = e;

                  for (q[b].xValues[C] = y.x; k < g;) {
                    h = l[k], e = y[h], q[b][z + k] = w(A.categoryMap[h][e], A.dateTimeValueAxisMap[h] ? f.dateFormat(c.dateFormat, e) : null, e), k++;
                  }
                });
                z += k;
              }
            });

            for (m in q) {
              Object.hasOwnProperty.call(q, m) && g.push(q[m]);
            }

            var m = b ? [p, n] : [n];

            for (z = h.length; z--;) {
              var u = h[z][0];
              var v = h[z][1];
              var B = e[u];
              g.sort(function (a, b) {
                return a.xValues[u] - b.xValues[u];
              });
              t = G(B);
              m[0].splice(v, 0, t);
              b && m[1] && m[1].splice(v, 0, t);
              g.forEach(function (a) {
                var b = a.name;
                B && !I(b) && (B.dateTime ? (a.x instanceof Date && (a.x = a.x.getTime()), b = f.dateFormat(c.dateFormat, a.x)) : b = B.categories ? w(B.names[a.x], B.categories[a.x], a.x) : a.x);
                a.splice(v, 0, b);
              });
            }

            m = m.concat(g);
            D(this, "exportData", {
              dataRows: m
            });
            return m;
          };

          d.prototype.getCSV = function (a) {
            var b = "",
                d = this.getDataRows(),
                c = this.options.exporting.csv,
                f = w(c.decimalPoint, "," !== c.itemDelimiter && a ? 1.1.toLocaleString()[1] : "."),
                e = w(c.itemDelimiter, "," === f ? ";" : ","),
                g = c.lineDelimiter;
            d.forEach(function (a, c) {
              for (var k, q = a.length; q--;) {
                k = a[q], "string" === typeof k && (k = '"' + k + '"'), "number" === typeof k && "." !== f && (k = k.toString().replace(".", f)), a[q] = k;
              }

              b += a.join(e);
              c < d.length - 1 && (b += g);
            });
            return b;
          };

          d.prototype.getTable = function (a) {
            var b = '<table id="highcharts-data-table-' + this.index + '">',
                c = this.options,
                d = a ? 1.1.toLocaleString()[1] : ".",
                f = w(c.exporting.useMultiLevelHeaders, !0);
            a = this.getDataRows(f);

            var e = 0,
                g = f ? a.shift() : null,
                p = a.shift(),
                n = function n(a, b, c, f) {
              var e = w(f, "");
              b = "text" + (b ? " " + b : "");
              "number" === typeof e ? (e = e.toString(), "," === d && (e = e.replace(".", d)), b = "number") : f || (b = "empty");
              return "<" + a + (c ? " " + c : "") + ' class="' + b + '">' + e + "</" + a + ">";
            };

            !1 !== c.exporting.tableCaption && (b += '<caption class="highcharts-table-caption">' + w(c.exporting.tableCaption, c.title.text ? c.title.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : "Chart") + "</caption>");

            for (var r = 0, t = a.length; r < t; ++r) {
              a[r].length > e && (e = a[r].length);
            }

            b += function (a, b, d) {
              var e = "<thead>",
                  g = 0;
              d = d || b && b.length;
              var h,
                  k = 0;

              if (h = f && a && b) {
                a: if (h = a.length, b.length === h) {
                  for (; h--;) {
                    if (a[h] !== b[h]) {
                      h = !1;
                      break a;
                    }
                  }

                  h = !0;
                } else h = !1;

                h = !h;
              }

              if (h) {
                for (e += "<tr>"; g < d; ++g) {
                  h = a[g];
                  var m = a[g + 1];
                  h === m ? ++k : k ? (e += n("th", "highcharts-table-topheading", 'scope="col" colspan="' + (k + 1) + '"', h), k = 0) : (h === b[g] ? c.exporting.useRowspanHeaders ? (m = 2, delete b[g]) : (m = 1, b[g] = "") : m = 1, e += n("th", "highcharts-table-topheading", 'scope="col"' + (1 < m ? ' valign="top" rowspan="' + m + '"' : ""), h));
                }

                e += "</tr>";
              }

              if (b) {
                e += "<tr>";
                g = 0;

                for (d = b.length; g < d; ++g) {
                  "undefined" !== typeof b[g] && (e += n("th", null, 'scope="col"', b[g]));
                }

                e += "</tr>";
              }

              return e + "</thead>";
            }(g, p, Math.max(e, p.length));

            b += "<tbody>";
            a.forEach(function (a) {
              b += "<tr>";

              for (var c = 0; c < e; c++) {
                b += n(c ? "td" : "th", null, c ? "" : 'scope="row"', a[c]);
              }

              b += "</tr>";
            });
            b += "</tbody></table>";
            a = {
              html: b
            };
            D(this, "afterGetTable", a);
            return a.html;
          };

          d.prototype.downloadCSV = function () {
            var a = this.getCSV(!0);
            F(u(a, "text/csv") || "data:text/csv,\uFEFF" + encodeURIComponent(a), this.getFilename() + ".csv");
          };

          d.prototype.downloadXLS = function () {
            var a = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>' + this.getTable(!0) + "</body></html>";
            F(u(a, "application/vnd.ms-excel") || "data:application/vnd.ms-excel;base64," + p.btoa(unescape(encodeURIComponent(a))), this.getFilename() + ".xls");
          };

          d.prototype.viewData = function () {
            this.dataTableDiv || (this.dataTableDiv = v.createElement("div"), this.dataTableDiv.className = "highcharts-data-table", this.renderTo.parentNode.insertBefore(this.dataTableDiv, this.renderTo.nextSibling), this.dataTableDiv.innerHTML = this.getTable());
            if ("" === this.dataTableDiv.style.display || "none" === this.dataTableDiv.style.display) this.dataTableDiv.style.display = "block";
            this.isDataTableVisible = !0;
            D(this, "afterViewData", this.dataTableDiv);
          };

          d.prototype.hideData = function () {
            this.dataTableDiv && "block" === this.dataTableDiv.style.display && (this.dataTableDiv.style.display = "none");
            this.isDataTableVisible = !1;
          };

          d.prototype.toggleDataTable = function () {
            var a,
                c = this.exportDivElements,
                d = null === (a = null === n || void 0 === n ? void 0 : n.buttons) || void 0 === a ? void 0 : a.contextButton.menuItems;
            a = this.options.lang;
            this.isDataTableVisible ? this.hideData() : this.viewData();
            (null === n || void 0 === n ? 0 : n.menuItemDefinitions) && (null === a || void 0 === a ? 0 : a.viewData) && a.hideData && d && c && c.length && (c[d.indexOf("viewData")].innerHTML = this.isDataTableVisible ? a.hideData : a.viewData);
          };

          var n = K().exporting;
          n && (J(n.menuItemDefinitions, {
            downloadCSV: {
              textKey: "downloadCSV",
              onclick: function onclick() {
                this.downloadCSV();
              }
            },
            downloadXLS: {
              textKey: "downloadXLS",
              onclick: function onclick() {
                this.downloadXLS();
              }
            },
            viewData: {
              textKey: "viewData",
              onclick: function onclick() {
                this.toggleDataTable();
              }
            }
          }), n.buttons && n.buttons.contextButton.menuItems.push("separator", "downloadCSV", "downloadXLS", "viewData"));
          f.map && (f.map.prototype.exportKey = "name");
          f.mapbubble && (f.mapbubble.prototype.exportKey = "name");
          f.treemap && (f.treemap.prototype.exportKey = "name");
        });
        g(a, "masters/modules/export-data.src.js", [], function () {});
      }); //# sourceMappingURL=export-data.js.map

      /***/

    },

    /***/
    "5xE9":
    /*!***************************************************************************!*\
      !*** ./src/app/vsan/common/util/performance/perf-orchestrator-service.ts ***!
      \***************************************************************************/

    /*! exports provided: PerfModeType, PerfModeState, PerfOrchestratorService */

    /***/
    function xE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfModeType", function () {
        return PerfModeType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfModeState", function () {
        return PerfModeState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfOrchestratorService", function () {
        return PerfOrchestratorService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _perf_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./perf-data */
      "nH3z");
      /* harmony import */


      var _util_performance_consolidated_view_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/performance/consolidated-view-helper */
      "WVqU");
      /* harmony import */


      var _performance_util_perf_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../performance/util/perf-utils */
      "RAUQ");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */
      // TODO [kaleksandrov] Delete this whole file once all its usages are removed


      var PerfModeType = /*@__PURE__*/function (PerfModeType) {
        PerfModeType["SHOW_SPECIFICS"] = "show-specifics";
        PerfModeType["SHOW_AVERAGE"] = "show-average";
        PerfModeType["TOP_CONTRIBUTORS"] = "show-top-contributors";
        return PerfModeType;
      }({});

      var PerfModeState = /*@__PURE__*/function (PerfModeState) {
        PerfModeState["SPECIFIC_MODE_SHOW_CONSOLIDATED"] = "show-consolidated";
        PerfModeState["SPECIFIC_MODE_SHOW_SEPARATELY"] = "show-separately";
        return PerfModeState;
      }({});
      /**
       * This class is responsible for orchestrate multiple entities performance data
       */


      var PerfOrchestratorService = /*#__PURE__*/function () {
        function PerfOrchestratorService() {
          var _this = this;

          _classCallCheck(this, PerfOrchestratorService);

          /*
          * Keeps count of how much entities are still fetching from perf API
          */
          this.remainingEntitiesToLoad = 0;
          /*
          * Every mode has different states. For example SHOW_SPECIFICS mode has 2 states in order to show one view
          * for consolidated metrics and one for separately display for selected entities metrics
          */

          this._state = PerfModeState.SPECIFIC_MODE_SHOW_CONSOLIDATED;
          this.STATES = [];

          this.getSpecifiedEntitiesFlatDataByGraph = function (graph) {
            if (_this.mode === PerfModeType.SHOW_AVERAGE || _this.state === PerfModeState.SPECIFIC_MODE_SHOW_SEPARATELY) {
              return null;
            }

            return _this.data.getSpecifiedEntitiesFlatDataByGraph(graph);
          };

          this.STATES[PerfModeType.SHOW_SPECIFICS] = [PerfModeState.SPECIFIC_MODE_SHOW_CONSOLIDATED, PerfModeState.SPECIFIC_MODE_SHOW_SEPARATELY];
          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this._mode = PerfModeType.SHOW_AVERAGE;
          this.data = new _perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfData"](this.change);
          this.consolidatedViewHelper = new _util_performance_consolidated_view_helper__WEBPACK_IMPORTED_MODULE_2__["ConsolidatedViewHelper"](this.change, this.data);
        }

        _createClass(PerfOrchestratorService, [{
          key: "isLoading",
          get: function get() {
            return this.remainingEntitiesToLoad > 0;
          }
        }, {
          key: "onEntityPerfDataLoaded",
          value: function onEntityPerfDataLoaded() {
            var loadedDataCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            /*
            * When entity perf data is loaded for entity subtract 1 from remainingEntitiesToLoad in order to indicate that
            * entity data is loaded
            */
            this.remainingEntitiesToLoad -= loadedDataCount;
            /*
            * If no remaining entities perf data to be loaded then stop loading
            */

            if (this.remainingEntitiesToLoad <= 0) {
              this.remainingEntitiesToLoad = 0;
            }
          }
        }, {
          key: "isShowSpecificModeEnabled",
          get: function get() {
            return this.mode === PerfModeType.SHOW_SPECIFICS;
          }
        }, {
          key: "isConsolidatedViewStateEnabled",
          get: function get() {
            return this.state === PerfModeState.SPECIFIC_MODE_SHOW_CONSOLIDATED;
          }
        }, {
          key: "isSeparatlyViewStateEnabled",
          get: function get() {
            return this.state === PerfModeState.SPECIFIC_MODE_SHOW_SEPARATELY;
          }
        }, {
          key: "isShowAverageModeEnabled",
          get: function get() {
            return this.mode === PerfModeType.SHOW_AVERAGE || this.mode === PerfModeType.TOP_CONTRIBUTORS;
          }
        }, {
          key: "mode",
          get: function get() {
            return this._mode;
          },
          set: function set(value) {
            if (this._mode === value) {
              return;
            }

            this._mode = value;
            this.change.next(_perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].MODE_CHANGED);
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(value) {
            if (this._state === value || this.STATES[this._mode][value] != null) {
              return;
            }

            this._state = value;
            this.change.next(_perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].STATE_CHANGED);
          }
        }, {
          key: "entityGraph",
          get: function get() {
            return this.data.entityTypes[this.data.entityType];
          }
        }, {
          key: "setSelectedSpecifiedEntities",
          value: function setSelectedSpecifiedEntities() {
            var _this2 = this;

            if (this.data.entities == null || this.data.entitySelectionStateMap == null) {
              return;
            }

            this.data.selectedEntities = this.data.entities.filter(function (entity) {
              return _this2.data.entitySelectionStateMap.get(entity.entityIdentifier);
            });
          }
        }, {
          key: "getEntityByVsanUuid",
          value: function getEntityByVsanUuid(uuid) {
            return _performance_util_perf_utils__WEBPACK_IMPORTED_MODULE_3__["PerformanceUtils"].getPerfEntityByUuid(this.data.entities, uuid);
          }
        }, {
          key: "getEntityGraphDataById",
          value: function getEntityGraphDataById(id) {
            if (!this.data.entitiesGraphData) {
              return;
            }

            return this.data.entitiesGraphDataCache[id];
          }
          /**
           * Reset to default state of multiple entity performance feature
           * More detailed:
           * - Set mode to Show_Average
           * - Clear all selected entities
           * - Update selection
           */

        }, {
          key: "reset",
          value: function reset() {
            this.mode = PerfModeType.SHOW_AVERAGE;
            this.data.entitySelectionStateMap.clear();
            this.consolidatedViewHelper.entityVisibilityStateMap = {};
            this.setSelectedSpecifiedEntities();
          }
        }, {
          key: "changeTimeRange",
          value: function changeTimeRange(timeRange) {
            this.data.timeRangeData = timeRange;
            this.change.next(_perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].TIME_RANGE_CHANGED);
          }
        }]);

        return PerfOrchestratorService;
      }();
      /***/

    },

    /***/
    "A5CE":
    /*!***************************************************!*\
      !*** ./src/app/vsan/common/util/modal-builder.ts ***!
      \***************************************************/

    /*! exports provided: ModalBuilder */

    /***/
    function A5CE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBuilder", function () {
        return ModalBuilder;
      });
      /* harmony import */


      var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @env/environment */
      "AytR");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logger */
      "a0OL");
      /* harmony import */


      var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./platform */
      "RrEr");
      /* harmony import */


      var _vsan_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vsan-util */
      "UODZ");
      /* Copyright 2017-2021 VMware, Inc. All rights reserved. -- VMware Confidential */


      var ModalBuilder = /*@__PURE__*/function () {
        var ModalBuilder = /*#__PURE__*/function () {
          function ModalBuilder(appId) {
            _classCallCheck(this, ModalBuilder);

            this.appId = appId;
            this.size = ModalBuilder.DEFAULT_SIZE; // When null, the modal dialog will be headless and the docked
            // view is expected to provide a title bar.

            this.title = null;
            this.accessibilityTitle = null;
            this.urlParams = {};
          }

          _createClass(ModalBuilder, [{
            key: "setDimensions",
            value: function setDimensions(dimensions) {
              if (!dimensions || dimensions.length !== 2) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].warn("invalid modal dimensions", dimensions);

                dimensions = ModalBuilder.DEFAULT_SIZE;
              }

              return this.setSize(dimensions[ModalBuilder.WIDTH], dimensions[ModalBuilder.HEIGHT]);
            }
          }, {
            key: "setSize",
            value: function setSize(width, height) {
              this.size = [width, height];
              return this;
            }
          }, {
            key: "setUrlParameters",
            value: function setUrlParameters(params) {
              this.urlParams = params;
              return this;
            }
            /**
             * Set to null if the view provides its own title bar
             */

          }, {
            key: "setTitle",
            value: function setTitle(title) {
              this.title = title;
              return this;
            }
          }, {
            key: "setAccessibilityTitle",
            value: function setAccessibilityTitle(accessibilityTitle) {
              this.accessibilityTitle = accessibilityTitle;
              return this;
            }
            /**
             * Set explicit event target if it is changed before opening the modal.
             * For example when making a preceding request the event target is the XMLHttpRequest object.
             */

          }, {
            key: "setEventTarget",
            value: function setEventTarget(eventTarget) {
              this.eventTarget = eventTarget;
              return this;
            }
            /**
             * Opens a modal dialog and returns a promise to collect the result; On close the target element is focused.
             * @param context - any JS data object, can be retrieved by WebPlatform.getModalContext()
             * @returns {Promise<any>} - Invoked if the dialog invokes WebPlatform.closeModalDialog(arg)
             *       with non-null arg. The promise is never rejected.
             */

          }, {
            key: "open",
            value: function open(context) {
              var _this3 = this;

              return new Promise(function (accept) {
                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement = _this3.eventTarget ? _this3.eventTarget : event && event.target ? event.target : null;

                _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler = function (data) {
                  if (typeof data !== "undefined") {
                    // Deep copy of the object was required to resolve an issue with object's prototype overriding when
                    // passing complex objects in IE11/Edge; Keep it for safety.
                    accept(JSON.parse(JSON.stringify(data)));
                  } else if (_vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement && _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus) {
                    // On cancel just focus the target element. Timeout is required as otherwise the focus may be
                    // consumed by the mouse click.
                    setTimeout(function () {
                      return _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.targetElement.focus();
                    }, 100);
                  }
                };

                var actionUrl = "".concat(ModalBuilder.APP_URL, "?viewId=").concat(_this3.appId);
                var separator = "?";

                for (var param in _this3.urlParams) {
                  actionUrl += separator + param + "=" + _this3.urlParams[param];
                  separator = "&";
                }

                _platform__WEBPACK_IMPORTED_MODULE_3__["WebPlatform"].openModalDialog(_this3.title, actionUrl, _service_managed_object__WEBPACK_IMPORTED_MODULE_1__["ManagedObject"].contextObjectUid, _this3.size[0], _this3.size[1], _this3.title != null, _vsan_util__WEBPACK_IMPORTED_MODULE_4__["VsanUiUtils"].pluginContext.modalResultHandler
                /* onClose */
                , context
                /* retrieve with Platform.getModalContext() */
                , _this3.accessibilityTitle);
              });
            }
          }]);

          return ModalBuilder;
        }();

        ModalBuilder.WIDTH = 0;
        ModalBuilder.HEIGHT = 1;
        ModalBuilder.DEFAULT_SIZE = [1000, 530];
        ModalBuilder.WIZARD_XL = [1200, 700];
        ModalBuilder.APP_URL = _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repa && _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].repaExtension ? "index.html" : "/ui/h5-vsan-ui/";
        return ModalBuilder;
      }();
      /***/

    },

    /***/
    "AYan":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/set-threshold-dialog.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: SetThresholdDialogComponent */

    /***/
    function AYan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetThresholdDialogComponent", function () {
        return SetThresholdDialogComponent;
      });
      /* harmony import */


      var _util_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/id-generator */
      "UTh9");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _util_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/icon */
      "cbfQ");

      var SetThresholdDialogComponent = /*#__PURE__*/function () {
        function SetThresholdDialogComponent(networkDiagnosticsProvider) {
          var _this$ERRORS;

          _classCallCheck(this, SetThresholdDialogComponent);

          this.networkDiagnosticsProvider = networkDiagnosticsProvider;
          this.Icon = _util_icon__WEBPACK_IMPORTED_MODULE_4__["Icon"];
          this.alertMessages = [];
          this.WARNING_THRESHOLD_CONTROL_NAME = "warningThreshold";
          this.ERROR_THRESHOLD_CONTROL_NAME = "errorThreshold";
          this.ERRORS = (_this$ERRORS = {}, _defineProperty(_this$ERRORS, this.WARNING_THRESHOLD_CONTROL_NAME, ""), _defineProperty(_this$ERRORS, this.ERROR_THRESHOLD_CONTROL_NAME, ""), _this$ERRORS);
        }

        _createClass(SetThresholdDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = _util_id_generator__WEBPACK_IMPORTED_MODULE_0__["IdGenerator"].getGuid();
            this.hostRef = this.context.hostRef;
            this.setThreshold(this.context.threshold);
          }
        }, {
          key: "setThreshold",
          value: function setThreshold(threshold) {
            if (this.context.graphUnit === _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].PERMILLE_TYPE) {
              this.threshold = new PermilleThreshold(this.context.threshold);
            } else {
              this.threshold = new NumberThreshold(this.context.threshold);
            }
          }
        }, {
          key: "validate",
          value: function validate(thresholdControlName, value) {
            this.ERRORS[thresholdControlName] = "";

            if (this.isThresholdOutOfRange(value)) {
              this.ERRORS[thresholdControlName] = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.input.range.error", this.threshold.minValue, this.threshold.maxValue);
            } else if (this.threshold.warningThreshold >= this.threshold.errorThreshold) {
              this.ERRORS[this.WARNING_THRESHOLD_CONTROL_NAME] = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.input.order.error");
            }
          }
        }, {
          key: "isThresholdOutOfRange",
          value: function isThresholdOutOfRange(value) {
            return value == null || value < this.threshold.minValue || value > this.threshold.maxValue;
          }
        }, {
          key: "onThresholdChange",
          value: function onThresholdChange() {
            this.validate(this.WARNING_THRESHOLD_CONTROL_NAME, this.threshold.warningThreshold);
            this.validate(this.ERROR_THRESHOLD_CONTROL_NAME, this.threshold.errorThreshold);
          }
        }, {
          key: "onConfirm",
          value: function onConfirm() {
            var _this4 = this;

            this.busy = true;
            this.alertMessages = [];
            var thresholdForSave = this.threshold.getThresholdForSave();
            this.networkDiagnosticsProvider.setPerfGraphThreshold(this.hostRef, thresholdForSave).then(function () {
              _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].closeModalDialog(thresholdForSave);
            })["catch"](function (err) {
              _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].error("Failed to save the network diagnostics thresholds, ", err);

              _this4.alertMessages.push(_util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.error.msg"));
            })["finally"](function () {
              _this4.busy = false;
            });
          }
        }, {
          key: "context",
          get: function get() {
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext();
          }
        }, {
          key: "haveErrors",
          get: function get() {
            return !!this.ERRORS[this.WARNING_THRESHOLD_CONTROL_NAME] || !!this.ERRORS[this.ERROR_THRESHOLD_CONTROL_NAME];
          }
        }]);

        return SetThresholdDialogComponent;
      }();

      var NumberThreshold = /*#__PURE__*/function () {
        function NumberThreshold(perfGraphThreshold) {
          _classCallCheck(this, NumberThreshold);

          this.minValue = 1;
          this.maxValue = 1000;
          this.warningThresholdLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.warningThreshold");
          this.errorThresholdLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.errorThreshold");
          this.labelColumnStyle = "clr-col-5";
          this.perfGraphThreshold = perfGraphThreshold;
          this.warningThreshold = perfGraphThreshold.yellow;
          this.errorThreshold = perfGraphThreshold.red;
        }

        _createClass(NumberThreshold, [{
          key: "getThresholdForSave",
          value: function getThresholdForSave() {
            var result = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].deepClone(this.perfGraphThreshold);

            result.yellow = this.warningThreshold;
            result.red = this.errorThreshold;
            return result;
          }
        }]);

        return NumberThreshold;
      }();

      var PermilleThreshold = /*#__PURE__*/function () {
        function PermilleThreshold(perfGraphThreshold) {
          _classCallCheck(this, PermilleThreshold);

          this.minValue = 0.1;
          this.maxValue = 100;
          this.warningThresholdLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.warningThreshold.percent");
          this.errorThresholdLabel = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getString("vsan.monitor.performance.chart.setThreshold.errorThreshold.percent");
          this.labelColumnStyle = "clr-col-6";
          this.perfGraphThreshold = perfGraphThreshold;

          var thresholdInPercentage = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].toPercentageThreshold(perfGraphThreshold);

          this.warningThreshold = thresholdInPercentage.yellow;
          this.errorThreshold = thresholdInPercentage.red;
        }

        _createClass(PermilleThreshold, [{
          key: "getThresholdForSave",
          value: function getThresholdForSave() {
            var result = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].deepClone(this.perfGraphThreshold);

            result.yellow = this.warningThreshold;
            result.red = this.errorThreshold;
            return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].toPermilleThreshold(result);
          }
        }]);

        return PermilleThreshold;
      }();
      /***/

    },

    /***/
    "AxlJ":
    /*!******************************************************!*\
      !*** ./node_modules/highcharts/modules/exporting.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function AxlJ(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      Highcharts JS v8.2.0 (2020-08-20)
      Exporting module
      (c) 2010-2019 Torstein Honsi
      License: www.highcharts.com/license
      */


      (function (c) {
        true && module.exports ? (c["default"] = c, module.exports = c) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "6n/F")], __WEBPACK_AMD_DEFINE_RESULT__ = function (p) {
          c(p);
          c.Highcharts = p;
          return c;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function (c) {
        function p(c, l, h, k) {
          c.hasOwnProperty(l) || (c[l] = k.apply(null, h));
        }

        c = c ? c._modules : {};
        p(c, "Extensions/FullScreen.js", [c["Core/Chart/Chart.js"], c["Core/Globals.js"], c["Core/Utilities.js"]], function (c, l, h) {
          var k = h.addEvent;

          h = function () {
            function c(e) {
              this.chart = e;
              this.isOpen = !1;
              e = e.renderTo;
              this.browserProps || ("function" === typeof e.requestFullscreen ? this.browserProps = {
                fullscreenChange: "fullscreenchange",
                requestFullscreen: "requestFullscreen",
                exitFullscreen: "exitFullscreen"
              } : e.mozRequestFullScreen ? this.browserProps = {
                fullscreenChange: "mozfullscreenchange",
                requestFullscreen: "mozRequestFullScreen",
                exitFullscreen: "mozCancelFullScreen"
              } : e.webkitRequestFullScreen ? this.browserProps = {
                fullscreenChange: "webkitfullscreenchange",
                requestFullscreen: "webkitRequestFullScreen",
                exitFullscreen: "webkitExitFullscreen"
              } : e.msRequestFullscreen && (this.browserProps = {
                fullscreenChange: "MSFullscreenChange",
                requestFullscreen: "msRequestFullscreen",
                exitFullscreen: "msExitFullscreen"
              }));
            }

            c.prototype.close = function () {
              var e = this.chart;
              if (this.isOpen && this.browserProps && e.container.ownerDocument instanceof Document) e.container.ownerDocument[this.browserProps.exitFullscreen]();
              this.unbindFullscreenEvent && this.unbindFullscreenEvent();
              this.isOpen = !1;
              this.setButtonText();
            };

            c.prototype.open = function () {
              var e = this,
                  c = e.chart;

              if (e.browserProps) {
                e.unbindFullscreenEvent = k(c.container.ownerDocument, e.browserProps.fullscreenChange, function () {
                  e.isOpen ? (e.isOpen = !1, e.close()) : (e.isOpen = !0, e.setButtonText());
                });
                var h = c.renderTo[e.browserProps.requestFullscreen]();
                if (h) h["catch"](function () {
                  alert("Full screen is not supported inside a frame.");
                });
                k(c, "destroy", e.unbindFullscreenEvent);
              }
            };

            c.prototype.setButtonText = function () {
              var e,
                  c = this.chart,
                  h = c.exportDivElements,
                  k = c.options.exporting,
                  l = null === (e = null === k || void 0 === k ? void 0 : k.buttons) || void 0 === e ? void 0 : e.contextButton.menuItems;
              e = c.options.lang;
              (null === k || void 0 === k ? 0 : k.menuItemDefinitions) && (null === e || void 0 === e ? 0 : e.exitFullscreen) && e.viewFullscreen && l && h && h.length && (h[l.indexOf("viewFullscreen")].innerHTML = this.isOpen ? e.exitFullscreen : k.menuItemDefinitions.viewFullscreen.text || e.viewFullscreen);
            };

            c.prototype.toggle = function () {
              this.isOpen ? this.close() : this.open();
            };

            return c;
          }();

          l.Fullscreen = h;
          k(c, "beforeRender", function () {
            this.fullscreen = new l.Fullscreen(this);
          });
          return l.Fullscreen;
        });
        p(c, "Mixins/Navigation.js", [], function () {
          return {
            initUpdate: function initUpdate(c) {
              c.navigation || (c.navigation = {
                updates: [],
                update: function update(c, h) {
                  this.updates.forEach(function (k) {
                    k.update.call(k.context, c, h);
                  });
                }
              });
            },
            addUpdate: function addUpdate(c, l) {
              l.navigation || this.initUpdate(l);
              l.navigation.updates.push({
                update: c,
                context: l
              });
            }
          };
        });
        p(c, "Extensions/Exporting.js", [c["Core/Chart/Chart.js"], c["Mixins/Navigation.js"], c["Core/Globals.js"], c["Core/Options.js"], c["Core/Renderer/SVG/SVGRenderer.js"], c["Core/Utilities.js"]], function (c, l, h, k, p, e) {
          var x = h.doc,
              H = h.isTouchDevice,
              z = h.win;
          k = k.defaultOptions;
          var t = e.addEvent,
              u = e.css,
              y = e.createElement,
              D = e.discardElement,
              w = e.extend,
              I = e.find,
              B = e.fireEvent,
              J = e.isObject,
              n = e.merge,
              E = e.objectEach,
              q = e.pick,
              K = e.removeEvent,
              L = e.uniqueKey,
              F = z.navigator.userAgent,
              G = h.Renderer.prototype.symbols,
              M = /Edge\/|Trident\/|MSIE /.test(F),
              N = /firefox/i.test(F);
          w(k.lang, {
            viewFullscreen: "View in full screen",
            exitFullscreen: "Exit from full screen",
            printChart: "Print chart",
            downloadPNG: "Download PNG image",
            downloadJPEG: "Download JPEG image",
            downloadPDF: "Download PDF document",
            downloadSVG: "Download SVG vector image",
            contextButtonTitle: "Chart context menu"
          });
          k.navigation || (k.navigation = {});
          n(!0, k.navigation, {
            buttonOptions: {
              theme: {},
              symbolSize: 14,
              symbolX: 12.5,
              symbolY: 10.5,
              align: "right",
              buttonSpacing: 3,
              height: 22,
              verticalAlign: "top",
              width: 24
            }
          });
          n(!0, k.navigation, {
            menuStyle: {
              border: "1px solid #999999",
              background: "#ffffff",
              padding: "5px 0"
            },
            menuItemStyle: {
              padding: "0.5em 1em",
              color: "#333333",
              background: "none",
              fontSize: H ? "14px" : "11px",
              transition: "background 250ms, color 250ms"
            },
            menuItemHoverStyle: {
              background: "#335cad",
              color: "#ffffff"
            },
            buttonOptions: {
              symbolFill: "#666666",
              symbolStroke: "#666666",
              symbolStrokeWidth: 3,
              theme: {
                padding: 5
              }
            }
          });
          k.exporting = {
            type: "image/png",
            url: "https://export.highcharts.com/",
            printMaxWidth: 780,
            scale: 2,
            buttons: {
              contextButton: {
                className: "highcharts-contextbutton",
                menuClassName: "highcharts-contextmenu",
                symbol: "menu",
                titleKey: "contextButtonTitle",
                menuItems: "viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
              }
            },
            menuItemDefinitions: {
              viewFullscreen: {
                textKey: "viewFullscreen",
                onclick: function onclick() {
                  this.fullscreen.toggle();
                }
              },
              printChart: {
                textKey: "printChart",
                onclick: function onclick() {
                  this.print();
                }
              },
              separator: {
                separator: !0
              },
              downloadPNG: {
                textKey: "downloadPNG",
                onclick: function onclick() {
                  this.exportChart();
                }
              },
              downloadJPEG: {
                textKey: "downloadJPEG",
                onclick: function onclick() {
                  this.exportChart({
                    type: "image/jpeg"
                  });
                }
              },
              downloadPDF: {
                textKey: "downloadPDF",
                onclick: function onclick() {
                  this.exportChart({
                    type: "application/pdf"
                  });
                }
              },
              downloadSVG: {
                textKey: "downloadSVG",
                onclick: function onclick() {
                  this.exportChart({
                    type: "image/svg+xml"
                  });
                }
              }
            }
          };

          h.post = function (a, b, f) {
            var d = y("form", n({
              method: "post",
              action: a,
              enctype: "multipart/form-data"
            }, f), {
              display: "none"
            }, x.body);
            E(b, function (a, b) {
              y("input", {
                type: "hidden",
                name: b,
                value: a
              }, null, d);
            });
            d.submit();
            D(d);
          };

          h.isSafari && h.win.matchMedia("print").addListener(function (a) {
            h.printingChart && (a.matches ? h.printingChart.beforePrint() : h.printingChart.afterPrint());
          });
          w(c.prototype, {
            sanitizeSVG: function sanitizeSVG(a, b) {
              var f = a.indexOf("</svg>") + 6,
                  d = a.substr(f);
              a = a.substr(0, f);
              b && b.exporting && b.exporting.allowHTML && d && (d = '<foreignObject x="0" y="0" width="' + b.chart.width + '" height="' + b.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + d.replace(/(<(?:img|br).*?(?=>))>/g, "$1 />") + "</body></foreignObject>", a = a.replace("</svg>", d + "</svg>"));
              a = a.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\xA0").replace(/&shy;/g, "\xAD");
              this.ieSanitizeSVG && (a = this.ieSanitizeSVG(a));
              return a;
            },
            getChartHTML: function getChartHTML() {
              this.styledMode && this.inlineStyles();
              return this.container.innerHTML;
            },
            getSVG: function getSVG(a) {
              var b,
                  f = n(this.options, a);
              f.plotOptions = n(this.userOptions.plotOptions, a && a.plotOptions);
              f.time = n(this.userOptions.time, a && a.time);
              var d = y("div", null, {
                position: "absolute",
                top: "-9999em",
                width: this.chartWidth + "px",
                height: this.chartHeight + "px"
              }, x.body);
              var c = this.renderTo.style.width;
              var e = this.renderTo.style.height;
              c = f.exporting.sourceWidth || f.chart.width || /px$/.test(c) && parseInt(c, 10) || (f.isGantt ? 800 : 600);
              e = f.exporting.sourceHeight || f.chart.height || /px$/.test(e) && parseInt(e, 10) || 400;
              w(f.chart, {
                animation: !1,
                renderTo: d,
                forExport: !0,
                renderer: "SVGRenderer",
                width: c,
                height: e
              });
              f.exporting.enabled = !1;
              delete f.data;
              f.series = [];
              this.series.forEach(function (a) {
                b = n(a.userOptions, {
                  animation: !1,
                  enableMouseTracking: !1,
                  showCheckbox: !1,
                  visible: a.visible
                });
                b.isInternal || f.series.push(b);
              });
              this.axes.forEach(function (a) {
                a.userOptions.internalKey || (a.userOptions.internalKey = L());
              });
              var k = new h.Chart(f, this.callback);
              a && ["xAxis", "yAxis", "series"].forEach(function (b) {
                var d = {};
                a[b] && (d[b] = a[b], k.update(d));
              });
              this.axes.forEach(function (a) {
                var b = I(k.axes, function (b) {
                  return b.options.internalKey === a.userOptions.internalKey;
                }),
                    d = a.getExtremes(),
                    f = d.userMin;
                d = d.userMax;
                b && ("undefined" !== typeof f && f !== b.min || "undefined" !== typeof d && d !== b.max) && b.setExtremes(f, d, !0, !1);
              });
              c = k.getChartHTML();
              B(this, "getSVG", {
                chartCopy: k
              });
              c = this.sanitizeSVG(c, f);
              f = null;
              k.destroy();
              D(d);
              return c;
            },
            getSVGForExport: function getSVGForExport(a, b) {
              var f = this.options.exporting;
              return this.getSVG(n({
                chart: {
                  borderRadius: 0
                }
              }, f.chartOptions, b, {
                exporting: {
                  sourceWidth: a && a.sourceWidth || f.sourceWidth,
                  sourceHeight: a && a.sourceHeight || f.sourceHeight
                }
              }));
            },
            getFilename: function getFilename() {
              var a = this.userOptions.title && this.userOptions.title.text,
                  b = this.options.exporting.filename;
              if (b) return b.replace(/\//g, "-");
              "string" === typeof a && (b = a.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "").replace(/[\s_]+/g, "-").replace(/[^a-z0-9\-]/g, "").replace(/^[\-]+/g, "").replace(/[\-]+/g, "-").substr(0, 24).replace(/[\-]+$/g, ""));
              if (!b || 5 > b.length) b = "chart";
              return b;
            },
            exportChart: function exportChart(a, b) {
              b = this.getSVGForExport(a, b);
              a = n(this.options.exporting, a);
              h.post(a.url, {
                filename: a.filename ? a.filename.replace(/\//g, "-") : this.getFilename(),
                type: a.type,
                width: a.width || 0,
                scale: a.scale,
                svg: b
              }, a.formAttributes);
            },
            moveContainers: function moveContainers(a) {
              (this.fixedDiv ? [this.fixedDiv, this.scrollingContainer] : [this.container]).forEach(function (b) {
                a.appendChild(b);
              });
            },
            beforePrint: function beforePrint() {
              var a = x.body,
                  b = this.options.exporting.printMaxWidth,
                  f = {
                childNodes: a.childNodes,
                origDisplay: [],
                resetParams: void 0
              };
              this.isPrinting = !0;
              this.pointer.reset(null, 0);
              B(this, "beforePrint");
              b && this.chartWidth > b && (f.resetParams = [this.options.chart.width, void 0, !1], this.setSize(b, void 0, !1));
              [].forEach.call(f.childNodes, function (a, b) {
                1 === a.nodeType && (f.origDisplay[b] = a.style.display, a.style.display = "none");
              });
              this.moveContainers(a);
              this.printReverseInfo = f;
            },
            afterPrint: function afterPrint() {
              if (this.printReverseInfo) {
                var a = this.printReverseInfo.childNodes,
                    b = this.printReverseInfo.origDisplay,
                    f = this.printReverseInfo.resetParams;
                this.moveContainers(this.renderTo);
                [].forEach.call(a, function (a, f) {
                  1 === a.nodeType && (a.style.display = b[f] || "");
                });
                this.isPrinting = !1;
                f && this.setSize.apply(this, f);
                delete this.printReverseInfo;
                delete h.printingChart;
                B(this, "afterPrint");
              }
            },
            print: function print() {
              var a = this;
              a.isPrinting || (h.printingChart = a, h.isSafari || a.beforePrint(), setTimeout(function () {
                z.focus();
                z.print();
                h.isSafari || setTimeout(function () {
                  a.afterPrint();
                }, 1E3);
              }, 1));
            },
            contextMenu: function contextMenu(a, b, f, d, c, h, k) {
              var g = this,
                  C = g.options.navigation,
                  l = g.chartWidth,
                  A = g.chartHeight,
                  r = "cache-" + a,
                  m = g[r],
                  v = Math.max(c, h);

              if (!m) {
                g.exportContextMenu = g[r] = m = y("div", {
                  className: a
                }, {
                  position: "absolute",
                  zIndex: 1E3,
                  padding: v + "px",
                  pointerEvents: "auto"
                }, g.fixedDiv || g.container);
                var n = y("ul", {
                  className: "highcharts-menu"
                }, {
                  listStyle: "none",
                  margin: 0,
                  padding: 0
                }, m);
                g.styledMode || u(n, w({
                  MozBoxShadow: "3px 3px 10px #888",
                  WebkitBoxShadow: "3px 3px 10px #888",
                  boxShadow: "3px 3px 10px #888"
                }, C.menuStyle));

                m.hideMenu = function () {
                  u(m, {
                    display: "none"
                  });
                  k && k.setState(0);
                  g.openMenu = !1;
                  u(g.renderTo, {
                    overflow: "hidden"
                  });
                  e.clearTimeout(m.hideTimer);
                  B(g, "exportMenuHidden");
                };

                g.exportEvents.push(t(m, "mouseleave", function () {
                  m.hideTimer = z.setTimeout(m.hideMenu, 500);
                }), t(m, "mouseenter", function () {
                  e.clearTimeout(m.hideTimer);
                }), t(x, "mouseup", function (b) {
                  g.pointer.inClass(b.target, a) || m.hideMenu();
                }), t(m, "click", function () {
                  g.openMenu && m.hideMenu();
                }));
                b.forEach(function (a) {
                  "string" === typeof a && (a = g.options.exporting.menuItemDefinitions[a]);

                  if (J(a, !0)) {
                    if (a.separator) var b = y("hr", null, null, n);else b = y("li", {
                      className: "highcharts-menu-item",
                      onclick: function onclick(b) {
                        b && b.stopPropagation();
                        m.hideMenu();
                        a.onclick && a.onclick.apply(g, arguments);
                      },
                      innerHTML: a.text || g.options.lang[a.textKey]
                    }, null, n), g.styledMode || (b.onmouseover = function () {
                      u(this, C.menuItemHoverStyle);
                    }, b.onmouseout = function () {
                      u(this, C.menuItemStyle);
                    }, u(b, w({
                      cursor: "pointer"
                    }, C.menuItemStyle)));
                    g.exportDivElements.push(b);
                  }
                });
                g.exportDivElements.push(n, m);
                g.exportMenuWidth = m.offsetWidth;
                g.exportMenuHeight = m.offsetHeight;
              }

              b = {
                display: "block"
              };
              f + g.exportMenuWidth > l ? b.right = l - f - c - v + "px" : b.left = f - v + "px";
              d + h + g.exportMenuHeight > A && "top" !== k.alignOptions.verticalAlign ? b.bottom = A - d - v + "px" : b.top = d + h - v + "px";
              u(m, b);
              u(g.renderTo, {
                overflow: ""
              });
              g.openMenu = !0;
              B(g, "exportMenuShown");
            },
            addButton: function addButton(a) {
              var b = this,
                  f = b.renderer,
                  d = n(b.options.navigation.buttonOptions, a),
                  c = d.onclick,
                  e = d.menuItems,
                  h = d.symbolSize || 12;
              b.btnCount || (b.btnCount = 0);
              b.exportDivElements || (b.exportDivElements = [], b.exportSVGElements = []);

              if (!1 !== d.enabled) {
                var g = d.theme,
                    k = g.states,
                    l = k && k.hover;
                k = k && k.select;
                var A;
                b.styledMode || (g.fill = q(g.fill, "#ffffff"), g.stroke = q(g.stroke, "none"));
                delete g.states;
                c ? A = function A(a) {
                  a && a.stopPropagation();
                  c.call(b, a);
                } : e && (A = function A(a) {
                  a && a.stopPropagation();
                  b.contextMenu(r.menuClassName, e, r.translateX, r.translateY, r.width, r.height, r);
                  r.setState(2);
                });
                d.text && d.symbol ? g.paddingLeft = q(g.paddingLeft, 25) : d.text || w(g, {
                  width: d.width,
                  height: d.height,
                  padding: 0
                });
                b.styledMode || (g["stroke-linecap"] = "round", g.fill = q(g.fill, "#ffffff"), g.stroke = q(g.stroke, "none"));
                var r = f.button(d.text, 0, 0, A, g, l, k).addClass(a.className).attr({
                  title: q(b.options.lang[d._titleKey || d.titleKey], "")
                });
                r.menuClassName = a.menuClassName || "highcharts-menu-" + b.btnCount++;

                if (d.symbol) {
                  var m = f.symbol(d.symbol, d.symbolX - h / 2, d.symbolY - h / 2, h, h, {
                    width: h,
                    height: h
                  }).addClass("highcharts-button-symbol").attr({
                    zIndex: 1
                  }).add(r);
                  b.styledMode || m.attr({
                    stroke: d.symbolStroke,
                    fill: d.symbolFill,
                    "stroke-width": d.symbolStrokeWidth || 1
                  });
                }

                r.add(b.exportingGroup).align(w(d, {
                  width: r.width,
                  x: q(d.x, b.buttonOffset)
                }), !0, "spacingBox");
                b.buttonOffset += (r.width + d.buttonSpacing) * ("right" === d.align ? -1 : 1);
                b.exportSVGElements.push(r, m);
              }
            },
            destroyExport: function destroyExport(a) {
              var b = a ? a.target : this;
              a = b.exportSVGElements;
              var f = b.exportDivElements,
                  d = b.exportEvents,
                  c;
              a && (a.forEach(function (a, d) {
                a && (a.onclick = a.ontouchstart = null, c = "cache-" + a.menuClassName, b[c] && delete b[c], b.exportSVGElements[d] = a.destroy());
              }), a.length = 0);
              b.exportingGroup && (b.exportingGroup.destroy(), delete b.exportingGroup);
              f && (f.forEach(function (a, d) {
                e.clearTimeout(a.hideTimer);
                K(a, "mouseleave");
                b.exportDivElements[d] = a.onmouseout = a.onmouseover = a.ontouchstart = a.onclick = null;
                D(a);
              }), f.length = 0);
              d && (d.forEach(function (a) {
                a();
              }), d.length = 0);
            }
          });
          p.prototype.inlineToAttributes = "fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");
          p.prototype.inlineBlacklist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/];
          p.prototype.unstyledElements = ["clipPath", "defs", "desc"];

          c.prototype.inlineStyles = function () {
            function a(a) {
              return a.replace(/([A-Z])/g, function (a, b) {
                return "-" + b.toLowerCase();
              });
            }

            function b(c) {
              function f(b, f) {
                v = u = !1;

                if (h) {
                  for (q = h.length; q-- && !u;) {
                    u = h[q].test(f);
                  }

                  v = !u;
                }

                "transform" === f && "none" === b && (v = !0);

                for (q = e.length; q-- && !v;) {
                  v = e[q].test(f) || "function" === typeof b;
                }

                v || y[f] === b && "svg" !== c.nodeName || g[c.nodeName][f] === b || (d && -1 === d.indexOf(f) ? m += a(f) + ":" + b + ";" : b && c.setAttribute(a(f), b));
              }

              var m = "",
                  v,
                  u,
                  q;

              if (1 === c.nodeType && -1 === k.indexOf(c.nodeName)) {
                var t = z.getComputedStyle(c, null);
                var y = "svg" === c.nodeName ? {} : z.getComputedStyle(c.parentNode, null);

                if (!g[c.nodeName]) {
                  l = p.getElementsByTagName("svg")[0];
                  var w = p.createElementNS(c.namespaceURI, c.nodeName);
                  l.appendChild(w);
                  g[c.nodeName] = n(z.getComputedStyle(w, null));
                  "text" === c.nodeName && delete g.text.fill;
                  l.removeChild(w);
                }

                if (N || M) for (var x in t) {
                  f(t[x], x);
                } else E(t, f);
                m && (t = c.getAttribute("style"), c.setAttribute("style", (t ? t + ";" : "") + m));
                "svg" === c.nodeName && c.setAttribute("stroke-width", "1px");
                "text" !== c.nodeName && [].forEach.call(c.children || c.childNodes, b);
              }
            }

            var c = this.renderer,
                d = c.inlineToAttributes,
                e = c.inlineBlacklist,
                h = c.inlineWhitelist,
                k = c.unstyledElements,
                g = {},
                l;
            c = x.createElement("iframe");
            u(c, {
              width: "1px",
              height: "1px",
              visibility: "hidden"
            });
            x.body.appendChild(c);
            var p = c.contentWindow.document;
            p.open();
            p.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');
            p.close();
            b(this.container.querySelector("svg"));
            l.parentNode.removeChild(l);
          };

          G.menu = function (a, b, c, d) {
            return [["M", a, b + 2.5], ["L", a + c, b + 2.5], ["M", a, b + d / 2 + .5], ["L", a + c, b + d / 2 + .5], ["M", a, b + d - 1.5], ["L", a + c, b + d - 1.5]];
          };

          G.menuball = function (a, b, c, d) {
            a = [];
            d = d / 3 - 2;
            return a = a.concat(this.circle(c - d, b, d, d), this.circle(c - d, b + d + 4, d, d), this.circle(c - d, b + 2 * (d + 4), d, d));
          };

          c.prototype.renderExporting = function () {
            var a = this,
                b = a.options.exporting,
                c = b.buttons,
                d = a.isDirtyExporting || !a.exportSVGElements;
            a.buttonOffset = 0;
            a.isDirtyExporting && a.destroyExport();
            d && !1 !== b.enabled && (a.exportEvents = [], a.exportingGroup = a.exportingGroup || a.renderer.g("exporting-group").attr({
              zIndex: 3
            }).add(), E(c, function (b) {
              a.addButton(b);
            }), a.isDirtyExporting = !1);
            t(a, "destroy", a.destroyExport);
          };

          t(c, "init", function () {
            var a = this;
            a.exporting = {
              update: function update(b, c) {
                a.isDirtyExporting = !0;
                n(!0, a.options.exporting, b);
                q(c, !0) && a.redraw();
              }
            };
            l.addUpdate(function (b, c) {
              a.isDirtyExporting = !0;
              n(!0, a.options.navigation, b);
              q(c, !0) && a.redraw();
            }, a);
          });
          c.prototype.callbacks.push(function (a) {
            a.renderExporting();
            t(a, "redraw", a.renderExporting);
          });
        });
        p(c, "masters/modules/exporting.src.js", [], function () {});
      }); //# sourceMappingURL=exporting.js.map

      /***/

    },

    /***/
    "FE7Q":
    /*!*********************************************************!*\
      !*** ./node_modules/highcharts/modules/pattern-fill.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function FE7Q(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      Highcharts JS v8.2.0 (2020-08-20)
      Module for adding patterns and images as point fills.
      (c) 2010-2019 Highsoft AS
      Author: Torstein Hnsi, ystein Moseng
      License: www.highcharts.com/license
      */


      (function (c) {
        true && module.exports ? (c["default"] = c, module.exports = c) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "6n/F")], __WEBPACK_AMD_DEFINE_RESULT__ = function (g) {
          c(g);
          c.Highcharts = g;
          return c;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function (c) {
        function g(c, p, g, e) {
          c.hasOwnProperty(p) || (c[p] = e.apply(null, g));
        }

        c = c ? c._modules : {};
        g(c, "Extensions/PatternFill.js", [c["Core/Globals.js"], c["Core/Series/Point.js"], c["Core/Renderer/SVG/SVGRenderer.js"], c["Core/Utilities.js"]], function (c, g, r, e) {
          function p(a, b) {
            a = JSON.stringify(a);
            var c = a.length || 0,
                f = 0,
                d = 0;

            if (b) {
              b = Math.max(Math.floor(c / 500), 1);

              for (var e = 0; e < c; e += b) {
                f += a.charCodeAt(e);
              }

              f &= f;
            }

            for (; d < c; ++d) {
              b = a.charCodeAt(d), f = (f << 5) - f + b, f &= f;
            }

            return f.toString(16).replace("-", "1");
          }

          var k = e.addEvent,
              u = e.animObject,
              v = e.erase,
              w = e.getOptions,
              t = e.merge,
              q = e.pick,
              x = e.removeEvent;
          e = e.wrap;
          "";

          c.patterns = function () {
            var a = [],
                b = w().colors;
            "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11;M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9;M 3 0 L 3 10 M 8 0 L 8 10;M 0 3 L 10 3 M 0 8 L 10 8;M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7;M 3 3 L 8 3 L 8 8 L 3 8 Z;M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0;M 10 3 L 5 3 L 5 0 M 5 10 L 5 7 L 0 7;M 2 5 L 5 2 L 8 5 L 5 8 Z;M 0 0 L 5 10 L 10 0".split(";").forEach(function (c, f) {
              a.push({
                path: c,
                color: b[f],
                width: 10,
                height: 10
              });
            });
            return a;
          }();

          g.prototype.calculatePatternDimensions = function (a) {
            if (!a.width || !a.height) {
              var b = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {},
                  c = this.shapeArgs;
              c && (b.width = c.width || b.width, b.height = c.height || b.height, b.x = c.x || b.x, b.y = c.y || b.y);

              if (a.image) {
                if (!b.width || !b.height) {
                  a._width = "defer";
                  a._height = "defer";
                  return;
                }

                a.aspectRatio && (b.aspectRatio = b.width / b.height, a.aspectRatio > b.aspectRatio ? b.aspectWidth = b.height * a.aspectRatio : b.aspectHeight = b.width / a.aspectRatio);
                a._width = a.width || Math.ceil(b.aspectWidth || b.width);
                a._height = a.height || Math.ceil(b.aspectHeight || b.height);
              }

              a.width || (a._x = a.x || 0, a._x += b.x - Math.round(b.aspectWidth ? Math.abs(b.aspectWidth - b.width) / 2 : 0));
              a.height || (a._y = a.y || 0, a._y += b.y - Math.round(b.aspectHeight ? Math.abs(b.aspectHeight - b.height) / 2 : 0));
            }
          };

          r.prototype.addPattern = function (a, b) {
            b = q(b, !0);

            var c = u(b),
                f = a.width || a._width || 32,
                d = a.height || a._height || 32,
                e = a.color || "#343434",
                h = a.id,
                g = this,
                n = function n(a) {
              g.rect(0, 0, f, d).attr({
                fill: a
              }).add(m);
            };

            h || (this.idCounter = this.idCounter || 0, h = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter);
            this.forExport && (h += "-export");
            this.defIds = this.defIds || [];

            if (!(-1 < this.defIds.indexOf(h))) {
              this.defIds.push(h);
              var l = {
                id: h,
                patternUnits: "userSpaceOnUse",
                patternContentUnits: a.patternContentUnits || "userSpaceOnUse",
                width: f,
                height: d,
                x: a._x || a.x || 0,
                y: a._y || a.y || 0
              };
              a.patternTransform && (l.patternTransform = a.patternTransform);
              var m = this.createElement("pattern").attr(l).add(this.defs);
              m.id = h;
              a.path ? (l = a.path, a.backgroundColor && n(a.backgroundColor), n = {
                d: l.d || l
              }, this.styledMode || (n.stroke = l.stroke || e, n["stroke-width"] = q(l.strokeWidth, 2), n.fill = l.fill || "none"), l.transform && (n.transform = l.transform), this.createElement("path").attr(n).add(m), m.color = e) : a.image && (b ? this.image(a.image, 0, 0, f, d, function () {
                this.animate({
                  opacity: q(a.opacity, 1)
                }, c);
                x(this.element, "load");
              }).attr({
                opacity: 0
              }).add(m) : this.image(a.image, 0, 0, f, d).add(m));
              a.image && b || "undefined" === typeof a.opacity || [].forEach.call(m.element.childNodes, function (b) {
                b.setAttribute("opacity", a.opacity);
              });
              this.patternElements = this.patternElements || {};
              return this.patternElements[h] = m;
            }
          };

          e(c.Series.prototype, "getColor", function (a) {
            var b = this.options.color;
            b && b.pattern && !b.pattern.color ? (delete this.options.color, a.apply(this, Array.prototype.slice.call(arguments, 1)), b.pattern.color = this.color, this.color = this.options.color = b) : a.apply(this, Array.prototype.slice.call(arguments, 1));
          });
          k(c.Series, "render", function () {
            var a = this.chart.isResizing;
            (this.isDirtyData || a || !this.chart.hasRendered) && (this.points || []).forEach(function (b) {
              var c = b.options && b.options.color;
              c && c.pattern && (!a || b.shapeArgs && b.shapeArgs.width && b.shapeArgs.height ? b.calculatePatternDimensions(c.pattern) : (c.pattern._width = "defer", c.pattern._height = "defer"));
            });
          });
          k(g, "afterInit", function () {
            var a = this.options.color;
            a && a.pattern && ("string" === typeof a.pattern.path && (a.pattern.path = {
              d: a.pattern.path
            }), this.color = this.options.color = t(this.series.options.color, a));
          });
          k(r, "complexColor", function (a) {
            var b = a.args[0],
                e = a.args[1];
            a = a.args[2];
            var f = this.chartIndex || 0,
                d = b.pattern,
                k = "#343434";
            "undefined" !== typeof b.patternIndex && c.patterns && (d = c.patterns[b.patternIndex]);
            if (!d) return !0;

            if (d.image || "string" === typeof d.path || d.path && d.path.d) {
              var h = a.parentNode && a.parentNode.getAttribute("class");
              h = h && -1 < h.indexOf("highcharts-legend");
              "defer" !== d._width && "defer" !== d._height || g.prototype.calculatePatternDimensions.call({
                graphic: {
                  element: a
                }
              }, d);
              if (h || !d.id) d = t({}, d), d.id = "highcharts-pattern-" + f + "-" + p(d) + p(d, !0);
              this.addPattern(d, !this.forExport && q(d.animation, this.globalAnimation, {
                duration: 100
              }));
              k = "url(" + this.url + "#" + (d.id + (this.forExport ? "-export" : "")) + ")";
            } else k = d.color || k;

            a.setAttribute(e, k);

            b.toString = function () {
              return k;
            };

            return !1;
          });
          k(c.Chart, "endResize", function () {
            (this.renderer && this.renderer.defIds || []).filter(function (a) {
              return a && a.indexOf && 0 === a.indexOf("highcharts-pattern-");
            }).length && (this.series.forEach(function (a) {
              a.points.forEach(function (a) {
                (a = a.options && a.options.color) && a.pattern && (a.pattern._width = "defer", a.pattern._height = "defer");
              });
            }), this.redraw(!1));
          });
          k(c.Chart, "redraw", function () {
            var a = {},
                b = this.renderer,
                c = (b.defIds || []).filter(function (a) {
              return a.indexOf && 0 === a.indexOf("highcharts-pattern-");
            });
            c.length && ([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'), function (c) {
              if (c = c.getAttribute("fill") || c.getAttribute("color") || c.getAttribute("stroke")) c = c.replace(b.url, "").replace("url(#", "").replace(")", ""), a[c] = !0;
            }), c.forEach(function (c) {
              a[c] || (v(b.defIds, c), b.patternElements[c] && (b.patternElements[c].destroy(), delete b.patternElements[c]));
            }));
          });
        });
        g(c, "masters/modules/pattern-fill.src.js", [], function () {});
      }); //# sourceMappingURL=pattern-fill.js.map

      /***/

    },

    /***/
    "Gg4+":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/set-threshold-dialog.component.ngfactory.js ***!
      \*****************************************************************************************************/

    /*! exports provided: RenderType_SetThresholdDialogComponent, View_SetThresholdDialogComponent_0, View_SetThresholdDialogComponent_Host_0, SetThresholdDialogComponentNgFactory */

    /***/
    function Gg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SetThresholdDialogComponent", function () {
        return RenderType_SetThresholdDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SetThresholdDialogComponent_0", function () {
        return View_SetThresholdDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SetThresholdDialogComponent_Host_0", function () {
        return View_SetThresholdDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetThresholdDialogComponentNgFactory", function () {
        return SetThresholdDialogComponentNgFactory;
      });
      /* harmony import */


      var _set_threshold_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./set-threshold-dialog.scss.shim.ngstyle */
      "MXVQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../dialog/prompt/prompt-edit.component.ngfactory */
      "0JAx");
      /* harmony import */


      var _dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../dialog/prompt/prompt-edit.component */
      "ACap");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./set-threshold-dialog.component */
      "AYan");
      /* harmony import */


      var _generated_network_diagnostics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../generated/network-diagnostics-service */
      "g5g0");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SetThresholdDialogComponent = [_set_threshold_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SetThresholdDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SetThresholdDialogComponent,
        data: {}
      });

      function View_SetThresholdDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "clr-subtext"], ["id", "warning-threshold-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                  ", "\n               "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.ERRORS[_co.WARNING_THRESHOLD_CONTROL_NAME];

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SetThresholdDialogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "clr-subtext"], ["id", "error-threshold-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n                  ", "\n               "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.ERRORS[_co.ERROR_THRESHOLD_CONTROL_NAME];

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_SetThresholdDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_2__["LocalizationPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 92, "vsan-edit-prompt", [], null, [[null, "onConfirm"], [null, "alertMessagesChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("onConfirm" === en) {
            var pd_0 = _co.onConfirm() !== false;
            ad = pd_0 && ad;
          }

          if ("alertMessagesChange" === en) {
            var pd_1 = (_co.alertMessages = $event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_EditPrompt_0"], _dialog_prompt_prompt_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_EditPrompt"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _dialog_prompt_prompt_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditPrompt"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]], {
          title: [0, "title"],
          subtitle: [1, "subtitle"],
          confirmText: [2, "confirmText"],
          alertMessages: [3, "alertMessages"],
          blockButton: [4, "blockButton"],
          blockContent: [5, "blockContent"]
        }, {
          alertMessagesChange: "alertMessagesChange",
          onConfirm: "onConfirm"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 86, "div", [["class", "dialog-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 83, "div", [["class", "clr-form clr-form-horizontal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 39, "div", [["class", "clr-form-control clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 8, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid is-warning"], ["id", "warning-threshold"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 26, "div", [["class", "clr-control-container warning-threshold-container clr-col-3"]], [[2, "clr-error", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 20, "div", [["class", "clr-input-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 17, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 6, "input", [["aria-describedby", "warning-threshold-error"], ["class", "clr-input warning-threshold-input"], ["type", "number"]], [[8, "id", 0], [8, "min", 0], [8, "max", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_6 = (_co.threshold.warningThreshold = $event) !== false;
            ad = pd_6 && ad;
          }

          if ("change" === en) {
            var pd_7 = _co.onThresholdChange() !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "clr-icon", [["class", "clr-validate-icon"], ["shape", "exclamation-circle"]], [[8, "title", 0], [1, "aria-label", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](41, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](42, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SetThresholdDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 39, "div", [["class", "clr-form-control clr-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 8, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "clr-icon", [["aria-hidden", "true"], ["class", "is-solid is-error"], ["id", "error-threshold"]], [[1, "shape", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 26, "div", [["class", "clr-control-container error-threshold-container clr-col-3"]], [[2, "clr-error", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 20, "div", [["class", "clr-input-wrapper clr-row-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 17, "label", [], [[1, "for", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 212992, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLabel"], [[2, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbc"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵb"]], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbd"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 6, "input", [["aria-describedby", "error-threshold-error"], ["class", "clr-input error-threshold-input"], ["type", "number"]], [[8, "id", 0], [8, "min", 0], [8, "max", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("input" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_6 = (_co.threshold.errorThreshold = $event) !== false;
            ad = pd_6 && ad;
          }

          if ("change" === en) {
            var pd_7 = _co.onThresholdChange() !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 5, "clr-icon", [["class", "clr-validate-icon"], ["shape", "exclamation-circle"]], [[8, "title", 0], [1, "aria-label", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](82, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](83, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                     "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SetThresholdDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.performance.chart.setThreshold"));

          var currVal_1 = _co.context == null ? null : _co.context.metricLabel;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 2, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.save"));

          var currVal_3 = _co.alertMessages;
          var currVal_4 = _co.haveErrors || _co.busy;
          var currVal_5 = _co.busy;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

          _ck(_v, 28, 0);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.WARNING_THRESHOLD_CONTROL_NAME, "");

          var currVal_22 = _co.threshold.warningThreshold;

          _ck(_v, 34, 0, currVal_21, currVal_22);

          var currVal_25 = _co.ERRORS[_co.WARNING_THRESHOLD_CONTROL_NAME];

          _ck(_v, 48, 0, currVal_25);

          _ck(_v, 69, 0);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.ERROR_THRESHOLD_CONTROL_NAME, "");

          var currVal_42 = _co.threshold.errorThreshold;

          _ck(_v, 75, 0, currVal_41, currVal_42);

          var currVal_45 = _co.ERRORS[_co.ERROR_THRESHOLD_CONTROL_NAME];

          _ck(_v, 89, 0, currVal_45);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.threshold.labelColumnStyle, "");

          _ck(_v, 13, 0, currVal_6);

          var currVal_7 = _co.Icon.CLR_WARN_STANDARD_ICON_SHAPE;

          _ck(_v, 15, 0, currVal_7);

          var currVal_8 = _co.threshold.warningThresholdLabel;

          _ck(_v, 20, 0, currVal_8);

          var currVal_9 = _co.ERRORS[_co.WARNING_THRESHOLD_CONTROL_NAME];

          _ck(_v, 23, 0, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).forAttr;

          _ck(_v, 27, 0, currVal_10);

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.WARNING_THRESHOLD_CONTROL_NAME, "");

          var currVal_12 = _co.threshold.minValue;
          var currVal_13 = _co.threshold.maxValue;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending;

          _ck(_v, 30, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _ck(_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.srMessage.error")), "");

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 1, _ck(_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.srMessage.error"));

          _ck(_v, 38, 0, currVal_23, currVal_24);

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.threshold.labelColumnStyle, "");

          _ck(_v, 54, 0, currVal_26);

          var currVal_27 = _co.Icon.CLR_ERROR_STANDARD_ICON_SHAPE;

          _ck(_v, 56, 0, currVal_27);

          var currVal_28 = _co.threshold.errorThresholdLabel;

          _ck(_v, 61, 0, currVal_28);

          var currVal_29 = _co.ERRORS[_co.ERROR_THRESHOLD_CONTROL_NAME];

          _ck(_v, 64, 0, currVal_29);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).forAttr;

          _ck(_v, 68, 0, currVal_30);

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.ERROR_THRESHOLD_CONTROL_NAME, "");

          var currVal_32 = _co.threshold.minValue;
          var currVal_33 = _co.threshold.maxValue;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassUntouched;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassTouched;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassPristine;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassDirty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassValid;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassInvalid;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).ngClassPending;

          _ck(_v, 71, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40);

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 79, 0, _ck(_v, 82, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.srMessage.error")), "");

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 79, 1, _ck(_v, 83, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.srMessage.error"));

          _ck(_v, 79, 0, currVal_43, currVal_44);
        });
      }

      function View_SetThresholdDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-set-threshold-dialog", [], null, null, null, View_SetThresholdDialogComponent_0, RenderType_SetThresholdDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SetThresholdDialogComponent"], [_generated_network_diagnostics_service__WEBPACK_IMPORTED_MODULE_11__["NetworkDiagnosticsService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var SetThresholdDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-set-threshold-dialog", _set_threshold_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SetThresholdDialogComponent"], View_SetThresholdDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "H1HU":
    /*!*******************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/graph-metrics.data.ts ***!
      \*******************************************************************************/

    /*! exports provided: GraphMetric */

    /***/
    function H1HU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphMetric", function () {
        return GraphMetric;
      });
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");

      var GraphMetric = /*@__PURE__*/function () {
        var GraphMetric = /*#__PURE__*/function () {
          function GraphMetric(metrics, graphs) {
            var entityRefId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

            _classCallCheck(this, GraphMetric);

            this.entityRefId = entityRefId;
            this._metrics = metrics;
            this._graphs = GraphMetric.getRelevantGraphs(entityRefId, metrics, graphs);
          }

          _createClass(GraphMetric, [{
            key: "metrics",
            get: function get() {
              return this._metrics;
            }
          }, {
            key: "graphs",
            get: function get() {
              return this._graphs;
            }
          }], [{
            key: "getMetricIds",
            value: function getMetricIds(metrics) {
              if (!metrics || !metrics.metricsSeries) {
                return new Set();
              }

              var metricIds = [];
              metricIds.push.apply(metricIds, _toConsumableArray(metrics.metricsSeries.map(function (val) {
                return val.key;
              })));
              return new Set(metricIds);
            }
          }, {
            key: "getRelevantGraphs",
            value: function getRelevantGraphs(entityRefId, metrics, graphs) {
              if (!graphs || !metrics) {
                return [];
              }

              var metricIds = GraphMetric.getMetricIds(metrics); // A normal ID looks like this "host-domclient:59125660-8835-8f26-492d-000c2999863a"
              // In the perf support view, it's like "59125660-8835-8f26-492d-000c2999863a"
              // Aggregated charts entityRefId looks like "host-domclinet/host-diskgroup"
              // We want only the entity's type information without the ID string

              var entitySimplifiedId = entityRefId ? entityRefId.split(GraphMetric.ENTITY_REF_ID_TOKEN_SEPARATOR)[0] : null;
              return graphs.filter(function (graph) {
                return graph.metrics.some(function (metric) {
                  if (entitySimplifiedId) {
                    var graphId = GraphMetric.getSimplifiedGraphId(graph);
                    return graphId === entitySimplifiedId && metricIds.has(metric.key);
                  } else {
                    return metricIds.has(metric.key);
                  }
                });
              });
            }
            /**
             * The graph's ID is in the form of a package name (e.g: "com.vmware.vsan.perf.graph.vscsi.iops").
             * The important part are the last 2 tokens holding information about the entity type and the type of
             * data being profiled.
             * @param graph The graph which ID is going to be simplified
             * @returns {string} The simplified version of the ID without the common prefix.
             */

          }, {
            key: "getSimplifiedGraphId",
            value: function getSimplifiedGraphId(graph) {
              if (!graph.id) {
                return null;
              }

              var tokens = graph.id.split(GraphMetric.GRAPH_ID_TOKEN_SEPARATOR);

              if (tokens.length < 7) {
                _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn("Unknown format of graph's ID: " + graph.id);

                return null;
              }

              return tokens[5];
            }
          }]);

          return GraphMetric;
        }();

        GraphMetric.GRAPH_ID_TOKEN_SEPARATOR = ".";
        GraphMetric.ENTITY_REF_ID_TOKEN_SEPARATOR = ":";
        return GraphMetric;
      }();
      /***/

    },

    /***/
    "MXVQ":
    /*!***************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/set-threshold-dialog.scss.shim.ngstyle.js ***!
      \***************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function MXVQ(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".clr-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important;\n}\n.clr-form[_ngcontent-%COMP%]    > clr-button-group[_ngcontent-%COMP%], .clr-form[_ngcontent-%COMP%]    > .vsan-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important;\n}\n.clr-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0rem !important;\n}\n.clr-form[_ngcontent-%COMP%]   .clr-subtext[_ngcontent-%COMP%] {\n  max-width: 10.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2NoYXJ0L3BlcmZvcm1hbmNlL3NldC10aHJlc2hvbGQtZGlhbG9nLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FIa0RHO0VBQ0csZ0NBQUE7QUZqQ047QUVtQ0c7O0VBR0csZ0NBQUE7QUZsQ047QUVvQ0c7RUFDRyw4QkFBQTtBRmxDTjtBQWpCRztFQUNHLGtCQU5vQjtBQXlCMUIiLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvY2hhcnQvcGVyZm9ybWFuY2Uvc2V0LXRocmVzaG9sZC1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIwLTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIC0tIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9jc3MvdnNhbi11dGlscy5zY3NzXCI7XG5cbiRlcnJvci1tZXNzYWdlLW1heC13aWR0aDogMTAuOHJlbTtcblxuLmNsci1mb3JtIHtcbiAgIEBpbmNsdWRlIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCk7XG5cbiAgIC5jbHItc3VidGV4dCB7XG4gICAgICBtYXgtd2lkdGg6ICRlcnJvci1tZXNzYWdlLW1heC13aWR0aDtcbiAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "Qgyt":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/highcharts-tooltip.util.ts ***!
      \************************************************************************/

    /*! exports provided: HighchartsTooltipUtil */

    /***/
    function Qgyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighchartsTooltipUtil", function () {
        return HighchartsTooltipUtil;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _util_tooltip_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/tooltip-value */
      "pAFw");
      /* Copyright 2020-2021 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Provide helper utils related to working with custom data for tooltips.
       */


      var HighchartsTooltipUtil = /*#__PURE__*/function () {
        function HighchartsTooltipUtil() {
          _classCallCheck(this, HighchartsTooltipUtil);
        }

        _createClass(HighchartsTooltipUtil, null, [{
          key: "formatTooltipData",
          value: function formatTooltipData(tooltipValues) {
            var tooltipContent = "";

            var _iterator = _createForOfIteratorHelper(tooltipValues.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var label = _step.value;
                var tooltip = tooltipValues.get(label);

                if (tooltip instanceof _util_tooltip_value__WEBPACK_IMPORTED_MODULE_1__["TooltipValue"]) {
                  if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(tooltipContent)) {
                    tooltipContent = "<table>";
                  }

                  tooltipContent += this.formatColorTooltipPair(tooltip, label);
                } else {
                  tooltipContent += this.formatTooltipPair(label, tooltip);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (tooltipContent.startsWith("<table>")) {
              tooltipContent += "</table>";
            }

            return tooltipContent;
          }
        }, {
          key: "formatColorTooltipPair",
          value: function formatColorTooltipPair(tooltip, label) {
            return "<tr>\n                 <td>\n                    ".concat(this.createSvgRectangle(tooltip.color), "\n                 </td>\n                 <td class=\"text-nowrap\">\n                    ").concat(label, ":\n                 </td>\n                 <td class=\"tooltip-value text-nowrap\">\n                    ").concat(tooltip.value, "\n                 </td>\n              </tr>");
          }
        }, {
          key: "createSvgRectangle",
          value: function createSvgRectangle(color) {
            if (!color) {
              return "";
            }

            return "<svg class=\"tooltip-color-flag\" style=\"fill:".concat(color, "\">\n                <rect x=\"0\" y=\"4\" width=\"25\" height=\"6\"/>\n              </svg>");
          }
        }, {
          key: "formatTooltipPair",
          value: function formatTooltipPair(label, value) {
            return "<span>".concat(label, ": ").concat(value, "</span><br/>");
          }
        }, {
          key: "formatIndexedTooltipData",
          value: function formatIndexedTooltipData(series, index) {
            var tooltipContent = "";
            var tooltipValues = series.options.custom.tooltipValues;

            var _iterator2 = _createForOfIteratorHelper(tooltipValues.keys()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var label = _step2.value;
                var labelValues = tooltipValues.get(label);
                tooltipContent += "<span>".concat(label, ": ").concat(labelValues[index], "</span><br/>");
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return tooltipContent;
          }
        }, {
          key: "getTooltipHeader",
          value: function getTooltipHeader(key, series, index) {
            if (HighchartsTooltipUtil.hasCustomTooltipHeader(series.options)) {
              return "<b>".concat(series.options.custom.tooltipTitles[index], "</b><br/>");
            }

            if (HighchartsTooltipUtil.hasSeriesCustomTooltipData(series)) {
              return "<b>".concat(series.name, " - ").concat(key, "</b><br/>");
            }

            return "<b>".concat(key, "</b><br/>");
          }
        }, {
          key: "hasCustomTooltipHeader",
          value: function hasCustomTooltipHeader(seriesOptions) {
            return seriesOptions.custom && !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(seriesOptions.custom.tooltipTitles);
          }
        }, {
          key: "hasSeriesCustomTooltipData",
          value: function hasSeriesCustomTooltipData(series) {
            return series && series.options && series.options.custom && series.options.custom.tooltipValues;
          }
        }, {
          key: "getSeriesCustomTooltipData",
          value: function getSeriesCustomTooltipData(series) {
            return series.options.custom.tooltipValue;
          }
        }, {
          key: "hasPointCustomTooltipData",
          value: function hasPointCustomTooltipData(points) {
            return !_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(points) && points[0].series.options.custom && points[0].series.options.custom.tooltipValue;
          }
        }, {
          key: "getPointCustomTooltipData",
          value: function getPointCustomTooltipData(points) {
            return points[0].series.options.custom.tooltipValue;
          }
          /**
           * Extracts the tooltip data and transform it to Array as the Map cannot be serialized when passed as html property
           */

        }, {
          key: "getColumnLineTestingTooltipData",
          value: function getColumnLineTestingTooltipData(columnChartData) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(columnChartData)) {
              return [];
            }

            var result = [];
            columnChartData.forEach(function (chartData) {
              var multiTooltipData = new MultiTestTooltipData(chartData.seriesName);
              var labelsData = new Map();
              chartData.tooltipData.forEach(function (values, key) {
                if (!labelsData.has(key)) {
                  labelsData.set(key, values);
                }
              });
              multiTooltipData.values = HighchartsTooltipUtil.mapToTypedArray(labelsData);
              result.push(multiTooltipData);
            });
            return result;
          }
        }, {
          key: "getHistogramTestingTooltipData",
          value: function getHistogramTestingTooltipData(chartData) {
            if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].isEmpty(chartData)) {
              return [];
            }

            var labelsData = new Map();
            chartData.forEach(function (histogramData) {
              histogramData.labelData.forEach(function (value, key) {
                if (!labelsData.has(key)) {
                  labelsData.set(key, []);
                }

                labelsData.get(key).push(value);
              });
            });
            return HighchartsTooltipUtil.mapToTypedArray(labelsData);
          }
        }, {
          key: "mapToTypedArray",
          value: function mapToTypedArray(tooltipData) {
            var result = [];
            tooltipData.forEach(function (values, key) {
              result.push({
                key: key,
                values: values
              });
            });
            return result;
          }
        }]);

        return HighchartsTooltipUtil;
      }();
      /**
       * Holds tooltips for multiple chart series.
       */


      var MultiTestTooltipData = /*#__PURE__*/_createClass(function MultiTestTooltipData(key) {
        _classCallCheck(this, MultiTestTooltipData);

        this.key = key;
      });
      /**
       * Holds tooltips for a single chart series.
       */


      var TestTooltipData = /*#__PURE__*/_createClass(function TestTooltipData() {
        _classCallCheck(this, TestTooltipData);
      });
      /***/

    },

    /***/
    "RAUQ":
    /*!*****************************************************!*\
      !*** ./src/app/vsan/performance/util/perf-utils.ts ***!
      \*****************************************************/

    /*! exports provided: PerformanceUtils */

    /***/
    function RAUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceUtils", function () {
        return PerformanceUtils;
      });
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _component_inventory_tree_view_tree_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/inventory/tree-view/tree-node */
      "cFlq");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @util/logger */
      "a0OL");
      /* harmony import */


      var _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @util/vsan-dateteime-util */
      "MAgC");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../model/nested-perf-entity */
      "ZZcQ");
      /* harmony import */


      var _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../model/perf-monitor-view-type.model */
      "NvCx");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var PerformanceUtils = /*#__PURE__*/function () {
        function PerformanceUtils() {
          _classCallCheck(this, PerformanceUtils);
        }

        _createClass(PerformanceUtils, null, [{
          key: "getEntityTypeIdByPerfView",
          value:
          /**
           * This method is only for single entity views because in single entity view the entityId-view mapping is fixed.
           * In multi-entities view, the entities listed in the metrics may have different entityIds,
           * for example Host > Disks view, there are 2 entityIds, cache-disk and capacity-disk
           */
          function getEntityTypeIdByPerfView(view) {
            switch (view) {
              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_CONSUMPTION:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].CLUSTER_VM_CONSUMPTION_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_REMOTE_CONSUMPTION:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].CLUSTER_VM_CONSUMPTION_REMOTE_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_BACKEND:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].CLUSTER_BACKEND_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_FILE_SERVICE:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].CLUSTER_FILE_SERVICE_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_IO_INSIGHT:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].IO_INSIGHT_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_PMEM:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].PMEM_CLUSTER_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VSAN_DIRECT:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].CLUSTER_VSAN_DIRECT_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VM_CONSUMPTION:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].HOST_VM_CONSUMPTION_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_BACKEND:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].HOST_BACKEND_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_ISCSI:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].HOST_ISCSI_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_IO_INSIGHT:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].IO_INSIGHT_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VSAN_DIRECT:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].HOST_VSAN_DIRECT_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_PMEM:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].PMEM_HOST_ENTITY;

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].VM_CONSUMPTION:
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].VM_CONSUMPTION_ENTITY;

              default:
                return null;
            }
          }
        }, {
          key: "getSpecifiedEntityIdByPerfView",
          value: function getSpecifiedEntityIdByPerfView(view) {
            return new Map([[_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_CONSUMPTION, _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].VM_CONSUMPTION_ENTITY], [_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VM_CONSUMPTION, _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_0__["PerfChartDataConstants"].VM_CONSUMPTION_ENTITY]]).get(view);
          }
        }, {
          key: "isMultipleEntityPerfSupportedByView",
          value: function isMultipleEntityPerfSupportedByView(view) {
            return [_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_CONSUMPTION, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VM_CONSUMPTION].includes(view);
          }
        }, {
          key: "getPerfViewSelectOptionLabel",
          value: function getPerfViewSelectOptionLabel(view) {
            switch (view) {
              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_CONSUMPTION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.vmConsumption.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_REMOTE_CONSUMPTION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.vmConsumptionRemote.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.computeClusterVmConsumptionRemote.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_BACKEND:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.backend.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_ISCSI:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.iscsi.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_FILE_SERVICE:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.fileServices.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_IO_INSIGHT:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.io.insight");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_PMEM:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.pmem.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VSAN_DIRECT:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.cluster.performance.vsanDirect.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VM_CONSUMPTION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.vmConsumption.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_BACKEND:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.backend.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_DISK:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.disk.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_PHYSICAL_ADAPTER:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.physicalAdapter.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VIRTUAL_ADAPTER:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.virtualAdapter.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_ISCSI:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.iscsi.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_IO_INSIGHT:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.io.insight");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VSAN_DIRECT:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.vsanDirect.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_PMEM:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.host.performance.pmem.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].VM_CONSUMPTION:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.vm.performance.vmConsumption.title");

              case _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].VM_VIRTUAL_DISK:
                return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.monitor.vm.performance.virtualDisk.title");

              default:
                _util_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"].error("Invalid view type: ", view);

                return null;
            }
          }
        }, {
          key: "isSingleEntityViewSelected",
          value: function isSingleEntityViewSelected(view) {
            return [_model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_CONSUMPTION, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VM_REMOTE_CONSUMPTION, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_COMPUTE_ONLY_VM_REMOTE_CONSUMPTION, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_BACKEND, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_PMEM, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].CLUSTER_VSAN_DIRECT, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VM_CONSUMPTION, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_BACKEND, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_ISCSI, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_VSAN_DIRECT, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].HOST_PMEM, _model_perf_monitor_view_type_model__WEBPACK_IMPORTED_MODULE_7__["PerfMonitorViewType"].VM_CONSUMPTION].includes(view);
          }
        }, {
          key: "getPerfEntityByUuid",
          value: function getPerfEntityByUuid(entities, uuid) {
            // Perf API returns UUIDs in format -> entityType:guid.
            // Entity type should be removed and search guid in collection.
            return entities.find(function (entity) {
              return entity.entityUuid === uuid.split(":")[1];
            });
          }
        }, {
          key: "getRemoteClustersTreeNodes",
          value: function getRemoteClustersTreeNodes(mountedRemoteDatastores) {
            if (!mountedRemoteDatastores) {
              return [];
            }

            return mountedRemoteDatastores.filter(function (ds) {
              return !ds.isLocal;
            }).filter(PerformanceUtils.isRemoteClusterUnique).map(function (ds) {
              return new _component_inventory_tree_view_tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNode"](ds.shareableDatastore.serverCluster, null);
            });
          }
        }, {
          key: "isRemoteClusterUnique",
          value: function isRemoteClusterUnique(item, index, self) {
            return self.findIndex(function (current) {
              return _service_managed_object__WEBPACK_IMPORTED_MODULE_2__["ManagedObject"].areEqual(current.shareableDatastore.serverCluster.moRef, item.shareableDatastore.serverCluster.moRef);
            }) === index;
          }
          /**
           * Returns a message if the difference between client browser time and Master Node host time is more than 1 hour.
           * Otherwise return null.
           */

        }, {
          key: "validateMasterNodeTime",
          value: function validateMasterNodeTime(currentTimeOnMasterNode) {
            if (currentTimeOnMasterNode && _util_vsan_dateteime_util__WEBPACK_IMPORTED_MODULE_4__["VsanDateTimeUtils"].isMoreThanOneHourAgoFromNow(currentTimeOnMasterNode)) {
              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_5__["VsanUiUtils"].getString("vsan.perf.service.chart.time.synch.warning");
            }

            return null;
          }
        }, {
          key: "updatePerfEntityType",
          value: function updatePerfEntityType(perfEntity, commonPerfData) {
            perfEntity.configSpec = commonPerfData.entityTypes[perfEntity.entityId];

            if (perfEntity instanceof _model_nested_perf_entity__WEBPACK_IMPORTED_MODULE_6__["NestedPerfEntity"]) {
              perfEntity.combinedEntity.configSpec = commonPerfData.entityTypes[perfEntity.combinedEntity.entityId];
            }
          }
        }]);

        return PerformanceUtils;
      }();
      /***/

    },

    /***/
    "WVqU":
    /*!**************************************************************************!*\
      !*** ./src/app/vsan/common/util/performance/consolidated-view-helper.ts ***!
      \**************************************************************************/

    /*! exports provided: ConsolidatedViewHelper */

    /***/
    function WVqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsolidatedViewHelper", function () {
        return ConsolidatedViewHelper;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _perf_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./perf-data */
      "nH3z");
      /* Copyright 2019-2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Contains helper logic for consolidated state view
       * It is responsible for checkboxes which are shown in consolidated view
       */


      var ConsolidatedViewHelper = /*#__PURE__*/function () {
        /**
         *
         * @param entitiesChange -> tracks couple of event for entities filtered, changed, loaded, etc.
         * @param data -> object that keeps all needed loaded data for multiple entities performance (consolidated view)
         */
        function ConsolidatedViewHelper(entitiesChange, data) {
          var _this5 = this;

          _classCallCheck(this, ConsolidatedViewHelper);

          this.entitiesChange = entitiesChange;
          this.data = data;
          this.entityVisibilityStateMap = [];
          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null); //////////////
          // TODO [kaleksandrov] Create a PerfStateHolder or smth that will help you with keeeping the state and easily toggle on/off selection
          /////////////

          entitiesChange.subscribe(function (context) {
            if (context === _perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].FILTERED_ENTITIES || context === _perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].STATE_CHANGED || context === _perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].MODE_CHANGED) {
              if (!data.entities) {
                return;
              }

              var selectedEntities = data.entities.filter(function (entity) {
                return data.entitySelectionStateMap.get(entity.entityIdentifier);
              });
              _this5.entityVisibilityStateMap = {};
              selectedEntities.forEach(function (entity) {
                _this5.entityVisibilityStateMap[entity.entityIdentifier] = true;
              });
            } else if (context === _perf_data__WEBPACK_IMPORTED_MODULE_1__["PerfChangeContext"].METRICS_FETCHED) {
              _this5.graphData = _this5.data.entitiesGraphData;
              _this5.flatData = _this5.data.entitiesFlatData;
              _this5.data.entitiesGraphData = _this5.graphData.filter(function (x) {
                return _this5.entityVisibilityStateMap[x.entityIdentifier.id];
              }); // Include only current selected entities graphs' metrics

              _this5.data.entitiesFlatData = _this5.flatData.filter(function (x) {
                return _this5.entityVisibilityStateMap[x.entityIdentifier.id];
              });
            }
          });
        }
        /*
        * This method is responsible for checkboxes state change action
        */


        _createClass(ConsolidatedViewHelper, [{
          key: "toggle",
          value: function toggle(specifiedEntityId, isVisible) {
            var _this6 = this;

            // Set if entity should be visible on the charts or not
            this.entityVisibilityStateMap[specifiedEntityId] = isVisible; // Include only current selected entities graphs' metrics

            if (this.graphData) {
              this.data.entitiesGraphData = this.graphData.filter(function (x) {
                return _this6.entityVisibilityStateMap[x.entityIdentifier.id];
              });
            } // Include only current selected entities graphs' metrics


            if (this.flatData) {
              this.data.entitiesFlatData = this.flatData.filter(function (x) {
                return _this6.entityVisibilityStateMap[x.entityIdentifier.id];
              });
            } // Pass flat data in order to be captured by some component which is responsible for drawing of the charts


            this.change.next(this.data.entitiesFlatData);
          }
        }]);

        return ConsolidatedViewHelper;
      }();
      /***/

    },

    /***/
    "Xlmv":
    /*!********************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/model/perf-graph-id.ts ***!
      \********************************************************************/

    /*! exports provided: PefGraphId */

    /***/
    function Xlmv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PefGraphId", function () {
        return PefGraphId;
      });
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Id of the graph, used for the 'ask VMware' link.
       */


      var PefGraphId = /*@__PURE__*/function (PefGraphId) {
        PefGraphId["VM_CONSUMPTION_IOPS"] = "com.vmware.vsan.perf.graph.cluster-domclient.iops";
        PefGraphId["VM_CONSUMPTION_THROUGHPUT"] = "com.vmware.vsan.perf.graph.cluster-domclient.throughput";
        PefGraphId["VM_CONSUMPTION_LATENCY"] = "com.vmware.vsan.perf.graph.cluster-domclient.latency";
        return PefGraphId;
      }({});
      /***/

    },

    /***/
    "Xqq1":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/model/chart-plot-line-selection.data.ts ***!
      \*************************************************************************************/

    /*! exports provided: ChartPlotLineSelectionData, ChartMetricSelectionData */

    /***/
    function Xqq1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartPlotLineSelectionData", function () {
        return ChartPlotLineSelectionData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartMetricSelectionData", function () {
        return ChartMetricSelectionData;
      });
      /* Copyright 2020 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Model holding information for the selected points on a plotLine
       */


      var ChartPlotLineSelectionData = /*#__PURE__*/_createClass(function ChartPlotLineSelectionData() {
        _classCallCheck(this, ChartPlotLineSelectionData);
      });

      var ChartMetricSelectionData = /*#__PURE__*/_createClass(function ChartMetricSelectionData() {
        _classCallCheck(this, ChartMetricSelectionData);
      });
      /***/

    },

    /***/
    "YGCj":
    /*!**********************************************************!*\
      !*** ./node_modules/highcharts/modules/accessibility.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function YGCj(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      Highcharts JS v8.2.0 (2020-08-20)
      Accessibility module
      (c) 2010-2019 Highsoft AS
      Author: Oystein Moseng
      License: www.highcharts.com/license
      */


      (function (a) {
        true && module.exports ? (a["default"] = a, module.exports = a) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "6n/F")], __WEBPACK_AMD_DEFINE_RESULT__ = function (r) {
          a(r);
          a.Highcharts = r;
          return a;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function (a) {
        function r(a, h, q, n) {
          a.hasOwnProperty(h) || (a[h] = n.apply(null, q));
        }

        a = a ? a._modules : {};
        r(a, "Accessibility/Utils/HTMLUtilities.js", [a["Core/Utilities.js"], a["Core/Globals.js"]], function (a, h) {
          function m(a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
          }

          var n = a.merge,
              p = h.win,
              l = p.document;
          return {
            addClass: function addClass(a, l) {
              a.classList ? a.classList.add(l) : 0 > a.className.indexOf(l) && (a.className += l);
            },
            escapeStringForHTML: m,
            getElement: function getElement(a) {
              return l.getElementById(a);
            },
            getFakeMouseEvent: function getFakeMouseEvent(a) {
              if ("function" === typeof p.MouseEvent) return new p.MouseEvent(a);

              if (l.createEvent) {
                var g = l.createEvent("MouseEvent");
                if (g.initMouseEvent) return g.initMouseEvent(a, !0, !0, p, "click" === a ? 1 : 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g;
              }

              return {
                type: a
              };
            },
            removeElement: function removeElement(a) {
              a && a.parentNode && a.parentNode.removeChild(a);
            },
            reverseChildNodes: function reverseChildNodes(a) {
              for (var l = a.childNodes.length; l--;) {
                a.appendChild(a.childNodes[l]);
              }
            },
            setElAttrs: function setElAttrs(a, l) {
              Object.keys(l).forEach(function (k) {
                var e = l[k];
                null === e ? a.removeAttribute(k) : (e = m("" + e), a.setAttribute(k, e));
              });
            },
            stripHTMLTagsFromString: function stripHTMLTagsFromString(a) {
              return "string" === typeof a ? a.replace(/<\/?[^>]+(>|$)/g, "") : a;
            },
            visuallyHideElement: function visuallyHideElement(a) {
              n(!0, a.style, {
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                clip: "rect(1px, 1px, 1px, 1px)",
                marginTop: "-3px",
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
                filter: "alpha(opacity=1)",
                opacity: "0.01"
              });
            }
          };
        });
        r(a, "Accessibility/Utils/ChartUtilities.js", [a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h) {
          function m(e) {
            if (e.points && e.points.length && e.points[0].graphic) return e.points[0].graphic.element;
          }

          function n(e) {
            var d = m(e);
            return d && d.parentNode || e.graph && e.graph.element || e.group && e.group.element;
          }

          function p(e, d) {
            d.setAttribute("aria-hidden", !1);
            d !== e.renderTo && d.parentNode && (Array.prototype.forEach.call(d.parentNode.childNodes, function (b) {
              b.hasAttribute("aria-hidden") || b.setAttribute("aria-hidden", !0);
            }), p(e, d.parentNode));
          }

          var l = a.stripHTMLTagsFromString,
              g = h.defined,
              x = h.find,
              k = h.fireEvent;
          return {
            getChartTitle: function getChartTitle(e) {
              return l(e.options.title.text || e.langFormat("accessibility.defaultChartTitle", {
                chart: e
              }));
            },
            getAxisDescription: function getAxisDescription(e) {
              return l(e && (e.userOptions && e.userOptions.accessibility && e.userOptions.accessibility.description || e.axisTitle && e.axisTitle.textStr || e.options.id || e.categories && "categories" || e.dateTime && "Time" || "values"));
            },
            getPointFromXY: function getPointFromXY(e, d, b) {
              for (var f = e.length, c; f--;) {
                if (c = x(e[f].points || [], function (c) {
                  return c.x === d && c.y === b;
                })) return c;
              }
            },
            getSeriesFirstPointElement: m,
            getSeriesFromName: function getSeriesFromName(e, d) {
              return d ? (e.series || []).filter(function (b) {
                return b.name === d;
              }) : e.series;
            },
            getSeriesA11yElement: n,
            unhideChartElementFromAT: p,
            hideSeriesFromAT: function hideSeriesFromAT(e) {
              (e = n(e)) && e.setAttribute("aria-hidden", !0);
            },
            scrollToPoint: function scrollToPoint(e) {
              var d = e.series.xAxis,
                  b = e.series.yAxis,
                  f = (null === d || void 0 === d ? 0 : d.scrollbar) ? d : b;

              if ((d = null === f || void 0 === f ? void 0 : f.scrollbar) && g(d.to) && g(d.from)) {
                b = d.to - d.from;

                if (g(f.dataMin) && g(f.dataMax)) {
                  var c = f.toPixels(f.dataMin),
                      w = f.toPixels(f.dataMax);
                  e = (f.toPixels(e["xAxis" === f.coll ? "x" : "y"] || 0) - c) / (w - c);
                } else e = 0;

                d.updatePosition(e - b / 2, e + b / 2);
                k(d, "changed", {
                  from: d.from,
                  to: d.to,
                  trigger: "scrollbar",
                  DOMEvent: null
                });
              }
            }
          };
        });
        r(a, "Accessibility/KeyboardNavigationHandler.js", [a["Core/Utilities.js"]], function (a) {
          function m(a, m) {
            this.chart = a;
            this.keyCodeMap = m.keyCodeMap || [];
            this.validate = m.validate;
            this.init = m.init;
            this.terminate = m.terminate;
            this.response = {
              success: 1,
              prev: 2,
              next: 3,
              noHandler: 4,
              fail: 5
            };
          }

          var q = a.find;
          m.prototype = {
            run: function run(a) {
              var m = a.which || a.keyCode,
                  l = this.response.noHandler,
                  g = q(this.keyCodeMap, function (a) {
                return -1 < a[0].indexOf(m);
              });
              g ? l = g[1].call(this, m, a) : 9 === m && (l = this.response[a.shiftKey ? "prev" : "next"]);
              return l;
            }
          };
          return m;
        });
        r(a, "Accessibility/Utils/EventProvider.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) {
          var m = h.addEvent;
          h = h.extend;

          var n = function n() {
            this.eventRemovers = [];
          };

          h(n.prototype, {
            addEvent: function addEvent() {
              var h = m.apply(a, arguments);
              this.eventRemovers.push(h);
              return h;
            },
            removeAddedEvents: function removeAddedEvents() {
              this.eventRemovers.forEach(function (a) {
                a();
              });
              this.eventRemovers = [];
            }
          });
          return n;
        });
        r(a, "Accessibility/Utils/DOMElementProvider.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q) {
          var m = a.win.document;
          a = h.extend;
          var p = q.removeElement;

          q = function q() {
            this.elements = [];
          };

          a(q.prototype, {
            createElement: function createElement() {
              var a = m.createElement.apply(m, arguments);
              this.elements.push(a);
              return a;
            },
            destroyCreatedElements: function destroyCreatedElements() {
              this.elements.forEach(function (a) {
                p(a);
              });
              this.elements = [];
            }
          });
          return q;
        });
        r(a, "Accessibility/AccessibilityComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Utils/DOMElementProvider.js"]], function (a, h, q, n, p, l) {
          function g() {}

          var m = a.win,
              k = m.document;
          a = h.extend;
          var e = h.fireEvent,
              d = h.merge,
              b = q.removeElement,
              f = q.getFakeMouseEvent,
              c = n.unhideChartElementFromAT;
          g.prototype = {
            initBase: function initBase(b) {
              this.chart = b;
              this.eventProvider = new p();
              this.domElementProvider = new l();
              this.keyCodes = {
                left: 37,
                right: 39,
                up: 38,
                down: 40,
                enter: 13,
                space: 32,
                esc: 27,
                tab: 9
              };
            },
            addEvent: function addEvent() {
              return this.eventProvider.addEvent.apply(this.eventProvider, arguments);
            },
            createElement: function createElement() {
              return this.domElementProvider.createElement.apply(this.domElementProvider, arguments);
            },
            fireEventOnWrappedOrUnwrappedElement: function fireEventOnWrappedOrUnwrappedElement(b, c) {
              var d = c.type;
              k.createEvent && (b.dispatchEvent || b.fireEvent) ? b.dispatchEvent ? b.dispatchEvent(c) : b.fireEvent(d, c) : e(b, d, c);
            },
            fakeClickEvent: function fakeClickEvent(b) {
              if (b) {
                var c = f("click");
                this.fireEventOnWrappedOrUnwrappedElement(b, c);
              }
            },
            addProxyGroup: function addProxyGroup(b) {
              this.createOrUpdateProxyContainer();
              var c = this.createElement("div");
              Object.keys(b || {}).forEach(function (d) {
                null !== b[d] && c.setAttribute(d, b[d]);
              });
              this.chart.a11yProxyContainer.appendChild(c);
              return c;
            },
            createOrUpdateProxyContainer: function createOrUpdateProxyContainer() {
              var b = this.chart,
                  c = b.renderer.box;
              b.a11yProxyContainer = b.a11yProxyContainer || this.createProxyContainerElement();
              c.nextSibling !== b.a11yProxyContainer && b.container.insertBefore(b.a11yProxyContainer, c.nextSibling);
            },
            createProxyContainerElement: function createProxyContainerElement() {
              var b = k.createElement("div");
              b.className = "highcharts-a11y-proxy-container";
              return b;
            },
            createProxyButton: function createProxyButton(b, f, a, e, k) {
              var w = b.element,
                  t = this.createElement("button"),
                  l = d({
                "aria-label": w.getAttribute("aria-label")
              }, a);
              Object.keys(l).forEach(function (b) {
                null !== l[b] && t.setAttribute(b, l[b]);
              });
              t.className = "highcharts-a11y-proxy-button";
              k && this.addEvent(t, "click", k);
              this.setProxyButtonStyle(t);
              this.updateProxyButtonPosition(t, e || b);
              this.proxyMouseEventsForButton(w, t);
              f.appendChild(t);
              l["aria-hidden"] || c(this.chart, t);
              return t;
            },
            getElementPosition: function getElementPosition(b) {
              var c = b.element;
              return (b = this.chart.renderTo) && c && c.getBoundingClientRect ? (c = c.getBoundingClientRect(), b = b.getBoundingClientRect(), {
                x: c.left - b.left,
                y: c.top - b.top,
                width: c.right - c.left,
                height: c.bottom - c.top
              }) : {
                x: 0,
                y: 0,
                width: 1,
                height: 1
              };
            },
            setProxyButtonStyle: function setProxyButtonStyle(b) {
              d(!0, b.style, {
                "border-width": 0,
                "background-color": "transparent",
                cursor: "pointer",
                outline: "none",
                opacity: .001,
                filter: "alpha(opacity=1)",
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
                zIndex: 999,
                overflow: "hidden",
                padding: 0,
                margin: 0,
                display: "block",
                position: "absolute"
              });
            },
            updateProxyButtonPosition: function updateProxyButtonPosition(b, c) {
              c = this.getElementPosition(c);
              d(!0, b.style, {
                width: (c.width || 1) + "px",
                height: (c.height || 1) + "px",
                left: (c.x || 0) + "px",
                top: (c.y || 0) + "px"
              });
            },
            proxyMouseEventsForButton: function proxyMouseEventsForButton(b, c) {
              var d = this;
              "click touchstart touchend touchcancel touchmove mouseover mouseenter mouseleave mouseout".split(" ").forEach(function (f) {
                var a = 0 === f.indexOf("touch");
                d.addEvent(c, f, function (c) {
                  var f = a ? d.cloneTouchEvent(c) : d.cloneMouseEvent(c);
                  b && d.fireEventOnWrappedOrUnwrappedElement(b, f);
                  c.stopPropagation();
                  c.preventDefault();
                });
              });
            },
            cloneMouseEvent: function cloneMouseEvent(b) {
              if ("function" === typeof m.MouseEvent) return new m.MouseEvent(b.type, b);

              if (k.createEvent) {
                var c = k.createEvent("MouseEvent");
                if (c.initMouseEvent) return c.initMouseEvent(b.type, b.bubbles, b.cancelable, b.view || m, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget), c;
              }

              return f(b.type);
            },
            cloneTouchEvent: function cloneTouchEvent(b) {
              var c = function c(b) {
                for (var c = [], d = 0; d < b.length; ++d) {
                  var f = b.item(d);
                  f && c.push(f);
                }

                return c;
              };

              if ("function" === typeof m.TouchEvent) return c = new m.TouchEvent(b.type, {
                touches: c(b.touches),
                targetTouches: c(b.targetTouches),
                changedTouches: c(b.changedTouches),
                ctrlKey: b.ctrlKey,
                shiftKey: b.shiftKey,
                altKey: b.altKey,
                metaKey: b.metaKey,
                bubbles: b.bubbles,
                cancelable: b.cancelable,
                composed: b.composed,
                detail: b.detail,
                view: b.view
              }), b.defaultPrevented && c.preventDefault(), c;
              c = this.cloneMouseEvent(b);
              c.touches = b.touches;
              c.changedTouches = b.changedTouches;
              c.targetTouches = b.targetTouches;
              return c;
            },
            destroyBase: function destroyBase() {
              b(this.chart.a11yProxyContainer);
              this.domElementProvider.destroyCreatedElements();
              this.eventProvider.removeAddedEvents();
            }
          };
          a(g.prototype, {
            init: function init() {},
            getKeyboardNavigation: function getKeyboardNavigation() {},
            onChartUpdate: function onChartUpdate() {},
            onChartRender: function onChartRender() {},
            destroy: function destroy() {}
          });
          return g;
        });
        r(a, "Accessibility/KeyboardNavigation.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/EventProvider.js"]], function (a, h, q, n) {
          function m(d, b) {
            this.init(d, b);
          }

          var l = a.doc,
              g = a.win,
              x = h.addEvent,
              k = h.fireEvent,
              e = q.getElement;
          x(l, "keydown", function (d) {
            27 === (d.which || d.keyCode) && a.charts && a.charts.forEach(function (b) {
              b && b.dismissPopupContent && b.dismissPopupContent();
            });
          });

          a.Chart.prototype.dismissPopupContent = function () {
            var d = this;
            k(this, "dismissPopupContent", {}, function () {
              d.tooltip && d.tooltip.hide(0);
              d.hideExportMenu();
            });
          };

          m.prototype = {
            init: function init(d, b) {
              var f = this,
                  c = this.eventProvider = new n();
              this.chart = d;
              this.components = b;
              this.modules = [];
              this.currentModuleIx = 0;
              this.update();
              c.addEvent(this.tabindexContainer, "keydown", function (b) {
                return f.onKeydown(b);
              });
              c.addEvent(this.tabindexContainer, "focus", function (b) {
                return f.onFocus(b);
              });
              c.addEvent(l, "mouseup", function () {
                return f.onMouseUp();
              });
              c.addEvent(d.renderTo, "mousedown", function () {
                f.isClickingChart = !0;
              });
              c.addEvent(d.renderTo, "mouseover", function () {
                f.pointerIsOverChart = !0;
              });
              c.addEvent(d.renderTo, "mouseout", function () {
                f.pointerIsOverChart = !1;
              });
              this.modules.length && this.modules[0].init(1);
            },
            update: function update(d) {
              var b = this.chart.options.accessibility;
              b = b && b.keyboardNavigation;
              var f = this.components;
              this.updateContainerTabindex();
              b && b.enabled && d && d.length ? (this.modules = d.reduce(function (b, d) {
                d = f[d].getKeyboardNavigation();
                return b.concat(d);
              }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
            },
            onFocus: function onFocus(d) {
              var b,
                  f = this.chart;
              d = d.relatedTarget && f.container.contains(d.relatedTarget);
              this.isClickingChart || d || (null === (b = this.modules[0]) || void 0 === b ? void 0 : b.init(1));
            },
            onMouseUp: function onMouseUp() {
              delete this.isClickingChart;

              if (!this.keyboardReset && !this.pointerIsOverChart) {
                var d = this.chart,
                    b = this.modules && this.modules[this.currentModuleIx || 0];
                b && b.terminate && b.terminate();
                d.focusElement && d.focusElement.removeFocusBorder();
                this.currentModuleIx = 0;
                this.keyboardReset = !0;
              }
            },
            onKeydown: function onKeydown(d) {
              d = d || g.event;
              var b,
                  f = this.modules && this.modules.length && this.modules[this.currentModuleIx];
              this.keyboardReset = !1;

              if (f) {
                var c = f.run(d);
                c === f.response.success ? b = !0 : c === f.response.prev ? b = this.prev() : c === f.response.next && (b = this.next());
                b && (d.preventDefault(), d.stopPropagation());
              }
            },
            prev: function prev() {
              return this.move(-1);
            },
            next: function next() {
              return this.move(1);
            },
            move: function move(d) {
              var b = this.modules && this.modules[this.currentModuleIx];
              b && b.terminate && b.terminate(d);
              this.chart.focusElement && this.chart.focusElement.removeFocusBorder();
              this.currentModuleIx += d;

              if (b = this.modules && this.modules[this.currentModuleIx]) {
                if (b.validate && !b.validate()) return this.move(d);
                if (b.init) return b.init(d), !0;
              }

              this.currentModuleIx = 0;
              0 < d ? (this.exiting = !0, this.exitAnchor.focus()) : this.tabindexContainer.focus();
              return !1;
            },
            updateExitAnchor: function updateExitAnchor() {
              var d = e("highcharts-end-of-chart-marker-" + this.chart.index);
              this.removeExitAnchor();
              d ? (this.makeElementAnExitAnchor(d), this.exitAnchor = d) : this.createExitAnchor();
            },
            updateContainerTabindex: function updateContainerTabindex() {
              var d = this.chart.options.accessibility;
              d = d && d.keyboardNavigation;
              d = !(d && !1 === d.enabled);
              var b = this.chart,
                  f = b.container;
              b.renderTo.hasAttribute("tabindex") && (f.removeAttribute("tabindex"), f = b.renderTo);
              this.tabindexContainer = f;
              var c = f.getAttribute("tabindex");
              d && !c ? f.setAttribute("tabindex", "0") : d || b.container.removeAttribute("tabindex");
            },
            makeElementAnExitAnchor: function makeElementAnExitAnchor(d) {
              var b = this.tabindexContainer.getAttribute("tabindex") || 0;
              d.setAttribute("class", "highcharts-exit-anchor");
              d.setAttribute("tabindex", b);
              d.setAttribute("aria-hidden", !1);
              this.addExitAnchorEventsToEl(d);
            },
            createExitAnchor: function createExitAnchor() {
              var d = this.chart,
                  b = this.exitAnchor = l.createElement("div");
              d.renderTo.appendChild(b);
              this.makeElementAnExitAnchor(b);
            },
            removeExitAnchor: function removeExitAnchor() {
              this.exitAnchor && this.exitAnchor.parentNode && (this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor);
            },
            addExitAnchorEventsToEl: function addExitAnchorEventsToEl(d) {
              var b = this.chart,
                  f = this;
              this.eventProvider.addEvent(d, "focus", function (c) {
                c = c || g.event;
                c.relatedTarget && b.container.contains(c.relatedTarget) || f.exiting ? f.exiting = !1 : (f.tabindexContainer.focus(), c.preventDefault(), f.modules && f.modules.length && (f.currentModuleIx = f.modules.length - 1, (c = f.modules[f.currentModuleIx]) && c.validate && !c.validate() ? f.prev() : c && c.init(-1)));
              });
            },
            destroy: function destroy() {
              this.removeExitAnchor();
              this.eventProvider.removeAddedEvents();
              this.chart.container.removeAttribute("tabindex");
            }
          };
          return m;
        });
        r(a, "Accessibility/Components/LegendComponent.js", [a["Core/Globals.js"], a["Core/Legend.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
          function g(b) {
            var c = b.legend && b.legend.allItems,
                d = b.options.legend.accessibility || {};
            return !(!c || !c.length || b.colorAxis && b.colorAxis.length || !1 === d.enabled);
          }

          var m = q.addEvent,
              k = q.extend,
              e = q.find,
              d = q.fireEvent,
              b = l.stripHTMLTagsFromString,
              f = l.removeElement;

          a.Chart.prototype.highlightLegendItem = function (b) {
            var c = this.legend.allItems,
                a = this.highlightedLegendItemIx;

            if (c[b]) {
              c[a] && d(c[a].legendGroup.element, "mouseout");
              a = this.legend;
              var f = a.allItems[b].pageIx,
                  e = a.currentPage;
              "undefined" !== typeof f && f + 1 !== e && a.scroll(1 + f - e);
              this.setFocusToElement(c[b].legendItem, c[b].a11yProxyElement);
              d(c[b].legendGroup.element, "mouseover");
              return !0;
            }

            return !1;
          };

          m(h, "afterColorizeItem", function (b) {
            var c = b.item;
            this.chart.options.accessibility.enabled && c && c.a11yProxyElement && c.a11yProxyElement.setAttribute("aria-pressed", b.visible ? "false" : "true");
          });

          a = function a() {};

          a.prototype = new n();
          k(a.prototype, {
            init: function init() {
              var b = this;
              this.proxyElementsList = [];
              this.recreateProxies();
              this.addEvent(h, "afterScroll", function () {
                this.chart === b.chart && (b.updateProxiesPositions(), b.updateLegendItemProxyVisibility(), this.chart.highlightLegendItem(b.highlightedLegendItemIx));
              });
              this.addEvent(h, "afterPositionItem", function (c) {
                this.chart === b.chart && this.chart.renderer && b.updateProxyPositionForItem(c.item);
              });
            },
            updateLegendItemProxyVisibility: function updateLegendItemProxyVisibility() {
              var b = this.chart.legend,
                  d = b.currentPage || 1,
                  a = b.clipHeight || 0;
              (b.allItems || []).forEach(function (c) {
                var f = c.pageIx || 0,
                    e = c._legendItemPos ? c._legendItemPos[1] : 0,
                    k = c.legendItem ? Math.round(c.legendItem.getBBox().height) : 0;
                f = e + k - b.pages[f] > a || f !== d - 1;
                c.a11yProxyElement && (c.a11yProxyElement.style.visibility = f ? "hidden" : "visible");
              });
            },
            onChartRender: function onChartRender() {
              g(this.chart) ? this.updateProxiesPositions() : this.removeProxies();
            },
            updateProxiesPositions: function updateProxiesPositions() {
              for (var b = 0, d = this.proxyElementsList; b < d.length; b++) {
                var a = d[b];
                this.updateProxyButtonPosition(a.element, a.posElement);
              }
            },
            updateProxyPositionForItem: function updateProxyPositionForItem(b) {
              var c = e(this.proxyElementsList, function (c) {
                return c.item === b;
              });
              c && this.updateProxyButtonPosition(c.element, c.posElement);
            },
            recreateProxies: function recreateProxies() {
              this.removeProxies();
              g(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility());
            },
            removeProxies: function removeProxies() {
              f(this.legendProxyGroup);
              this.proxyElementsList = [];
            },
            addLegendProxyGroup: function addLegendProxyGroup() {
              var b = this.chart.options.accessibility,
                  d = this.chart.langFormat("accessibility.legend.legendLabel", {});
              this.legendProxyGroup = this.addProxyGroup({
                "aria-label": d,
                role: "all" === b.landmarkVerbosity ? "region" : null
              });
            },
            proxyLegendItems: function proxyLegendItems() {
              var b = this;
              (this.chart.legend && this.chart.legend.allItems || []).forEach(function (c) {
                c.legendItem && c.legendItem.element && b.proxyLegendItem(c);
              });
            },
            proxyLegendItem: function proxyLegendItem(c) {
              if (c.legendItem && c.legendGroup) {
                var d = this.chart.langFormat("accessibility.legend.legendItem", {
                  chart: this.chart,
                  itemName: b(c.name)
                }),
                    a = c.legendGroup.div ? c.legendItem : c.legendGroup;
                c.a11yProxyElement = this.createProxyButton(c.legendItem, this.legendProxyGroup, {
                  tabindex: -1,
                  "aria-pressed": !c.visible,
                  "aria-label": d
                }, a);
                this.proxyElementsList.push({
                  item: c,
                  element: c.a11yProxyElement,
                  posElement: a
                });
              }
            },
            getKeyboardNavigation: function getKeyboardNavigation() {
              var b = this.keyCodes,
                  d = this;
              return new p(this.chart, {
                keyCodeMap: [[[b.left, b.right, b.up, b.down], function (b) {
                  return d.onKbdArrowKey(this, b);
                }], [[b.enter, b.space], function () {
                  return d.onKbdClick(this);
                }]],
                validate: function validate() {
                  return d.shouldHaveLegendNavigation();
                },
                init: function init(b) {
                  return d.onKbdNavigationInit(b);
                }
              });
            },
            onKbdArrowKey: function onKbdArrowKey(b, d) {
              var c = this.keyCodes,
                  a = b.response,
                  f = this.chart,
                  e = f.options.accessibility,
                  k = f.legend.allItems.length;
              d = d === c.left || d === c.up ? -1 : 1;
              return f.highlightLegendItem(this.highlightedLegendItemIx + d) ? (this.highlightedLegendItemIx += d, a.success) : 1 < k && e.keyboardNavigation.wrapAround ? (b.init(d), a.success) : a[0 < d ? "next" : "prev"];
            },
            onKbdClick: function onKbdClick(b) {
              var c = this.chart.legend.allItems[this.highlightedLegendItemIx];
              c && c.a11yProxyElement && d(c.a11yProxyElement, "click");
              return b.response.success;
            },
            shouldHaveLegendNavigation: function shouldHaveLegendNavigation() {
              var b = this.chart,
                  d = b.colorAxis && b.colorAxis.length,
                  a = (b.options.legend || {}).accessibility || {};
              return !!(b.legend && b.legend.allItems && b.legend.display && !d && a.enabled && a.keyboardNavigation && a.keyboardNavigation.enabled);
            },
            onKbdNavigationInit: function onKbdNavigationInit(b) {
              var c = this.chart,
                  d = c.legend.allItems.length - 1;
              b = 0 < b ? 0 : d;
              c.highlightLegendItem(b);
              this.highlightedLegendItemIx = b;
            }
          });
          return a;
        });
        r(a, "Accessibility/Components/MenuComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
          function g(d) {
            return d.exportSVGElements && d.exportSVGElements[0];
          }

          h = h.extend;
          var m = p.unhideChartElementFromAT,
              k = l.removeElement,
              e = l.getFakeMouseEvent;

          a.Chart.prototype.showExportMenu = function () {
            var d = g(this);
            if (d && (d = d.element, d.onclick)) d.onclick(e("click"));
          };

          a.Chart.prototype.hideExportMenu = function () {
            var d = this.exportDivElements;
            d && this.exportContextMenu && (d.forEach(function (b) {
              if ("highcharts-menu-item" === b.className && b.onmouseout) b.onmouseout(e("mouseout"));
            }), this.highlightedExportItemIx = 0, this.exportContextMenu.hideMenu(), this.container.focus());
          };

          a.Chart.prototype.highlightExportItem = function (d) {
            var b = this.exportDivElements && this.exportDivElements[d],
                a = this.exportDivElements && this.exportDivElements[this.highlightedExportItemIx];

            if (b && "LI" === b.tagName && (!b.children || !b.children.length)) {
              var c = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
              b.focus && c && b.focus();
              if (a && a.onmouseout) a.onmouseout(e("mouseout"));
              if (b.onmouseover) b.onmouseover(e("mouseover"));
              this.highlightedExportItemIx = d;
              return !0;
            }

            return !1;
          };

          a.Chart.prototype.highlightLastExportItem = function () {
            var d;
            if (this.exportDivElements) for (d = this.exportDivElements.length; d--;) {
              if (this.highlightExportItem(d)) return !0;
            }
            return !1;
          };

          a = function a() {};

          a.prototype = new q();
          h(a.prototype, {
            init: function init() {
              var d = this.chart,
                  b = this;
              this.addEvent(d, "exportMenuShown", function () {
                b.onMenuShown();
              });
              this.addEvent(d, "exportMenuHidden", function () {
                b.onMenuHidden();
              });
            },
            onMenuHidden: function onMenuHidden() {
              var d = this.chart.exportContextMenu;
              d && d.setAttribute("aria-hidden", "true");
              this.isExportMenuShown = !1;
              this.setExportButtonExpandedState("false");
            },
            onMenuShown: function onMenuShown() {
              var d = this.chart,
                  b = d.exportContextMenu;
              b && (this.addAccessibleContextMenuAttribs(), m(d, b));
              this.isExportMenuShown = !0;
              this.setExportButtonExpandedState("true");
            },
            setExportButtonExpandedState: function setExportButtonExpandedState(d) {
              var b = this.exportButtonProxy;
              b && b.setAttribute("aria-expanded", d);
            },
            onChartRender: function onChartRender() {
              var d = this.chart,
                  b = d.options.accessibility;
              k(this.exportProxyGroup);
              var a = d.options.exporting,
                  c = g(d);
              a && !1 !== a.enabled && a.accessibility && a.accessibility.enabled && c && c.element && (this.exportProxyGroup = this.addProxyGroup("all" === b.landmarkVerbosity ? {
                "aria-label": d.langFormat("accessibility.exporting.exportRegionLabel", {
                  chart: d
                }),
                role: "region"
              } : {}), b = g(this.chart), this.exportButtonProxy = this.createProxyButton(b, this.exportProxyGroup, {
                "aria-label": d.langFormat("accessibility.exporting.menuButtonLabel", {
                  chart: d
                }),
                "aria-expanded": "false"
              }));
            },
            addAccessibleContextMenuAttribs: function addAccessibleContextMenuAttribs() {
              var d = this.chart,
                  b = d.exportDivElements;
              b && b.length && (b.forEach(function (b) {
                "LI" !== b.tagName || b.children && b.children.length ? b.setAttribute("aria-hidden", "true") : b.setAttribute("tabindex", -1);
              }), b = b[0].parentNode, b.removeAttribute("aria-hidden"), b.setAttribute("aria-label", d.langFormat("accessibility.exporting.chartMenuLabel", {
                chart: d
              })));
            },
            getKeyboardNavigation: function getKeyboardNavigation() {
              var d = this.keyCodes,
                  b = this.chart,
                  a = this;
              return new n(b, {
                keyCodeMap: [[[d.left, d.up], function () {
                  return a.onKbdPrevious(this);
                }], [[d.right, d.down], function () {
                  return a.onKbdNext(this);
                }], [[d.enter, d.space], function () {
                  return a.onKbdClick(this);
                }]],
                validate: function validate() {
                  return b.exportChart && !1 !== b.options.exporting.enabled && !1 !== b.options.exporting.accessibility.enabled;
                },
                init: function init() {
                  var c = a.exportButtonProxy,
                      d = b.exportingGroup;
                  d && c && b.setFocusToElement(d, c);
                },
                terminate: function terminate() {
                  b.hideExportMenu();
                }
              });
            },
            onKbdPrevious: function onKbdPrevious(d) {
              var b = this.chart,
                  a = b.options.accessibility;
              d = d.response;

              for (var c = b.highlightedExportItemIx || 0; c--;) {
                if (b.highlightExportItem(c)) return d.success;
              }

              return a.keyboardNavigation.wrapAround ? (b.highlightLastExportItem(), d.success) : d.prev;
            },
            onKbdNext: function onKbdNext(d) {
              var b = this.chart,
                  a = b.options.accessibility;
              d = d.response;

              for (var c = (b.highlightedExportItemIx || 0) + 1; c < b.exportDivElements.length; ++c) {
                if (b.highlightExportItem(c)) return d.success;
              }

              return a.keyboardNavigation.wrapAround ? (b.highlightExportItem(0), d.success) : d.next;
            },
            onKbdClick: function onKbdClick(d) {
              var b = this.chart,
                  a = b.exportDivElements[b.highlightedExportItemIx],
                  c = g(b).element;
              this.isExportMenuShown ? this.fakeClickEvent(a) : (this.fakeClickEvent(c), b.highlightExportItem(0));
              return d.response.success;
            }
          });
          return a;
        });
        r(a, "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js", [a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Utils/ChartUtilities.js"]], function (a, h, q, n, p, l, g) {
          function m(b) {
            var c = b.index,
                d = b.series.points,
                a = d.length;
            if (d[c] !== b) for (; a--;) {
              if (d[a] === b) return a;
            } else return c;
          }

          function k(b) {
            var c = b.chart.options.accessibility.keyboardNavigation.seriesNavigation,
                d = b.options.accessibility || {},
                a = d.keyboardNavigation;
            return a && !1 === a.enabled || !1 === d.enabled || !1 === b.options.enableMouseTracking || !b.visible || c.pointNavigationEnabledThreshold && c.pointNavigationEnabledThreshold <= b.points.length;
          }

          function e(b) {
            var c = b.series.chart.options.accessibility;
            return b.isNull && c.keyboardNavigation.seriesNavigation.skipNullPoints || !1 === b.visible || k(b.series);
          }

          function d(b, d, a, e) {
            var f = Infinity,
                k = d.points.length,
                l = function l(b) {
              return !(c(b.plotX) && c(b.plotY));
            };

            if (!l(b)) {
              for (; k--;) {
                var t = d.points[k];

                if (!l(t) && (t = (b.plotX - t.plotX) * (b.plotX - t.plotX) * (a || 1) + (b.plotY - t.plotY) * (b.plotY - t.plotY) * (e || 1), t < f)) {
                  f = t;
                  var g = k;
                }
              }

              return c(g) ? d.points[g] : void 0;
            }
          }

          function b(b) {
            var c = !1;
            delete b.highlightedPoint;
            return c = b.series.reduce(function (b, c) {
              return b || c.highlightFirstValidPoint();
            }, !1);
          }

          function f(b, c) {
            this.keyCodes = c;
            this.chart = b;
          }

          var c = n.defined;
          n = n.extend;
          var w = g.getPointFromXY,
              A = g.getSeriesFromName,
              z = g.scrollToPoint;
          h.Series.prototype.keyboardMoveVertical = !0;
          ["column", "pie"].forEach(function (b) {
            h.seriesTypes[b] && (h.seriesTypes[b].prototype.keyboardMoveVertical = !1);
          });

          q.prototype.highlight = function () {
            var b = this.series.chart;
            if (this.isNull) b.tooltip && b.tooltip.hide(0);else this.onMouseOver();
            z(this);
            this.graphic && b.setFocusToElement(this.graphic);
            b.highlightedPoint = this;
            return this;
          };

          a.prototype.highlightAdjacentPoint = function (b) {
            var c = this.series,
                d = this.highlightedPoint,
                a = d && m(d) || 0,
                f = d && d.series.points,
                v = this.series && this.series[this.series.length - 1];
            v = v && v.points && v.points[v.points.length - 1];
            if (!c[0] || !c[0].points) return !1;

            if (d) {
              if (c = c[d.series.index + (b ? 1 : -1)], a = f[a + (b ? 1 : -1)], !a && c && (a = c.points[b ? 0 : c.points.length - 1]), !a) return !1;
            } else a = b ? c[0].points[0] : v;

            return e(a) ? (c = a.series, k(c) ? this.highlightedPoint = b ? c.points[c.points.length - 1] : c.points[0] : this.highlightedPoint = a, this.highlightAdjacentPoint(b)) : a.highlight();
          };

          h.Series.prototype.highlightFirstValidPoint = function () {
            var b = this.chart.highlightedPoint,
                c = (b && b.series) === this ? m(b) : 0;
            b = this.points;
            var d = b.length;

            if (b && d) {
              for (var a = c; a < d; ++a) {
                if (!e(b[a])) return b[a].highlight();
              }

              for (; 0 <= c; --c) {
                if (!e(b[c])) return b[c].highlight();
              }
            }

            return !1;
          };

          a.prototype.highlightAdjacentSeries = function (b) {
            var c,
                a = this.highlightedPoint;
            var f = (c = this.series && this.series[this.series.length - 1]) && c.points && c.points[c.points.length - 1];
            if (!this.highlightedPoint) return c = b ? this.series && this.series[0] : c, (f = b ? c && c.points && c.points[0] : f) ? f.highlight() : !1;
            c = this.series[a.series.index + (b ? -1 : 1)];
            if (!c) return !1;
            f = d(a, c, 4);
            if (!f) return !1;
            if (k(c)) return f.highlight(), b = this.highlightAdjacentSeries(b), b ? b : (a.highlight(), !1);
            f.highlight();
            return f.series.highlightFirstValidPoint();
          };

          a.prototype.highlightAdjacentPointVertical = function (b) {
            var a = this.highlightedPoint,
                d = Infinity,
                f;
            if (!c(a.plotX) || !c(a.plotY)) return !1;
            this.series.forEach(function (l) {
              k(l) || l.points.forEach(function (k) {
                if (c(k.plotY) && c(k.plotX) && k !== a) {
                  var v = k.plotY - a.plotY,
                      g = Math.abs(k.plotX - a.plotX);
                  g = Math.abs(v) * Math.abs(v) + g * g * 4;
                  l.yAxis && l.yAxis.reversed && (v *= -1);
                  !(0 >= v && b || 0 <= v && !b || 5 > g || e(k)) && g < d && (d = g, f = k);
                }
              });
            });
            return f ? f.highlight() : !1;
          };

          n(f.prototype, {
            init: function init() {
              var c = this,
                  a = this.chart,
                  d = this.eventProvider = new l();
              d.addEvent(h.Series, "destroy", function () {
                return c.onSeriesDestroy(this);
              });
              d.addEvent(a, "afterDrilldown", function () {
                b(this);
                this.focusElement && this.focusElement.removeFocusBorder();
              });
              d.addEvent(a, "drilldown", function (b) {
                b = b.point;
                var a = b.series;
                c.lastDrilledDownPoint = {
                  x: b.x,
                  y: b.y,
                  seriesName: a ? a.name : ""
                };
              });
              d.addEvent(a, "drillupall", function () {
                setTimeout(function () {
                  c.onDrillupAll();
                }, 10);
              });
            },
            onDrillupAll: function onDrillupAll() {
              var b = this.lastDrilledDownPoint,
                  a = this.chart,
                  d = b && A(a, b.seriesName),
                  f;
              b && d && c(b.x) && c(b.y) && (f = w(d, b.x, b.y));
              a.container && a.container.focus();
              f && f.highlight && f.highlight();
              a.focusElement && a.focusElement.removeFocusBorder();
            },
            getKeyboardNavigationHandler: function getKeyboardNavigationHandler() {
              var b = this,
                  c = this.keyCodes,
                  a = this.chart,
                  d = a.inverted;
              return new p(a, {
                keyCodeMap: [[d ? [c.up, c.down] : [c.left, c.right], function (c) {
                  return b.onKbdSideways(this, c);
                }], [d ? [c.left, c.right] : [c.up, c.down], function (c) {
                  return b.onKbdVertical(this, c);
                }], [[c.enter, c.space], function () {
                  a.highlightedPoint && a.highlightedPoint.firePointEvent("click");
                  return this.response.success;
                }]],
                init: function init(c) {
                  return b.onHandlerInit(this, c);
                },
                terminate: function terminate() {
                  return b.onHandlerTerminate();
                }
              });
            },
            onKbdSideways: function onKbdSideways(b, c) {
              var a = this.keyCodes;
              return this.attemptHighlightAdjacentPoint(b, c === a.right || c === a.down);
            },
            onKbdVertical: function onKbdVertical(b, c) {
              var a = this.chart,
                  d = this.keyCodes;
              c = c === d.down || c === d.right;
              d = a.options.accessibility.keyboardNavigation.seriesNavigation;
              if (d.mode && "serialize" === d.mode) return this.attemptHighlightAdjacentPoint(b, c);
              a[a.highlightedPoint && a.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](c);
              return b.response.success;
            },
            onHandlerInit: function onHandlerInit(c, a) {
              var d = this.chart;
              if (0 < a) b(d);else {
                a = d.series.length;

                for (var f; a-- && !(d.highlightedPoint = d.series[a].points[d.series[a].points.length - 1], f = d.series[a].highlightFirstValidPoint());) {
                  ;
                }
              }
              return c.response.success;
            },
            onHandlerTerminate: function onHandlerTerminate() {
              var b,
                  c,
                  a = this.chart,
                  d = a.highlightedPoint;
              null === (b = a.tooltip) || void 0 === b ? void 0 : b.hide(0);
              null === (c = null === d || void 0 === d ? void 0 : d.onMouseOut) || void 0 === c ? void 0 : c.call(d);
              delete a.highlightedPoint;
            },
            attemptHighlightAdjacentPoint: function attemptHighlightAdjacentPoint(b, c) {
              var a = this.chart,
                  d = a.options.accessibility.keyboardNavigation.wrapAround;
              return a.highlightAdjacentPoint(c) ? b.response.success : d ? b.init(c ? 1 : -1) : b.response[c ? "next" : "prev"];
            },
            onSeriesDestroy: function onSeriesDestroy(b) {
              var c = this.chart;
              c.highlightedPoint && c.highlightedPoint.series === b && (delete c.highlightedPoint, c.focusElement && c.focusElement.removeFocusBorder());
            },
            destroy: function destroy() {
              this.eventProvider.removeAddedEvents();
            }
          });
          return f;
        });
        r(a, "Accessibility/Components/AnnotationsA11y.js", [a["Accessibility/Utils/HTMLUtilities.js"]], function (a) {
          function m(a) {
            return (a.annotations || []).reduce(function (a, e) {
              var d;
              !1 !== (null === (d = e.options) || void 0 === d ? void 0 : d.visible) && (a = a.concat(e.labels));
              return a;
            }, []);
          }

          function q(a) {
            var k,
                e,
                d,
                b,
                f = null === (e = null === (k = a.options) || void 0 === k ? void 0 : k.accessibility) || void 0 === e ? void 0 : e.description;
            return f ? f : (null === (b = null === (d = a.graphic) || void 0 === d ? void 0 : d.text) || void 0 === b ? void 0 : b.textStr) || "";
          }

          function n(a) {
            var k,
                e,
                d = null === (e = null === (k = a.options) || void 0 === k ? void 0 : k.accessibility) || void 0 === e ? void 0 : e.description;
            if (d) return d;
            k = a.chart;
            e = q(a);
            d = a.points.filter(function (b) {
              return !!b.graphic;
            }).map(function (b) {
              var c, a;

              if (!(a = null === (c = null === b || void 0 === b ? void 0 : b.accessibility) || void 0 === c ? void 0 : c.valueDescription)) {
                var d, f;
                a = (null === (f = null === (d = null === b || void 0 === b ? void 0 : b.graphic) || void 0 === d ? void 0 : d.element) || void 0 === f ? void 0 : f.getAttribute("aria-label")) || "";
              }

              b = (null === b || void 0 === b ? void 0 : b.series.name) || "";
              return (b ? b + ", " : "") + "data point " + a;
            }).filter(function (b) {
              return !!b;
            });
            var b = d.length;
            a = "accessibility.screenReaderSection.annotations.description" + (1 < b ? "MultiplePoints" : b ? "SinglePoint" : "NoPoints");
            e = {
              annotationText: e,
              numPoints: b,
              annotationPoint: d[0],
              additionalAnnotationPoints: d.slice(1)
            };
            return k.langFormat(a, e);
          }

          function p(a) {
            return m(a).map(function (a) {
              return (a = l(g(n(a)))) ? "<li>" + a + "</li>" : "";
            });
          }

          var l = a.escapeStringForHTML,
              g = a.stripHTMLTagsFromString;
          return {
            getAnnotationsInfoHTML: function getAnnotationsInfoHTML(a) {
              var k = a.annotations;
              return k && k.length ? "<ul>" + p(a).join(" ") + "</ul>" : "";
            },
            getAnnotationLabelDescription: n,
            getAnnotationListItems: p,
            getPointAnnotationTexts: function getPointAnnotationTexts(a) {
              var k = m(a.series.chart).filter(function (e) {
                return -1 < e.points.indexOf(a);
              });
              return k.length ? k.map(function (a) {
                return "" + q(a);
              }) : [];
            }
          };
        });
        r(a, "Accessibility/Components/SeriesComponent/SeriesDescriber.js", [a["Core/Utilities.js"], a["Accessibility/Components/AnnotationsA11y.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Core/Tooltip.js"]], function (a, h, q, n, p) {
          function l(b) {
            var c = b.index;
            return b.series && b.series.data && D(c) ? C(b.series.data, function (b) {
              return !!(b && "undefined" !== typeof b.index && b.index > c && b.graphic && b.graphic.element);
            }) || null : null;
          }

          function g(b) {
            var c = b.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
            return !!(!1 !== c && b.points && b.points.length >= c);
          }

          function m(b) {
            var c = b.options.accessibility || {};
            return !g(b) && !c.exposeAsGroupOnly;
          }

          function k(b) {
            var c = b.chart.options.accessibility.keyboardNavigation.seriesNavigation;
            return !(!b.points || !(b.points.length < c.pointNavigationEnabledThreshold || !1 === c.pointNavigationEnabledThreshold));
          }

          function e(b, c) {
            var a = b.series.chart,
                d = a.options.accessibility.point || {};
            b = b.series.tooltipOptions || {};
            a = a.options.lang;
            return v(c) ? I(c, d.valueDecimals || b.valueDecimals || -1, a.decimalPoint, a.accessibility.thousandsSep || a.thousandsSep) : c;
          }

          function d(b) {
            var c = (b.options.accessibility || {}).description;
            return c && b.chart.langFormat("accessibility.series.description", {
              description: c,
              series: b
            }) || "";
          }

          function b(b, c) {
            return b.chart.langFormat("accessibility.series." + c + "Description", {
              name: J(b[c]),
              series: b
            });
          }

          function f(b) {
            var c = b.series,
                a = c.chart,
                d = a.options.accessibility.point || {};
            if (c.xAxis && c.xAxis.dateTime) return c = p.prototype.getXDateFormat.call({
              getDateFormat: p.prototype.getDateFormat,
              chart: a
            }, b, a.options.tooltip, c.xAxis), d = d.dateFormatter && d.dateFormatter(b) || d.dateFormat || c, a.time.dateFormat(d, b.x, void 0);
          }

          function c(b) {
            var c = f(b),
                a = (b.series.xAxis || {}).categories && D(b.category) && ("" + b.category).replace("<br/>", " "),
                d = b.id && 0 > b.id.indexOf("highcharts-"),
                e = "x, " + b.x;
            return b.name || c || a || (d ? b.id : e);
          }

          function w(b, c, a) {
            var d = c || "",
                f = a || "";
            return b.series.pointArrayMap.reduce(function (c, a) {
              c += c.length ? ", " : "";
              var k = e(b, y(b[a], b.options[a]));
              return c + (a + ": " + d + k + f);
            }, "");
          }

          function A(b) {
            var c = b.series,
                a = c.chart.options.accessibility.point || {},
                d = c.tooltipOptions || {},
                f = a.valuePrefix || d.valuePrefix || "";
            a = a.valueSuffix || d.valueSuffix || "";
            d = e(b, b["undefined" !== typeof b.value ? "value" : "y"]);
            return b.isNull ? c.chart.langFormat("accessibility.series.nullPointValue", {
              point: b
            }) : c.pointArrayMap ? w(b, f, a) : f + d + a;
          }

          function z(b) {
            var a = b.series,
                d = a.chart,
                f = d.options.accessibility.point.valueDescriptionFormat,
                e = (a = y(a.xAxis && a.xAxis.options.accessibility && a.xAxis.options.accessibility.enabled, !d.angular)) ? c(b) : "";
            b = {
              point: b,
              index: D(b.index) ? b.index + 1 : "",
              xDescription: e,
              value: A(b),
              separator: a ? ", " : ""
            };
            return u(f, b, d);
          }

          function t(b) {
            var c = b.series,
                a = c.chart,
                d = z(b),
                f = b.options && b.options.accessibility && b.options.accessibility.description;
            f = f ? " " + f : "";
            c = 1 < a.series.length && c.name ? " " + c.name + "." : "";
            a = b.series.chart;
            var e = H(b),
                k = {
              point: b,
              annotations: e
            };
            a = e.length ? a.langFormat("accessibility.series.pointAnnotationsDescription", k) : "";
            b.accessibility = b.accessibility || {};
            b.accessibility.valueDescription = d;
            return d + f + c + (a ? " " + a : "");
          }

          function r(b) {
            var c = m(b),
                a = k(b);
            (c || a) && b.points.forEach(function (b) {
              var a;

              if (!(a = b.graphic && b.graphic.element) && (a = b.series && b.series.is("sunburst"), a = b.isNull && !a)) {
                var d = b.series,
                    f = l(b);
                d = (a = f && f.graphic) ? a.parentGroup : d.graph || d.group;
                f = f ? {
                  x: y(b.plotX, f.plotX, 0),
                  y: y(b.plotY, f.plotY, 0)
                } : {
                  x: y(b.plotX, 0),
                  y: y(b.plotY, 0)
                };
                f = b.series.chart.renderer.rect(f.x, f.y, 1, 1);
                f.attr({
                  "class": "highcharts-a11y-dummy-point",
                  fill: "none",
                  opacity: 0,
                  "fill-opacity": 0,
                  "stroke-opacity": 0
                });
                d && d.element ? (b.graphic = f, b.hasDummyGraphic = !0, f.add(d), d.element.insertBefore(f.element, a ? a.element : null), a = f.element) : a = void 0;
              }

              a && (a.setAttribute("tabindex", "-1"), a.style.outline = "0", c ? (f = b.series, d = f.chart.options.accessibility.point || {}, f = f.options.accessibility || {}, b = F(G(f.pointDescriptionFormatter && f.pointDescriptionFormatter(b) || d.descriptionFormatter && d.descriptionFormatter(b) || t(b))), a.setAttribute("role", "img"), a.setAttribute("aria-label", b)) : a.setAttribute("aria-hidden", !0));
            });
          }

          function B(a) {
            var c = a.chart,
                f = c.types || [],
                e = d(a),
                k = function k(b) {
              return c[b] && 1 < c[b].length && a[b];
            },
                l = b(a, "xAxis"),
                v = b(a, "yAxis"),
                g = {
              name: a.name || "",
              ix: a.index + 1,
              numSeries: c.series && c.series.length,
              numPoints: a.points && a.points.length,
              series: a
            };

            f = 1 < f.length ? "Combination" : "";
            return (c.langFormat("accessibility.series.summary." + a.type + f, g) || c.langFormat("accessibility.series.summary.default" + f, g)) + (e ? " " + e : "") + (k("yAxis") ? " " + v : "") + (k("xAxis") ? " " + l : "");
          }

          var C = a.find,
              u = a.format,
              v = a.isNumber,
              I = a.numberFormat,
              y = a.pick,
              D = a.defined,
              H = h.getPointAnnotationTexts,
              F = q.escapeStringForHTML,
              K = q.reverseChildNodes,
              G = q.stripHTMLTagsFromString,
              J = n.getAxisDescription,
              L = n.getSeriesFirstPointElement,
              M = n.getSeriesA11yElement,
              N = n.unhideChartElementFromAT;
          return {
            describeSeries: function describeSeries(b) {
              var a = b.chart,
                  c = L(b),
                  d = M(b),
                  f = a.is3d && a.is3d();

              if (d) {
                d.lastChild !== c || f || K(d);
                r(b);
                N(a, d);
                f = b.chart;
                a = f.options.chart || {};
                c = 1 < f.series.length;
                f = f.options.accessibility.series.describeSingleSeries;
                var e = (b.options.accessibility || {}).exposeAsGroupOnly;
                a.options3d && a.options3d.enabled && c || !(c || f || e || g(b)) ? d.setAttribute("aria-label", "") : (a = b.chart.options.accessibility, c = a.landmarkVerbosity, (b.options.accessibility || {}).exposeAsGroupOnly ? d.setAttribute("role", "img") : "all" === c && d.setAttribute("role", "region"), d.setAttribute("tabindex", "-1"), d.style.outline = "0", d.setAttribute("aria-label", F(G(a.series.descriptionFormatter && a.series.descriptionFormatter(b) || B(b)))));
              }
            },
            defaultPointDescriptionFormatter: t,
            defaultSeriesDescriptionFormatter: B,
            getPointA11yTimeDescription: f,
            getPointXDescription: c,
            getPointValue: A,
            getPointValueDescription: z
          };
        });
        r(a, "Accessibility/Utils/Announcer.js", [a["Core/Globals.js"], a["Accessibility/Utils/DOMElementProvider.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q) {
          var m = q.visuallyHideElement;

          q = function () {
            function a(a, g) {
              this.chart = a;
              this.domElementProvider = new h();
              this.announceRegion = this.addAnnounceRegion(g);
            }

            a.prototype.destroy = function () {
              this.domElementProvider.destroyCreatedElements();
            };

            a.prototype.announce = function (a) {
              var l = this;
              this.announceRegion.innerHTML = a;
              this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer);
              this.clearAnnouncementRegionTimer = setTimeout(function () {
                l.announceRegion.innerHTML = "";
                delete l.clearAnnouncementRegionTimer;
              }, 1E3);
            };

            a.prototype.addAnnounceRegion = function (a) {
              var l = this.chart.renderTo,
                  h = this.domElementProvider.createElement("div");
              h.setAttribute("aria-hidden", !1);
              h.setAttribute("aria-live", a);
              m(h);
              l.insertBefore(h, l.firstChild);
              return h;
            };

            return a;
          }();

          return a.Announcer = q;
        });
        r(a, "Accessibility/Components/SeriesComponent/NewDataAnnouncer.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], a["Accessibility/Utils/Announcer.js"], a["Accessibility/Utils/EventProvider.js"]], function (a, h, q, n, p, l) {
          function g(b) {
            var a = b.series.data.filter(function (a) {
              return b.x === a.x && b.y === a.y;
            });
            return 1 === a.length ? a[0] : b;
          }

          function m(b, a) {
            var c = (b || []).concat(a || []).reduce(function (b, a) {
              b[a.name + a.index] = a;
              return b;
            }, {});
            return Object.keys(c).map(function (b) {
              return c[b];
            });
          }

          var k = h.extend,
              e = h.defined,
              d = q.getChartTitle,
              b = n.defaultPointDescriptionFormatter,
              f = n.defaultSeriesDescriptionFormatter;

          h = function h(b) {
            this.chart = b;
          };

          k(h.prototype, {
            init: function init() {
              var b = this.chart,
                  a = b.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
              this.lastAnnouncementTime = 0;
              this.dirty = {
                allSeries: {}
              };
              this.eventProvider = new l();
              this.announcer = new p(b, a);
              this.addEventListeners();
            },
            destroy: function destroy() {
              this.eventProvider.removeAddedEvents();
              this.announcer.destroy();
            },
            addEventListeners: function addEventListeners() {
              var b = this,
                  d = this.chart,
                  f = this.eventProvider;
              f.addEvent(d, "afterDrilldown", function () {
                b.lastAnnouncementTime = 0;
              });
              f.addEvent(a.Series, "updatedData", function () {
                b.onSeriesUpdatedData(this);
              });
              f.addEvent(d, "afterAddSeries", function (a) {
                b.onSeriesAdded(a.series);
              });
              f.addEvent(a.Series, "addPoint", function (a) {
                b.onPointAdded(a.point);
              });
              f.addEvent(d, "redraw", function () {
                b.announceDirtyData();
              });
            },
            onSeriesUpdatedData: function onSeriesUpdatedData(b) {
              var a = this.chart;
              b.chart === a && a.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[b.name + b.index] = b);
            },
            onSeriesAdded: function onSeriesAdded(b) {
              this.chart.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[b.name + b.index] = b, this.dirty.newSeries = e(this.dirty.newSeries) ? void 0 : b);
            },
            onPointAdded: function onPointAdded(b) {
              var a = b.series.chart;
              this.chart === a && a.options.accessibility.announceNewData.enabled && (this.dirty.newPoint = e(this.dirty.newPoint) ? void 0 : b);
            },
            announceDirtyData: function announceDirtyData() {
              var b = this;

              if (this.chart.options.accessibility.announceNewData && this.dirty.hasDirty) {
                var a = this.dirty.newPoint;
                a && (a = g(a));
                this.queueAnnouncement(Object.keys(this.dirty.allSeries).map(function (a) {
                  return b.dirty.allSeries[a];
                }), this.dirty.newSeries, a);
                this.dirty = {
                  allSeries: {}
                };
              }
            },
            queueAnnouncement: function queueAnnouncement(b, a, d) {
              var c = this,
                  f = this.chart.options.accessibility.announceNewData;

              if (f.enabled) {
                var e = +new Date();
                f = Math.max(0, f.minAnnounceInterval - (e - this.lastAnnouncementTime));
                b = m(this.queuedAnnouncement && this.queuedAnnouncement.series, b);
                if (a = this.buildAnnouncementMessage(b, a, d)) this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
                  time: e,
                  message: a,
                  series: b
                }, this.queuedAnnouncementTimer = setTimeout(function () {
                  c && c.announcer && (c.lastAnnouncementTime = +new Date(), c.announcer.announce(c.queuedAnnouncement.message), delete c.queuedAnnouncement, delete c.queuedAnnouncementTimer);
                }, f);
              }
            },
            buildAnnouncementMessage: function buildAnnouncementMessage(c, e, k) {
              var l = this.chart,
                  g = l.options.accessibility.announceNewData;
              if (g.announcementFormatter && (c = g.announcementFormatter(c, e, k), !1 !== c)) return c.length ? c : null;
              c = a.charts && 1 < a.charts.length ? "Multiple" : "Single";
              c = e ? "newSeriesAnnounce" + c : k ? "newPointAnnounce" + c : "newDataAnnounce";
              g = d(l);
              return l.langFormat("accessibility.announceNewData." + c, {
                chartTitle: g,
                seriesDesc: e ? f(e) : null,
                pointDesc: k ? b(k) : null,
                point: k,
                series: e
              });
            }
          });
          return h;
        });
        r(a, "Accessibility/Components/SeriesComponent/ForcedMarkers.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) {
          function m(a) {
            p(!0, a, {
              marker: {
                enabled: !0,
                states: {
                  normal: {
                    opacity: 0
                  }
                }
              }
            });
          }

          var n = h.addEvent,
              p = h.merge;
          return function () {
            n(a.Series, "render", function () {
              var a = this.options,
                  g = !1 !== (this.options.accessibility && this.options.accessibility.enabled);
              if (g = this.chart.options.accessibility.enabled && g) g = this.chart.options.accessibility, g = this.points.length < g.series.pointDescriptionEnabledThreshold || !1 === g.series.pointDescriptionEnabledThreshold;

              if (g) {
                if (a.marker && !1 === a.marker.enabled && (this.a11yMarkersForced = !0, m(this.options)), this._hasPointMarkers && this.points && this.points.length) for (a = this.points.length; a--;) {
                  g = this.points[a];
                  var h = g.options;
                  delete g.hasForcedA11yMarker;
                  h.marker && (h.marker.enabled ? (p(!0, h.marker, {
                    states: {
                      normal: {
                        opacity: h.marker.states && h.marker.states.normal && h.marker.states.normal.opacity || 1
                      }
                    }
                  }), g.hasForcedA11yMarker = !1) : (m(h), g.hasForcedA11yMarker = !0));
                }
              } else this.a11yMarkersForced && (delete this.a11yMarkersForced, (a = this.resetA11yMarkerOptions) && p(!0, this.options, {
                marker: {
                  enabled: a.enabled,
                  states: {
                    normal: {
                      opacity: a.states && a.states.normal && a.states.normal.opacity
                    }
                  }
                }
              }));
            });
            n(a.Series, "afterSetOptions", function (a) {
              this.resetA11yMarkerOptions = p(a.options.marker || {}, this.userOptions.marker || {});
            });
            n(a.Series, "afterRender", function () {
              if (this.chart.styledMode) {
                if (this.markerGroup) this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden");
                this._hasPointMarkers && this.points && this.points.length && this.points.forEach(function (a) {
                  a.graphic && (a.graphic[a.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), a.graphic[!1 === a.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
                });
              }
            });
          };
        });
        r(a, "Accessibility/Components/SeriesComponent/SeriesComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js"], a["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], a["Accessibility/Components/SeriesComponent/ForcedMarkers.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], a["Core/Tooltip.js"]], function (a, h, q, n, p, l, g, x, k) {
          h = h.extend;
          var e = g.hideSeriesFromAT,
              d = x.describeSeries;
          a.SeriesAccessibilityDescriber = x;
          l();

          a = function a() {};

          a.prototype = new q();
          h(a.prototype, {
            init: function init() {
              this.newDataAnnouncer = new p(this.chart);
              this.newDataAnnouncer.init();
              this.keyboardNavigation = new n(this.chart, this.keyCodes);
              this.keyboardNavigation.init();
              this.hideTooltipFromATWhenShown();
              this.hideSeriesLabelsFromATWhenShown();
            },
            hideTooltipFromATWhenShown: function hideTooltipFromATWhenShown() {
              var b = this;
              this.addEvent(k, "refresh", function () {
                this.chart === b.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0);
              });
            },
            hideSeriesLabelsFromATWhenShown: function hideSeriesLabelsFromATWhenShown() {
              this.addEvent(this.chart, "afterDrawSeriesLabels", function () {
                this.series.forEach(function (b) {
                  b.labelBySeries && b.labelBySeries.attr("aria-hidden", !0);
                });
              });
            },
            onChartRender: function onChartRender() {
              this.chart.series.forEach(function (b) {
                !1 !== (b.options.accessibility && b.options.accessibility.enabled) && b.visible ? d(b) : e(b);
              });
            },
            getKeyboardNavigation: function getKeyboardNavigation() {
              return this.keyboardNavigation.getKeyboardNavigationHandler();
            },
            destroy: function destroy() {
              this.newDataAnnouncer.destroy();
              this.keyboardNavigation.destroy();
            }
          });
          return a;
        });
        r(a, "Accessibility/Components/ZoomComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
          var g = h.extend,
              m = h.pick,
              k = p.unhideChartElementFromAT,
              e = l.setElAttrs,
              d = l.removeElement;

          a.Axis.prototype.panStep = function (b, a) {
            var c = a || 3;
            a = this.getExtremes();
            var d = (a.max - a.min) / c * b;
            c = a.max + d;
            d = a.min + d;
            var f = c - d;
            0 > b && d < a.dataMin ? (d = a.dataMin, c = d + f) : 0 < b && c > a.dataMax && (c = a.dataMax, d = c - f);
            this.setExtremes(d, c);
          };

          a = function a() {};

          a.prototype = new q();
          g(a.prototype, {
            init: function init() {
              var b = this,
                  a = this.chart;
              ["afterShowResetZoom", "afterDrilldown", "drillupall"].forEach(function (c) {
                b.addEvent(a, c, function () {
                  b.updateProxyOverlays();
                });
              });
            },
            onChartUpdate: function onChartUpdate() {
              var b = this.chart,
                  a = this;
              b.mapNavButtons && b.mapNavButtons.forEach(function (c, d) {
                k(b, c.element);
                a.setMapNavButtonAttrs(c.element, "accessibility.zoom.mapZoom" + (d ? "Out" : "In"));
              });
            },
            setMapNavButtonAttrs: function setMapNavButtonAttrs(b, a) {
              var c = this.chart;
              a = c.langFormat(a, {
                chart: c
              });
              e(b, {
                tabindex: -1,
                role: "button",
                "aria-label": a
              });
            },
            onChartRender: function onChartRender() {
              this.updateProxyOverlays();
            },
            updateProxyOverlays: function updateProxyOverlays() {
              var b = this.chart;
              d(this.drillUpProxyGroup);
              d(this.resetZoomProxyGroup);
              b.resetZoomButton && this.recreateProxyButtonAndGroup(b.resetZoomButton, "resetZoomProxyButton", "resetZoomProxyGroup", b.langFormat("accessibility.zoom.resetZoomButton", {
                chart: b
              }));
              b.drillUpButton && this.recreateProxyButtonAndGroup(b.drillUpButton, "drillUpProxyButton", "drillUpProxyGroup", b.langFormat("accessibility.drillUpButton", {
                chart: b,
                buttonText: b.getDrilldownBackText()
              }));
            },
            recreateProxyButtonAndGroup: function recreateProxyButtonAndGroup(b, a, c, e) {
              d(this[c]);
              this[c] = this.addProxyGroup();
              this[a] = this.createProxyButton(b, this[c], {
                "aria-label": e,
                tabindex: -1
              });
            },
            getMapZoomNavigation: function getMapZoomNavigation() {
              var b = this.keyCodes,
                  a = this.chart,
                  c = this;
              return new n(a, {
                keyCodeMap: [[[b.up, b.down, b.left, b.right], function (b) {
                  return c.onMapKbdArrow(this, b);
                }], [[b.tab], function (b, a) {
                  return c.onMapKbdTab(this, a);
                }], [[b.space, b.enter], function () {
                  return c.onMapKbdClick(this);
                }]],
                validate: function validate() {
                  return !!(a.mapZoom && a.mapNavButtons && a.mapNavButtons.length);
                },
                init: function init(b) {
                  return c.onMapNavInit(b);
                }
              });
            },
            onMapKbdArrow: function onMapKbdArrow(b, a) {
              var c = this.keyCodes;
              this.chart[a === c.up || a === c.down ? "yAxis" : "xAxis"][0].panStep(a === c.left || a === c.up ? -1 : 1);
              return b.response.success;
            },
            onMapKbdTab: function onMapKbdTab(b, a) {
              var c = this.chart;
              b = b.response;
              var d = (a = a.shiftKey) && !this.focusedMapNavButtonIx || !a && this.focusedMapNavButtonIx;
              c.mapNavButtons[this.focusedMapNavButtonIx].setState(0);
              if (d) return c.mapZoom(), b[a ? "prev" : "next"];
              this.focusedMapNavButtonIx += a ? -1 : 1;
              a = c.mapNavButtons[this.focusedMapNavButtonIx];
              c.setFocusToElement(a.box, a.element);
              a.setState(2);
              return b.success;
            },
            onMapKbdClick: function onMapKbdClick(b) {
              this.fakeClickEvent(this.chart.mapNavButtons[this.focusedMapNavButtonIx].element);
              return b.response.success;
            },
            onMapNavInit: function onMapNavInit(b) {
              var a = this.chart,
                  c = a.mapNavButtons[0],
                  d = a.mapNavButtons[1];
              c = 0 < b ? c : d;
              a.setFocusToElement(c.box, c.element);
              c.setState(2);
              this.focusedMapNavButtonIx = 0 < b ? 0 : 1;
            },
            simpleButtonNavigation: function simpleButtonNavigation(b, a, c) {
              var d = this.keyCodes,
                  e = this,
                  f = this.chart;
              return new n(f, {
                keyCodeMap: [[[d.tab, d.up, d.down, d.left, d.right], function (b, a) {
                  return this.response[b === d.tab && a.shiftKey || b === d.left || b === d.up ? "prev" : "next"];
                }], [[d.space, d.enter], function () {
                  var b = c(this, f);
                  return m(b, this.response.success);
                }]],
                validate: function validate() {
                  return f[b] && f[b].box && e[a];
                },
                init: function init() {
                  f.setFocusToElement(f[b].box, e[a]);
                }
              });
            },
            getKeyboardNavigation: function getKeyboardNavigation() {
              return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function (b, a) {
                a.zoomOut();
              }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function (b, a) {
                a.drillUp();
                return b.response.prev;
              }), this.getMapZoomNavigation()];
            }
          });
          return a;
        });
        r(a, "Accessibility/Components/RangeSelectorComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
          h = h.extend;
          var g = p.unhideChartElementFromAT,
              m = l.setElAttrs;

          a.Chart.prototype.highlightRangeSelectorButton = function (a) {
            var e = this.rangeSelector.buttons,
                d = this.highlightedRangeSelectorItemIx;
            "undefined" !== typeof d && e[d] && e[d].setState(this.oldRangeSelectorItemState || 0);
            this.highlightedRangeSelectorItemIx = a;
            return e[a] ? (this.setFocusToElement(e[a].box, e[a].element), this.oldRangeSelectorItemState = e[a].state, e[a].setState(2), !0) : !1;
          };

          a = function a() {};

          a.prototype = new q();
          h(a.prototype, {
            onChartUpdate: function onChartUpdate() {
              var a = this.chart,
                  e = this,
                  d = a.rangeSelector;
              d && (d.buttons && d.buttons.length && d.buttons.forEach(function (b) {
                g(a, b.element);
                e.setRangeButtonAttrs(b);
              }), d.maxInput && d.minInput && ["minInput", "maxInput"].forEach(function (b, f) {
                if (b = d[b]) g(a, b), e.setRangeInputAttrs(b, "accessibility.rangeSelector." + (f ? "max" : "min") + "InputLabel");
              }));
            },
            setRangeButtonAttrs: function setRangeButtonAttrs(a) {
              var e = this.chart;
              e = e.langFormat("accessibility.rangeSelector.buttonText", {
                chart: e,
                buttonText: a.text && a.text.textStr
              });
              m(a.element, {
                tabindex: -1,
                role: "button",
                "aria-label": e
              });
            },
            setRangeInputAttrs: function setRangeInputAttrs(a, e) {
              var d = this.chart;
              m(a, {
                tabindex: -1,
                role: "textbox",
                "aria-label": d.langFormat(e, {
                  chart: d
                })
              });
            },
            getRangeSelectorButtonNavigation: function getRangeSelectorButtonNavigation() {
              var a = this.chart,
                  e = this.keyCodes,
                  d = this;
              return new n(a, {
                keyCodeMap: [[[e.left, e.right, e.up, e.down], function (b) {
                  return d.onButtonNavKbdArrowKey(this, b);
                }], [[e.enter, e.space], function () {
                  return d.onButtonNavKbdClick(this);
                }]],
                validate: function validate() {
                  return a.rangeSelector && a.rangeSelector.buttons && a.rangeSelector.buttons.length;
                },
                init: function init(b) {
                  var d = a.rangeSelector.buttons.length - 1;
                  a.highlightRangeSelectorButton(0 < b ? 0 : d);
                }
              });
            },
            onButtonNavKbdArrowKey: function onButtonNavKbdArrowKey(a, e) {
              var d = a.response,
                  b = this.keyCodes,
                  f = this.chart,
                  c = f.options.accessibility.keyboardNavigation.wrapAround;
              e = e === b.left || e === b.up ? -1 : 1;
              return f.highlightRangeSelectorButton(f.highlightedRangeSelectorItemIx + e) ? d.success : c ? (a.init(e), d.success) : d[0 < e ? "next" : "prev"];
            },
            onButtonNavKbdClick: function onButtonNavKbdClick(a) {
              a = a.response;
              var e = this.chart;
              3 !== e.oldRangeSelectorItemState && this.fakeClickEvent(e.rangeSelector.buttons[e.highlightedRangeSelectorItemIx].element);
              return a.success;
            },
            getRangeSelectorInputNavigation: function getRangeSelectorInputNavigation() {
              var a = this.chart,
                  e = this.keyCodes,
                  d = this;
              return new n(a, {
                keyCodeMap: [[[e.tab, e.up, e.down], function (b, a) {
                  return d.onInputKbdMove(this, b === e.tab && a.shiftKey || b === e.up ? -1 : 1);
                }]],
                validate: function validate() {
                  return a.rangeSelector && a.rangeSelector.inputGroup && "hidden" !== a.rangeSelector.inputGroup.element.getAttribute("visibility") && !1 !== a.options.rangeSelector.inputEnabled && a.rangeSelector.minInput && a.rangeSelector.maxInput;
                },
                init: function init(b) {
                  d.onInputNavInit(b);
                },
                terminate: function terminate() {
                  d.onInputNavTerminate();
                }
              });
            },
            onInputKbdMove: function onInputKbdMove(a, e) {
              var d = this.chart;
              a = a.response;
              var b = d.highlightedInputRangeIx += e;
              if (1 < b || 0 > b) return a[0 < e ? "next" : "prev"];
              d.rangeSelector[b ? "maxInput" : "minInput"].focus();
              return a.success;
            },
            onInputNavInit: function onInputNavInit(a) {
              var e = this.chart;
              a = 0 < a ? 0 : 1;
              e.highlightedInputRangeIx = a;
              e.rangeSelector[a ? "maxInput" : "minInput"].focus();
            },
            onInputNavTerminate: function onInputNavTerminate() {
              var a = this.chart.rangeSelector || {};
              a.maxInput && a.hideInput("max");
              a.minInput && a.hideInput("min");
            },
            getKeyboardNavigation: function getKeyboardNavigation() {
              return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
            }
          });
          return a;
        });
        r(a, "Accessibility/Components/InfoRegionsComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Utils/Announcer.js"], a["Accessibility/Components/AnnotationsA11y.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l, g) {
          function m(b) {
            return b.replace(/&lt;(h[1-7]|p|div|ul|ol|li)&gt;/g, "<$1>").replace(/&lt;&#x2F;(h[1-7]|p|div|ul|ol|li|a|button)&gt;/g, "</$1>").replace(/&lt;(div|a|button) id=&quot;([a-zA-Z\-0-9#]*?)&quot;&gt;/g, '<$1 id="$2">');
          }

          var k = a.doc,
              e = h.extend,
              d = h.format,
              b = h.pick,
              f = p.getAnnotationsInfoHTML,
              c = l.unhideChartElementFromAT,
              w = l.getChartTitle,
              r = l.getAxisDescription,
              z = g.addClass,
              t = g.setElAttrs,
              E = g.escapeStringForHTML,
              B = g.stripHTMLTagsFromString,
              C = g.getElement,
              u = g.visuallyHideElement;

          a.Chart.prototype.getTypeDescription = function (b) {
            var a = b[0],
                c = this.series && this.series[0] || {};
            c = {
              numSeries: this.series.length,
              numPoints: c.points && c.points.length,
              chart: this,
              mapTitle: c.mapTitle
            };
            if (!a) return this.langFormat("accessibility.chartTypes.emptyChart", c);
            if ("map" === a) return c.mapTitle ? this.langFormat("accessibility.chartTypes.mapTypeDescription", c) : this.langFormat("accessibility.chartTypes.unknownMap", c);
            if (1 < this.types.length) return this.langFormat("accessibility.chartTypes.combinationChart", c);
            b = b[0];
            a = this.langFormat("accessibility.seriesTypeDescriptions." + b, c);
            var d = this.series && 2 > this.series.length ? "Single" : "Multiple";
            return (this.langFormat("accessibility.chartTypes." + b + d, c) || this.langFormat("accessibility.chartTypes.default" + d, c)) + (a ? " " + a : "");
          };

          h = function h() {};

          h.prototype = new q();
          e(h.prototype, {
            init: function init() {
              var b = this.chart,
                  a = this;
              this.initRegionsDefinitions();
              this.addEvent(b, "afterGetTable", function (b) {
                a.onDataTableCreated(b);
              });
              this.addEvent(b, "afterViewData", function (b) {
                a.dataTableDiv = b;
                setTimeout(function () {
                  a.focusDataTable();
                }, 300);
              });
              this.announcer = new n(b, "assertive");
            },
            initRegionsDefinitions: function initRegionsDefinitions() {
              var b = this;
              this.screenReaderSections = {
                before: {
                  element: null,
                  buildContent: function buildContent(a) {
                    var c = a.options.accessibility.screenReaderSection.beforeChartFormatter;
                    return c ? c(a) : b.defaultBeforeChartFormatter(a);
                  },
                  insertIntoDOM: function insertIntoDOM(b, a) {
                    a.renderTo.insertBefore(b, a.renderTo.firstChild);
                  },
                  afterInserted: function afterInserted() {
                    "undefined" !== typeof b.sonifyButtonId && b.initSonifyButton(b.sonifyButtonId);
                    "undefined" !== typeof b.dataTableButtonId && b.initDataTableButton(b.dataTableButtonId);
                  }
                },
                after: {
                  element: null,
                  buildContent: function buildContent(a) {
                    var c = a.options.accessibility.screenReaderSection.afterChartFormatter;
                    return c ? c(a) : b.defaultAfterChartFormatter();
                  },
                  insertIntoDOM: function insertIntoDOM(b, a) {
                    a.renderTo.insertBefore(b, a.container.nextSibling);
                  }
                }
              };
            },
            onChartRender: function onChartRender() {
              var b = this;
              this.linkedDescriptionElement = this.getLinkedDescriptionElement();
              this.setLinkedDescriptionAttrs();
              Object.keys(this.screenReaderSections).forEach(function (a) {
                b.updateScreenReaderSection(a);
              });
            },
            getLinkedDescriptionElement: function getLinkedDescriptionElement() {
              var b = this.chart.options.accessibility.linkedDescription;

              if (b) {
                if ("string" !== typeof b) return b;
                b = d(b, this.chart);
                b = k.querySelectorAll(b);
                if (1 === b.length) return b[0];
              }
            },
            setLinkedDescriptionAttrs: function setLinkedDescriptionAttrs() {
              var b = this.linkedDescriptionElement;
              b && (b.setAttribute("aria-hidden", "true"), z(b, "highcharts-linked-description"));
            },
            updateScreenReaderSection: function updateScreenReaderSection(b) {
              var a = this.chart,
                  d = this.screenReaderSections[b],
                  e = d.buildContent(a),
                  f = d.element = d.element || this.createElement("div"),
                  l = f.firstChild || this.createElement("div");
              this.setScreenReaderSectionAttribs(f, b);
              l.innerHTML = e;
              f.appendChild(l);
              d.insertIntoDOM(f, a);
              u(l);
              c(a, l);
              d.afterInserted && d.afterInserted();
            },
            setScreenReaderSectionAttribs: function setScreenReaderSectionAttribs(b, a) {
              var c = this.chart,
                  d = c.langFormat("accessibility.screenReaderSection." + a + "RegionLabel", {
                chart: c
              });
              t(b, {
                id: "highcharts-screen-reader-region-" + a + "-" + c.index,
                "aria-label": d
              });
              b.style.position = "relative";
              "all" === c.options.accessibility.landmarkVerbosity && d && b.setAttribute("role", "region");
            },
            defaultBeforeChartFormatter: function defaultBeforeChartFormatter() {
              var b,
                  c = this.chart,
                  d = c.options.accessibility.screenReaderSection.beforeChartFormat,
                  e = this.getAxesDescription(),
                  l = c.sonify && (null === (b = c.options.sonification) || void 0 === b ? void 0 : b.enabled);
              b = "highcharts-a11y-sonify-data-btn-" + c.index;
              var k = "hc-linkto-highcharts-data-table-" + c.index,
                  g = f(c),
                  h = c.langFormat("accessibility.screenReaderSection.annotations.heading", {
                chart: c
              });
              e = {
                chartTitle: w(c),
                typeDescription: this.getTypeDescriptionText(),
                chartSubtitle: this.getSubtitleText(),
                chartLongdesc: this.getLongdescText(),
                xAxisDescription: e.xAxis,
                yAxisDescription: e.yAxis,
                playAsSoundButton: l ? this.getSonifyButtonText(b) : "",
                viewTableButton: c.getCSV ? this.getDataTableButtonText(k) : "",
                annotationsTitle: g ? h : "",
                annotationsList: g
              };
              c = a.i18nFormat(d, e, c);
              this.dataTableButtonId = k;
              this.sonifyButtonId = b;
              return m(E(c)).replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "");
            },
            defaultAfterChartFormatter: function defaultAfterChartFormatter() {
              var b = this.chart,
                  c = b.options.accessibility.screenReaderSection.afterChartFormat,
                  d = {
                endOfChartMarker: this.getEndOfChartMarkerText()
              };
              b = a.i18nFormat(c, d, b);
              return m(E(b)).replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "");
            },
            getLinkedDescription: function getLinkedDescription() {
              var b = this.linkedDescriptionElement;
              return B(b && b.innerHTML || "");
            },
            getLongdescText: function getLongdescText() {
              var b = this.chart.options,
                  a = b.caption;
              a = a && a.text;
              var c = this.getLinkedDescription();
              return b.accessibility.description || c || a || "";
            },
            getTypeDescriptionText: function getTypeDescriptionText() {
              var b = this.chart;
              return b.types ? b.options.accessibility.typeDescription || b.getTypeDescription(b.types) : "";
            },
            getDataTableButtonText: function getDataTableButtonText(b) {
              var a = this.chart;
              a = a.langFormat("accessibility.table.viewAsDataTableButtonText", {
                chart: a,
                chartTitle: w(a)
              });
              return '<button id="' + b + '">' + a + "</button>";
            },
            getSonifyButtonText: function getSonifyButtonText(b) {
              var a,
                  c = this.chart;
              if (!1 === (null === (a = c.options.sonification) || void 0 === a ? void 0 : a.enabled)) return "";
              a = c.langFormat("accessibility.sonification.playAsSoundButtonText", {
                chart: c,
                chartTitle: w(c)
              });
              return '<button id="' + b + '">' + a + "</button>";
            },
            getSubtitleText: function getSubtitleText() {
              var b = this.chart.options.subtitle;
              return B(b && b.text || "");
            },
            getEndOfChartMarkerText: function getEndOfChartMarkerText() {
              var b = this.chart,
                  a = b.langFormat("accessibility.screenReaderSection.endOfChartMarker", {
                chart: b
              });
              return '<div id="highcharts-end-of-chart-marker-' + b.index + '">' + a + "</div>";
            },
            onDataTableCreated: function onDataTableCreated(b) {
              var a = this.chart;
              a.options.accessibility.enabled && (this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true"), b.html = b.html.replace("<table ", '<table tabindex="-1" summary="' + a.langFormat("accessibility.table.tableSummary", {
                chart: a
              }) + '"'));
            },
            focusDataTable: function focusDataTable() {
              var b = this.dataTableDiv;
              (b = b && b.getElementsByTagName("table")[0]) && b.focus && b.focus();
            },
            initSonifyButton: function initSonifyButton(b) {
              var a = this,
                  c = this.sonifyButton = C(b),
                  d = this.chart,
                  e = function e(b) {
                null === c || void 0 === c ? void 0 : c.setAttribute("aria-hidden", "true");
                null === c || void 0 === c ? void 0 : c.setAttribute("aria-label", "");
                b.preventDefault();
                b.stopPropagation();
                b = d.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", {
                  chart: d
                });
                a.announcer.announce(b);
                setTimeout(function () {
                  null === c || void 0 === c ? void 0 : c.removeAttribute("aria-hidden");
                  null === c || void 0 === c ? void 0 : c.removeAttribute("aria-label");
                  d.sonify && d.sonify();
                }, 1E3);
              };

              c && d && (t(c, {
                tabindex: "-1"
              }), c.onclick = function (b) {
                var a;
                ((null === (a = d.options.accessibility) || void 0 === a ? void 0 : a.screenReaderSection.onPlayAsSoundClick) || e).call(this, b, d);
              });
            },
            initDataTableButton: function initDataTableButton(b) {
              var a = this.viewDataTableButton = C(b),
                  c = this.chart;
              b = b.replace("hc-linkto-", "");
              a && (t(a, {
                tabindex: "-1",
                "aria-expanded": !!C(b)
              }), a.onclick = c.options.accessibility.screenReaderSection.onViewDataTableClick || function () {
                c.viewData();
              });
            },
            getAxesDescription: function getAxesDescription() {
              var a = this.chart,
                  c = function c(_c, d) {
                _c = a[_c];
                return 1 < _c.length || _c[0] && b(_c[0].options.accessibility && _c[0].options.accessibility.enabled, d);
              },
                  d = !!a.types && 0 > a.types.indexOf("map"),
                  e = !!a.hasCartesianSeries,
                  f = c("xAxis", !a.angular && e && d);

              c = c("yAxis", e && d);
              d = {};
              f && (d.xAxis = this.getAxisDescriptionText("xAxis"));
              c && (d.yAxis = this.getAxisDescriptionText("yAxis"));
              return d;
            },
            getAxisDescriptionText: function getAxisDescriptionText(b) {
              var a = this,
                  c = this.chart,
                  d = c[b];
              return c.langFormat("accessibility.axis." + b + "Description" + (1 < d.length ? "Plural" : "Singular"), {
                chart: c,
                names: d.map(function (b) {
                  return r(b);
                }),
                ranges: d.map(function (b) {
                  return a.getAxisRangeDescription(b);
                }),
                numAxes: d.length
              });
            },
            getAxisRangeDescription: function getAxisRangeDescription(b) {
              var a = b.options || {};
              return a.accessibility && "undefined" !== typeof a.accessibility.rangeDescription ? a.accessibility.rangeDescription : b.categories ? this.getCategoryAxisRangeDesc(b) : !b.dateTime || 0 !== b.min && 0 !== b.dataMin ? this.getAxisFromToDescription(b) : this.getAxisTimeLengthDesc(b);
            },
            getCategoryAxisRangeDesc: function getCategoryAxisRangeDesc(b) {
              var a = this.chart;
              return b.dataMax && b.dataMin ? a.langFormat("accessibility.axis.rangeCategories", {
                chart: a,
                axis: b,
                numCategories: b.dataMax - b.dataMin + 1
              }) : "";
            },
            getAxisTimeLengthDesc: function getAxisTimeLengthDesc(b) {
              var a = this.chart,
                  c = {},
                  d = "Seconds";
              c.Seconds = ((b.max || 0) - (b.min || 0)) / 1E3;
              c.Minutes = c.Seconds / 60;
              c.Hours = c.Minutes / 60;
              c.Days = c.Hours / 24;
              ["Minutes", "Hours", "Days"].forEach(function (b) {
                2 < c[b] && (d = b);
              });
              var e = c[d].toFixed("Seconds" !== d && "Minutes" !== d ? 1 : 0);
              return a.langFormat("accessibility.axis.timeRange" + d, {
                chart: a,
                axis: b,
                range: e.replace(".0", "")
              });
            },
            getAxisFromToDescription: function getAxisFromToDescription(b) {
              var a = this.chart,
                  c = a.options.accessibility.screenReaderSection.axisRangeDateFormat,
                  d = function d(_d) {
                return b.dateTime ? a.time.dateFormat(c, b[_d]) : b[_d];
              };

              return a.langFormat("accessibility.axis.rangeFromTo", {
                chart: a,
                axis: b,
                rangeFrom: d("min"),
                rangeTo: d("max")
              });
            },
            destroy: function destroy() {
              var b;
              null === (b = this.announcer) || void 0 === b ? void 0 : b.destroy();
            }
          });
          return h;
        });
        r(a, "Accessibility/Components/ContainerComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/AccessibilityComponent.js"]], function (a, h, q, n, p) {
          var l = a.win.document;
          a = h.extend;
          var g = q.stripHTMLTagsFromString,
              m = n.unhideChartElementFromAT,
              k = n.getChartTitle;

          q = function q() {};

          q.prototype = new p();
          a(q.prototype, {
            onChartUpdate: function onChartUpdate() {
              this.handleSVGTitleElement();
              this.setSVGContainerLabel();
              this.setGraphicContainerAttrs();
              this.setRenderToAttrs();
              this.makeCreditsAccessible();
            },
            handleSVGTitleElement: function handleSVGTitleElement() {
              var a = this.chart,
                  d = "highcharts-title-" + a.index,
                  b = g(a.langFormat("accessibility.svgContainerTitle", {
                chartTitle: k(a)
              }));

              if (b.length) {
                var f = this.svgTitleElement = this.svgTitleElement || l.createElementNS("http://www.w3.org/2000/svg", "title");
                f.textContent = b;
                f.id = d;
                a.renderTo.insertBefore(f, a.renderTo.firstChild);
              }
            },
            setSVGContainerLabel: function setSVGContainerLabel() {
              var a = this.chart,
                  d = g(a.langFormat("accessibility.svgContainerLabel", {
                chartTitle: k(a)
              }));
              a.renderer.box && d.length && a.renderer.box.setAttribute("aria-label", d);
            },
            setGraphicContainerAttrs: function setGraphicContainerAttrs() {
              var a = this.chart,
                  d = a.langFormat("accessibility.graphicContainerLabel", {
                chartTitle: k(a)
              });
              d.length && a.container.setAttribute("aria-label", d);
            },
            setRenderToAttrs: function setRenderToAttrs() {
              var a = this.chart;
              "disabled" !== a.options.accessibility.landmarkVerbosity ? a.renderTo.setAttribute("role", "region") : a.renderTo.removeAttribute("role");
              a.renderTo.setAttribute("aria-label", a.langFormat("accessibility.chartContainerLabel", {
                title: k(a),
                chart: a
              }));
            },
            makeCreditsAccessible: function makeCreditsAccessible() {
              var a = this.chart,
                  d = a.credits;
              d && (d.textStr && d.element.setAttribute("aria-label", g(a.langFormat("accessibility.credits", {
                creditsStr: d.textStr
              }))), m(a, d.element));
            },
            destroy: function destroy() {
              this.chart.renderTo.setAttribute("aria-hidden", !0);
            }
          });
          return q;
        });
        r(a, "Accessibility/HighContrastMode.js", [a["Core/Globals.js"]], function (a) {
          var h = a.isMS,
              m = a.win,
              n = m.document;
          return {
            isHighContrastModeActive: function isHighContrastModeActive() {
              var a = /(Edg)/.test(m.navigator.userAgent);
              if (m.matchMedia && a) return m.matchMedia("(-ms-high-contrast: active)").matches;

              if (h && m.getComputedStyle) {
                a = n.createElement("div");
                a.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)";
                n.body.appendChild(a);
                var l = (a.currentStyle || m.getComputedStyle(a)).backgroundImage;
                n.body.removeChild(a);
                return "none" === l;
              }

              return !1;
            },
            setHighContrastTheme: function setHighContrastTheme(a) {
              a.highContrastModeActive = !0;
              var l = a.options.accessibility.highContrastTheme;
              a.update(l, !1);
              a.series.forEach(function (a) {
                var g = l.plotOptions[a.type] || {};
                a.update({
                  color: g.color || "windowText",
                  colors: [g.color || "windowText"],
                  borderColor: g.borderColor || "window"
                });
                a.points.forEach(function (a) {
                  a.options && a.options.color && a.update({
                    color: g.color || "windowText",
                    borderColor: g.borderColor || "window"
                  }, !1);
                });
              });
              a.redraw();
            }
          };
        });
        r(a, "Accessibility/HighContrastTheme.js", [], function () {
          return {
            chart: {
              backgroundColor: "window"
            },
            title: {
              style: {
                color: "windowText"
              }
            },
            subtitle: {
              style: {
                color: "windowText"
              }
            },
            colorAxis: {
              minColor: "windowText",
              maxColor: "windowText",
              stops: []
            },
            colors: ["windowText"],
            xAxis: {
              gridLineColor: "windowText",
              labels: {
                style: {
                  color: "windowText"
                }
              },
              lineColor: "windowText",
              minorGridLineColor: "windowText",
              tickColor: "windowText",
              title: {
                style: {
                  color: "windowText"
                }
              }
            },
            yAxis: {
              gridLineColor: "windowText",
              labels: {
                style: {
                  color: "windowText"
                }
              },
              lineColor: "windowText",
              minorGridLineColor: "windowText",
              tickColor: "windowText",
              title: {
                style: {
                  color: "windowText"
                }
              }
            },
            tooltip: {
              backgroundColor: "window",
              borderColor: "windowText",
              style: {
                color: "windowText"
              }
            },
            plotOptions: {
              series: {
                lineColor: "windowText",
                fillColor: "window",
                borderColor: "windowText",
                edgeColor: "windowText",
                borderWidth: 1,
                dataLabels: {
                  connectorColor: "windowText",
                  color: "windowText",
                  style: {
                    color: "windowText",
                    textOutline: "none"
                  }
                },
                marker: {
                  lineColor: "windowText",
                  fillColor: "windowText"
                }
              },
              pie: {
                color: "window",
                colors: ["window"],
                borderColor: "windowText",
                borderWidth: 1
              },
              boxplot: {
                fillColor: "window"
              },
              candlestick: {
                lineColor: "windowText",
                fillColor: "window"
              },
              errorbar: {
                fillColor: "window"
              }
            },
            legend: {
              backgroundColor: "window",
              itemStyle: {
                color: "windowText"
              },
              itemHoverStyle: {
                color: "windowText"
              },
              itemHiddenStyle: {
                color: "#555"
              },
              title: {
                style: {
                  color: "windowText"
                }
              }
            },
            credits: {
              style: {
                color: "windowText"
              }
            },
            labels: {
              style: {
                color: "windowText"
              }
            },
            drilldown: {
              activeAxisLabelStyle: {
                color: "windowText"
              },
              activeDataLabelStyle: {
                color: "windowText"
              }
            },
            navigation: {
              buttonOptions: {
                symbolStroke: "windowText",
                theme: {
                  fill: "window"
                }
              }
            },
            rangeSelector: {
              buttonTheme: {
                fill: "window",
                stroke: "windowText",
                style: {
                  color: "windowText"
                },
                states: {
                  hover: {
                    fill: "window",
                    stroke: "windowText",
                    style: {
                      color: "windowText"
                    }
                  },
                  select: {
                    fill: "#444",
                    stroke: "windowText",
                    style: {
                      color: "windowText"
                    }
                  }
                }
              },
              inputBoxBorderColor: "windowText",
              inputStyle: {
                backgroundColor: "window",
                color: "windowText"
              },
              labelStyle: {
                color: "windowText"
              }
            },
            navigator: {
              handles: {
                backgroundColor: "window",
                borderColor: "windowText"
              },
              outlineColor: "windowText",
              maskFill: "transparent",
              series: {
                color: "windowText",
                lineColor: "windowText"
              },
              xAxis: {
                gridLineColor: "windowText"
              }
            },
            scrollbar: {
              barBackgroundColor: "#444",
              barBorderColor: "windowText",
              buttonArrowColor: "windowText",
              buttonBackgroundColor: "window",
              buttonBorderColor: "windowText",
              rifleColor: "windowText",
              trackBackgroundColor: "window",
              trackBorderColor: "windowText"
            }
          };
        });
        r(a, "Accessibility/Options/Options.js", [], function () {
          return {
            accessibility: {
              enabled: !0,
              screenReaderSection: {
                beforeChartFormat: "<h5>{chartTitle}</h5><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
                afterChartFormat: "{endOfChartMarker}",
                axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
              },
              series: {
                describeSingleSeries: !1,
                pointDescriptionEnabledThreshold: 200
              },
              point: {
                valueDescriptionFormat: "{index}. {xDescription}{separator}{value}."
              },
              landmarkVerbosity: "all",
              linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description',
              keyboardNavigation: {
                enabled: !0,
                focusBorder: {
                  enabled: !0,
                  hideBrowserFocusOutline: !0,
                  style: {
                    color: "#335cad",
                    lineWidth: 2,
                    borderRadius: 3
                  },
                  margin: 2
                },
                order: ["series", "zoom", "rangeSelector", "legend", "chartMenu"],
                wrapAround: !0,
                seriesNavigation: {
                  skipNullPoints: !0,
                  pointNavigationEnabledThreshold: !1
                }
              },
              announceNewData: {
                enabled: !1,
                minAnnounceInterval: 5E3,
                interruptUser: !1
              }
            },
            legend: {
              accessibility: {
                enabled: !0,
                keyboardNavigation: {
                  enabled: !0
                }
              }
            },
            exporting: {
              accessibility: {
                enabled: !0
              }
            }
          };
        });
        r(a, "Accessibility/Options/LangOptions.js", [], function () {
          return {
            accessibility: {
              defaultChartTitle: "Chart",
              chartContainerLabel: "{title}. Highcharts interactive chart.",
              svgContainerLabel: "Interactive chart",
              drillUpButton: "{buttonText}",
              credits: "Chart credits: {creditsStr}",
              thousandsSep: ",",
              svgContainerTitle: "",
              graphicContainerLabel: "",
              screenReaderSection: {
                beforeRegionLabel: "Chart screen reader information.",
                afterRegionLabel: "",
                annotations: {
                  heading: "Chart annotations summary",
                  descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}",
                  descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{ Also related to, #each(additionalAnnotationPoints)}",
                  descriptionNoPoints: "{annotationText}"
                },
                endOfChartMarker: "End of interactive chart."
              },
              sonification: {
                playAsSoundButtonText: "Play as sound, {chartTitle}",
                playAsSoundClickAnnouncement: "Play"
              },
              legend: {
                legendLabel: "Toggle series visibility",
                legendItem: "Hide {itemName}"
              },
              zoom: {
                mapZoomIn: "Zoom chart",
                mapZoomOut: "Zoom out chart",
                resetZoomButton: "Reset zoom"
              },
              rangeSelector: {
                minInputLabel: "Select start date.",
                maxInputLabel: "Select end date.",
                buttonText: "Select range {buttonText}"
              },
              table: {
                viewAsDataTableButtonText: "View as data table, {chartTitle}",
                tableSummary: "Table representation of chart."
              },
              announceNewData: {
                newDataAnnounce: "Updated data for chart {chartTitle}",
                newSeriesAnnounceSingle: "New data series: {seriesDesc}",
                newPointAnnounceSingle: "New data point: {pointDesc}",
                newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}",
                newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}"
              },
              seriesTypeDescriptions: {
                boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
                arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
                areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.",
                bubble: "Bubble charts are scatter charts where each data point also has a size value.",
                columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
                errorbar: "Errorbar series are used to display the variability of the data.",
                funnel: "Funnel charts are used to display reduction of data in stages.",
                pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
                waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
              },
              chartTypes: {
                emptyChart: "Empty chart",
                mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.",
                unknownMap: "Map of unspecified region with {numSeries} data series.",
                combinationChart: "Combination chart with {numSeries} data series.",
                defaultSingle: "Chart with {numPoints} data {#plural(numPoints, points, point)}.",
                defaultMultiple: "Chart with {numSeries} data series.",
                splineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.",
                splineMultiple: "Line chart with {numSeries} lines.",
                lineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.",
                lineMultiple: "Line chart with {numSeries} lines.",
                columnSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",
                columnMultiple: "Bar chart with {numSeries} data series.",
                barSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.",
                barMultiple: "Bar chart with {numSeries} data series.",
                pieSingle: "Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.",
                pieMultiple: "Pie chart with {numSeries} pies.",
                scatterSingle: "Scatter chart with {numPoints} {#plural(numPoints, points, point)}.",
                scatterMultiple: "Scatter chart with {numSeries} data series.",
                boxplotSingle: "Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",
                boxplotMultiple: "Boxplot with {numSeries} data series.",
                bubbleSingle: "Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                bubbleMultiple: "Bubble chart with {numSeries} data series."
              },
              axis: {
                xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
                xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}.",
                yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
                yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}.",
                timeRangeDays: "Range: {range} days.",
                timeRangeHours: "Range: {range} hours.",
                timeRangeMinutes: "Range: {range} minutes.",
                timeRangeSeconds: "Range: {range} seconds.",
                rangeFromTo: "Range: {rangeFrom} to {rangeTo}.",
                rangeCategories: "Range: {numCategories} categories."
              },
              exporting: {
                chartMenuLabel: "Chart menu",
                menuButtonLabel: "View chart menu",
                exportRegionLabel: "Chart menu"
              },
              series: {
                summary: {
                  "default": "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  defaultCombination: "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  line: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  lineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                  spline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  splineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                  column: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
                  columnCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",
                  bar: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
                  barCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.",
                  pie: "{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.",
                  pieCombination: "{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",
                  scatter: "{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.",
                  scatterCombination: "{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.",
                  boxplot: "{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.",
                  boxplotCombination: "{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.",
                  bubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                  bubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                  map: "{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.",
                  mapCombination: "{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.",
                  mapline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                  maplineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                  mapbubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                  mapbubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                },
                description: "{description}",
                xAxisDescription: "X axis, {name}",
                yAxisDescription: "Y axis, {name}",
                nullPointValue: "No value",
                pointAnnotationsDescription: "{Annotation: #each(annotations). }"
              }
            }
          };
        });
        r(a, "Accessibility/Options/DeprecatedOptions.js", [a["Core/Utilities.js"]], function (a) {
          function h(a, e, d) {
            for (var b, f = 0; f < e.length - 1; ++f) {
              b = e[f], a = a[b] = r(a[b], {});
            }

            a[e[e.length - 1]] = d;
          }

          function m(a, e, d, b) {
            function f(b, a) {
              return a.reduce(function (b, a) {
                return b[a];
              }, b);
            }

            var c = f(a.options, e),
                l = f(a.options, d);
            Object.keys(b).forEach(function (f) {
              var k,
                  m = c[f];
              "undefined" !== typeof m && (h(l, b[f], m), g(32, !1, a, (k = {}, k[e.join(".") + "." + f] = d.join(".") + "." + b[f].join("."), k)));
            });
          }

          function n(a) {
            var e = a.options.chart || {},
                d = a.options.accessibility || {};
            ["description", "typeDescription"].forEach(function (b) {
              var f;
              e[b] && (d[b] = e[b], g(32, !1, a, (f = {}, f["chart." + b] = "use accessibility." + b, f)));
            });
          }

          function p(a) {
            a.axes.forEach(function (e) {
              (e = e.options) && e.description && (e.accessibility = e.accessibility || {}, e.accessibility.description = e.description, g(32, !1, a, {
                "axis.description": "use axis.accessibility.description"
              }));
            });
          }

          function l(a) {
            var e = {
              description: ["accessibility", "description"],
              exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
              pointDescriptionFormatter: ["accessibility", "pointDescriptionFormatter"],
              skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"]
            };
            a.series.forEach(function (d) {
              Object.keys(e).forEach(function (b) {
                var f,
                    c = d.options[b];
                "undefined" !== typeof c && (h(d.options, e[b], "skipKeyboardNavigation" === b ? !c : c), g(32, !1, a, (f = {}, f["series." + b] = "series." + e[b].join("."), f)));
              });
            });
          }

          var g = a.error,
              r = a.pick;
          return function (a) {
            n(a);
            p(a);
            a.series && l(a);
            m(a, ["accessibility"], ["accessibility"], {
              pointDateFormat: ["point", "dateFormat"],
              pointDateFormatter: ["point", "dateFormatter"],
              pointDescriptionFormatter: ["point", "descriptionFormatter"],
              pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
              pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"],
              pointValueDecimals: ["point", "valueDecimals"],
              pointValuePrefix: ["point", "valuePrefix"],
              pointValueSuffix: ["point", "valueSuffix"],
              screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"],
              describeSingleSeries: ["series", "describeSingleSeries"],
              seriesDescriptionFormatter: ["series", "descriptionFormatter"],
              onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"],
              axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
            });
            m(a, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], {
              skipNullPoints: ["skipNullPoints"],
              mode: ["mode"]
            });
            m(a, ["lang", "accessibility"], ["lang", "accessibility"], {
              legendItem: ["legend", "legendItem"],
              legendLabel: ["legend", "legendLabel"],
              mapZoomIn: ["zoom", "mapZoomIn"],
              mapZoomOut: ["zoom", "mapZoomOut"],
              resetZoomButton: ["zoom", "resetZoomButton"],
              screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"],
              rangeSelectorButton: ["rangeSelector", "buttonText"],
              rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
              rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
              svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
              viewAsDataTable: ["table", "viewAsDataTableButtonText"],
              tableSummary: ["table", "tableSummary"]
            });
          };
        });
        r(a, "Accessibility/A11yI18n.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) {
          function m(a, g) {
            var h = a.indexOf("#each("),
                k = a.indexOf("#plural("),
                e = a.indexOf("["),
                d = a.indexOf("]");

            if (-1 < h) {
              e = a.slice(h).indexOf(")") + h;
              var b = a.substring(0, h);
              k = a.substring(e + 1);
              e = a.substring(h + 6, e).split(",");
              h = Number(e[1]);
              a = "";
              if (g = g[e[0]]) for (h = isNaN(h) ? g.length : h, h = 0 > h ? g.length + h : Math.min(h, g.length), e = 0; e < h; ++e) {
                a += b + g[e] + k;
              }
              return a.length ? a : "";
            }

            if (-1 < k) {
              b = a.slice(k).indexOf(")") + k;
              a = a.substring(k + 8, b).split(",");

              switch (Number(g[a[0]])) {
                case 0:
                  a = p(a[4], a[1]);
                  break;

                case 1:
                  a = p(a[2], a[1]);
                  break;

                case 2:
                  a = p(a[3], a[1]);
                  break;

                default:
                  a = a[1];
              }

              a ? (g = a, g = g.trim && g.trim() || g.replace(/^\s+|\s+$/g, "")) : g = "";
              return g;
            }

            return -1 < e ? (k = a.substring(0, e), a = Number(a.substring(e + 1, d)), g = g[k], !isNaN(a) && g && (0 > a ? (b = g[g.length + a], "undefined" === typeof b && (b = g[0])) : (b = g[a], "undefined" === typeof b && (b = g[g.length - 1]))), "undefined" !== typeof b ? b : "") : "{" + a + "}";
          }

          var n = h.format,
              p = h.pick;

          a.i18nFormat = function (a, g, h) {
            var k = function k(a, b) {
              a = a.slice(b || 0);
              var c = a.indexOf("{"),
                  d = a.indexOf("}");
              if (-1 < c && d > c) return {
                statement: a.substring(c + 1, d),
                begin: b + c + 1,
                end: b + d
              };
            },
                e = [],
                d = 0;

            do {
              var b = k(a, d);
              var f = a.substring(d, b && b.begin - 1);
              f.length && e.push({
                value: f,
                type: "constant"
              });
              b && e.push({
                value: b.statement,
                type: "statement"
              });
              d = b ? b.end + 1 : d + 1;
            } while (b);

            e.forEach(function (a) {
              "statement" === a.type && (a.value = m(a.value, g));
            });
            return n(e.reduce(function (a, b) {
              return a + b.value;
            }, ""), g, h);
          };

          a.Chart.prototype.langFormat = function (h, g) {
            h = h.split(".");

            for (var l = this.options.lang, k = 0; k < h.length; ++k) {
              l = l && l[h[k]];
            }

            return "string" === typeof l ? a.i18nFormat(l, g, this) : "";
          };
        });
        r(a, "Accessibility/FocusBorder.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGLabel.js"], a["Core/Utilities.js"]], function (a, h, q, n) {
          function m(a) {
            if (!a.focusBorderDestroyHook) {
              var b = a.destroy;

              a.destroy = function () {
                var c, d;
                null === (d = null === (c = a.focusBorder) || void 0 === c ? void 0 : c.destroy) || void 0 === d ? void 0 : d.call(c);
                return b.apply(a, arguments);
              };

              a.focusBorderDestroyHook = b;
            }
          }

          function l(a) {
            for (var b = [], c = 1; c < arguments.length; c++) {
              b[c - 1] = arguments[c];
            }

            a.focusBorderUpdateHooks || (a.focusBorderUpdateHooks = {}, d.forEach(function (c) {
              c += "Setter";
              var d = a[c] || a._defaultSetter;
              a.focusBorderUpdateHooks[c] = d;

              a[c] = function () {
                var c = d.apply(a, arguments);
                a.addFocusBorder.apply(a, b);
                return c;
              };
            }));
          }

          function g(a) {
            a.focusBorderUpdateHooks && (Object.keys(a.focusBorderUpdateHooks).forEach(function (b) {
              var c = a.focusBorderUpdateHooks[b];
              c === a._defaultSetter ? delete a[b] : a[b] = c;
            }), delete a.focusBorderUpdateHooks);
          }

          var r = n.addEvent,
              k = n.extend,
              e = n.pick,
              d = "x y transform width height r d stroke-width".split(" ");
          k(h.prototype, {
            addFocusBorder: function addFocusBorder(b, d) {
              this.focusBorder && this.removeFocusBorder();
              var c = this.getBBox(),
                  f = e(b, 3);
              c.x += this.translateX ? this.translateX : 0;
              c.y += this.translateY ? this.translateY : 0;
              var g = c.x - f,
                  h = c.y - f,
                  k = c.width + 2 * f,
                  n = c.height + 2 * f,
                  p = this instanceof q;

              if ("text" === this.element.nodeName || p) {
                var r = !!this.rotation;
                if (p) var u = {
                  x: r ? 1 : 0,
                  y: 0
                };else g = u = 0, "middle" === this.attr("text-anchor") ? (u = a.isFirefox && this.rotation ? .25 : .5, g = a.isFirefox && !this.rotation ? .75 : .5) : this.rotation ? u = .25 : g = .75, u = {
                  x: u,
                  y: g
                };
                g = +this.attr("x") - c.width * u.x - f;
                h = +this.attr("y") - c.height * u.y - f;
                p && r && (p = k, k = n, n = p, g = +this.attr("x") - c.height * u.x - f, h = +this.attr("y") - c.width * u.y - f);
              }

              this.focusBorder = this.renderer.rect(g, h, k, n, parseInt((d && d.borderRadius || 0).toString(), 10)).addClass("highcharts-focus-border").attr({
                zIndex: 99
              }).add(this.parentGroup);
              this.renderer.styledMode || this.focusBorder.attr({
                stroke: d && d.stroke,
                "stroke-width": d && d.strokeWidth
              });
              l(this, b, d);
              m(this);
            },
            removeFocusBorder: function removeFocusBorder() {
              g(this);
              this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook);
              this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
            }
          });

          a.Chart.prototype.renderFocusBorder = function () {
            var a = this.focusElement,
                d = this.options.accessibility.keyboardNavigation.focusBorder;
            a && (a.removeFocusBorder(), d.enabled && a.addFocusBorder(d.margin, {
              stroke: d.style.color,
              strokeWidth: d.style.lineWidth,
              borderRadius: d.style.borderRadius
            }));
          };

          a.Chart.prototype.setFocusToElement = function (a, d) {
            var b = this.options.accessibility.keyboardNavigation.focusBorder;
            (d = d || a.element) && d.focus && (d.hcEvents && d.hcEvents.focusin || r(d, "focusin", function () {}), d.focus(), b.hideBrowserFocusOutline && (d.style.outline = "none"));
            this.focusElement && this.focusElement.removeFocusBorder();
            this.focusElement = a;
            this.renderFocusBorder();
          };
        });
        r(a, "Accessibility/Accessibility.js", [a["Accessibility/Utils/ChartUtilities.js"], a["Core/Globals.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Core/Options.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigation.js"], a["Accessibility/Components/LegendComponent.js"], a["Accessibility/Components/MenuComponent.js"], a["Accessibility/Components/SeriesComponent/SeriesComponent.js"], a["Accessibility/Components/ZoomComponent.js"], a["Accessibility/Components/RangeSelectorComponent.js"], a["Accessibility/Components/InfoRegionsComponent.js"], a["Accessibility/Components/ContainerComponent.js"], a["Accessibility/HighContrastMode.js"], a["Accessibility/HighContrastTheme.js"], a["Accessibility/Options/Options.js"], a["Accessibility/Options/LangOptions.js"], a["Accessibility/Options/DeprecatedOptions.js"]], function (a, h, q, n, p, l, g, r, k, e, d, b, f, c, w, A, z, t, E, B) {
          function m(a) {
            this.init(a);
          }

          var u = l.addEvent,
              v = l.extend,
              x = l.fireEvent,
              y = l.merge,
              D = h.win.document;
          y(!0, n.defaultOptions, t, {
            accessibility: {
              highContrastTheme: z
            },
            lang: E
          });
          h.A11yChartUtilities = a;
          h.KeyboardNavigationHandler = q;
          h.AccessibilityComponent = g;
          m.prototype = {
            init: function init(a) {
              this.chart = a;
              D.addEventListener && a.renderer.isSVG ? (B(a), this.initComponents(), this.keyboardNavigation = new r(a, this.components), this.update()) : a.renderTo.setAttribute("aria-hidden", !0);
            },
            initComponents: function initComponents() {
              var a = this.chart,
                  g = a.options.accessibility;
              this.components = {
                container: new w(),
                infoRegions: new c(),
                legend: new k(),
                chartMenu: new e(),
                rangeSelector: new f(),
                series: new d(),
                zoom: new b()
              };
              g.customComponents && v(this.components, g.customComponents);
              var h = this.components;
              this.getComponentOrder().forEach(function (b) {
                h[b].initBase(a);
                h[b].init();
              });
            },
            getComponentOrder: function getComponentOrder() {
              if (!this.components) return [];
              if (!this.components.series) return Object.keys(this.components);
              var a = Object.keys(this.components).filter(function (a) {
                return "series" !== a;
              });
              return ["series"].concat(a);
            },
            update: function update() {
              var a = this.components,
                  b = this.chart,
                  c = b.options.accessibility;
              x(b, "beforeA11yUpdate");
              b.types = this.getChartTypes();
              this.getComponentOrder().forEach(function (c) {
                a[c].onChartUpdate();
                x(b, "afterA11yComponentUpdate", {
                  name: c,
                  component: a[c]
                });
              });
              this.keyboardNavigation.update(c.keyboardNavigation.order);
              !b.highContrastModeActive && A.isHighContrastModeActive() && A.setHighContrastTheme(b);
              x(b, "afterA11yUpdate", {
                accessibility: this
              });
            },
            destroy: function destroy() {
              var a = this.chart || {},
                  b = this.components;
              Object.keys(b).forEach(function (a) {
                b[a].destroy();
                b[a].destroyBase();
              });
              this.keyboardNavigation && this.keyboardNavigation.destroy();
              a.renderTo && a.renderTo.setAttribute("aria-hidden", !0);
              a.focusElement && a.focusElement.removeFocusBorder();
            },
            getChartTypes: function getChartTypes() {
              var a = {};
              this.chart.series.forEach(function (b) {
                a[b.type] = 1;
              });
              return Object.keys(a);
            }
          };

          h.Chart.prototype.updateA11yEnabled = function () {
            var a = this.accessibility,
                b = this.options.accessibility;
            b && b.enabled ? a ? a.update() : this.accessibility = new m(this) : a ? (a.destroy && a.destroy(), delete this.accessibility) : this.renderTo.setAttribute("aria-hidden", !0);
          };

          u(h.Chart, "render", function (a) {
            this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
            var b = this.accessibility;
            b && b.getComponentOrder().forEach(function (a) {
              b.components[a].onChartRender();
            });
          });
          u(h.Chart, "update", function (a) {
            if (a = a.options.accessibility) a.customComponents && (this.options.accessibility.customComponents = a.customComponents, delete a.customComponents), y(!0, this.options.accessibility, a), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility);
            this.a11yDirty = !0;
          });
          u(p, "update", function () {
            this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
          });
          ["addSeries", "init"].forEach(function (a) {
            u(h.Chart, a, function () {
              this.a11yDirty = !0;
            });
          });
          ["update", "updatedData", "remove"].forEach(function (a) {
            u(h.Series, a, function () {
              this.chart.accessibility && (this.chart.a11yDirty = !0);
            });
          });
          ["afterDrilldown", "drillupall"].forEach(function (a) {
            u(h.Chart, a, function () {
              this.accessibility && this.accessibility.update();
            });
          });
          u(h.Chart, "destroy", function () {
            this.accessibility && this.accessibility.destroy();
          });
        });
        r(a, "masters/modules/accessibility.src.js", [], function () {});
      }); //# sourceMappingURL=accessibility.js.map

      /***/

    },

    /***/
    "YUlR":
    /*!***********************************************************************************!*\
      !*** ./src/app/vsan/common/component/unavailable-view/unavailable-view.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: UnavailableViewModule */

    /***/
    function YUlR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnavailableViewModule", function () {
        return UnavailableViewModule;
      });

      var UnavailableViewModule = /*#__PURE__*/_createClass(function UnavailableViewModule() {
        _classCallCheck(this, UnavailableViewModule);
      });
      /***/

    },

    /***/
    "Z7Pm":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/highcharts-properties.service.ts ***!
      \******************************************************************************/

    /*! exports provided: HighchartsPropertiesService */

    /***/
    function Z7Pm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighchartsPropertiesService", function () {
        return HighchartsPropertiesService;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/highcharts-tooltip.util */
      "Qgyt");

      var HighchartsPropertiesService = /*@__PURE__*/function () {
        var HighchartsPropertiesService = /*#__PURE__*/function () {
          function HighchartsPropertiesService(highchartsThemeService) {
            _classCallCheck(this, HighchartsPropertiesService);

            this.highchartsThemeService = highchartsThemeService;
            this.initBasicChartOptions();
          }
          /**
           * Gets the specific settings for highcharts 'bar' chart.
           * Mouse handlers are optional as they must be set on initial chart render only.
           */


          _createClass(HighchartsPropertiesService, [{
            key: "getBarChartOptions",
            value: function getBarChartOptions(mouseOverEvent, mouseOutEvent) {
              var barChartOptions = {
                chart: {
                  type: HighchartsPropertiesService.BAR_CHART,
                  height: 30,
                  margin: [0, 1, 0, 1],
                  spacing: 0
                },
                yAxis: {
                  // By default we hide the yAxis(set to false in the basic options), however for
                  // plot lines to work in bar charts we need the axis to be visible.
                  visible: true,
                  // To make the axis line "invisible", since we need to keep "visible:true"(see above why),
                  // we use line width 0 here.
                  gridLineWidth: 0,
                  // See https://stackoverflow.com/questions/16186427/highcharts-stacked-series-order-is-reversed
                  reversedStacks: false,
                  // Make sure the bar chart is spread within its container, if set to true sometimes a gap appears
                  endOnTick: false,
                  // This is calculated as % of the chart area.
                  // Allow some very small padding to avoid truncating the borders for stacked-bar chart
                  minPadding: 0.005,
                  maxPadding: 0.005,
                  labels: {
                    // See above "visible" is set to true for yAxis, but we don't want anything from the axis to
                    // appear, just the plot lines, thus set this to "enabled: false".
                    enabled: false
                  },
                  tickPositioner: function tickPositioner() {
                    return [0, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(this.dataMax)];
                  }
                },
                plotOptions: {
                  bar: {
                    pointWidth: 20
                  },
                  series: {
                    animation: false,
                    borderWidth: 0,
                    stacking: "normal",
                    states: {
                      hover: {
                        enabled: false
                      },
                      inactive: {
                        opacity: 1
                      }
                    }
                  }
                },
                tooltip: {
                  formatter: function formatter() {
                    var tooltipData;

                    if (_component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].hasSeriesCustomTooltipData(this.series)) {
                      tooltipData = _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].getSeriesCustomTooltipData(this.series);
                    } else if (_component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].hasPointCustomTooltipData(this.points)) {
                      // The series are shared, use the custom specified tooltip data
                      tooltipData = _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].getPointCustomTooltipData(this.points);
                    } else {
                      tooltipData = this.y;
                    }

                    if (tooltipData instanceof Map) {
                      return _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].formatTooltipData(tooltipData);
                    } else {
                      return this.series.name + ": " + _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(tooltipData);
                    }
                  }
                }
              };

              if (mouseOverEvent || mouseOutEvent) {
                barChartOptions.plotOptions.series.events = {};

                if (mouseOverEvent) {
                  barChartOptions.plotOptions.series.events.mouseOver = mouseOverEvent;
                }

                if (mouseOutEvent) {
                  barChartOptions.plotOptions.series.events.mouseOut = mouseOutEvent;
                }
              }

              var mergedOptions = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(this.options, barChartOptions);

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(mergedOptions, this.highchartsThemeService.getThemeOptions(_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_1__["HighchartsThemeService"].BAR_CHART));
            }
            /**
             * Provides options specific for pie charts
             */

          }, {
            key: "getPieChartOptions",
            value: function getPieChartOptions(onPointClick) {
              var pieChartOptions = {
                chart: {
                  type: HighchartsPropertiesService.PIE_CHART,
                  margin: [0, 1, 0, 1],
                  spacing: 0
                },
                plotOptions: {
                  pie: {
                    allowPointSelect: true,
                    slicedOffset: 0,
                    size: "75%",
                    cursor: "pointer",
                    dataLabels: {
                      allowOverlap: false,
                      enabled: true,
                      style: {
                        fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                        fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY,
                        fontWeight: "normal",
                        // Issue - pie data labels: unwanted text shadow when setting a hex color:
                        // https://github.com/highcharts/highcharts/issues/4010#issuecomment-298756176
                        textOutline: "0px"
                      },
                      format: "{point.name}",
                      distance: 30,
                      softConnector: false
                    },
                    borderWidth: 2
                  },
                  series: {
                    animation: {
                      duration: 500
                    },
                    point: {
                      events: {
                        // tslint:disable-next-line:no-empty
                        click: function click(event) {}
                      }
                    }
                  }
                },
                tooltip: {
                  formatter: function formatter() {
                    if (this.point.custom && this.point.custom.tooltipValue instanceof Map) {
                      return _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].formatTooltipData(this.point.custom.tooltipValue);
                    }

                    return "<strong>" + _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].formatFileSize(this.y) + "</strong>";
                  }
                }
              };

              if (onPointClick) {
                pieChartOptions.plotOptions.series.point.events.click = onPointClick;
              }

              var mergedOptions = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(this.options, pieChartOptions);

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(mergedOptions, this.highchartsThemeService.getThemeOptions(_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_1__["HighchartsThemeService"].PIE_CHART));
            }
            /**
             * Gets the common settings for a "histogram" chart that uses the "column" chart option.
             * This is the way to show data that has been aggregated in advance
             * as opposed to the raw 'histogram' chart which operates on raw data.
             */

          }, {
            key: "getColumnHistogramChartOptions",
            value: function getColumnHistogramChartOptions() {
              var columnChartOptions = {
                chart: {
                  type: HighchartsPropertiesService.COLUMN_CHART,
                  height: 300,
                  marginRight: 0
                },
                xAxis: {
                  type: "category",
                  // Column chart requires its x-axis, so make it visible
                  visible: true,
                  // Initialize the categories array, so that it can be populated later without having to create it
                  categories: [],
                  // Init the title object, so it can be populated later without having to create it
                  title: {
                    text: "",
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                    }
                  },
                  labels: {
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                    }
                  }
                },
                yAxis: {
                  // Column chart requires its y-axis, so make it visible
                  visible: true,
                  // Init the title object, so it can be populated later without having to create it
                  title: {
                    text: "",
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                    }
                  },
                  labels: {
                    format: "{value}",
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                    }
                  }
                },
                plotOptions: {
                  column: {
                    // Used to show the data labels between the columns, not in the middle. E.g. fake a histogram bucket.
                    pointPlacement: "between",
                    // Make the column width take the full space with small spacing between them.
                    pointPadding: 0.01,
                    groupPadding: 0,
                    borderWidth: 0,
                    // No animation on initial load.
                    animation: false
                  },
                  series: {
                    events: {
                      legendItemClick: function legendItemClick(e) {
                        e.preventDefault();
                      }
                    }
                  }
                },
                legend: {
                  // Show the highcharts default legend
                  enabled: true,
                  y: 10,
                  padding: 0,
                  itemStyle: {
                    fontWeight: "normal",
                    fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                    fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY,
                    cursor: "default"
                  }
                },
                tooltip: {
                  formatter: function formatter() {
                    var tooltip = "<span><b>".concat(this.key, "</b></span><br/>");

                    if (this.point.custom && this.point.custom.tooltipValues) {
                      tooltip += _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].formatTooltipData(this.point.custom.tooltipValues);
                    } else {
                      tooltip += "".concat(this.series.name, ": ").concat(this.y);
                    }

                    return tooltip;
                  }
                }
              };

              var mergedOptions = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(this.options, columnChartOptions);

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(mergedOptions, this.highchartsThemeService.getThemeOptions(_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_1__["HighchartsThemeService"].HISTOGRAM_COLUMN_CHART));
            }
            /**
             * Gets the common settings for a line chart, and it can be used in column-line chart too.
             */

          }, {
            key: "getColumnLineChartOptions",
            value: function getColumnLineChartOptions() {
              var columnLineChartOptions = {
                chart: {
                  type: HighchartsPropertiesService.LINE_CHART,
                  height: 300,
                  marginRight: 0
                },
                // Init the subtitle object in case we want to use it with the chart.
                subtitle: {
                  text: "",
                  style: {
                    fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                    fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                  }
                },
                // The line chart requires its x-axis and y-axis, so make them visible
                xAxis: {
                  visible: true,
                  labels: {
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                    }
                  },
                  crosshair: {
                    width: 1
                  }
                },
                yAxis: {
                  visible: true,
                  // Init the title object, so it can be populated later without having to create it
                  title: {
                    text: "",
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                    }
                  },
                  labels: {
                    format: "{value}",
                    style: {
                      fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                      fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY,
                      whiteSpace: "nowrap"
                    }
                  }
                },
                plotOptions: {
                  column: {
                    // Using this property to control the columns of each category to
                    // be displayed in stack style, not one besides one.
                    stacking: "normal",
                    pointWidth: 30,
                    borderWidth: 0
                  },
                  line: {
                    // No animation on initial load.
                    animation: false
                  },
                  series: {
                    // Hide the point marker, only visible on hover.
                    marker: {
                      enabled: false
                    },
                    events: {
                      legendItemClick: function legendItemClick(e) {
                        e.preventDefault();
                      }
                    }
                  }
                },
                legend: {
                  // Show the highcharts default legend
                  enabled: true,
                  itemStyle: {
                    fontWeight: "normal",
                    fontSize: HighchartsPropertiesService.DEFAULT_FONT_SIZE,
                    fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY
                  }
                },
                tooltip: {
                  formatter: function formatter() {
                    var tooltip = _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].getTooltipHeader(this.key, this.series, this.point.index);

                    if (_component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].hasSeriesCustomTooltipData(this.series)) {
                      tooltip += _component_chart_highcharts_tooltip_util__WEBPACK_IMPORTED_MODULE_2__["HighchartsTooltipUtil"].formatIndexedTooltipData(this.series, this.point.index);
                    } else {
                      tooltip += "".concat(this.series.name, ": ").concat(this.y);
                    }

                    return tooltip;
                  }
                }
              };

              var mergedOptions = _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(this.options, columnLineChartOptions);

              return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].deepmergeObjects(mergedOptions, this.highchartsThemeService.getThemeOptions(_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_1__["HighchartsThemeService"].COLUMN_LINE_CHART));
            }
          }, {
            key: "initBasicChartOptions",
            value: function initBasicChartOptions() {
              this.options = {
                title: {
                  // Don't show title on the chart
                  text: null
                },
                exporting: {
                  enabled: false,
                  // Keep this to avoid NPE when using TAB on the keyboard
                  accessibility: {
                    enabled: false
                  }
                },
                credits: {
                  // Don't show the highcharts logo and link on the chart
                  enabled: false
                },
                legend: {
                  // Don't show the highcharts default legend
                  enabled: false
                },
                // Hide X and Y axis lines and labels
                xAxis: {
                  visible: false,
                  title: false
                },
                yAxis: {
                  visible: false,
                  title: false
                },
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  // This function is needed because the chart's sections are dynamically calculated.
                  // Without it the chart doesn't render correctly.
                  events: {
                    // tslint:disable-next-line:only-arrow-functions
                    load: function load(event) {
                      event.target.reflow();
                    }
                  }
                },
                plotOptions: {
                  series: {
                    clip: false
                  }
                },
                tooltip: {
                  useHTML: true,
                  outside: true,
                  enabled: true,
                  hideDelay: 0,
                  backgroundColor: "#FFFFFF",
                  style: {
                    fontSize: HighchartsPropertiesService.TOOLTIP_FONT_SIZE,
                    fontFamily: HighchartsPropertiesService.DEFAULT_FONT_FAMILY,
                    lineHeight: HighchartsPropertiesService.TOOLTIP_LINE_HEIGHT
                  }
                }
              };
            }
          }, {
            key: "getAccessibilityConfig",
            value: function getAccessibilityConfig(enableKeyboardNavigation, description) {
              return {
                keyboardNavigation: {
                  enabled: enableKeyboardNavigation
                },
                screenReaderSection: {
                  beforeChartFormat: description
                }
              };
            }
          }, {
            key: "getSeriesAccessibilityConfig",
            value: function getSeriesAccessibilityConfig() {
              return {
                exposeAsGroupOnly: true
              };
            }
          }, {
            key: "getAccessibilityLangConfig",
            value: function getAccessibilityLangConfig() {
              return {
                accessibility: {
                  chartContainerLabel: _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.message.highcharts.nonInteractive.barchart.containerLabel"),
                  screenReaderSection: {
                    endOfChartMarker: _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.message.highcharts.nonInteractive.barchart.endOfChartMarker")
                  },
                  svgContainerLabel: _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.message.highcharts.nonInteractive.barchart.svgContainerLabel")
                }
              };
            }
          }, {
            key: "getPlotLine",
            value: function getPlotLine(id, label, value, color) {
              // Store the original label from the series here, as adding the tooltip overrides it,
              // then restore the value on mouseout event.
              var originalLabel; // Create plot line using the id, label, value and color.

              return {
                id: id,
                value: value,
                color: color,
                width: 3,
                zIndex: 5,
                events: {
                  // Copy/paste from http://url/6wd2, e.g. don't ask me what is going on here....
                  // I added comments to the code that I added, the rest is a big mistery.
                  mouseover: function mouseover(e) {
                    // Note that "this" points to the plotLine here
                    if (!this.axis || !this.axis.series || this.axis.series.length === 0) {
                      // Sanity check to avoid exceptions
                      return;
                    }

                    var series = this.axis.series[0];
                    var chart = series.chart;
                    var POINT_CLASS = series.pointClass;
                    var tooltip = chart.tooltip;
                    var point = new POINT_CLASS().init(series, ["Plotline", this.options.value]); // Change the series name to the specified label, but first store the current value.

                    originalLabel = point.series.name;
                    point.series.name = label; // Change the series color to the one used for the plot line

                    point.series.color = color;
                    var normalizedEvent = chart.pointer.normalize(e);
                    point.tooltipPos = [normalizedEvent.chartX - chart.plotLeft, normalizedEvent.chartY - chart.plotTop];
                    tooltip.refresh(point);
                  },
                  mouseout: function mouseout(e) {
                    if (!this.axis || !this.axis.series || this.axis.series.length === 0) {
                      // Sanity check to avoid exceptions
                      return;
                    } // Hide the tooltip and restore the label for the series to the original value.


                    this.axis.chart.tooltip.hide();
                    this.axis.series[0].name = originalLabel;
                  }
                }
              };
            }
            /**
             * Add message to let screen reader users know how to navigate the chart points with keyboard.
             * Details https://jira.eng.vmware.com/browse/VPAT-2463
             */

          }, {
            key: "applyScreenReaderMessage",
            value: function applyScreenReaderMessage(chartElement) {
              var a11yLabel = chartElement.getAttribute("aria-label") || "";
              a11yLabel += _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.monitor.performance.chart.a11y.screenReader.label");
              chartElement.setAttribute("aria-label", a11yLabel);
            }
          }]);

          return HighchartsPropertiesService;
        }();

        HighchartsPropertiesService.BAR_CHART = "bar";
        HighchartsPropertiesService.PIE_CHART = "pie";
        HighchartsPropertiesService.COLUMN_CHART = "column";
        HighchartsPropertiesService.LINE_CHART = "line";
        HighchartsPropertiesService.TOOLTIP_FONT_SIZE = "11px";
        HighchartsPropertiesService.DEFAULT_FONT_SIZE = "13px";
        HighchartsPropertiesService.DEFAULT_FONT_FAMILY = "metropolis";
        HighchartsPropertiesService.TOOLTIP_LINE_HEIGHT = "16px";
        return HighchartsPropertiesService;
      }();
      /***/

    },

    /***/
    "ZZcQ":
    /*!**************************************************************!*\
      !*** ./src/app/vsan/performance/model/nested-perf-entity.ts ***!
      \**************************************************************/

    /*! exports provided: NestedPerfEntity */

    /***/
    function ZZcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NestedPerfEntity", function () {
        return NestedPerfEntity;
      });
      /* harmony import */


      var _base_perf_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-perf-entity */
      "YGYr");
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */


      var NestedPerfEntity = /*#__PURE__*/function (_base_perf_entity__WE) {
        _inherits(NestedPerfEntity, _base_perf_entity__WE);

        var _super = _createSuper(NestedPerfEntity);

        function NestedPerfEntity() {
          _classCallCheck(this, NestedPerfEntity);

          return _super.apply(this, arguments);
        }

        return _createClass(NestedPerfEntity);
      }(_base_perf_entity__WEBPACK_IMPORTED_MODULE_0__["BasePerfEntity"]);
      /***/

    },

    /***/
    "bV/P":
    /*!*****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-chart.scss.shim.ngstyle.js ***!
      \*****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function bVP(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".chart-container[_ngcontent-%COMP%] {\n  border: 0.05rem solid var(--vsan-border-color);\n  border-radius: 0.15rem;\n}\n.chart-container[_ngcontent-%COMP%]     .chart {\n  width: 100% !important;\n  overflow: visible !important;\n}\n.chart-container[_ngcontent-%COMP%]     .chart .highcharts-container {\n  display: flex;\n  flex: 1 0 0rem;\n  width: 100% !important;\n}\n.chart-container[_ngcontent-%COMP%]     .chart div[aria-hidden=false] {\n  overflow: hidden;\n}\n.chart-container[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.chart-container[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%]   .chart-title-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 0rem;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n}\nclr-dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0rem;\n  margin-top: 0.3rem;\n  min-width: 0;\n}\n.expand[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.set-thresholds[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2NoYXJ0L3BlcmZvcm1hbmNlL3BlcmYtY2hhcnQuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tdXRpbHMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWRlZmF1bHRzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLWNvbG9ycy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsa0ZBQUE7QUNBQSw2RUFBQTtBREdBLGFBQUE7QURtQkE7Ozs7Q0FBQTtBQXVCQTs7O0VBQUE7QUc3Q0EsNkVBQUE7QUxHQTtFQUNHLDhDRzhDVztFSDdDWCxzQkdlUTtBSERYO0FBWkc7RUFDRyxzQkFBQTtFQUVBLDRCQUFBO0FBYU47QUFaTTtFQUNHLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFjVDtBQVhNO0VBQ0csZ0JBQUE7QUFhVDtBQVZHO0VBQ0csYUFBQTtFQUNBLHVCQUFBO0FBWU47QUFYTTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWFUO0FBUEc7RUFDRyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFVTjtBQU5BO0VBQ0csWUFBQTtBQVNIO0FBTEE7RUFDRyxZQUFBO0FBUUgiLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvY2hhcnQvcGVyZm9ybWFuY2UvcGVyZi1jaGFydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMTctMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gLS0gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Nzcy92c2FuLXV0aWxzLnNjc3NcIjtcblxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlcjtcbiAgIGJvcmRlci1yYWRpdXM6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplO1xuXG4gICA6Om5nLWRlZXAgLmNoYXJ0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAvLyBBdm9pZCB0cnVuY2F0aW9uIHdoZW4gbW92aW5nIGZvY3VzIHRvIHRoZSBjaGFydC5cbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAuaGlnaGNoYXJ0cy1jb250YWluZXIge1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGZsZXg6IDEgMCAwcmVtO1xuICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgZGl2W2FyaWEtaGlkZGVuPVwiZmFsc2VcIl0ge1xuICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgIH1cbiAgIC5jaGFydC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAuY2hhcnQtdGl0bGUtbGFiZWwge1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICBmbGV4OiAxIDAgMHJlbTtcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcgLyAyO1xuICAgICAgICAgcGFkZGluZy1ib3R0b206ICR2c2FuLWVsZW1lbnQtc3BhY2luZyAvIDI7XG4gICAgICB9XG4gICB9XG59XG5cbmNsci1kcm9wZG93biB7XG4gICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICB9XG59XG5cbi5leHBhbmQge1xuICAgbWluLXdpZHRoOiAwO1xufVxuXG4vLyBRRSB0ZXN0cyByZXF1aXJlIHR3byBkaWZmZXJlbnQgY2xhc3NlcyBpbiBvcmRlciB0byBkaXN0aW5ndWlzaCB0aGUgc2V0IHRocmVzaG9sZCBmcm9tIGV4cGFuZCBidXR0b25cbi5zZXQtdGhyZXNob2xkcyB7XG4gICBtaW4td2lkdGg6IDA7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuLy8gSW1wb3J0IHRoaXMgZmlsZSB0byBvdGhlciBzY3NzIGlmIG5lZWRlZC4gVGhpcyBmaWxlIHJlZmVycyBhbGwgdGhlIG5lZWRlZCBzY3NzIHJlc291cmNlcy5cbkBpbXBvcnQgXCIuL3ZzYW4tbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzXCI7IiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbkBpbXBvcnQgXCIuL3ZzYW4tZGVmYXVsdHMuc2Nzc1wiO1xuXG5AbWl4aW4gYWRkLWJvcmRlci1yYWRpdXMgKCRyYWRpdXMtdG9wLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLXRvcC1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLXJpZ2h0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy1ib3R0b20tbGVmdDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUpIHtcbiAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXMtdG9wLWxlZnQgJHJhZGl1cy10b3AtcmlnaHQgJHJhZGl1cy1ib3R0b20tcmlnaHQgJHJhZGl1cy1ib3R0b20tbGVmdDtcbn1cblxuQG1peGluIHRleHQtZWxsaXBzaXMge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLy8gQWRkIGJ1dHRvbiBmb2N1cyBzdGF0dXMgaW5kaWNhdG9yLlxuQG1peGluIGJ1dHRvbi1mb2N1cy1zdGF0ZSgkY29sb3I6ICR2c2FuLWxpbmstY29sb3IpIHtcbiAgIGJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICRjb2xvciAhaW1wb3J0YW50O1xuICAgYm94LXNoYWRvdzogMCAwICR2c2FuLW91dGxpbmUtc2l6ZSAkY29sb3I7XG59XG5cbi8qXG4gICBBZGQgYnV0dG9uIGZvY3VzIGluZGljYXRvciB3aXRoIG91dGxpbmUuXG4gICBJbiBoaWdoIGNvbnRyYXN0IG1vZGUsIHRoZSBib3JkZXIgaXMgbm90IHZpc2libGUuXG4gICBXZSBzaG91bGQgdXNlIGFuIG91dGxpbmUgdG8gc2hvdyBmb2N1c2VkIGVsZW1lbnRzIGluIHRoYXQgY2FzZS5cbiovXG5AbWl4aW4gYnRuLW91dGxpbmUtc3R5bGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBvdXRsaW5lLW9mZnNldDogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICFpbXBvcnRhbnQ7XG4gICBvdXRsaW5lOiAkdnNhbi1vdXRsaW5lLXNpemUtc21hbGwgKiAyIHNvbGlkICRjb2xvciAhaW1wb3J0YW50O1xufVxuXG4vLyBBZGQgY2FyZCBkcmFnIHN0YXRlIGluZGljYXRvci5cbkBtaXhpbiBjYXJkLW1vdmUtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgJHZzYW4tb3V0bGluZS1zaXplIDAgMCAkY29sb3I7XG59XG5cbkBtaXhpbiBkcmFnZ2FibGUtY2FyZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXg6IDAgMCBhdXRvO1xuICAgbWluLXdpZHRoOiAkdnNhbi1jYXJkLXdpZHRoO1xufVxuXG4vKipcbiAgIEluY2x1ZGUgdGhpcyBtaXhpbiBhdCA6aG9zdCBsZXZlbCB0byBtYWtlIGV2ZXJ5IHRvcCBsZXZlbCBjb21wb25lbnQgaW4gdGhlIHZpZXdcbiAgIGhhdmUgYSBib3R0b20gbWFyZ2luLCBiZXNpZGVzIHRoZSBsYXN0IG9uZS5cbiAqL1xuQG1peGluIGNoaWxkLWJvdHRvbS1zcGFjaW5nKCRlbGVtZW50LXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZykge1xuICAgPiAqIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRlbGVtZW50LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gY2xyLWJ1dHRvbi1ncm91cCxcbiAgID4gLnZzYW4tYWN0aW9ucyB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIG9mIGNsci1idXR0b24tZ3JvdXBzXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmcgIWltcG9ydGFudDtcbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuQG1peGluIHNpYmxpbmctcmlnaHQtc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgICYgPiAqIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICAmID4gY2xyLXNpZ25wb3N0IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVsZW1lbnQgaXMgYSBzaWducG9zdCByZWR1Y2UgdGhlIHNwYWNpbmcgcHJpb3IvYWZ0ZXIgaXQuXG4gICAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIFwicHJldmlvdXMgc2libGluZ1wiIHNlbGVjdG9yXG4gICAgICAvLyBzbyB0aGUgb25seSB3YXkgdG8gZml4IHRoZSBwcmV2aW91cyBlbGVtZW50J3Mgc3BhY2luZyBpcyB0byBhZGQgbmVnYXRpdmUgbWFyZ2luLWxlZnRcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICAmID4gY2xyLWljb24ge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItaWNvbnNcbiAgICAgIG1hcmdpbi1yaWdodDogJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYmVmb3JlIHRoZSBpY29uLCBrZWVwIGl0IGNsb3NlciB0byBpdC4gU2FtZSBhcyBydWxlIGFib3ZlLlxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICBtYXJnaW4tbGVmdDogLSRlbGVtZW50LXNwYWNpbmcgKyAkdnNhbi1pY29uLWRlZmF1bHQtc3BhY2luZyAhaW1wb3J0YW50OztcbiAgICAgIH1cbiAgIH1cbiAgID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIHN0eWxlIHdpdGggbGluZWFyIGdyYWRpZW50IHRvIGltaXRhdGUgc3RyaXBlc1xuQG1peGluIG5vLWNhcGFjaXR5LWJhY2tncm91bmQoJHNpemU6IDVweCwgJGNvbG9yOiB2YXIoLS12c2FuLWNvbG9yKSkge1xuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCAzNCUsICRjb2xvciAzNCUsICRjb2xvciA1MSUsIHRyYW5zcGFyZW50IDUxJSwgdHJhbnNwYXJlbnQgODQlLCAkY29sb3IgODQlLCAgJGNvbG9yIDEwMCUpO1xuICAgYmFja2dyb3VuZC1zaXplOiAkc2l6ZSAkc2l6ZTtcbn1cblxuQG1peGluIHNlbGVjdGVkLWVudGl0eS1mb250LXN0eWxlKCkge1xuICAgZm9udC1mYW1pbHk6ICdNZXRyb3BvbGlzJztcbiAgIGZvbnQtd2VpZ2h0OiAkdnNhbi1mb250LXdlaWdodC1zdHJvbmc7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIENyZWF0ZXMgYSBjaXJjbGVcbkBtaXhpbiBjaXJjbGUoJHNpemU6IDAuNnJlbSwgJGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLW1haW4sICRib3JkZXI6ICR2c2FuLWJvcmRlcikge1xuICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICBib3JkZXI6ICRib3JkZXI7XG4gICB3aWR0aDogJHNpemU7XG4gICBoZWlnaHQ6ICRzaXplO1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWNvbG9ycy5zY3NzXCI7XG5cbi8qIERlZmF1bHRzICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGVmYXVsdCBmb250LXNpemUgZnJvbSBDbGFyaXR5IFVJIHYuMy4wLjBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgaHRtbCB7XG4vLyAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICB9XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BhY2luZ3NcbiR2c2FuLXh4bDogMS44cmVtICFkZWZhdWx0OyAgIC8vIDM2cHhcbiR2c2FuLXhsOiAxLjJyZW0gIWRlZmF1bHQ7ICAgIC8vIDI0cHhcbiR2c2FuLWxnOiAwLjlyZW0gIWRlZmF1bHQ7ICAgIC8vIDE4cHhcbiR2c2FuLW1kOiAwLjZyZW0gIWRlZmF1bHQ7ICAgIC8vIDEycHhcbiR2c2FuLXNtOiAwLjQ1cmVtICFkZWZhdWx0OyAgIC8vIDlweFxuJHZzYW4teHM6IDAuM3JlbSAhZGVmYXVsdDsgICAgLy8gNnB4XG4kdnNhbi14eHM6IDAuMTVyZW0gIWRlZmF1bHQ7ICAvLyAzcHhcbiR2c2FuLXh4eHM6IDAuMDVyZW0gIWRlZmF1bHQ7IC8vIDFweFxuJHZzYW4tMDogMHJlbSAhZGVmYXVsdDtcblxuJHZzYW4tZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1tZDtcbiR2c2FuLWNvbnRhaW5lci1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcqMjtcbiR2c2FuLWJ1dHRvbi1ncm91cC1ib3R0b20tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nLzI7XG4vLyBGb3IgbmVzdGluZyBlbGVtZW50cyB3aXRoaW4gYSB2aWV3XG4kdnNhbi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXhsO1xuLy8gVGhlIGRyb3Bkb3duIGl0ZW1zIGFscmVhZHkgaGF2ZSAxLjJyZW0gcGFkZGluZywgc28gdG8gaGF2ZSBuZXN0ZWQgaXRlbXMgd2UgbmVlZCAxLjhyZW0gaW5kZW50YXRpb25cbiR2c2FuLWRyb3Bkb3duLW5lc3RlZC1pbmRlbnRhdGlvbjogJHZzYW4teHhsO1xuLy8gVXNlIHRoaXMgb3V0bGluZSBzaXplIGluIGRpYWxvZ3MvbW9kYWxzL3BhZ2VzLCB3aGVyZSB3ZSBoYXZlIGEgY29tcG9uZW50IGxpa2UgY2hlY2tib3gsIHRoYXQgaGFzIGFcbi8vIGJhY2tncm91bmQgY29sb3IsIHdoaWNoIG90aGVyd2lzZSBnZXRzIHRydW5jYXRlZC5cbiR2c2FuLW91dGxpbmUtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsOiAkdnNhbi14eHhzO1xuXG4vLyBJY29uc1xuJHZzYW4taWNvbi1zaXplLXhzOiAwLjdyZW0gIWRlZmF1bHQ7ICAgLy8xNHB4XG4kdnNhbi1pY29uLXNpemUtc206IDAuOHJlbSAhZGVmYXVsdDsgICAvLzE2cHhcbiR2c2FuLWljb24tc2l6ZS1tZDogMXJlbSAhZGVmYXVsdDsgICAgIC8vMjBweFxuJHZzYW4taWNvbi1zaXplLWxnOiAxLjJyZW0gIWRlZmF1bHQ7ICAgLy8yNHB4XG4kdnNhbi1pY29uLXNpemU6ICR2c2FuLWljb24tc2l6ZS1zbSAhZGVmYXVsdDsgICAgIC8vMTZweFxuJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmc6ICR2c2FuLXhzOyAgICAgIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHJlbGF0ZWQgdGV4dCwgZXRjLlxuXG4vLyBCb3JkZXJzXG4kdnNhbi1ib3JkZXItcG9zaXRpb24tYWxsOiBhbGwgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplOiAkdnNhbi14eHhzICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybjogc29saWQgIWRlZmF1bHQ7XG4kdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICAkdnNhbi1ib3JkZXItZGVmYXVsdC1wYXR0ZXJuICR2c2FuLWJvcmRlci1kZWZhdWx0LWNvbG9yO1xuJGJvcmRlci1oaWdobGlnaHQtY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvcik7XG4vLyBCb3JkZXIgUmFkaXVzXG4kdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZTogJHZzYW4teHhzO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1tZWRpdW0tc2l6ZTogJHZzYW4tc207XG4kdnNhbi1ib3JkZXItcmFkaXVzLXNtYWxsLXNpemU6ICR2c2FuLXh4eHM7XG5cbi8vIEJhY2tncm91bmQgJiBjb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yLW1haW46IHZhcigtLXZzYW4tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3IpO1xuJGJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQ6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1zZWxlY3RlZCk7XG4kYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3ZlcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbi1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1iYWNrZHJvcDogdmFyKC0tdnNhbi1idXN5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuJGRpc2FibGVkLWNvbG9yOiAkdnNhbi1saWdodC1taWR0b25lLWdyYXk7XG4kdnNhbi1saW5rLWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuJHZzYW4tZm9udC1jb2xvci1lbXBoYXNpemU6IHZhcigtLXZzYW4tZm9udC1jb2xvci1lbXBoYXNpemUpO1xuJHZzYW4taG92ZXItbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yLWhvdmVyKTtcbiR2c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tdGFibGUtcm93LWJvcmRlci1jb2xvcik7XG5cbi8vIENsYXJpdHkgdjQgY29sb3JzIGluIG9yZGVyIHRvIHJlc29sdmUgc29tZSBhY2Nlc3NpYmlsaXR5IGlzc3Vlc1xuJGxhYmVsLWluZm8tdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLXRleHQtY29sb3IpO1xuJGxhYmVsLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWluZm8tYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLWRhbmdlci10ZXh0LWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItYm9yZGVyLWNvbG9yKTtcbiR2c2FuLWZvY3VzLW91dGxpbmUtY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcjogdmFyKC0tdnNhbi1mb2N1cy1vdXRsaW5lLXNlbGVjdGVkLXJvdy1jb2xvcik7XG5cbiRiYWRnZS1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby10ZXh0LWNvbG9yKTtcbiRiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yKTtcbiRiYWRnZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yKTtcbiRiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1iYWRnZS1kYW5nZXItdGV4dC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuXG4vLyBzdGF0dXMgY29sb3JzXG4kc3RhdHVzLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1iZy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtc3VjY2Vzcy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWJnLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1pbmZvLWlubmVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1pbmZvLWlubmVyLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWJnLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy13YXJuaW5nLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy13YXJuaW5nLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1iZy1jb2xvcik7XG4kc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy1lcnJvci1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWVycm9yLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1iZy1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tYmFja2dyb3VuZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctc2Vjb25kYXJ5LWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWRldGFpbHMtY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJvcmRlci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1kZXRhaWxzLWNvbG9yKTtcblxuLy8gSWNvbiBjb2xvcnNcbiRpY29uLWZpbGwtY29sb3I6IHZhcigtLWljb24tZmlsbC1jb2xvcik7XG5cbi8vIEZvbnRcbiR2c2FuLWZvbnQtc2l6ZS14eHM6IDAuNXJlbSAhZGVmYXVsdDsgIC8vIDEwcHhcbiR2c2FuLWZvbnQtc2l6ZS14czogMC41NXJlbSAhZGVmYXVsdDsgIC8vIDExcHhcbiR2c2FuLWZvbnQtc2l6ZS1zbTogMC42NXJlbSAhZGVmYXVsdDsgIC8vIDEzcHhcbiR2c2FuLWZvbnQtc2l6ZS1tZDogMC43cmVtICFkZWZhdWx0OyAgIC8vIDE0cHhcbiR2c2FuLWZvbnQtc2l6ZS1sZzogMC45cmVtICFkZWZhdWx0OyAgIC8vIDE4cHhcbiR2c2FuLWZvbnQtc2l6ZS14bDogMS4ycmVtICFkZWZhdWx0OyAgIC8vIDI0cHhcbiR2c2FuLWZvbnQtZGVmYXVsdC1jb2xvcjogdmFyKC0tdnNhbi1jb2xvcik7XG4kdnNhbi1saW5lLWhlaWdodC1tZDogJHZzYW4teGw7XG4kdnNhbi1saW5lLWhlaWdodC1zbTogMC44cmVtOyAgIC8vMTZweFxuJHZzYW4tcmVsYXRpdmUtbGluZS1oZWlnaHQteHM6IDFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXNtOiAxLjFlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LW1kOiAxLjNlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhsOiAxLjVlbTtcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXh4bDogMmVtO1xuJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nOiA2MDA7XG4kdnNhbi1mb250LXdlaWdodC1oaWdobGlnaHQ6IDUwMDtcbiR2c2FuLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xuXG4vLyBaLWluZGV4ZXNcbiR2c2FuLXotaW5kZXgtbGF5ZXItMTogMTAwO1xuJHZzYW4tei1pbmRleC1sYXllci0yOiAyMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTM6IDMwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNDogNDAwO1xuJHZzYW4tei1pbmRleC1sYXllci01OiA1MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTY6IDYwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNzogNzAwO1xuJHZzYW4tei1pbmRleC1sYXllci04OiA4MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTk6IDkwMDtcbi8vIFVzZWQgdG8ga2VlcCB0aGUgZWxlbWVudCBhbHdheXMgb24gdGhlIHRvcCBsYXllci4gRG8gbm90IGNyZWF0ZSBjb25zdGFudCB3aXRoIGJpZ2dlciB2YWx1ZVxuJHZzYW4tei1pbmRleC1sYXllci10b3A6IDEwMDA7XG5cbi8vIE9wYWNpdHlcbiR2c2FuLWRpc2FibGVkLWVsZW1lbnQtb3BhY2l0eTogMC41NDtcblxuLy8gU3Bpbm5lcnMgLSB0aGUgc2l6ZSBpcyB0YWtlbiBmcm9tIENsYXJpdHkncyBkb2N1bWVudGF0aW9uIHYuMi4gVGhleSB3aWxsIGNoYW5nZSBpbiB2LjNcbiRzcGlubmVyLXNtLXNpemU6IDAuOXJlbTtcbiRzcGlubmVyLWlubGluZS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1tZC1zaXplOiAxLjhyZW07XG4kc3Bpbm5lci1sYXJnZS1zaXplOiAzLjZyZW07XG5cbi8vIENhcmRzIGxheW91dCBkZWZhdWx0c1xuJHZzYW4tY2FyZC13aWR0aDogMjRyZW07XG4kdnNhbi1jYXJkLW1heC13aWR0aDogMzZyZW07XG5cbi8vIENoZWNrZWQgcmFkaW8gYnV0dG9uIGJvcmRlciB3aWR0aCBpbiBoaWdoIGNvbnRyYXN0IG1vZGVcbiRoaWdoLWNvbnRyYXN0LXJhZGlvLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAqIDU7IC8vIGhpZ2ggY29udHJhc3QgbW9kZSBib3JkZXIgc2lkZSAwLjI1cmVtXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuJHZzYW4td2hpdGU6ICNmZmYgIWRlZmF1bHQ7XG4kdnNhbi1ibGFjazogIzAwMCAhZGVmYXVsdDtcbi8vIEdyZXkgU2NhbGVcbiR2c2FuLW5lYXItd2hpdGU6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1ncmF5OiAjZWVlICFkZWZhdWx0O1xuJHZzYW4tbGlnaHRlci1taWR0b25lLWdyYXk6ICNkZGQgIWRlZmF1bHQ7XG4kdnNhbi1saWdodC1taWR0b25lLWdyYXk6ICNjY2MgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLW1pZHRvbmUtZ3JheTogIzlhOWE5YSAhZGVmYXVsdDtcbiR2c2FuLWdyYXk6IHZhcigtLXZzYW4tZ3JheS1jb2xvcikgIWRlZmF1bHQ7XG4kdnNhbi1kYXJrLWdyYXk6ICM1NjU2NTYgIWRlZmF1bHQ7XG4kdnNhbi1uZWFyLWJsYWNrOiAjMzEzMTMxICFkZWZhdWx0O1xuLy8gR3JleSBCbHVlXG4kdnNhbi1ncmV5LWJsdWUtdGhlLWxpZ2h0ZXN0OiAjZjNmNmZhICFkZWZhdWx0O1xuJHZzYW4tZ3JleS1ibHVlLWxpZ2h0ZXN0OiAjRDlFNEVBICFkZWZhdWx0O1xuLy8gQmx1ZVxuJHZzYW4tYmx1ZTogIzAwNjVhYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXN0OiAjZTFmMWY2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHRlcjogIzg5Y2JkZiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0OiAjNDlhZmQ5ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtbGlnaHQtbWlkdG9uZTogIzAwOTVkMyAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyay1taWR0b25lOiAjMDA3Y2JiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLWJsdWUtZGFyazogIzAwNGE3MCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlcjogIzAwM2Q3OSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmtlc3Q6ICMwMDI0MzggIWRlZmF1bHQ7XG4vLyBQdXJwbGVcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHRlc3Q6ICNmM2U2ZmYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXI6ICNlMWM5ZjEgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0OiAjYmU5MGQ2ICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodC1taWR0b25lOiAjOWI1NmJiICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyay1taWR0b25lOiAjODkzOWFkICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNjYwMDkyICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXI6ICM0ZDAwN2EgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmtlc3Q6ICMyODEzMzYgIWRlZmF1bHQ7XG4vLyBSZWRcbiR2c2FuLXJlZC1saWdodGVzdDogI2ZmZjBlZSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodGVyOiAjZjVkYmQ5ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0OiAjZjhiN2I2ICFkZWZhdWx0O1xuJHZzYW4tcmVkLWxpZ2h0LW1pZHRvbmU6ICNlNjI3MDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQ6ICNjOTIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFyay1taWR0b25lOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcms6ICNhMzIxMDAgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtZGFya2VyOiAjN2QyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBZZWxsb3dcbiR2c2FuLXllbGxvdy1saWdodGVzdDogI2ZmZmNlOCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodGVyOiAjZmVmM2I1ICFkZWZhdWx0O1xuJHZzYW4teWVsbG93OiAjZmZkYzBiICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWxpZ2h0LW1pZHRvbmU6ICNmZjljMzIgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFyay1taWR0b25lOiAjZDM2MDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcms6ICNjMjU0MDAgIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctZGFya2VyOiAjYWE0NTAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlc3Q6ICM2NDIxMDAgIWRlZmF1bHQ7XG4vLyBHcmVlblxuJHZzYW4tZ3JlZW4tbGlnaHRlc3Q6ICNkZmYwZDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodGVyOiAjYzdlNTljICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW46ICM2MGI1MTUgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1saWdodC1taWR0b25lOiAjNjJhNDIwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyay1taWR0b25lOiAjMzE4NzAwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tZGFyazogIzI2NjkwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlcjogIzFkNTEwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmtlc3Q6ICMwZjI5MDAgIWRlZmF1bHQ7XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTkgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cblxuLy8gVGhlc2UgY29ycmVzcG9uZCB0byBDbGFyaXR5J3MgY2xyLWNvbCBzaXplc1xuJGJyZWFrcG9pbnRzLXNocmluazogKFxuICAgICAgJ3NtJzogKG1heC13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1heC13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1heC13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1heC13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1heC1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuJGJyZWFrcG9pbnRzLWV4cGFuZDogKFxuICAgICAgJ3NtJzogKG1pbi13aWR0aDogNTc2cHgpLFxuICAgICAgJ21kJzogKG1pbi13aWR0aDogNzY4cHgpLFxuICAgICAgJ2xnJzogKG1pbi13aWR0aDogOTkycHgpLFxuICAgICAgJ3hsJzogKG1pbi13aWR0aDogMTIwMHB4KSxcbiAgICAgICdzbS12JzogKG1pbi1oZWlnaHQ6IDc2N3B4KVxuKSAhZGVmYXVsdDtcblxuQG1peGluIHJlc3BvbmQtdG8tc2hyaW5rKCRicmVha3BvaW50KSB7XG4gICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpIHtcbiAgICAgIEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMtc2hyaW5rLCAkYnJlYWtwb2ludCkpfSB7XG4gICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgIH0gQGVsc2Uge1xuICAgICAgQHdhcm4gXCJVbmZvcnR1bmF0ZWx5LCBubyB2YWx1ZSBjb3VsZCBiZSByZXRyaWV2ZWQgZnJvbSBgI3skYnJlYWtwb2ludH1gLiBcIlxuICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMtc2hyaW5rKX0uXCI7XG4gICB9XG59XG5cbkBtaXhpbiByZXNwb25kLXRvLWV4cGFuZCgkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLWV4cGFuZCwgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLWV4cGFuZCl9LlwiO1xuICAgfVxufVxuIl19 */"];
      /***/
    },

    /***/
    "cFlq":
    /*!************************************************************************!*\
      !*** ./src/app/vsan/common/component/inventory/tree-view/tree-node.ts ***!
      \************************************************************************/

    /*! exports provided: TreeNode */

    /***/
    function cFlq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeNode", function () {
        return TreeNode;
      });
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @clr/angular */
      "X69f");
      /* Copyright 2019-2020 VMware, Inc. All rights reserved. -- VMware Confidential */


      var TreeNode = /*#__PURE__*/function () {
        function TreeNode(objectInfo) {
          var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var onClrSelectedStateChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, TreeNode);

          this.objectInfo = objectInfo;
          this.nodes = nodes;
          this.onClrSelectedStateChange = onClrSelectedStateChange;
          this._clrSelectedState = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectedState"].UNSELECTED;
          this.isExpanded = false;
          this.children = nodes;
        }

        _createClass(TreeNode, [{
          key: "children",
          get: function get() {
            return this._childNodes;
          },
          set: function set(nodes) {
            this._childNodes = !!nodes ? nodes : [];
          }
        }, {
          key: "clrSelectedState",
          get: function get() {
            return this._clrSelectedState;
          },
          set: function set(value) {
            var _this7 = this;

            if (value != this._clrSelectedState) {
              this._clrSelectedState = value; // Timeout in order to wait for clarity to update the selected state of the children/parent

              setTimeout(function () {
                _this7.onClrSelectedStateChange && _this7.onClrSelectedStateChange(_this7);
              });
            }
          }
        }, {
          key: "isSelected",
          value: function isSelected() {
            return this.clrSelectedState === _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectedState"].SELECTED;
          }
        }]);

        return TreeNode;
      }();
      /***/

    },

    /***/
    "haik":
    /*!****************************************************************!*\
      !*** ./node_modules/highcharts/modules/histogram-bellcurve.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function haik(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      Highcharts JS v8.2.0 (2020-08-20)
      (c) 2010-2019 Highsoft AS
      Author: Sebastian Domas
      License: www.highcharts.com/license
      */


      (function (a) {
        true && module.exports ? (a["default"] = a, module.exports = a) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "6n/F")], __WEBPACK_AMD_DEFINE_RESULT__ = function (c) {
          a(c);
          a.Highcharts = c;
          return a;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function (a) {
        function c(f, a, d, c) {
          f.hasOwnProperty(a) || (f[a] = c.apply(null, d));
        }

        a = a ? a._modules : {};
        c(a, "Mixins/DerivedSeries.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, c) {
          var f = c.addEvent,
              p = c.defined,
              l = a.Series;
          return {
            hasDerivedData: !0,
            init: function init() {
              l.prototype.init.apply(this, arguments);
              this.initialised = !1;
              this.baseSeries = null;
              this.eventRemovers = [];
              this.addEvents();
            },
            setDerivedData: a.noop,
            setBaseSeries: function setBaseSeries() {
              var b = this.chart,
                  a = this.options.baseSeries;
              this.baseSeries = p(a) && (b.series[a] || b.get(a)) || null;
            },
            addEvents: function addEvents() {
              var b = this;
              var a = f(this.chart, "afterLinkSeries", function () {
                b.setBaseSeries();
                b.baseSeries && !b.initialised && (b.setDerivedData(), b.addBaseSeriesEvents(), b.initialised = !0);
              });
              this.eventRemovers.push(a);
            },
            addBaseSeriesEvents: function addBaseSeriesEvents() {
              var a = this;
              var c = f(a.baseSeries, "updatedData", function () {
                a.setDerivedData();
              });
              var d = f(a.baseSeries, "destroy", function () {
                a.baseSeries = null;
                a.initialised = !1;
              });
              a.eventRemovers.push(c, d);
            },
            destroy: function destroy() {
              this.eventRemovers.forEach(function (a) {
                a();
              });
              l.prototype.destroy.apply(this, arguments);
            }
          };
        });
        c(a, "Series/HistogramSeries.js", [a["Core/Utilities.js"], a["Mixins/DerivedSeries.js"]], function (a, c) {
          function f(a) {
            return function (h) {
              for (var b = 1; a[b] <= h;) {
                b++;
              }

              return a[--b];
            };
          }

          var p = a.arrayMax,
              l = a.arrayMin,
              b = a.correctFloat,
              m = a.isNumber,
              k = a.merge,
              r = a.objectEach;
          a = a.seriesType;
          var g = {
            "square-root": function squareRoot(a) {
              return Math.ceil(Math.sqrt(a.options.data.length));
            },
            sturges: function sturges(a) {
              return Math.ceil(Math.log(a.options.data.length) * Math.LOG2E);
            },
            rice: function rice(a) {
              return Math.ceil(2 * Math.pow(a.options.data.length, 1 / 3));
            }
          };
          a("histogram", "column", {
            binsNumber: "square-root",
            binWidth: void 0,
            pointPadding: 0,
            groupPadding: 0,
            grouping: !1,
            pointPlacement: "between",
            tooltip: {
              headerFormat: "",
              pointFormat: "<span style=\"font-size: 10px\">{point.x} - {point.x2}</span><br/><span style=\"color:{point.color}\">\u25CF</span> {series.name} <b>{point.y}</b><br/>"
            }
          }, k(c, {
            setDerivedData: function setDerivedData() {
              var a = this.baseSeries.yData;
              a.length && (a = this.derivedData(a, this.binsNumber(), this.options.binWidth), this.setData(a, !1));
            },
            derivedData: function derivedData(a, e, c) {
              var h = p(a),
                  g = b(l(a)),
                  n = [],
                  d = {},
                  k = [];
              c = this.binWidth = b(m(c) ? c || 1 : (h - g) / e);
              this.options.pointRange = Math.max(c, 0);

              for (e = g; e < h && (this.userOptions.binWidth || b(h - e) >= c || 0 >= b(b(g + n.length * c) - e)); e = b(e + c)) {
                n.push(e), d[e] = 0;
              }

              0 !== d[g] && (n.push(b(g)), d[b(g)] = 0);
              var q = f(n.map(function (a) {
                return parseFloat(a);
              }));
              a.forEach(function (a) {
                a = b(q(a));
                d[a]++;
              });
              r(d, function (a, h) {
                k.push({
                  x: Number(h),
                  y: a,
                  x2: b(Number(h) + c)
                });
              });
              k.sort(function (a, h) {
                return a.x - h.x;
              });
              return k;
            },
            binsNumber: function binsNumber() {
              var a = this.options.binsNumber,
                  b = g[a] || "function" === typeof a && a;
              return Math.ceil(b && b(this.baseSeries) || (m(a) ? a : g["square-root"](this.baseSeries)));
            }
          }));
          "";
        });
        c(a, "Series/BellcurveSeries.js", [a["Core/Utilities.js"], a["Mixins/DerivedSeries.js"]], function (a, c) {
          function d(a) {
            var b = a.length;
            a = a.reduce(function (a, b) {
              return a + b;
            }, 0);
            return 0 < b && a / b;
          }

          function f(a, b) {
            var c = a.length;
            b = m(b) ? b : d(a);
            a = a.reduce(function (a, c) {
              c -= b;
              return a + c * c;
            }, 0);
            return 1 < c && Math.sqrt(a / (c - 1));
          }

          function l(a, b, c) {
            a -= b;
            return Math.exp(-(a * a) / (2 * c * c)) / (c * Math.sqrt(2 * Math.PI));
          }

          var b = a.correctFloat,
              m = a.isNumber,
              k = a.merge;
          a = a.seriesType;
          a("bellcurve", "areaspline", {
            intervals: 3,
            pointsInInterval: 3,
            marker: {
              enabled: !1
            }
          }, k(c, {
            setMean: function setMean() {
              this.mean = b(d(this.baseSeries.yData));
            },
            setStandardDeviation: function setStandardDeviation() {
              this.standardDeviation = b(f(this.baseSeries.yData, this.mean));
            },
            setDerivedData: function setDerivedData() {
              1 < this.baseSeries.yData.length && (this.setMean(), this.setStandardDeviation(), this.setData(this.derivedData(this.mean, this.standardDeviation), !1));
            },
            derivedData: function derivedData(a, b) {
              var c = this.options.intervals,
                  e = this.options.pointsInInterval,
                  d = a - c * b;
              c = c * e * 2 + 1;
              e = b / e;
              var f = [],
                  g;

              for (g = 0; g < c; g++) {
                f.push([d, l(d, a, b)]), d += e;
              }

              return f;
            }
          }));
          "";
        });
        c(a, "masters/modules/histogram-bellcurve.src.js", [], function () {});
      }); //# sourceMappingURL=histogram-bellcurve.js.map

      /***/

    },

    /***/
    "iTcJ":
    /*!**************************************************************!*\
      !*** ./node_modules/highcharts/modules/offline-exporting.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function iTcJ(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*
      Highcharts JS v8.2.0 (2020-08-20)
      Client side exporting module
      (c) 2015-2019 Torstein Honsi / Oystein Moseng
      License: www.highcharts.com/license
      */


      (function (a) {
        true && module.exports ? (a["default"] = a, module.exports = a) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "6n/F"), __webpack_require__(
        /*! highcharts/modules/exporting */
        "AxlJ")], __WEBPACK_AMD_DEFINE_RESULT__ = function (f) {
          a(f);
          a.Highcharts = f;
          return a;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function (a) {
        function f(a, b, p, d) {
          a.hasOwnProperty(b) || (a[b] = d.apply(null, p));
        }

        a = a ? a._modules : {};
        f(a, "Extensions/DownloadURL.js", [a["Core/Globals.js"]], function (a) {
          var b = a.win,
              p = b.navigator,
              d = b.document,
              f = b.URL || b.webkitURL || b,
              w = /Edge\/\d+/.test(p.userAgent),
              e = a.dataURLtoBlob = function (a) {
            if ((a = a.match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/)) && 3 < a.length && b.atob && b.ArrayBuffer && b.Uint8Array && b.Blob && f.createObjectURL) {
              var k = b.atob(a[3]),
                  e = new b.ArrayBuffer(k.length);
              e = new b.Uint8Array(e);

              for (var d = 0; d < e.length; ++d) {
                e[d] = k.charCodeAt(d);
              }

              a = new b.Blob([e], {
                type: a[1]
              });
              return f.createObjectURL(a);
            }
          };

          a = a.downloadURL = function (a, f) {
            var l = d.createElement("a");

            if ("string" === typeof a || a instanceof String || !p.msSaveOrOpenBlob) {
              a = "" + a;
              if (w || 2E6 < a.length) if (a = e(a) || "", !a) throw Error("Failed to convert to blob");
              if ("undefined" !== typeof l.download) l.href = a, l.download = f, d.body.appendChild(l), l.click(), d.body.removeChild(l);else try {
                var k = b.open(a, "chart");
                if ("undefined" === typeof k || null === k) throw Error("Failed to open window");
              } catch (B) {
                b.location.href = a;
              }
            } else p.msSaveOrOpenBlob(a, f);
          };

          return {
            dataURLtoBlob: e,
            downloadURL: a
          };
        });
        f(a, "Extensions/OfflineExporting.js", [a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"], a["Extensions/DownloadURL.js"]], function (a, b, f, d, G) {
          function w(a, b) {
            var g = k.getElementsByTagName("head")[0],
                c = k.createElement("script");
            c.type = "text/javascript";
            c.src = a;
            c.onload = b;

            c.onerror = function () {
              l("Error loading script " + a);
            };

            g.appendChild(c);
          }

          var e = b.win,
              k = b.doc,
              p = d.addEvent,
              l = d.error,
              H = d.extend,
              B = d.getOptions,
              D = d.merge,
              A = G.downloadURL,
              E = e.URL || e.webkitURL || e,
              x = e.navigator,
              C = /Edge\/|Trident\/|MSIE /.test(x.userAgent),
              I = C ? 150 : 0;
          b.CanVGRenderer = {};

          b.svgToDataUrl = function (a) {
            var b = -1 < x.userAgent.indexOf("WebKit") && 0 > x.userAgent.indexOf("Chrome");

            try {
              if (!b && 0 > x.userAgent.toLowerCase().indexOf("firefox")) return E.createObjectURL(new e.Blob([a], {
                type: "image/svg+xml;charset-utf-16"
              }));
            } catch (g) {}

            return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(a);
          };

          b.imageToDataUrl = function (a, b, g, c, d, m, f, n, t) {
            var h = new e.Image(),
                r = function r() {
              setTimeout(function () {
                var e = k.createElement("canvas"),
                    m = e.getContext && e.getContext("2d");

                try {
                  if (m) {
                    e.height = h.height * c;
                    e.width = h.width * c;
                    m.drawImage(h, 0, 0, e.width, e.height);

                    try {
                      var y = e.toDataURL(b);
                      d(y, b, g, c);
                    } catch (F) {
                      _q(a, b, g, c);
                    }
                  } else f(a, b, g, c);
                } finally {
                  t && t(a, b, g, c);
                }
              }, I);
            },
                z = function z() {
              n(a, b, g, c);
              t && t(a, b, g, c);
            };

            var _q = function q() {
              h = new e.Image();
              _q = m;
              h.crossOrigin = "Anonymous";
              h.onload = r;
              h.onerror = z;
              h.src = a;
            };

            h.onload = r;
            h.onerror = z;
            h.src = a;
          };

          b.downloadSVGLocal = function (a, d, g, c) {
            function f(a, b) {
              var c = a.width.baseVal.value + 2 * b;
              b = a.height.baseVal.value + 2 * b;
              c = new e.jsPDF(b > c ? "p" : "l", "pt", [c, b]);
              [].forEach.call(a.querySelectorAll('*[visibility="hidden"]'), function (a) {
                a.parentNode.removeChild(a);
              });
              e.svg2pdf(a, c, {
                removeInvalid: !0
              });
              return c.output("datauristring");
            }

            function m() {
              t.innerHTML = a;
              var b = t.getElementsByTagName("text"),
                  e;
              [].forEach.call(b, function (a) {
                ["font-family", "font-size"].forEach(function (b) {
                  for (var c = a; c && c !== t;) {
                    if (c.style[b]) {
                      a.style[b] = c.style[b];
                      break;
                    }

                    c = c.parentNode;
                  }
                });
                a.style["font-family"] = a.style["font-family"] && a.style["font-family"].split(" ").splice(-1);
                e = a.getElementsByTagName("title");
                [].forEach.call(e, function (b) {
                  a.removeChild(b);
                });
              });
              b = f(t.firstChild, 0);

              try {
                A(b, r), c && c();
              } catch (J) {
                g(J);
              }
            }

            var l = !0,
                n = d.libURL || B().exporting.libURL,
                t = k.createElement("div"),
                h = d.type || "image/png",
                r = (d.filename || "chart") + "." + ("image/svg+xml" === h ? "svg" : h.split("/")[1]),
                p = d.scale || 1;
            n = "/" !== n.slice(-1) ? n + "/" : n;
            if ("image/svg+xml" === h) try {
              if ("undefined" !== typeof x.msSaveOrOpenBlob) {
                var q = new MSBlobBuilder();
                q.append(a);
                var u = q.getBlob("image/svg+xml");
              } else u = b.svgToDataUrl(a);

              A(u, r);
              c && c();
            } catch (y) {
              g(y);
            } else if ("application/pdf" === h) e.jsPDF && e.svg2pdf ? m() : (l = !0, w(n + "jspdf.js", function () {
              w(n + "svg2pdf.js", function () {
                m();
              });
            }));else {
              u = b.svgToDataUrl(a);

              var v = function v() {
                try {
                  E.revokeObjectURL(u);
                } catch (y) {}
              };

              b.imageToDataUrl(u, h, {}, p, function (a) {
                try {
                  A(a, r), c && c();
                } catch (F) {
                  g(F);
                }
              }, function () {
                var b = k.createElement("canvas"),
                    d = b.getContext("2d"),
                    m = a.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1] * p,
                    f = a.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1] * p,
                    z = function z() {
                  d.drawSvg(a, 0, 0, m, f);

                  try {
                    A(x.msSaveOrOpenBlob ? b.msToBlob() : b.toDataURL(h), r), c && c();
                  } catch (K) {
                    g(K);
                  } finally {
                    v();
                  }
                };

                b.width = m;
                b.height = f;
                e.canvg ? z() : (l = !0, w(n + "rgbcolor.js", function () {
                  w(n + "canvg.js", function () {
                    z();
                  });
                }));
              }, g, g, function () {
                l && v();
              });
            }
          };

          a.prototype.getSVGForLocalExport = function (a, e, g, c) {
            var d = this,
                m = 0,
                f,
                n,
                l,
                h,
                k = function k() {
              m === q.length && c(d.sanitizeSVG(f.innerHTML, n));
            },
                r = function r(a, b, c) {
              ++m;
              c.imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
              k();
            };

            d.unbindGetSVG = p(d, "getSVG", function (a) {
              n = a.chartCopy.options;
              f = a.chartCopy.container.cloneNode(!0);
            });
            d.getSVGForExport(a, e);
            var q = f.getElementsByTagName("image");

            try {
              if (!q.length) {
                c(d.sanitizeSVG(f.innerHTML, n));
                return;
              }

              var u = 0;

              for (l = q.length; u < l; ++u) {
                var v = q[u];
                (h = v.getAttributeNS("http://www.w3.org/1999/xlink", "href")) ? b.imageToDataUrl(h, "image/png", {
                  imageElement: v
                }, a.scale, r, g, g, g) : (++m, v.parentNode.removeChild(v), k());
              }
            } catch (y) {
              g(y);
            }

            d.unbindGetSVG();
          };

          a.prototype.exportChartLocal = function (a, e) {
            var d = this,
                c = D(d.options.exporting, a),
                k = function k(a) {
              !1 === c.fallbackToExportServer ? c.error ? c.error(c, a) : l(28, !0) : d.exportChart(c);
            };

            a = function a() {
              return [].some.call(d.container.getElementsByTagName("image"), function (a) {
                a = a.getAttribute("href");
                return "" !== a && 0 !== a.indexOf("data:");
              });
            };

            C && d.styledMode && (f.prototype.inlineWhitelist = [/^blockSize/, /^border/, /^caretColor/, /^color/, /^columnRule/, /^columnRuleColor/, /^cssFloat/, /^cursor/, /^fill$/, /^fillOpacity/, /^font/, /^inlineSize/, /^length/, /^lineHeight/, /^opacity/, /^outline/, /^parentRule/, /^rx$/, /^ry$/, /^stroke/, /^textAlign/, /^textAnchor/, /^textDecoration/, /^transform/, /^vectorEffect/, /^visibility/, /^x$/, /^y$/]);
            C && ("application/pdf" === c.type || d.container.getElementsByTagName("image").length && "image/svg+xml" !== c.type) || "application/pdf" === c.type && a() ? k("Image type not supported for this chart/browser.") : d.getSVGForLocalExport(c, e, k, function (a) {
              -1 < a.indexOf("<foreignObject") && "image/svg+xml" !== c.type ? k("Image type not supportedfor charts with embedded HTML") : b.downloadSVGLocal(a, H({
                filename: d.getFilename()
              }, c), k);
            });
          };

          D(!0, B().exporting, {
            libURL: "https://code.highcharts.com/8.2.0/lib/",
            menuItemDefinitions: {
              downloadPNG: {
                textKey: "downloadPNG",
                onclick: function onclick() {
                  this.exportChartLocal();
                }
              },
              downloadJPEG: {
                textKey: "downloadJPEG",
                onclick: function onclick() {
                  this.exportChartLocal({
                    type: "image/jpeg"
                  });
                }
              },
              downloadSVG: {
                textKey: "downloadSVG",
                onclick: function onclick() {
                  this.exportChartLocal({
                    type: "image/svg+xml"
                  });
                }
              },
              downloadPDF: {
                textKey: "downloadPDF",
                onclick: function onclick() {
                  this.exportChartLocal({
                    type: "application/pdf"
                  });
                }
              }
            }
          });
        });
        f(a, "masters/modules/offline-exporting.src.js", [], function () {});
      }); //# sourceMappingURL=offline-exporting.js.map

      /***/

    },

    /***/
    "nH3z":
    /*!***********************************************************!*\
      !*** ./src/app/vsan/common/util/performance/perf-data.ts ***!
      \***********************************************************/

    /*! exports provided: PerfChangeContext, PerfData */

    /***/
    function nH3z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChangeContext", function () {
        return PerfChangeContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfData", function () {
        return PerfData;
      });
      /* harmony import */


      var _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @component/chart/performance/graph-metrics.data */
      "H1HU");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");
      /* harmony import */


      var _component_chart_performance_flat_graph_metric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/performance/flat-graph-metric */
      "vjFZ");
      /* harmony import */


      var _performance_util_perf_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../performance/util/perf-utils */
      "RAUQ");
      /**
       * Used to indicate type of the events which are managed by perf-orchestrator-service
       */


      var PerfChangeContext = /*@__PURE__*/function (PerfChangeContext) {
        /*
         * Used when view mode is changed. There are 2 modes Average mode (Cluster level metrics)
         * and Specific mode(Show Specific VMs)
         */
        PerfChangeContext[PerfChangeContext["MODE_CHANGED"] = 0] = "MODE_CHANGED";
        /*
         * Modes have states. For example Specifics mode (Show Specific VMs)
         * has consolidated view state and separate view state
         */

        PerfChangeContext[PerfChangeContext["STATE_CHANGED"] = 1] = "STATE_CHANGED";
        /*
         * When entities has been changed by filtration or user entities selection
         */

        PerfChangeContext[PerfChangeContext["FILTERED_ENTITIES"] = 2] = "FILTERED_ENTITIES";
        /*
         * When entities are selected, base entity data is loaded for this selected entities.
         * After that perf data should be loaded and this field is used to indicate that perf data fetching
         */

        PerfChangeContext[PerfChangeContext["METRICS_FETCHED"] = 3] = "METRICS_FETCHED";
        /*
         * When time range picker is changed
         */

        PerfChangeContext[PerfChangeContext["TIME_RANGE_CHANGED"] = 4] = "TIME_RANGE_CHANGED";
        return PerfChangeContext;
      }({});
      /**
       * This class keeps all needed data for multiple entities performance
       * such as base perf objects, graphs, metrics and so on.
       *
       * This data is used in perf-orchestrator-service
       */


      var PerfData = /*#__PURE__*/function () {
        function PerfData(change) {
          var _this8 = this;

          _classCallCheck(this, PerfData);

          this.change = change;
          /**
           * Holds data for all selected entities in order to avoid fetch it again
           */

          this.entities = [];
          /*
          * This object keeps selected entities from user. For these entities performance charts should be displayed.
          */

          this.selectedEntities = [];
          /*
          * This objects keep map in order to fast accessing GraphMetric object by entity moRef id
          */

          this.entitiesGraphDataCache = new Map();
          /*
          * Keeps entity data with all of it's graphs (IOPS, Throughput, Latency) and performance data for given time range
          * For example let's get IOPS, you have "Read IOPS", "Write IOPS" types of graphs.
          * In GraphMetric has entityIdentification(name, id, moRef),
          * graphs for entity (for example Vm entity has IOPS, Throughput and Latency graphs)
          * and data for each of this graphs for selected time range.
          */

          this.entitiesGraphData = [];
          /*
           * This object is used in order to fast accessing FlatGraphMetric object by entity moRef id
           *
           * Note: FlatGraphMetric keeps entity identification such as id, name, moRef.
           * Also keeps all metrics for specific chart.
           * For example, IOPS chart has 2 types of metrics "Read IOPS" and "Write IOPS".
           */

          this.flatMetricCacheMap = new Map();
          /*
          * This keeps entity data for one graph
          * For example FlatGraphMetric keeps entity identification object where is stored name, uuid, moRef,
          * graph representation object and entity performance data for this graph
          */

          this.entitiesFlatData = [];
          /*
          * This map keeps selection state of every loaded entity
          * For example
          * {
          *  vm-51: false,
          *  vm-58: true
          * }
          * This means that vm-58 is selected and vm-51 is not. This map is used in order to load and
          * show perf charts only for selected entities
          */

          this.entitySelectionStateMap = new Map();
          /*
          * This method aggregate loaded performance data for selected entities to more consumable way for perf-chart component
          * Here are set some highcharts options together with graphs and entity data.
          * In other words, method returns all needed data to display chart for concrete entity chart
          */

          this.getSpecifiedEntitiesFlatDataByGraph = function (graph) {
            if (_this8.entitiesFlatData == null) {
              return null;
            }

            var consolidatedMetricsForSpecifiedEntities = [];
            var lineStyleTypes = ["Solid", "ShortDash", "ShortDot", "ShortDashDot"];
            var lineStyleMap = new Map();
            var legendGraphTypesMap = graph.metrics.map(function (z) {
              return {
                key: z.key,
                label: z.label
              };
            });

            for (var i = 0; i < legendGraphTypesMap.length; i++) {
              lineStyleMap[legendGraphTypesMap[i].key] = lineStyleTypes[i];
              consolidatedMetricsForSpecifiedEntities.push({
                name: legendGraphTypesMap[i].label,
                metricName: legendGraphTypesMap[i].label,
                key: legendGraphTypesMap[i].key,
                entityIdentifier: null,
                data: null,
                isLegend: true,
                lineStyle: lineStyleTypes[i]
              });
            }

            var graphMetricKeys = graph.metrics.map(function (metric) {
              return metric.key;
            });
            /*
             * Get all flat data that is for metrics which are contained in graphMetricKeys
             *
             * Note: For each entity in specifiedEntitiesFlatData get metrics and check if at least one is contained in
             * graphMetricKeys, graphMetricKeys represents all keys of searched graph's metrics.
             */

            _this8.entitiesFlatData.filter(function (entity) {
              return entity.graph.metrics.find(function (entityGraphMetric) {
                return graphMetricKeys.find(function (key) {
                  return key === entityGraphMetric.key;
                }) != null;
              });
            }).forEach(function (metric) {
              metric.metrics.metricsSeries.forEach(function (value) {
                // Get legend graph by current entity's graph key
                var graphSet = legendGraphTypesMap.find(function (x) {
                  return x.key === value.key;
                });

                if (!graphSet) {
                  return;
                }

                consolidatedMetricsForSpecifiedEntities.push({
                  name: "".concat(graphSet.label, " ").concat(metric.entityIdentifier.name),
                  metricName: graphSet.label,
                  key: value.key,
                  entityIdentifier: metric.entityIdentifier,
                  data: value.values,
                  isLegend: false,
                  lineStyle: lineStyleMap[value.key]
                });
              });
            });

            return consolidatedMetricsForSpecifiedEntities;
          };
        }

        _createClass(PerfData, [{
          key: "specifiedEntitiesMetrics",
          get: function get() {
            return this._specifiedEntitiesMetrics;
          },
          set: function set(value) {
            var _this9 = this;

            this._specifiedEntitiesMetrics = value;
            this.entitiesGraphData = value.map(function (metric) {
              var entity = _performance_util_perf_utils__WEBPACK_IMPORTED_MODULE_3__["PerformanceUtils"].getPerfEntityByUuid(_this9.entities, metric.entityRefId);

              var graphs = entity.configSpec.graphs.map(function (graph) {
                return _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_1__["PerfChartUtil"].getGraphDefinition(graph);
              });
              var graphMetric = new _component_chart_performance_graph_metrics_data__WEBPACK_IMPORTED_MODULE_0__["GraphMetric"](metric, graphs);
              graphMetric.entityIdentifier = {
                id: entity.entityIdentifier,
                name: entity.entityName,
                refId: metric.entityRefId
              };
              return graphMetric;
            });
            this.entitiesFlatData = [];
            this.flatMetricCacheMap = new Map();
            this.entitiesGraphDataCache = new Map();
            this.entitiesGraphData.forEach(function (entry) {
              var _this9$entitiesFlatDa;

              if (!_this9.entitiesGraphDataCache[entry.entityIdentifier.refId]) {
                _this9.entitiesGraphDataCache[entry.entityIdentifier.refId] = [];
              }

              _this9.entitiesGraphDataCache[entry.entityIdentifier.refId].push(entry);

              (_this9$entitiesFlatDa = _this9.entitiesFlatData).push.apply(_this9$entitiesFlatDa, _toConsumableArray(entry.graphs.map(function (graph) {
                return new _component_chart_performance_flat_graph_metric__WEBPACK_IMPORTED_MODULE_2__["FlatGraphMetric"](entry.entityRefId, entry.metrics, graph, entry.entityIdentifier);
              })));

              entry.graphs.forEach(function (graph) {
                var _this9$flatMetricCach;

                if (_this9.flatMetricCacheMap[graph.id] == null) {
                  _this9.flatMetricCacheMap[graph.id] = [];
                }

                (_this9$flatMetricCach = _this9.flatMetricCacheMap[graph.id]).push.apply(_this9$flatMetricCach, _toConsumableArray(_this9.getSpecifiedEntitiesFlatDataByGraph(graph)));
              });
            });
            this.change.next(PerfChangeContext.METRICS_FETCHED);
          }
        }]);

        return PerfData;
      }();
      /***/

    },

    /***/
    "q8Rp":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-chart.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PerfChartComponent */

    /***/
    function q8Rp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartComponent", function () {
        return PerfChartComponent;
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


      var _component_chart_model_chart_plot_line_selection_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/model/chart-plot-line-selection.data */
      "Xqq1");
      /* harmony import */


      var _component_chart_model_perf_graph_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/model/perf-graph-id */
      "Xlmv");
      /* harmony import */


      var _component_chart_performance_series_point_hovered__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @component/chart/performance/series-point-hovered */
      "zFpl");
      /* harmony import */


      var _service_managed_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @service/managed-object */
      "sNBm");
      /* harmony import */


      var _util_modal_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @util/modal-builder */
      "A5CE");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! highcharts/highcharts */
      "6n/F");
      /* harmony import */


      var highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! highcharts/modules/export-data */
      "1op0");
      /* harmony import */


      var highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! highcharts/modules/exporting */
      "AxlJ");
      /* harmony import */


      var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! highcharts/modules/offline-exporting */
      "iTcJ");
      /* harmony import */


      var highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _chart_zoom_option__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./chart-zoom-option */
      "wAmQ");
      /* harmony import */


      var _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./perf-chart-util */
      "3For");
      /* Copyright 2017-2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default()(highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8__);
      highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_11___default()(highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8__);
      highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_9___default()(highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8__);

      var PerfChartComponent = /*@__PURE__*/function () {
        var PerfChartComponent = /*#__PURE__*/function () {
          function PerfChartComponent(highchartsThemeService, highchartsService, perfOrchestrator, refWatcher) {
            var _this10 = this;

            _classCallCheck(this, PerfChartComponent);

            this.highchartsThemeService = highchartsThemeService;
            this.highchartsService = highchartsService;
            this.perfOrchestrator = perfOrchestrator;
            this.refWatcher = refWatcher;
            this.containerId = "";
            this.showSmall = false;
            this.index = 0;
            this.tooltipVisible = true;
            this.showChartTitle = true;
            this.showExpandButton = true;
            this.showExportButton = true;
            /**
             * Emits a ChartZoomOption object when the chart has been zoomed.
             */

            this.zoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
            this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onPlotLineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onTooltipActionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * Emits when the chart finishes loading.
             */

            this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * Indicates if the chart is very small, currently only used for the performance for support view
             */

            this.looseXAxisLabel = false;
            this.legendPosition = _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].LEGEND_BOTTOM;
            this.isZoomAllowed = true;
            this.keepPlotLineOnClick = false;
            this.pointHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); // Fire an event when the zoom level changes

            this.afterSetExtremesXAxisCallback = function (event) {
              if (event.target.categories.length < 2) {
                // no need to zoom if there are less than 2 points
                return;
              }

              var zoomOption = new _chart_zoom_option__WEBPACK_IMPORTED_MODULE_13__["ChartZoomOption"]();
              zoomOption.min = event.min;
              zoomOption.max = event.max;
              zoomOption.dataMin = event.dataMin;
              zoomOption.dataMax = event.dataMax;
              /*
              * Check should be == because when chart is being initializing 'dataMax' and 'dataMin' props are null
              * but 'min' and 'max' are undefined, so check shouldn't be on strong type comparison
              * */
              // tslint:disable-next-line:triple-equals

              if (event.dataMax == event.max && event.dataMin == event.min) {
                zoomOption.isZoomOut = true;
              } // tslint:disable-next-line:triple-equals


              if (_this10.isZoomAllowed && _this10.zoomOptions != zoomOption) {
                _this10.zoom.emit(zoomOption);

                _this10.extremes = zoomOption;
              }
            }; // Fire an event when the series are hovered


            this.seriesMouseOverCallback = function (event) {
              _this10.emitHoveredPoint(event, true);
            }; // Fire an event when the series are hovered out


            this.seriesMouseOutCallback = function (event) {
              _this10.emitHoveredPoint(event, false);
            };

            this.onPlotLineClicked = function (point) {
              var xAxisIndex = point.index;
              _this10._selectedPlotLineValue = _this10.metrics.timeStamps[xAxisIndex];

              _this10.emitOnPlotLineChaged(xAxisIndex);
            };

            this.updatePlotLine = function () {
              if (!_this10._selectedPlotLineValue) {
                return;
              }

              var plotLineIndex = _this10.metrics.timeStamps.indexOf(_this10._selectedPlotLineValue);

              _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].addPlotLine(_this10.chart, plotLineIndex);

              _this10.emitOnPlotLineChaged(plotLineIndex);
            };

            this.refreshOnThresholdChange = function (threshold) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var plotBands;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this._customizableThreshold = threshold;
                        plotBands = _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].getThresholdBands(_perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].getThreshold(this.graph, this.metrics, this._customizableThreshold), this.chart.yAxis[0].max);
                        this.chart.yAxis[0].update({
                          plotBands: plotBands
                        });

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            };

            this.getChartFileName = function () {
              return _this10.graph.label;
            };

            this.refWatcher.watchSubscriptionRef(this.highchartsThemeService.whenThemeChanged.subscribe(function () {
              _this10.applyHighChartThemeOptions();

              if (_this10.chart) {
                _this10.chart.update(_this10.options);
              }
            }));
          }
          /**
           * Metrics to be shown
           */


          _createClass(PerfChartComponent, [{
            key: "metrics",
            get: function get() {
              return this._metrics;
            },
            set: function set(val) {
              if (this.isRealtime && this.chart) {
                this.drawNewPoints(val);
              } else {
                this._metrics = val;
              }
            }
          }, {
            key: "customizableThresholds",
            set: function set(value) {
              this._customizableThreshold = _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].getCustomizableThreshold(this.graph, value);
            }
          }, {
            key: "selectedPlotLineValue",
            set: function set(value) {
              if (value === this._selectedPlotLineValue) {
                return;
              }

              this._selectedPlotLineValue = value;

              if (this.chart) {
                this.updatePlotLine();
              }
            }
          }, {
            key: "showSetThresholdButton",
            get: function get() {
              return !!this._customizableThreshold;
            }
            /**
             * Sets the zoom level of the current chart.
             */

          }, {
            key: "extremes",
            set: function set(zoomOption) {
              if (!zoomOption || !this.isZoomAllowed) {
                return;
              } // if the chart is still not created, keep the zoomOptions and update it on drawChart


              if (!this.chart || Object.keys(this.chart).length === 0) {
                this.zoomOptions = zoomOption;
                return;
              } // Prevent zooming ioInsight charts because of an issue


              if (this.graph && this.graph.isHistogram) {
                return;
              }

              var xExtremes = this.chart.xAxis[0].getExtremes(); // Revert zoom

              if (zoomOption.isZoomOut) {
                this.chart.xAxis[0].setExtremes(xExtremes.dataMin, xExtremes.dataMax);
                return;
              } // Check if the zoomed chart has different data length, if true then don't zoom


              if (zoomOption.dataMin !== xExtremes.dataMin || zoomOption.dataMax !== xExtremes.dataMax) {
                return;
              } // Use default values from the charts configuration


              var min = xExtremes.dataMin;
              var max = xExtremes.dataMax; // If the given min value is suitable, use it

              if (zoomOption.min && xExtremes.dataMin < zoomOption.min) {
                min = zoomOption.min;
              } // If the given max value is suitable, use it


              if (zoomOption.max && xExtremes.dataMax > zoomOption.max) {
                max = zoomOption.max;
              } // Update the zoom level


              this.chart.xAxis[0].setExtremes(min, max);
            }
          }, {
            key: "pointHoveredOption",
            set: function set(val) {
              var _a, _b;

              if (!this.chart || this.chart.container.id === val.chartId) {
                return;
              }

              var points = [];

              if (val.isSharedTooltip) {
                // For shared tooltip get all series points for the particular x-point.
                points = (_a = this.chart.series) === null || _a === void 0 ? void 0 : _a.map(function (chartSeries) {
                  return chartSeries === null || chartSeries === void 0 ? void 0 : chartSeries.points[val.xIndex];
                });
              } else {
                points = [(_b = this.chart.series[val.seriesIndex]) === null || _b === void 0 ? void 0 : _b.points[val.xIndex]];
              }
              /** Filter:
               *  - undefined points to avoid NPE.
               *  - points with different x-axis labels.
               */


              points = points.filter(function (point) {
                return !!point && point.category === val.xLabel;
              });

              if (points.length) {
                var chart = points[0].series.chart;

                if (val.isHover) {
                  // For shared tooltips use array of points, otherwise a single point. If not an error will be thrown.
                  var pointOrPoints = val.isSharedTooltip ? points : points[0]; // Show tooltip (point is automatically hovered) and crossHair.

                  chart.tooltip.refresh(pointOrPoints);
                  chart.xAxis[0].drawCrosshair(null, pointOrPoints);
                } else {
                  points.forEach(function (point) {
                    return point.setState("");
                  });
                  chart.tooltip.hide();
                }
              }
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.setChartData();
                        this.options = this.buildOptions(this.afterSetExtremesXAxisCallback, this._customizableThreshold, this.seriesMouseOverCallback, this.seriesMouseOutCallback);
                        this.applyHighChartThemeOptions();

                        if (!this.isZoomAllowed) {
                          delete this.options.chart.zoomType;
                        }

                        _context2.next = 6;
                        return this.drawChart();

                      case 6:
                        this.updatePlotLine();

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
            /**
             * Chart data is needed for QE tests, related to chart's verification
             */

          }, {
            key: "setChartData",
            value: function setChartData() {
              this.chartContainer.nativeElement.chartData = {
                metrics: !this.metrics ? this.consolidatedMetrics : this.metrics,
                isConsolidated: !!this.consolidatedMetrics,
                graph: this.graph,
                customizableThreshold: this._customizableThreshold
              }; // Set timestamps when consolidated mode is enabled

              if (!!this.consolidatedMetrics && this.perfOrchestrator.data.specifiedEntitiesMetrics.length > 0) {
                this.chartContainer.nativeElement.chartData.timestamps = this.perfOrchestrator.data.specifiedEntitiesMetrics[0].timeStamps;
              }
            }
          }, {
            key: "emitHoveredPoint",
            value: function emitHoveredPoint(event, isHover) {
              this.pointHovered.emit(new _component_chart_performance_series_point_hovered__WEBPACK_IMPORTED_MODULE_4__["SeriesPointHovered"](event.target.series.chart.container.id, isHover, event.target.series.tooltipOptions.shared, event.target.series.index, event.target.index, event.target.category));
            }
          }, {
            key: "drawChart",
            value: function drawChart() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // Use id to avoid error "RangeError: Maximum callstack exceeded is produced".
                        this.options.chart.renderTo = this.chartElement.nativeElement.id; // We use clr-accordion to display multiple entities in perf-entities-data.perf.html,
                        // when expanding accordion panel, the chart container has not yet been rendered,
                        // wait for the chart container and draw the chart if its container exists.

                        if (this.hasChartContainer()) {
                          _context3.next = 4;
                          break;
                        }

                        _context3.next = 4;
                        return this.waitForChartContainer();

                      case 4:
                        // Add description to help screen reader users understand the chart.
                        this.options.accessibility = {
                          enabled: true,
                          description: this.graph.description
                        }; // Initialize chart

                        this.chart = highcharts_highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"](this.options);
                        this.chart.getFilename = this.getChartFileName;
                        this.refWatcher.watchChartRef(this.chart);
                        this.extremes = this.zoomOptions;

                        if (this.chartWidth && this.chartHeight) {
                          this.chart.setSize(this.chartWidth, this.chartHeight);
                        } else if (this.showSmall) {
                          // Set small size if chart is in compact mode
                          this.chart.setSize(PerfChartComponent.SMALL_CHART_WIDTH, PerfChartComponent.SMALL_CHART_HEIGHT);
                        } else if (!!this.consolidatedMetrics) {
                          // Set bigger size for consolidated charts because they can contain metrics for up to 10 vms
                          this.chart.setSize(this.chartContainer.nativeElement.width, PerfChartComponent.CONSOLIDATED_CHART_HEIGHT);
                        }

                        this.highchartsService.applyScreenReaderMessage(this.chartElement.nativeElement); // Fire an event when the chart is initialized

                        this.load.emit(this.chart);

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }, {
            key: "waitForChartContainer",
            value: function waitForChartContainer() {
              var _this11 = this;

              if (this.hasChartContainer()) {
                return Promise.resolve();
              }

              return new Promise(function (resolve) {
                _this11.refWatcher.setTimeout(function () {
                  resolve(_this11.waitForChartContainer());
                }, PerfChartComponent.WAIT_FOR_CHART_CONTAINER_TIME);
              });
            }
          }, {
            key: "hasChartContainer",
            value: function hasChartContainer() {
              // the value of renderTo is the id of chart container.
              return !!document.getElementById(this.options.chart.renderTo.toString());
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.options = null;
              this.chartContainer.nativeElement.chartData = null;
              this.chartContainer = null;
              this.chartElement = null;
            }
          }, {
            key: "buildOptions",
            value: function buildOptions(afterSetExtremesXAxisCallback, customizableThreshold, seriesMouseOverCallback, seriesMouseOutCallback) {
              if (this.consolidatedMetrics) {
                return this.loadConsolidatedMetricsChartSettings(afterSetExtremesXAxisCallback, customizableThreshold, seriesMouseOverCallback, seriesMouseOutCallback);
              } else {
                return this.loadSeparatedMetricsChartSettings(afterSetExtremesXAxisCallback, customizableThreshold, this.metrics, seriesMouseOverCallback, seriesMouseOutCallback);
              }
            }
          }, {
            key: "loadConsolidatedMetricsChartSettings",
            value: function loadConsolidatedMetricsChartSettings(afterSetExtremesXAxisCallback, customizableThreshold, seriesMouseOverCallback, seriesMouseOutCallback) {
              var _this12 = this;

              if (_util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].isEmpty(this.perfOrchestrator.data.specifiedEntitiesMetrics)) {
                return;
              } // Get first entity from the selected and use timestamps for initialize chart XAxis and YAxis


              var firstEntityPerfData = this.perfOrchestrator.data.specifiedEntitiesMetrics[0];
              var config = {
                entityRefId: this.entityRefId,
                graph: this.graph,
                firstEntityPerfData: firstEntityPerfData,
                consolidatedMetrics: this.consolidatedMetrics,
                entityIdentifierToColor: this.consolidatedEntitiesData.entityIdentifierToColor,
                index: this.index,
                looseXAxisLabel: this.looseXAxisLabel,
                legendPosition: this.legendPosition
              }; // Load consolidated chart settings for all selected entities.

              var options = _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].getConsolidatedChartOptions(config, afterSetExtremesXAxisCallback, customizableThreshold, seriesMouseOverCallback, seriesMouseOutCallback);

              this.refWatcher.watchSubscriptionRef(this.perfOrchestrator.consolidatedViewHelper.change.subscribe(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!(data == null || _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].isEmpty(data))) {
                            _context4.next = 2;
                            break;
                          }

                          return _context4.abrupt("return");

                        case 2:
                          config.consolidatedMetrics = this.perfOrchestrator.getSpecifiedEntitiesFlatDataByGraph(this.graph);
                          this.options = _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].getConsolidatedChartOptions(config, afterSetExtremesXAxisCallback, customizableThreshold, seriesMouseOverCallback, seriesMouseOutCallback);
                          this.applyHighChartThemeOptions();
                          _context4.next = 7;
                          return this.drawChart();

                        case 7:
                          // update to QE's chartData with the already styled consolidated metrics
                          if (this.chartContainer && this.chartContainer.nativeElement.chartData) {
                            this.chartContainer.nativeElement.chartData.metrics = config.consolidatedMetrics;
                          }

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              }));
              return options;
            }
          }, {
            key: "loadSeparatedMetricsChartSettings",
            value: function loadSeparatedMetricsChartSettings(afterSetExtremesXAxisCallback, customizableThreshold, metrics, seriesMouseOverCallback, seriesMouseOutCallback) {
              var plotLineCallback = this.keepPlotLineOnClick ? this.onPlotLineClicked : null;
              var tooltipActionLink = Object.values(_component_chart_model_perf_graph_id__WEBPACK_IMPORTED_MODULE_3__["PefGraphId"]).includes(this.graph.id) ? this.actionLink : null; // Load common chart settings

              return _perf_chart_util__WEBPACK_IMPORTED_MODULE_14__["PerfChartUtil"].getChartOptions(this.entityRefId, this.graph, metrics, this.index, this.looseXAxisLabel, this.legendPosition, afterSetExtremesXAxisCallback, customizableThreshold, this.keepPlotLineOnClick, plotLineCallback, tooltipActionLink, seriesMouseOverCallback, seriesMouseOutCallback);
            }
          }, {
            key: "emitOnPlotLineChaged",
            value: function emitOnPlotLineChaged(xAxisIndex) {
              var selectionData = new _component_chart_model_chart_plot_line_selection_data__WEBPACK_IMPORTED_MODULE_2__["ChartPlotLineSelectionData"]();
              selectionData.timePoint = this.metrics.timeStamps[xAxisIndex];
              selectionData.seriesValues = this.chart.userOptions.series.map(function (series) {
                var chartSeries = series;
                var seriesData = new _component_chart_model_chart_plot_line_selection_data__WEBPACK_IMPORTED_MODULE_2__["ChartMetricSelectionData"]();
                seriesData.metricKey = chartSeries.metricKey;
                seriesData.metricLabel = chartSeries.name;
                seriesData.value = chartSeries.data[xAxisIndex];
                return seriesData;
              });
              this.onPlotLineChanged.emit(selectionData);
            }
          }, {
            key: "applyHighChartThemeOptions",
            value: function applyHighChartThemeOptions() {
              var chartType = this.graph.isHistogram ? _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_12__["HighchartsThemeService"].HISTOGRAM_CHART : _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_12__["HighchartsThemeService"].COLUMN_LINE_CHART;

              if (this.options.yAxis && !Array.isArray(this.options.yAxis)) {
                var defaultThemeOptions = this.highchartsThemeService.getThemeOptions(chartType);
                this.options = _util_vsan_util__WEBPACK_IMPORTED_MODULE_7__["VsanUiUtils"].deepmergeObjects(this.options, defaultThemeOptions);
                return;
              }

              this.options = this.highchartsThemeService.getThemeOptionsWithMultipleYAxis(this.options, chartType);
            }
          }, {
            key: "exportPNG",
            value: function exportPNG() {
              this.chart.exportChartLocal({
                type: "image/png"
              }, null);
            }
          }, {
            key: "exportJPEG",
            value: function exportJPEG() {
              this.chart.exportChartLocal({
                type: "image/jpeg"
              }, null);
            }
          }, {
            key: "exportSVG",
            value: function exportSVG() {
              this.chart.exportChartLocal({
                type: "image/svg+xml"
              }, null);
            }
          }, {
            key: "exportCSV",
            value: function exportCSV() {
              this.chart.downloadCSV.call(this.chart);
            }
          }, {
            key: "setThreshold",
            value: function setThreshold() {
              var context = {
                hostRef: _service_managed_object__WEBPACK_IMPORTED_MODULE_5__["ManagedObject"].contextObject,
                metricLabel: this.graph.label,
                threshold: this._customizableThreshold,
                graphUnit: this.graph.unit
              };
              new _util_modal_builder__WEBPACK_IMPORTED_MODULE_6__["ModalBuilder"]("chart/setThreshold").setSize(550, 270).open(context).then(this.refreshOnThresholdChange);
            }
          }, {
            key: "drawNewPoints",
            value: function drawNewPoints(newMetrics) {
              var newOptions = this.loadSeparatedMetricsChartSettings(this.afterSetExtremesXAxisCallback, this._customizableThreshold, newMetrics, this.seriesMouseOverCallback, this.seriesMouseOutCallback);
              this.chart.series.forEach(function (series, index) {
                var data = newOptions.series[index].data;
                series.setData(data);
              });
            }
          }, {
            key: "clickout",
            value: function clickout(e) {
              if (typeof e.target.className !== "string" || !e.target.className.includes("tooltip-action")) {
                return;
              }

              var selectionData = new _component_chart_model_chart_plot_line_selection_data__WEBPACK_IMPORTED_MODULE_2__["ChartPlotLineSelectionData"]();
              selectionData.graphId = e.target.attributes.graphid.value;
              selectionData.timePoint = e.target.attributes.timepoint.value;
              this.onTooltipActionClicked.emit(selectionData);
            }
          }]);

          return PerfChartComponent;
        }();

        PerfChartComponent.SMALL_CHART_WIDTH = 240;
        PerfChartComponent.SMALL_CHART_HEIGHT = 200;
        PerfChartComponent.CONSOLIDATED_CHART_HEIGHT = 400;
        PerfChartComponent.WAIT_FOR_CHART_CONTAINER_TIME = 100; // 0.1 seconds

        return PerfChartComponent;
      }();
      /***/

    },

    /***/
    "qY5k":
    /*!*******************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-chart.component.ngfactory.js ***!
      \*******************************************************************************************/

    /*! exports provided: RenderType_PerfChartComponent, View_PerfChartComponent_0, View_PerfChartComponent_Host_0, PerfChartComponentNgFactory */

    /***/
    function qY5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerfChartComponent", function () {
        return RenderType_PerfChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartComponent_0", function () {
        return View_PerfChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartComponent_Host_0", function () {
        return View_PerfChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartComponentNgFactory", function () {
        return PerfChartComponentNgFactory;
      });
      /* harmony import */


      var _perf_chart_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./perf-chart.scss.shim.ngstyle */
      "bV/P");
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


      var _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _perf_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./perf-chart.component */
      "q8Rp");
      /* harmony import */


      var _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../util/performance/perf-orchestrator-service */
      "5xE9");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerfChartComponent = [_perf_chart_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerfChartComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerfChartComponent,
        data: {}
      });

      function View_PerfChartComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "clr-signpost-content", [], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _co.tooltipPopUpPosition;

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _co.graph.description;

          _ck(_v, 5, 0, currVal_4);
        });
      }

      function View_PerfChartComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "clr-signpost", [], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_5__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          signpostTitle: [0, "signpostTitle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PerfChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.signpost.label", _co.graph.label));

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = null;

          _ck(_v, 11, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "button", [["class", "set-thresholds btn btn-link btn-sm buttons-group"], ["type", "button"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.setThreshold() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](1, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "clr-icon", [["shape", "slider"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.setThreshold"));

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 52, "clr-dropdown", [], [[2, "dropdown", null], [2, "open", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDropdown_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDropdown"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"], null, [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵl"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵf"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵi"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵj"], [[3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵi"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵl"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵl"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵl"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵi"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 7, "button", [["class", "dropdown-toggle btn btn-sm btn-link"], ["clrDropdownToggle", ""]], [[1, "aria-label", 0], [2, "dropdown-toggle", null], [2, "dropdown-item", null], [2, "expandable", null], [2, "active", null], [1, "aria-haspopup", 0], [1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onDropdownTriggerClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownTrigger"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵl"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "clr-icon", [["shape", "export"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 32, "clr-dropdown-menu", [["clrPosition", "bottom-right"]], [[1, "aria-label", 0], [2, "dropdown-menu", null], [1, "role", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrDropdownMenu_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrDropdownMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 9617408, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"]], [3, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownMenu"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵl"]], {
          position: [0, "position"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](22, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.exportJPEG() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[4, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.exportPNG() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[4, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](36, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 0, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.exportSVG() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[4, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](43, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 5, "button", [["clrDropdownItem", ""]], [[2, "disabled", null], [2, "dropdown-item", null], [1, "role", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.exportCSV() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, [[4, 4]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵt"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 4341760, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownItem"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵe"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵr"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](49, null, ["\n               ", "\n            "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](50, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n      "]))], function (_ck, _v) {
          var currVal_13 = "bottom-right";

          _ck(_v, 20, 0, currVal_13);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).toggleService.open;

          _ck(_v, 0, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.export.ariaLabel", _co.graph.label));

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isRootLevelToggle;

          var currVal_4 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isRootLevelToggle;
          var currVal_5 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isRootLevelToggle;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).active;

          var currVal_7 = "menu";

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).active;

          _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.export.srMessage.dropdownMenu.label"));

          var currVal_10 = true;
          var currVal_11 = "menu";

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isOffScreen;

          _ck(_v, 19, 0, currVal_9, currVal_10, currVal_11, currVal_12);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled;

          var currVal_15 = true;
          var currVal_16 = "menuitem";

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).setByDeprecatedDisabled ? "" : null;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).dropdownItemId;

          _ck(_v, 24, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.export.jpeg"));

          _ck(_v, 28, 0, currVal_20);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled;

          var currVal_22 = true;
          var currVal_23 = "menuitem";

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).setByDeprecatedDisabled ? "" : null;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).dropdownItemId;

          _ck(_v, 31, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 35, 0, _ck(_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.export.png"));

          _ck(_v, 35, 0, currVal_27);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled;

          var currVal_29 = true;
          var currVal_30 = "menuitem";

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).setByDeprecatedDisabled ? "" : null;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdownItemId;

          _ck(_v, 38, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 42, 0, _ck(_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.export.svg"));

          _ck(_v, 42, 0, currVal_34);

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled;

          var currVal_36 = true;
          var currVal_37 = "menuitem";

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).setByDeprecatedDisabled ? "" : null;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).dropdownItemId;

          _ck(_v, 45, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 49, 0, _ck(_v, 50, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.export.csv"));

          _ck(_v, 49, 0, currVal_41);
        });
      }

      function View_PerfChartComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "button", [["class", "expand btn btn-link btn-sm buttons-group"], ["type", "button"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.expand.emit() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](1, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "clr-icon", [["shape", "resize-up"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_6__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "]))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), "vsan.monitor.performance.chart.resizeUp", _co.graph.label));

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "chart-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "chart-title-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.tooltipVisible;

          _ck(_v, 8, 0, currVal_2);

          var currVal_3 = _co.showSetThresholdButton;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.showExportButton;

          _ck(_v, 15, 0, currVal_4);

          var currVal_5 = _co.showExpandButton;

          _ck(_v, 18, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "graph-name-", _co.entityRefId, "-", _co.index, "");

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _co.graph.label;

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_PerfChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_7__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartContainer: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
          chartElement: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [[1, 0], ["container", 1]], null, 7, "div", [["class", "chart-container"]], [[1, "aria-label", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, [[2, 0], ["chart", 1]], null, 0, "div", [["class", "chart"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.showChartTitle;

          _ck(_v, 8, 0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.monitor.performance.chart.signpost.ariaLabel", _co.graph.label));

          _ck(_v, 4, 0, currVal_0);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](4, "chart-", _co.graph.id, "-", _co.entityRefId, "-", _co.index, "-", _co.containerId, "");

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_PerfChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "vsan-perf-chart", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).clickout($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_PerfChartComponent_0, RenderType_PerfChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4374528, null, 0, _perf_chart_component__WEBPACK_IMPORTED_MODULE_9__["PerfChartComponent"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_10__["HighchartsThemeService"], _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_11__["HighchartsPropertiesService"], _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_12__["PerfOrchestratorService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_8__["ReferenceWatcher"]], null, null)], null, null);
      }

      var PerfChartComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-perf-chart", _perf_chart_component__WEBPACK_IMPORTED_MODULE_9__["PerfChartComponent"], View_PerfChartComponent_Host_0, {
        graph: "graph",
        entityRefId: "entityRefId",
        containerId: "containerId",
        showSmall: "showSmall",
        index: "index",
        tooltipVisible: "tooltipVisible",
        tooltipPopUpPosition: "tooltipPopUpPosition",
        showChartTitle: "showChartTitle",
        showExpandButton: "showExpandButton",
        showExportButton: "showExportButton",
        metrics: "metrics",
        consolidatedMetrics: "consolidatedMetrics",
        consolidatedEntitiesData: "consolidatedEntitiesData",
        customizableThresholds: "customizableThresholds",
        selectedPlotLineValue: "selectedPlotLineValue",
        chartWidth: "chartWidth",
        chartHeight: "chartHeight",
        isRealtime: "isRealtime",
        extremes: "extremes",
        looseXAxisLabel: "looseXAxisLabel",
        legendPosition: "legendPosition",
        isZoomAllowed: "isZoomAllowed",
        keepPlotLineOnClick: "keepPlotLineOnClick",
        actionLink: "actionLink",
        pointHoveredOption: "pointHoveredOption"
      }, {
        zoom: "zoom",
        expand: "expand",
        onPlotLineChanged: "onPlotLineChanged",
        onTooltipActionClicked: "onTooltipActionClicked",
        load: "load",
        pointHovered: "pointHovered"
      }, []);
      /***/

    },

    /***/
    "vjFZ":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/flat-graph-metric.ts ***!
      \******************************************************************************/

    /*! exports provided: FlatGraphMetric */

    /***/
    function vjFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatGraphMetric", function () {
        return FlatGraphMetric;
      });
      /**
       * This class is used just to pass the data to the template in a way it is easier to drawn.
       */


      var FlatGraphMetric = /*#__PURE__*/_createClass(
      /*
      * Entity identifier keeps moRef id, name and uuid of entity for which performance data should be shown.
      * It is set when consolidated view is presented and there is metrics for more than 1 entity.
      * In this case identification should be more complex, containing name, refId, moRef value
      *
      * entityRefId is parent uuid
      */
      function FlatGraphMetric(entityRefId, metrics, graph) {
        var entityIdentifier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, FlatGraphMetric);

        this.entityRefId = entityRefId;
        this.metrics = metrics;
        this.graph = graph;
        this.entityIdentifier = entityIdentifier;
      });
      /***/

    },

    /***/
    "vx4U":
    /*!**************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-chart-dialog.component.ngfactory.js ***!
      \**************************************************************************************************/

    /*! exports provided: RenderType_PerfChartDialogComponent, View_PerfChartDialogComponent_0, View_PerfChartDialogComponent_Host_0, PerfChartDialogComponentNgFactory */

    /***/
    function vx4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PerfChartDialogComponent", function () {
        return RenderType_PerfChartDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartDialogComponent_0", function () {
        return View_PerfChartDialogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PerfChartDialogComponent_Host_0", function () {
        return View_PerfChartDialogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartDialogComponentNgFactory", function () {
        return PerfChartDialogComponentNgFactory;
      });
      /* harmony import */


      var _perf_chart_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./perf-chart-dialog.scss.shim.ngstyle */
      "wEDJ");
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


      var _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../directive/signpost-title/signpost-title.directive */
      "0mRq");
      /* harmony import */


      var _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../pipe/LocalizationPipe */
      "jOVY");
      /* harmony import */


      var _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../directive/icon-title/icon-title.directive */
      "wLY2");
      /* harmony import */


      var _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./perf-chart.component.ngfactory */
      "qY5k");
      /* harmony import */


      var _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../util/reference-watcher */
      "gyvr");
      /* harmony import */


      var _perf_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./perf-chart.component */
      "q8Rp");
      /* harmony import */


      var _highcharts_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../highcharts-theme.service */
      "woOg");
      /* harmony import */


      var _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../highcharts-properties.service */
      "Z7Pm");
      /* harmony import */


      var _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../util/performance/perf-orchestrator-service */
      "5xE9");
      /* harmony import */


      var _perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./perf-chart-dialog.component */
      "xuXY");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PerfChartDialogComponent = [_perf_chart_dialog_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PerfChartDialogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PerfChartDialogComponent,
        data: {}
      });

      function View_PerfChartDialogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "clr-signpost-content", [], [[2, "signpost-content", null], [8, "id", 0], [2, "is-off-screen", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpostContent_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpostContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8568832, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpostContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], [2, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"]], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵo"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], {
          position: [0, "position"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n               "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_3 = _co.getPopUpPosition();

          _ck(_v, 2, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = true;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).signpostContentId;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isOffScreen;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

          var currVal_4 = _co.entry.graph.description;

          _ck(_v, 5, 0, currVal_4);
        });
      }

      function View_PerfChartDialogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "clr-signpost", [], [[2, "signpost", null]], null, null, _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ClrSignpost_0"], _node_modules_clr_angular_clr_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ClrSignpost"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵh"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 1, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSignpost"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrCommonStringsService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4210688, null, 0, _directive_signpost_title_signpost_title_directive__WEBPACK_IMPORTED_MODULE_5__["SignpostTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PerfChartDialogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 147456, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPopoverToggleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
          open: [0, "open"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n         "]))], function (_ck, _v) {
          var currVal_1 = null;

          _ck(_v, 10, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_0 = true;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_PerfChartDialogComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-link btn-sm buttons-group"], ["id", "zoom-btn"], ["name", "zoom-btn"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onZoomOut() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n         ", "\n      "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "vsan.perf.chart.zoom"));

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_PerfChartDialogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_LocalizationPipe__WEBPACK_IMPORTED_MODULE_6__["LocalizationPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          perfChart: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 29, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "button", [["class", "collapse-btn btn btn-link btn-sm buttons-group"], ["type", "button"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.collapseClicked() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "clr-icon", [["shape", "resize-down"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4210688, null, 0, _directive_icon_title_icon_title_directive__WEBPACK_IMPORTED_MODULE_7__["IconTitleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 13, "div", [["class", "chart-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "div", [["class", "chart-title-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n         "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartDialogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PerfChartDialogComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "vsan-perf-chart", [], null, [[null, "zoom"], [null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).clickout($event) !== false;
            ad = pd_0 && ad;
          }

          if ("zoom" === en) {
            var pd_1 = _co.onChartZoomIn($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_PerfChartComponent_0"], _perf_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_PerfChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 4374528, [[1, 4]], 0, _perf_chart_component__WEBPACK_IMPORTED_MODULE_10__["PerfChartComponent"], [_highcharts_theme_service__WEBPACK_IMPORTED_MODULE_11__["HighchartsThemeService"], _highcharts_properties_service__WEBPACK_IMPORTED_MODULE_12__["HighchartsPropertiesService"], _util_performance_perf_orchestrator_service__WEBPACK_IMPORTED_MODULE_13__["PerfOrchestratorService"], _util_reference_watcher__WEBPACK_IMPORTED_MODULE_9__["ReferenceWatcher"]], {
          graph: [0, "graph"],
          entityRefId: [1, "entityRefId"],
          containerId: [2, "containerId"],
          showChartTitle: [3, "showChartTitle"],
          metrics: [4, "metrics"],
          customizableThresholds: [5, "customizableThresholds"],
          extremes: [6, "extremes"],
          looseXAxisLabel: [7, "looseXAxisLabel"],
          legendPosition: [8, "legendPosition"]
        }, {
          zoom: "zoom"
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n   "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_3 = _co.graphTooltipVisible(_co.entry);

          _ck(_v, 21, 0, currVal_3);

          var currVal_4 = _co.isShowZoomButton && _co.isZoomed;

          _ck(_v, 25, 0, currVal_4);

          var currVal_5 = _co.entry.graph;
          var currVal_6 = _co.entry.entityRefId ? _co.entry.entityRefId : _co.entry.metrics.entityRefId;
          var currVal_7 = _co.id;
          var currVal_8 = false;
          var currVal_9 = _co.entry.metrics;
          var currVal_10 = _co.customizableThresholds;
          var currVal_11 = _co.zoomOptions;
          var currVal_12 = _co.looseXAxisLabel;
          var currVal_13 = _co.chartLegendPosition;

          _ck(_v, 30, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "vsan.common.close"));

          _ck(_v, 5, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "graph-name-", _co.entry.entityRefId, "");

          _ck(_v, 17, 0, currVal_1);

          var currVal_2 = _co.entry.graph.label;

          _ck(_v, 18, 0, currVal_2);
        });
      }

      function View_PerfChartDialogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "vsan-perf-chart-dialog", [], null, null, null, View_PerfChartDialogComponent_0, RenderType_PerfChartDialogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_14__["PerfChartDialogComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PerfChartDialogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("vsan-perf-chart-dialog", _perf_chart_dialog_component__WEBPACK_IMPORTED_MODULE_14__["PerfChartDialogComponent"], View_PerfChartDialogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "wAmQ":
    /*!******************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/chart-zoom-option.ts ***!
      \******************************************************************************/

    /*! exports provided: ChartZoomOption */

    /***/
    function wAmQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartZoomOption", function () {
        return ChartZoomOption;
      });
      /* Copyright 2017 VMware, Inc. All rights reserved. -- VMware Confidential */

      /**
       * Represents the zoom level of a graph
       */


      var ChartZoomOption = /*#__PURE__*/_createClass(function ChartZoomOption() {
        _classCallCheck(this, ChartZoomOption);
      });
      /***/

    },

    /***/
    "wEDJ":
    /*!************************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-chart-dialog.scss.shim.ngstyle.js ***!
      \************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function wEDJ(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 0rem;\n  background-color: var(--vsan-background-color);\n  cursor: crosshair;\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%]   .chart-title-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 0 0rem;\n  justify-content: center;\n  align-items: center;\n}\n  .chart-container {\n  border: none !important;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-right: 0.3rem;\n  margin-right: 0;\n  margin-left: auto;\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnNhbi9jb21tb24vY29tcG9uZW50L2NoYXJ0L3BlcmZvcm1hbmNlL3BlcmYtY2hhcnQtZGlhbG9nLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLXV0aWxzLnNjc3MiLCJzcmMvYXBwL2Nzcy92c2FuLW1peGlucy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1kZWZhdWx0cy5zY3NzIiwic3JjL2FwcC9jc3MvdnNhbi1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY3NzL3ZzYW4tcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FDQUEsa0ZBQUE7QUNBQSxrRkFBQTtBQ0FBLGtGQUFBO0FDQUEsNkVBQUE7QURHQSxhQUFBO0FEbUJBOzs7O0NBQUE7QUF1QkE7OztFQUFBO0FHN0NBLDZFQUFBO0FMS0E7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBWUg7QUFUQTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSw4Q0c0Q2dCO0VIM0NoQixpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWUg7QUFYRztFQUNHLGFBQUE7RUFDQSx1QkFBQTtBQWFOO0FBWE07RUFDRyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWFUO0FBUkE7RUFDRyx1QkFBQTtBQVdIO0FBUkE7RUFDRyxZQUFBO0VBQ0EscUJHcEJPO0VIcUJQLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBV0giLCJmaWxlIjoic3JjL2FwcC92c2FuL2NvbW1vbi9jb21wb25lbnQvY2hhcnQvcGVyZm9ybWFuY2UvcGVyZi1jaGFydC1kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcHlyaWdodCAyMDIwIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiAtLSBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vY3NzL3ZzYW4tdXRpbHMuc2Nzc1wiO1xuXG4kY29sbGFwc2UtYnV0dG9uLXBhZGRpbmctbGVmdDogJHZzYW4teHM7XG5cbjpob3N0IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleDogMSAwIDByZW07XG59XG5cbi5jb250YWluZXIge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAxIDAgMHJlbTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIC5jaGFydC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5jaGFydC10aXRsZS1sYWJlbCB7XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgIGZsZXg6IDEgMCAwcmVtO1xuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgfVxufVxuXG46Om5nLWRlZXAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbGxhcHNlLWJ0biB7XG4gICBtaW4td2lkdGg6IDA7XG4gICBwYWRkaW5nLXJpZ2h0OiAkY29sbGFwc2UtYnV0dG9uLXBhZGRpbmctbGVmdDtcbiAgIG1hcmdpbi1yaWdodDogMDtcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5LTIwMjEgVk13YXJlLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFZNd2FyZSBDb25maWRlbnRpYWwgKi9cbi8vIEltcG9ydCB0aGlzIGZpbGUgdG8gb3RoZXIgc2NzcyBpZiBuZWVkZWQuIFRoaXMgZmlsZSByZWZlcnMgYWxsIHRoZSBuZWVkZWQgc2NzcyByZXNvdXJjZXMuXG5AaW1wb3J0IFwiLi92c2FuLW1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi92c2FuLXJlc3BvbnNpdmUuc2Nzc1wiOyIsIi8qIENvcHlyaWdodCAoYykgMjAxOS0yMDIxIFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5AaW1wb3J0IFwiLi92c2FuLWRlZmF1bHRzLnNjc3NcIjtcblxuQG1peGluIGFkZC1ib3JkZXItcmFkaXVzICgkcmFkaXVzLXRvcC1sZWZ0OiAkdnNhbi1ib3JkZXItcmFkaXVzLWRlZmF1bHQtc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGl1cy10b3AtcmlnaHQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaXVzLWJvdHRvbS1yaWdodDogJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpdXMtYm90dG9tLWxlZnQ6ICR2c2FuLWJvcmRlci1yYWRpdXMtZGVmYXVsdC1zaXplKSB7XG4gICBib3JkZXItcmFkaXVzOiAkcmFkaXVzLXRvcC1sZWZ0ICRyYWRpdXMtdG9wLXJpZ2h0ICRyYWRpdXMtYm90dG9tLXJpZ2h0ICRyYWRpdXMtYm90dG9tLWxlZnQ7XG59XG5cbkBtaXhpbiB0ZXh0LWVsbGlwc2lzIHtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8vIEFkZCBidXR0b24gZm9jdXMgc3RhdHVzIGluZGljYXRvci5cbkBtaXhpbiBidXR0b24tZm9jdXMtc3RhdGUoJGNvbG9yOiAkdnNhbi1saW5rLWNvbG9yKSB7XG4gICBib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkY29sb3IgIWltcG9ydGFudDtcbiAgIGJveC1zaGFkb3c6IDAgMCAkdnNhbi1vdXRsaW5lLXNpemUgJGNvbG9yO1xufVxuXG4vKlxuICAgQWRkIGJ1dHRvbiBmb2N1cyBpbmRpY2F0b3Igd2l0aCBvdXRsaW5lLlxuICAgSW4gaGlnaCBjb250cmFzdCBtb2RlLCB0aGUgYm9yZGVyIGlzIG5vdCB2aXNpYmxlLlxuICAgV2Ugc2hvdWxkIHVzZSBhbiBvdXRsaW5lIHRvIHNob3cgZm9jdXNlZCBlbGVtZW50cyBpbiB0aGF0IGNhc2UuXG4qL1xuQG1peGluIGJ0bi1vdXRsaW5lLXN0eWxlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgb3V0bGluZS1vZmZzZXQ6ICR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbCAhaW1wb3J0YW50O1xuICAgb3V0bGluZTogJHZzYW4tb3V0bGluZS1zaXplLXNtYWxsICogMiBzb2xpZCAkY29sb3IgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkIGNhcmQgZHJhZyBzdGF0ZSBpbmRpY2F0b3IuXG5AbWl4aW4gY2FyZC1tb3ZlLXN0YXRlKCRjb2xvcjogJHZzYW4tbGluay1jb2xvcikge1xuICAgYm9yZGVyOiAkdnNhbi1ib3JkZXItZGVmYXVsdC1zaXplICR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm4gJGNvbG9yICFpbXBvcnRhbnQ7XG4gICBib3gtc2hhZG93OiAwICR2c2FuLW91dGxpbmUtc2l6ZSAwIDAgJGNvbG9yO1xufVxuXG5AbWl4aW4gZHJhZ2dhYmxlLWNhcmQge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4OiAwIDAgYXV0bztcbiAgIG1pbi13aWR0aDogJHZzYW4tY2FyZC13aWR0aDtcbn1cblxuLyoqXG4gICBJbmNsdWRlIHRoaXMgbWl4aW4gYXQgOmhvc3QgbGV2ZWwgdG8gbWFrZSBldmVyeSB0b3AgbGV2ZWwgY29tcG9uZW50IGluIHRoZSB2aWV3XG4gICBoYXZlIGEgYm90dG9tIG1hcmdpbiwgYmVzaWRlcyB0aGUgbGFzdCBvbmUuXG4gKi9cbkBtaXhpbiBjaGlsZC1ib3R0b20tc3BhY2luZygkZWxlbWVudC1zcGFjaW5nOiAkdnNhbi1lbGVtZW50LXNwYWNpbmcpIHtcbiAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkZWxlbWVudC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+IGNsci1idXR0b24tZ3JvdXAsXG4gICA+IC52c2FuLWFjdGlvbnMge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBvZiBjbHItYnV0dG9uLWdyb3Vwc1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHZzYW4tYnV0dG9uLWdyb3VwLWJvdHRvbS1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICB9XG59XG5cbkBtaXhpbiBzaWJsaW5nLXJpZ2h0LXNwYWNpbmcoJGVsZW1lbnQtc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKSB7XG4gICAmID4gKiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGVsZW1lbnQtc3BhY2luZyAhaW1wb3J0YW50O1xuICAgfVxuICAgJiA+IGNsci1zaWducG9zdCB7XG4gICAgICAvLyBXaGVuIHRoZSBlbGVtZW50IGlzIGEgc2lnbnBvc3QgcmVkdWNlIHRoZSBzcGFjaW5nIHByaW9yL2FmdGVyIGl0LlxuICAgICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBcInByZXZpb3VzIHNpYmxpbmdcIiBzZWxlY3RvclxuICAgICAgLy8gc28gdGhlIG9ubHkgd2F5IHRvIGZpeCB0aGUgcHJldmlvdXMgZWxlbWVudCdzIHNwYWNpbmcgaXMgdG8gYWRkIG5lZ2F0aXZlIG1hcmdpbi1sZWZ0XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAtJGVsZW1lbnQtc3BhY2luZyArICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7O1xuICAgICAgfVxuICAgfVxuICAgJiA+IGNsci1pY29uIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgb2YgY2xyLWljb25zXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nICFpbXBvcnRhbnQ7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IGJlZm9yZSB0aGUgaWNvbiwga2VlcCBpdCBjbG9zZXIgdG8gaXQuIFNhbWUgYXMgcnVsZSBhYm92ZS5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0kZWxlbWVudC1zcGFjaW5nICsgJHZzYW4taWNvbi1kZWZhdWx0LXNwYWNpbmcgIWltcG9ydGFudDs7XG4gICAgICB9XG4gICB9XG4gICA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgIH1cbn1cblxuLy8gQmFja2dyb3VuZCBzdHlsZSB3aXRoIGxpbmVhciBncmFkaWVudCB0byBpbWl0YXRlIHN0cmlwZXNcbkBtaXhpbiBuby1jYXBhY2l0eS1iYWNrZ3JvdW5kKCRzaXplOiA1cHgsICRjb2xvcjogdmFyKC0tdnNhbi1jb2xvcikpIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzQlLCAkY29sb3IgMzQlLCAkY29sb3IgNTElLCB0cmFuc3BhcmVudCA1MSUsIHRyYW5zcGFyZW50IDg0JSwgJGNvbG9yIDg0JSwgICRjb2xvciAxMDAlKTtcbiAgIGJhY2tncm91bmQtc2l6ZTogJHNpemUgJHNpemU7XG59XG5cbkBtaXhpbiBzZWxlY3RlZC1lbnRpdHktZm9udC1zdHlsZSgpIHtcbiAgIGZvbnQtZmFtaWx5OiAnTWV0cm9wb2xpcyc7XG4gICBmb250LXdlaWdodDogJHZzYW4tZm9udC13ZWlnaHQtc3Ryb25nO1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vLyBDcmVhdGVzIGEgY2lyY2xlXG5AbWl4aW4gY2lyY2xlKCRzaXplOiAwLjZyZW0sICRiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1tYWluLCAkYm9yZGVyOiAkdnNhbi1ib3JkZXIpIHtcbiAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgYm9yZGVyOiAkYm9yZGVyO1xuICAgd2lkdGg6ICRzaXplO1xuICAgaGVpZ2h0OiAkc2l6ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMSBWTXdhcmUsIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVk13YXJlIENvbmZpZGVudGlhbCAqL1xuQGltcG9ydCBcIi4vdnNhbi1jb2xvcnMuc2Nzc1wiO1xuXG4vKiBEZWZhdWx0cyAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmF1bHQgZm9udC1zaXplIGZyb20gQ2xhcml0eSBVSSB2LjMuMC4wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAgICAgIGh0bWwge1xuLy8gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgfVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNwYWNpbmdzXG4kdnNhbi14eGw6IDEuOHJlbSAhZGVmYXVsdDsgICAvLyAzNnB4XG4kdnNhbi14bDogMS4ycmVtICFkZWZhdWx0OyAgICAvLyAyNHB4XG4kdnNhbi1sZzogMC45cmVtICFkZWZhdWx0OyAgICAvLyAxOHB4XG4kdnNhbi1tZDogMC42cmVtICFkZWZhdWx0OyAgICAvLyAxMnB4XG4kdnNhbi1zbTogMC40NXJlbSAhZGVmYXVsdDsgICAvLyA5cHhcbiR2c2FuLXhzOiAwLjNyZW0gIWRlZmF1bHQ7ICAgIC8vIDZweFxuJHZzYW4teHhzOiAwLjE1cmVtICFkZWZhdWx0OyAgLy8gM3B4XG4kdnNhbi14eHhzOiAwLjA1cmVtICFkZWZhdWx0OyAvLyAxcHhcbiR2c2FuLTA6IDByZW0gIWRlZmF1bHQ7XG5cbiR2c2FuLWVsZW1lbnQtc3BhY2luZzogJHZzYW4tbWQ7XG4kdnNhbi1jb250YWluZXItc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tc3BhY2luZzogJHZzYW4tZWxlbWVudC1zcGFjaW5nKjI7XG4kdnNhbi1idXR0b24tZ3JvdXAtYm90dG9tLXNwYWNpbmc6ICR2c2FuLWVsZW1lbnQtc3BhY2luZy8yO1xuLy8gRm9yIG5lc3RpbmcgZWxlbWVudHMgd2l0aGluIGEgdmlld1xuJHZzYW4tbmVzdGVkLWluZGVudGF0aW9uOiAkdnNhbi14bDtcbi8vIFRoZSBkcm9wZG93biBpdGVtcyBhbHJlYWR5IGhhdmUgMS4ycmVtIHBhZGRpbmcsIHNvIHRvIGhhdmUgbmVzdGVkIGl0ZW1zIHdlIG5lZWQgMS44cmVtIGluZGVudGF0aW9uXG4kdnNhbi1kcm9wZG93bi1uZXN0ZWQtaW5kZW50YXRpb246ICR2c2FuLXh4bDtcbi8vIFVzZSB0aGlzIG91dGxpbmUgc2l6ZSBpbiBkaWFsb2dzL21vZGFscy9wYWdlcywgd2hlcmUgd2UgaGF2ZSBhIGNvbXBvbmVudCBsaWtlIGNoZWNrYm94LCB0aGF0IGhhcyBhXG4vLyBiYWNrZ3JvdW5kIGNvbG9yLCB3aGljaCBvdGhlcndpc2UgZ2V0cyB0cnVuY2F0ZWQuXG4kdnNhbi1vdXRsaW5lLXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLW91dGxpbmUtc2l6ZS1zbWFsbDogJHZzYW4teHh4cztcblxuLy8gSWNvbnNcbiR2c2FuLWljb24tc2l6ZS14czogMC43cmVtICFkZWZhdWx0OyAgIC8vMTRweFxuJHZzYW4taWNvbi1zaXplLXNtOiAwLjhyZW0gIWRlZmF1bHQ7ICAgLy8xNnB4XG4kdnNhbi1pY29uLXNpemUtbWQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLzIwcHhcbiR2c2FuLWljb24tc2l6ZS1sZzogMS4ycmVtICFkZWZhdWx0OyAgIC8vMjRweFxuJHZzYW4taWNvbi1zaXplOiAkdnNhbi1pY29uLXNpemUtc20gIWRlZmF1bHQ7ICAgICAvLzE2cHhcbiR2c2FuLWljb24tZGVmYXVsdC1zcGFjaW5nOiAkdnNhbi14czsgICAgICAvLyBUaGUgc3BhY2UgYmV0d2VlbiBpY29uIGFuZCByZWxhdGVkIHRleHQsIGV0Yy5cblxuLy8gQm9yZGVyc1xuJHZzYW4tYm9yZGVyLXBvc2l0aW9uLWFsbDogYWxsICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZTogJHZzYW4teHh4cyAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlci1kZWZhdWx0LXBhdHRlcm46IHNvbGlkICFkZWZhdWx0O1xuJHZzYW4tYm9yZGVyLWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tYm9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR2c2FuLWJvcmRlcjogJHZzYW4tYm9yZGVyLWRlZmF1bHQtc2l6ZSAgJHZzYW4tYm9yZGVyLWRlZmF1bHQtcGF0dGVybiAkdnNhbi1ib3JkZXItZGVmYXVsdC1jb2xvcjtcbiRib3JkZXItaGlnaGxpZ2h0LWNvbG9yOiB2YXIoLS12c2FuLWxpbmstY29sb3IpO1xuLy8gQm9yZGVyIFJhZGl1c1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1kZWZhdWx0LXNpemU6ICR2c2FuLXh4cztcbiR2c2FuLWJvcmRlci1yYWRpdXMtbWVkaXVtLXNpemU6ICR2c2FuLXNtO1xuJHZzYW4tYm9yZGVyLXJhZGl1cy1zbWFsbC1zaXplOiAkdnNhbi14eHhzO1xuXG4vLyBCYWNrZ3JvdW5kICYgY29sb3JzXG4kYmFja2dyb3VuZC1jb2xvci1tYWluOiB2YXIoLS12c2FuLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRiYWNrZ3JvdW5kLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS12c2FuLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuJGJhY2tncm91bmQtY29sb3ItaG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1ob3Zlcik7XG4kYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHZhcigtLXZzYW4tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXIpO1xuJGJhY2tncm91bmQtY29sb3ItYmFja2Ryb3A6IHZhcigtLXZzYW4tYnVzeS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRkaXNhYmxlZC1jb2xvcjogJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5O1xuJHZzYW4tbGluay1jb2xvcjogdmFyKC0tdnNhbi1saW5rLWNvbG9yKTtcbiR2c2FuLWZvbnQtY29sb3ItZW1waGFzaXplOiB2YXIoLS12c2FuLWZvbnQtY29sb3ItZW1waGFzaXplKTtcbiR2c2FuLWhvdmVyLWxpbmstY29sb3I6IHZhcigtLXZzYW4tbGluay1jb2xvci1ob3Zlcik7XG4kdnNhbi10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO1xuXG4vLyBDbGFyaXR5IHY0IGNvbG9ycyBpbiBvcmRlciB0byByZXNvbHZlIHNvbWUgYWNjZXNzaWJpbGl0eSBpc3N1ZXNcbiRsYWJlbC1pbmZvLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby10ZXh0LWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtaW5mby1iYWNrZ3JvdW5kLWNvbG9yKTtcbiRsYWJlbC1pbmZvLWJvcmRlci1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1pbmZvLWJvcmRlci1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLXRleHQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC13YXJuaW5nLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWxhYmVsLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRsYWJlbC1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0tY2xhcml0eS12NC1sYWJlbC1kYW5nZXItdGV4dC1jb2xvcik7XG4kbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJhY2tncm91bmQtY29sb3IpO1xuJGxhYmVsLWRhbmdlci1ib3JkZXItY29sb3I6IHZhcigtLWNsYXJpdHktdjQtbGFiZWwtZGFuZ2VyLWJvcmRlci1jb2xvcik7XG4kdnNhbi1mb2N1cy1vdXRsaW5lLWNvbG9yOiB2YXIoLS12c2FuLWZvY3VzLW91dGxpbmUtY29sb3IpO1xuJHZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3I6IHZhcigtLXZzYW4tZm9jdXMtb3V0bGluZS1zZWxlY3RlZC1yb3ctY29sb3IpO1xuXG4kYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tdGV4dC1jb2xvcik7XG4kYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWluZm8tYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4kYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctdGV4dC1jb2xvcik7XG4kYmFkZ2Utd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcik7XG4kYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLWNsYXJpdHktdjQtYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3IpO1xuJGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbGFyaXR5LXY0LWJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuLy8gc3RhdHVzIGNvbG9yc1xuJHN0YXR1cy1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtYmctY29sb3IpO1xuJHN0YXR1cy1zdWNjZXNzLWRldGFpbHMtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXN1Y2Nlc3MtZGV0YWlscy1jb2xvcik7XG4kc3RhdHVzLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1zdWNjZXNzLWJvcmRlci1jb2xvcik7XG4kc3RhdHVzLWluZm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1iZy1jb2xvcik7XG4kc3RhdHVzLWluZm8tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLWluZm8tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtaW5mby1pbm5lci1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtaW5mby1pbm5lci1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1iZy1jb2xvcik7XG4kc3RhdHVzLXdhcm5pbmctZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtd2FybmluZy1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtd2FybmluZy1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZXJyb3ItYmctY29sb3IpO1xuJHN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtZXJyb3ItYm9yZGVyLWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy1lcnJvci1ib3JkZXItY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYmctY29sb3IpO1xuJHN0YXR1cy11bmtub3duLWJhY2tncm91bmQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS12c2FuLXN0YXR1cy11bmtub3duLWJnLXNlY29uZGFyeS1jb2xvcik7XG4kc3RhdHVzLXVua25vd24tZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtdW5rbm93bi1kZXRhaWxzLWNvbG9yKTtcbiRzdGF0dXMtdW5rbm93bi1ib3JkZXItY29sb3I6IHZhcigtLXZzYW4tc3RhdHVzLXVua25vd24tYm9yZGVyLWNvbG9yKTtcbiRzdGF0dXMtZGV0YWlscy1jb2xvcjogdmFyKC0tdnNhbi1zdGF0dXMtZGV0YWlscy1jb2xvcik7XG5cbi8vIEljb24gY29sb3JzXG4kaWNvbi1maWxsLWNvbG9yOiB2YXIoLS1pY29uLWZpbGwtY29sb3IpO1xuXG4vLyBGb250XG4kdnNhbi1mb250LXNpemUteHhzOiAwLjVyZW0gIWRlZmF1bHQ7ICAvLyAxMHB4XG4kdnNhbi1mb250LXNpemUteHM6IDAuNTVyZW0gIWRlZmF1bHQ7ICAvLyAxMXB4XG4kdnNhbi1mb250LXNpemUtc206IDAuNjVyZW0gIWRlZmF1bHQ7ICAvLyAxM3B4XG4kdnNhbi1mb250LXNpemUtbWQ6IDAuN3JlbSAhZGVmYXVsdDsgICAvLyAxNHB4XG4kdnNhbi1mb250LXNpemUtbGc6IDAuOXJlbSAhZGVmYXVsdDsgICAvLyAxOHB4XG4kdnNhbi1mb250LXNpemUteGw6IDEuMnJlbSAhZGVmYXVsdDsgICAvLyAyNHB4XG4kdnNhbi1mb250LWRlZmF1bHQtY29sb3I6IHZhcigtLXZzYW4tY29sb3IpO1xuJHZzYW4tbGluZS1oZWlnaHQtbWQ6ICR2c2FuLXhsO1xuJHZzYW4tbGluZS1oZWlnaHQtc206IDAuOHJlbTsgICAvLzE2cHhcbiR2c2FuLXJlbGF0aXZlLWxpbmUtaGVpZ2h0LXhzOiAxZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1zbTogMS4xZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC1tZDogMS4zZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14bDogMS41ZW07XG4kdnNhbi1yZWxhdGl2ZS1saW5lLWhlaWdodC14eGw6IDJlbTtcbiR2c2FuLWZvbnQtd2VpZ2h0LXN0cm9uZzogNjAwO1xuJHZzYW4tZm9udC13ZWlnaHQtaGlnaGxpZ2h0OiA1MDA7XG4kdnNhbi1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcblxuLy8gWi1pbmRleGVzXG4kdnNhbi16LWluZGV4LWxheWVyLTE6IDEwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItMjogMjAwO1xuJHZzYW4tei1pbmRleC1sYXllci0zOiAzMDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTQ6IDQwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItNTogNTAwO1xuJHZzYW4tei1pbmRleC1sYXllci02OiA2MDA7XG4kdnNhbi16LWluZGV4LWxheWVyLTc6IDcwMDtcbiR2c2FuLXotaW5kZXgtbGF5ZXItODogODAwO1xuJHZzYW4tei1pbmRleC1sYXllci05OiA5MDA7XG4vLyBVc2VkIHRvIGtlZXAgdGhlIGVsZW1lbnQgYWx3YXlzIG9uIHRoZSB0b3AgbGF5ZXIuIERvIG5vdCBjcmVhdGUgY29uc3RhbnQgd2l0aCBiaWdnZXIgdmFsdWVcbiR2c2FuLXotaW5kZXgtbGF5ZXItdG9wOiAxMDAwO1xuXG4vLyBPcGFjaXR5XG4kdnNhbi1kaXNhYmxlZC1lbGVtZW50LW9wYWNpdHk6IDAuNTQ7XG5cbi8vIFNwaW5uZXJzIC0gdGhlIHNpemUgaXMgdGFrZW4gZnJvbSBDbGFyaXR5J3MgZG9jdW1lbnRhdGlvbiB2LjIuIFRoZXkgd2lsbCBjaGFuZ2UgaW4gdi4zXG4kc3Bpbm5lci1zbS1zaXplOiAwLjlyZW07XG4kc3Bpbm5lci1pbmxpbmUtc2l6ZTogMC45cmVtO1xuJHNwaW5uZXItbWQtc2l6ZTogMS44cmVtO1xuJHNwaW5uZXItbGFyZ2Utc2l6ZTogMy42cmVtO1xuXG4vLyBDYXJkcyBsYXlvdXQgZGVmYXVsdHNcbiR2c2FuLWNhcmQtd2lkdGg6IDI0cmVtO1xuJHZzYW4tY2FyZC1tYXgtd2lkdGg6IDM2cmVtO1xuXG4vLyBDaGVja2VkIHJhZGlvIGJ1dHRvbiBib3JkZXIgd2lkdGggaW4gaGlnaCBjb250cmFzdCBtb2RlXG4kaGlnaC1jb250cmFzdC1yYWRpby1ib3JkZXI6ICR2c2FuLWJvcmRlci1kZWZhdWx0LXNpemUgKiA1OyAvLyBoaWdoIGNvbnRyYXN0IG1vZGUgYm9yZGVyIHNpZGUgMC4yNXJlbVxuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbiR2c2FuLXdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJHZzYW4tYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XG4vLyBHcmV5IFNjYWxlXG4kdnNhbi1uZWFyLXdoaXRlOiAjZmFmYWZhICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtZ3JheTogI2VlZSAhZGVmYXVsdDtcbiR2c2FuLWxpZ2h0ZXItbWlkdG9uZS1ncmF5OiAjZGRkICFkZWZhdWx0O1xuJHZzYW4tbGlnaHQtbWlkdG9uZS1ncmF5OiAjY2NjICFkZWZhdWx0O1xuJHZzYW4tZGFyay1taWR0b25lLWdyYXk6ICM5YTlhOWEgIWRlZmF1bHQ7XG4kdnNhbi1ncmF5OiB2YXIoLS12c2FuLWdyYXktY29sb3IpICFkZWZhdWx0O1xuJHZzYW4tZGFyay1ncmF5OiAjNTY1NjU2ICFkZWZhdWx0O1xuJHZzYW4tbmVhci1ibGFjazogIzMxMzEzMSAhZGVmYXVsdDtcbi8vIEdyZXkgQmx1ZVxuJHZzYW4tZ3JleS1ibHVlLXRoZS1saWdodGVzdDogI2YzZjZmYSAhZGVmYXVsdDtcbiR2c2FuLWdyZXktYmx1ZS1saWdodGVzdDogI0Q5RTRFQSAhZGVmYXVsdDtcbi8vIEJsdWVcbiR2c2FuLWJsdWU6ICMwMDY1YWIgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodGVzdDogI2UxZjFmNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0ZXI6ICM4OWNiZGYgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1saWdodDogIzQ5YWZkOSAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWxpZ2h0LW1pZHRvbmU6ICMwMDk1ZDMgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcmstbWlkdG9uZTogIzAwN2NiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1ibHVlLWRhcms6ICMwMDRhNzAgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXI6ICMwMDNkNzkgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tYmx1ZS1kYXJrZXN0OiAjMDAyNDM4ICFkZWZhdWx0O1xuLy8gUHVycGxlXG4kdnNhbi1hY3Rpb24tcHVycGxlLWxpZ2h0ZXN0OiAjZjNlNmZmICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodGVyOiAjZTFjOWYxICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1saWdodDogI2JlOTBkNiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtbGlnaHQtbWlkdG9uZTogIzliNTZiYiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGU6ICM4OTM5YWQgIWRlZmF1bHQ7XG4kdnNhbi1hY3Rpb24tcHVycGxlLWRhcmstbWlkdG9uZTogIzg5MzlhZCAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFyazogIzY2MDA5MiAhZGVmYXVsdDtcbiR2c2FuLWFjdGlvbi1wdXJwbGUtZGFya2VyOiAjNGQwMDdhICFkZWZhdWx0O1xuJHZzYW4tYWN0aW9uLXB1cnBsZS1kYXJrZXN0OiAjMjgxMzM2ICFkZWZhdWx0O1xuLy8gUmVkXG4kdnNhbi1yZWQtbGlnaHRlc3Q6ICNmZmYwZWUgIWRlZmF1bHQ7XG4kdnNhbi1yZWQtbGlnaHRlcjogI2Y1ZGJkOSAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodDogI2Y4YjdiNiAhZGVmYXVsdDtcbiR2c2FuLXJlZC1saWdodC1taWR0b25lOiAjZTYyNzAwICFkZWZhdWx0O1xuJHZzYW4tcmVkOiAjYzkyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmstbWlkdG9uZTogI2M5MjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrOiAjYTMyMTAwICFkZWZhdWx0O1xuJHZzYW4tcmVkLWRhcmtlcjogIzdkMjEwMCAhZGVmYXVsdDtcbiR2c2FuLXJlZC1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gWWVsbG93XG4kdnNhbi15ZWxsb3ctbGlnaHRlc3Q6ICNmZmZjZTggIWRlZmF1bHQ7XG4kdnNhbi15ZWxsb3ctbGlnaHRlcjogI2ZlZjNiNSAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdzogI2ZmZGMwYiAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1saWdodC1taWR0b25lOiAjZmY5YzMyICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmstbWlkdG9uZTogI2QzNjAwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrOiAjYzI1NDAwICFkZWZhdWx0O1xuJHZzYW4teWVsbG93LWRhcmtlcjogI2FhNDUwMCAhZGVmYXVsdDtcbiR2c2FuLXllbGxvdy1kYXJrZXN0OiAjNjQyMTAwICFkZWZhdWx0O1xuLy8gR3JlZW5cbiR2c2FuLWdyZWVuLWxpZ2h0ZXN0OiAjZGZmMGQwICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHRlcjogI2M3ZTU5YyAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuOiAjNjBiNTE1ICFkZWZhdWx0O1xuJHZzYW4tZ3JlZW4tbGlnaHQtbWlkdG9uZTogIzYyYTQyMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcmstbWlkdG9uZTogIzMxODcwMCAhZGVmYXVsdDtcbiR2c2FuLWdyZWVuLWRhcms6ICMyNjY5MDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXI6ICMxZDUxMDAgIWRlZmF1bHQ7XG4kdnNhbi1ncmVlbi1kYXJrZXN0OiAjMGYyOTAwICFkZWZhdWx0O1xuIiwiLyogQ29weXJpZ2h0IChjKSAyMDE5IFZNd2FyZSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBWTXdhcmUgQ29uZmlkZW50aWFsICovXG5cbi8vIFRoZXNlIGNvcnJlc3BvbmQgdG8gQ2xhcml0eSdzIGNsci1jb2wgc2l6ZXNcbiRicmVha3BvaW50cy1zaHJpbms6IChcbiAgICAgICdzbSc6IChtYXgtd2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtYXgtd2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtYXgtd2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtYXgtd2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtYXgtaGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbiRicmVha3BvaW50cy1leHBhbmQ6IChcbiAgICAgICdzbSc6IChtaW4td2lkdGg6IDU3NnB4KSxcbiAgICAgICdtZCc6IChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICdsZyc6IChtaW4td2lkdGg6IDk5MnB4KSxcbiAgICAgICd4bCc6IChtaW4td2lkdGg6IDEyMDBweCksXG4gICAgICAnc20tdic6IChtaW4taGVpZ2h0OiA3NjdweClcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiByZXNwb25kLXRvLXNocmluaygkYnJlYWtwb2ludCkge1xuICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cy1zaHJpbmssICRicmVha3BvaW50KSB7XG4gICAgICBAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLXNocmluaywgJGJyZWFrcG9pbnQpKX0ge1xuICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICB9IEBlbHNlIHtcbiAgICAgIEB3YXJuIFwiVW5mb3J0dW5hdGVseSwgbm8gdmFsdWUgY291bGQgYmUgcmV0cmlldmVkIGZyb20gYCN7JGJyZWFrcG9pbnR9YC4gXCJcbiAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzLXNocmluayl9LlwiO1xuICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10by1leHBhbmQoJGJyZWFrcG9pbnQpIHtcbiAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMtZXhwYW5kLCAkYnJlYWtwb2ludCkge1xuICAgICAgQG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cy1leHBhbmQsICRicmVha3BvaW50KSl9IHtcbiAgICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgfSBAZWxzZSB7XG4gICAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cy1leHBhbmQpfS5cIjtcbiAgIH1cbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "xuXY":
    /*!****************************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/perf-chart-dialog.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: PerfChartDialogComponent */

    /***/
    function xuXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfChartDialogComponent", function () {
        return PerfChartDialogComponent;
      });
      /* harmony import */


      var _util_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/id-generator */
      "UTh9");
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _component_chart_performance_chart_zoom_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @component/chart/performance/chart-zoom-option */
      "wAmQ");
      /* harmony import */


      var _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @component/chart/performance/perf-chart-util */
      "3For");

      var PerfChartDialogComponent = /*#__PURE__*/function () {
        function PerfChartDialogComponent() {
          var _this13 = this;

          _classCallCheck(this, PerfChartDialogComponent);

          this.BOTTOM_MIDDLE_POSITION = "bottom-middle";
          this.CHART_HEIGHT = 490;
          this.CHART_WIDTH = 1150;
          this.VsanUiUtils = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"];
          this.isShowZoomButton = true;
          this.looseXAxisLabel = false;
          this.chartLegendPosition = _component_chart_performance_perf_chart_util__WEBPACK_IMPORTED_MODULE_3__["PerfChartUtil"].LEGEND_BOTTOM;

          this.graphTooltipVisible = function (entry) {
            return _this13.isShowGraphDescription && !!entry.graph.description;
          };

          this.getPopUpPosition = function () {
            return _this13.BOTTOM_MIDDLE_POSITION;
          };
        }

        _createClass(PerfChartDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = _util_id_generator__WEBPACK_IMPORTED_MODULE_0__["IdGenerator"].getGuid();

            var context = _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].getModalContext();

            this.entry = context.entry;
            this.isShowZoomButton = context.isShowZoomButton;
            this.isShowGraphDescription = context.isShowGraphDescription;
            this.looseXAxisLabel = context.looseXAxisLabel;
            this.chartLegendPosition = context.chartLegendPosition;
            this.zoomOptions = context.zoomOptions;
            this.isZoomed = this.zoomOptions && !this.zoomOptions.isZoomOut;
            this.customizableThresholds = context.customizableThresholds;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.perfChart) {
              if (this.perfChart.graph && !this.perfChart.graph.isHistogram && this.zoomOptions) {
                this.perfChart.chart.xAxis[0].setExtremes(this.zoomOptions.min, this.zoomOptions.max);
              }

              this.perfChart.chart.setSize(this.CHART_WIDTH, this.CHART_HEIGHT);
            }
          }
        }, {
          key: "collapseClicked",
          value: function collapseClicked() {
            var zoomOptions = this.perfChart.graph.isHistogram ? null : this.zoomOptions;

            _util_vsan_util__WEBPACK_IMPORTED_MODULE_1__["VsanUiUtils"].closeModalDialog(zoomOptions);
          }
        }, {
          key: "onChartZoomIn",
          value: function onChartZoomIn(opt) {
            this.isZoomed = !opt.isZoomOut;
            this.zoomOptions = opt;
          }
          /**
           * Reset the zoom level to default
           * @param event
           */

        }, {
          key: "onZoomOut",
          value: function onZoomOut() {
            var zoomOut = new _component_chart_performance_chart_zoom_option__WEBPACK_IMPORTED_MODULE_2__["ChartZoomOption"]();
            zoomOut.isZoomOut = true;
            this.zoomOptions = zoomOut;
          }
        }]);

        return PerfChartDialogComponent;
      }();
      /***/

    },

    /***/
    "zFpl":
    /*!*********************************************************************************!*\
      !*** ./src/app/vsan/common/component/chart/performance/series-point-hovered.ts ***!
      \*********************************************************************************/

    /*! exports provided: SeriesPointHovered */

    /***/
    function zFpl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeriesPointHovered", function () {
        return SeriesPointHovered;
      });
      /* Copyright 2022 VMware, Inc. All rights reserved. -- VMware Confidential */


      var SeriesPointHovered = /*#__PURE__*/_createClass(function SeriesPointHovered(chartId, isHover, isSharedTooltip, seriesIndex, xIndex, xLabel) {
        _classCallCheck(this, SeriesPointHovered);

        this.chartId = chartId;
        this.isHover = isHover;
        this.isSharedTooltip = isSharedTooltip;
        this.seriesIndex = seriesIndex;
        this.xIndex = xIndex;
        this.xLabel = xLabel;
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=7-es5.js.map