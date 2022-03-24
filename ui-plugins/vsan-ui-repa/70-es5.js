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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70], {
    /***/
    "+K+b":
    /*!**************************************************!*\
      !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function KB(module, exports, __webpack_require__) {
      var Uint8Array = __webpack_require__(
      /*! ./_Uint8Array */
      "JHRd");
      /**
       * Creates a clone of `arrayBuffer`.
       *
       * @private
       * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
       * @returns {ArrayBuffer} Returns the cloned array buffer.
       */


      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result).set(new Uint8Array(arrayBuffer));
        return result;
      }

      module.exports = cloneArrayBuffer;
      /***/
    },

    /***/
    "+iFO":
    /*!*************************************************!*\
      !*** ./node_modules/lodash/_initCloneObject.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function iFO(module, exports, __webpack_require__) {
      var baseCreate = __webpack_require__(
      /*! ./_baseCreate */
      "dTAl"),
          getPrototype = __webpack_require__(
      /*! ./_getPrototype */
      "LcsW"),
          isPrototype = __webpack_require__(
      /*! ./_isPrototype */
      "6sVZ");
      /**
       * Initializes an object clone.
       *
       * @private
       * @param {Object} object The object to clone.
       * @returns {Object} Returns the initialized clone.
       */


      function initCloneObject(object) {
        return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }

      module.exports = initCloneObject;
      /***/
    },

    /***/
    "+u6b":
    /*!*************************************************************************************!*\
      !*** ./src/app/vsan/common/directive/clr-button-group/clr-button-base.directive.ts ***!
      \*************************************************************************************/

    /*! exports provided: ClrButtonBaseDirective */

    /***/
    function u6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClrButtonBaseDirective", function () {
        return ClrButtonBaseDirective;
      });
      /**
       * Use this class as base class for directive, which handles clr-button. It will help to link the rendered button with
       * the clr-button on which the directive is applied.
       */


      var ClrButtonBaseDirective = /*#__PURE__*/_createClass(function ClrButtonBaseDirective(clrButton) {
        _classCallCheck(this, ClrButtonBaseDirective);

        this.clrButton = clrButton;

        if (!clrButton) {
          return;
        } // name should be set, if not provided in template - generate one. ClrButtom#name is used to generate the name
        // attribute of the markup button. Later the name is used to match the generated markup with the directive.


        if (!clrButton.name) {
          clrButton.name = Math.random().toString();
        }

        var directiveHolder = clrButton;
        directiveHolder.directives = directiveHolder.directives || [];
        directiveHolder.directives.push(this);
      });
      /***/

    },

    /***/
    "1+5i":
    /*!**************************************!*\
      !*** ./node_modules/lodash/isSet.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function i(module, exports, __webpack_require__) {
      var baseIsSet = __webpack_require__(
      /*! ./_baseIsSet */
      "w/wX"),
          baseUnary = __webpack_require__(
      /*! ./_baseUnary */
      "sEf8"),
          nodeUtil = __webpack_require__(
      /*! ./_nodeUtil */
      "mdPL");
      /* Node.js helper references. */


      var nodeIsSet = nodeUtil && nodeUtil.isSet;
      /**
       * Checks if `value` is classified as a `Set` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a set, else `false`.
       * @example
       *
       * _.isSet(new Set);
       * // => true
       *
       * _.isSet(new WeakSet);
       * // => false
       */

      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      module.exports = isSet;
      /***/
    },

    /***/
    "5Tg0":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/_cloneBuffer.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Tg0(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (module) {
        var root = __webpack_require__(
        /*! ./_root */
        "Kz5y");
        /** Detect free variable `exports`. */


        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */

        var Buffer = moduleExports ? root.Buffer : undefined,
            allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
        /**
         * Creates a clone of  `buffer`.
         *
         * @private
         * @param {Buffer} buffer The buffer to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Buffer} Returns the cloned buffer.
         */

        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }

          var length = buffer.length,
              result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result);
          return result;
        }

        module.exports = cloneBuffer;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../webpack/buildin/module.js */
      "YuTi")(module));
      /***/
    },

    /***/
    "7Ix3":
    /*!**********************************************!*\
      !*** ./node_modules/lodash/_nativeKeysIn.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function Ix3(module, exports) {
      /**
       * This function is like
       * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * except that it includes inherited enumerable properties.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function nativeKeysIn(object) {
        var result = [];

        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = nativeKeysIn;
      /***/
    },

    /***/
    "BkRI":
    /*!******************************************!*\
      !*** ./node_modules/lodash/cloneDeep.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function BkRI(module, exports, __webpack_require__) {
      var baseClone = __webpack_require__(
      /*! ./_baseClone */
      "OBhP");
      /** Used to compose bitmasks for cloning. */


      var CLONE_DEEP_FLAG = 1,
          CLONE_SYMBOLS_FLAG = 4;
      /**
       * This method is like `_.clone` except that it recursively clones `value`.
       *
       * @static
       * @memberOf _
       * @since 1.0.0
       * @category Lang
       * @param {*} value The value to recursively clone.
       * @returns {*} Returns the deep cloned value.
       * @see _.clone
       * @example
       *
       * var objects = [{ 'a': 1 }, { 'b': 2 }];
       *
       * var deep = _.cloneDeep(objects);
       * console.log(deep[0] === objects[0]);
       * // => false
       */

      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }

      module.exports = cloneDeep;
      /***/
    },

    /***/
    "Dw+G":
    /*!**********************************************!*\
      !*** ./node_modules/lodash/_baseAssignIn.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function DwG(module, exports, __webpack_require__) {
      var copyObject = __webpack_require__(
      /*! ./_copyObject */
      "juv8"),
          keysIn = __webpack_require__(
      /*! ./keysIn */
      "mTTR");
      /**
       * The base implementation of `_.assignIn` without support for multiple sources
       * or `customizer` functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @returns {Object} Returns `object`.
       */


      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }

      module.exports = baseAssignIn;
      /***/
    },

    /***/
    "EEGq":
    /*!***********************************************!*\
      !*** ./node_modules/lodash/_copySymbolsIn.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function EEGq(module, exports, __webpack_require__) {
      var copyObject = __webpack_require__(
      /*! ./_copyObject */
      "juv8"),
          getSymbolsIn = __webpack_require__(
      /*! ./_getSymbolsIn */
      "oCl/");
      /**
       * Copies own and inherited symbols of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy symbols from.
       * @param {Object} [object={}] The object to copy symbols to.
       * @returns {Object} Returns `object`.
       */


      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }

      module.exports = copySymbolsIn;
      /***/
    },

    /***/
    "G6z8":
    /*!**********************************************!*\
      !*** ./node_modules/lodash/_getAllKeysIn.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function G6z8(module, exports, __webpack_require__) {
      var baseGetAllKeys = __webpack_require__(
      /*! ./_baseGetAllKeys */
      "fR/l"),
          getSymbolsIn = __webpack_require__(
      /*! ./_getSymbolsIn */
      "oCl/"),
          keysIn = __webpack_require__(
      /*! ./keysIn */
      "mTTR");
      /**
       * Creates an array of own and inherited enumerable property names and
       * symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names and symbols.
       */


      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }

      module.exports = getAllKeysIn;
      /***/
    },

    /***/
    "Gi0A":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_baseIsMap.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function Gi0A(module, exports, __webpack_require__) {
      var getTag = __webpack_require__(
      /*! ./_getTag */
      "QqLw"),
          isObjectLike = __webpack_require__(
      /*! ./isObjectLike */
      "ExA7");
      /** `Object#toString` result references. */


      var mapTag = '[object Map]';
      /**
       * The base implementation of `_.isMap` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a map, else `false`.
       */

      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }

      module.exports = baseIsMap;
      /***/
    },

    /***/
    "LcsW":
    /*!**********************************************!*\
      !*** ./node_modules/lodash/_getPrototype.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function LcsW(module, exports, __webpack_require__) {
      var overArg = __webpack_require__(
      /*! ./_overArg */
      "kekF");
      /** Built-in value references. */


      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
      /***/
    },

    /***/
    "MrPd":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/_assignValue.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function MrPd(module, exports, __webpack_require__) {
      var baseAssignValue = __webpack_require__(
      /*! ./_baseAssignValue */
      "hypo"),
          eq = __webpack_require__(
      /*! ./eq */
      "ljhN");
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Assigns `value` to `key` of `object` if the existing value is not equivalent
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */

      function assignValue(object, key, value) {
        var objValue = object[key];

        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }

      module.exports = assignValue;
      /***/
    },

    /***/
    "O0oS":
    /*!************************************************!*\
      !*** ./node_modules/lodash/_defineProperty.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function O0oS(module, exports, __webpack_require__) {
      var getNative = __webpack_require__(
      /*! ./_getNative */
      "Cwc5");

      var defineProperty = function () {
        try {
          var func = getNative(Object, 'defineProperty');
          func({}, '', {});
          return func;
        } catch (e) {}
      }();

      module.exports = defineProperty;
      /***/
    },

    /***/
    "OBhP":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_baseClone.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function OBhP(module, exports, __webpack_require__) {
      var Stack = __webpack_require__(
      /*! ./_Stack */
      "fmRc"),
          arrayEach = __webpack_require__(
      /*! ./_arrayEach */
      "gFfm"),
          assignValue = __webpack_require__(
      /*! ./_assignValue */
      "MrPd"),
          baseAssign = __webpack_require__(
      /*! ./_baseAssign */
      "WwFo"),
          baseAssignIn = __webpack_require__(
      /*! ./_baseAssignIn */
      "Dw+G"),
          cloneBuffer = __webpack_require__(
      /*! ./_cloneBuffer */
      "5Tg0"),
          copyArray = __webpack_require__(
      /*! ./_copyArray */
      "Q1l4"),
          copySymbols = __webpack_require__(
      /*! ./_copySymbols */
      "VOtZ"),
          copySymbolsIn = __webpack_require__(
      /*! ./_copySymbolsIn */
      "EEGq"),
          getAllKeys = __webpack_require__(
      /*! ./_getAllKeys */
      "qZTm"),
          getAllKeysIn = __webpack_require__(
      /*! ./_getAllKeysIn */
      "G6z8"),
          getTag = __webpack_require__(
      /*! ./_getTag */
      "QqLw"),
          initCloneArray = __webpack_require__(
      /*! ./_initCloneArray */
      "yHx3"),
          initCloneByTag = __webpack_require__(
      /*! ./_initCloneByTag */
      "wrZu"),
          initCloneObject = __webpack_require__(
      /*! ./_initCloneObject */
      "+iFO"),
          isArray = __webpack_require__(
      /*! ./isArray */
      "Z0cm"),
          isBuffer = __webpack_require__(
      /*! ./isBuffer */
      "DSRE"),
          isMap = __webpack_require__(
      /*! ./isMap */
      "zEVN"),
          isObject = __webpack_require__(
      /*! ./isObject */
      "GoyQ"),
          isSet = __webpack_require__(
      /*! ./isSet */
      "1+5i"),
          keys = __webpack_require__(
      /*! ./keys */
      "7GkX"),
          keysIn = __webpack_require__(
      /*! ./keysIn */
      "mTTR");
      /** Used to compose bitmasks for cloning. */


      var CLONE_DEEP_FLAG = 1,
          CLONE_FLAT_FLAG = 2,
          CLONE_SYMBOLS_FLAG = 4;
      /** `Object#toString` result references. */

      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          weakMapTag = '[object WeakMap]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      /** Used to identify `toStringTag` values supported by `_.clone`. */

      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      /**
       * The base implementation of `_.clone` and `_.cloneDeep` which tracks
       * traversed objects.
       *
       * @private
       * @param {*} value The value to clone.
       * @param {boolean} bitmask The bitmask flags.
       *  1 - Deep clone
       *  2 - Flatten inherited properties
       *  4 - Clone symbols
       * @param {Function} [customizer] The function to customize cloning.
       * @param {string} [key] The key of `value`.
       * @param {Object} [object] The parent object of `value`.
       * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
       * @returns {*} Returns the cloned value.
       */

      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result,
            isDeep = bitmask & CLONE_DEEP_FLAG,
            isFlat = bitmask & CLONE_FLAT_FLAG,
            isFull = bitmask & CLONE_SYMBOLS_FLAG;

        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }

        if (result !== undefined) {
          return result;
        }

        if (!isObject(value)) {
          return value;
        }

        var isArr = isArray(value);

        if (isArr) {
          result = initCloneArray(value);

          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value),
              isFunc = tag == funcTag || tag == genTag;

          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }

          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);

            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }

            result = initCloneByTag(value, tag, isDeep);
          }
        } // Check for circular references and return its corresponding clone.


        stack || (stack = new Stack());
        var stacked = stack.get(value);

        if (stacked) {
          return stacked;
        }

        stack.set(value, result);

        if (isSet(value)) {
          value.forEach(function (subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function (subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
          });
        }

        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined : keysFunc(value);
        arrayEach(props || value, function (subValue, key) {
          if (props) {
            key = subValue;
            subValue = value[key];
          } // Recursively populate clone (susceptible to call stack limits).


          assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
        return result;
      }

      module.exports = baseClone;
      /***/
    },

    /***/
    "Q1l4":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_copyArray.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function Q1l4(module, exports) {
      /**
       * Copies the values of `source` to `array`.
       *
       * @private
       * @param {Array} source The array to copy values from.
       * @param {Array} [array=[]] The array to copy values to.
       * @returns {Array} Returns `array`.
       */
      function copyArray(source, array) {
        var index = -1,
            length = source.length;
        array || (array = Array(length));

        while (++index < length) {
          array[index] = source[index];
        }

        return array;
      }

      module.exports = copyArray;
      /***/
    },

    /***/
    "QcOe":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_baseKeysIn.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function QcOe(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ./isObject */
      "GoyQ"),
          isPrototype = __webpack_require__(
      /*! ./_isPrototype */
      "6sVZ"),
          nativeKeysIn = __webpack_require__(
      /*! ./_nativeKeysIn */
      "7Ix3");
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */

      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }

        var isProto = isPrototype(object),
            result = [];

        for (var key in object) {
          if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = baseKeysIn;
      /***/
    },

    /***/
    "VOtZ":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/_copySymbols.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function VOtZ(module, exports, __webpack_require__) {
      var copyObject = __webpack_require__(
      /*! ./_copyObject */
      "juv8"),
          getSymbols = __webpack_require__(
      /*! ./_getSymbols */
      "MvSz");
      /**
       * Copies own symbols of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy symbols from.
       * @param {Object} [object={}] The object to copy symbols to.
       * @returns {Object} Returns `object`.
       */


      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }

      module.exports = copySymbols;
      /***/
    },

    /***/
    "WwFo":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_baseAssign.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function WwFo(module, exports, __webpack_require__) {
      var copyObject = __webpack_require__(
      /*! ./_copyObject */
      "juv8"),
          keys = __webpack_require__(
      /*! ./keys */
      "7GkX");
      /**
       * The base implementation of `_.assign` without support for multiple sources
       * or `customizer` functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @returns {Object} Returns `object`.
       */


      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }

      module.exports = baseAssign;
      /***/
    },

    /***/
    "XYm9":
    /*!***********************************************!*\
      !*** ./node_modules/lodash/_cloneDataView.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function XYm9(module, exports, __webpack_require__) {
      var cloneArrayBuffer = __webpack_require__(
      /*! ./_cloneArrayBuffer */
      "+K+b");
      /**
       * Creates a clone of `dataView`.
       *
       * @private
       * @param {Object} dataView The data view to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the cloned data view.
       */


      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }

      module.exports = cloneDataView;
      /***/
    },

    /***/
    "b2z7":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/_cloneRegExp.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function b2z7(module, exports) {
      /** Used to match `RegExp` flags from their coerced string values. */
      var reFlags = /\w*$/;
      /**
       * Creates a clone of `regexp`.
       *
       * @private
       * @param {Object} regexp The regexp to clone.
       * @returns {Object} Returns the cloned regexp.
       */

      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }

      module.exports = cloneRegExp;
      /***/
    },

    /***/
    "dTAl":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_baseCreate.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function dTAl(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ./isObject */
      "GoyQ");
      /** Built-in value references. */


      var objectCreate = Object.create;
      /**
       * The base implementation of `_.create` without support for assigning
       * properties to the created object.
       *
       * @private
       * @param {Object} proto The object to inherit from.
       * @returns {Object} Returns the new object.
       */

      var baseCreate = function () {
        function object() {}

        return function (proto) {
          if (!isObject(proto)) {
            return {};
          }

          if (objectCreate) {
            return objectCreate(proto);
          }

          object.prototype = proto;
          var result = new object();
          object.prototype = undefined;
          return result;
        };
      }();

      module.exports = baseCreate;
      /***/
    },

    /***/
    "gFfm":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_arrayEach.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function gFfm(module, exports) {
      /**
       * A specialized version of `_.forEach` for arrays without support for
       * iteratee shorthands.
       *
       * @private
       * @param {Array} [array] The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns `array`.
       */
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length;

        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }

        return array;
      }

      module.exports = arrayEach;
      /***/
    },

    /***/
    "hypo":
    /*!*************************************************!*\
      !*** ./node_modules/lodash/_baseAssignValue.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function hypo(module, exports, __webpack_require__) {
      var defineProperty = __webpack_require__(
      /*! ./_defineProperty */
      "O0oS");
      /**
       * The base implementation of `assignValue` and `assignMergeValue` without
       * value checks.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */


      function baseAssignValue(object, key, value) {
        if (key == '__proto__' && defineProperty) {
          defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
          });
        } else {
          object[key] = value;
        }
      }

      module.exports = baseAssignValue;
      /***/
    },

    /***/
    "juv8":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_copyObject.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function juv8(module, exports, __webpack_require__) {
      var assignValue = __webpack_require__(
      /*! ./_assignValue */
      "MrPd"),
          baseAssignValue = __webpack_require__(
      /*! ./_baseAssignValue */
      "hypo");
      /**
       * Copies properties of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy properties from.
       * @param {Array} props The property identifiers to copy.
       * @param {Object} [object={}] The object to copy properties to.
       * @param {Function} [customizer] The function to customize copied values.
       * @returns {Object} Returns `object`.
       */


      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1,
            length = props.length;

        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

          if (newValue === undefined) {
            newValue = source[key];
          }

          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }

        return object;
      }

      module.exports = copyObject;
      /***/
    },

    /***/
    "mTTR":
    /*!***************************************!*\
      !*** ./node_modules/lodash/keysIn.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function mTTR(module, exports, __webpack_require__) {
      var arrayLikeKeys = __webpack_require__(
      /*! ./_arrayLikeKeys */
      "b80T"),
          baseKeysIn = __webpack_require__(
      /*! ./_baseKeysIn */
      "QcOe"),
          isArrayLike = __webpack_require__(
      /*! ./isArrayLike */
      "MMmD");
      /**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */


      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }

      module.exports = keysIn;
      /***/
    },

    /***/
    "oCl/":
    /*!**********************************************!*\
      !*** ./node_modules/lodash/_getSymbolsIn.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function oCl(module, exports, __webpack_require__) {
      var arrayPush = __webpack_require__(
      /*! ./_arrayPush */
      "CH3K"),
          getPrototype = __webpack_require__(
      /*! ./_getPrototype */
      "LcsW"),
          getSymbols = __webpack_require__(
      /*! ./_getSymbols */
      "MvSz"),
          stubArray = __webpack_require__(
      /*! ./stubArray */
      "0ycA");
      /* Built-in method references for those with the same name as other `lodash` methods. */


      var nativeGetSymbols = Object.getOwnPropertySymbols;
      /**
       * Creates an array of the own and inherited enumerable symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of symbols.
       */

      var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
        var result = [];

        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }

        return result;
      };
      module.exports = getSymbolsIn;
      /***/
    },

    /***/
    "otv/":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/_cloneSymbol.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function otv(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(
      /*! ./_Symbol */
      "nmnc");
      /** Used to convert symbols to primitives and strings. */


      var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
      /**
       * Creates a clone of the `symbol` object.
       *
       * @private
       * @param {Object} symbol The symbol object to clone.
       * @returns {Object} Returns the cloned symbol object.
       */

      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }

      module.exports = cloneSymbol;
      /***/
    },

    /***/
    "tsUx":
    /*!********************************************************************************!*\
      !*** ./src/app/vsan/common/directive/external-link/external-link.directive.ts ***!
      \********************************************************************************/

    /*! exports provided: ExternalLinkDirective */

    /***/
    function tsUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalLinkDirective", function () {
        return ExternalLinkDirective;
      });
      /* harmony import */


      var _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @util/vsan-util */
      "UODZ");
      /* harmony import */


      var _directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @directive/clr-button-group/clr-button-base.directive */
      "+u6b");
      /**
       * Decorates a button or an anchor as external link. Requires one of the optional parameters articleId, helpId or url.
       *
       * @param external-link: Optional. Localization key of the text label of the external link. If omitted default label
       * will be used - "Learn more" for anchors or "Ask VMWare" for buttons.
       * @param articleId - Optional. Id of article in knowledge base.
       * @param helpId - Optional. Help id which will redirect to Knowledge Base.
       * @param url - Optional. External URL.
       */


      var ExternalLinkDirective = /*#__PURE__*/function (_directive_clr_button) {
        _inherits(ExternalLinkDirective, _directive_clr_button);

        var _super = _createSuper(ExternalLinkDirective);

        function ExternalLinkDirective(el, resolver, renderer, navigationService, // this variable will be initialized only if the host is clr-button
        clrButton) {
          var _this;

          _classCallCheck(this, ExternalLinkDirective);

          _this = _super.call(this, clrButton);
          _this.el = el;
          _this.resolver = resolver;
          _this.renderer = renderer;
          _this.navigationService = navigationService;
          _this.ASK_VMWARE_DEFAULT_TEXT_KEY = "vsan.common.askVMware";
          _this.LEARN_MORE_DEFAULT_TEXT_KEY = "vsan.common.learnMore";
          _this.CONTAINER_CLASS = "icon-name-container";
          _this.NAVIGATION_EVENT_TYPE = "click";
          _this.LEAD_TO_NOWHERE_URL = "javascript://";
          _this.HTML_ELEMENT_SPAN_NAME = "span";
          _this.HTML_ELEMENT_ICON_NAME = "clr-icon";
          _this.HTML_ELEMENT_ROLE_ATTR_NAME = "role";
          _this.HTML_ELEMENT_ROLE_ATTR_VALUE = "link";
          _this.ICON_SHAPE_ATTR_NAME = "shape";
          _this.ICON_SHAPE_ATTR_VALUE = "pop-out";
          _this.ICON_SIZE_ATTR_NAME = "size";
          _this.ICON_SIZE_ATTR_VALUE = "16";
          _this.ICON_CLASS_ATTR_NAME = "class";
          _this.ICON_CLASS_ATTR_VALUE = "link";
          _this.ICON_TITLE_ATTR_NAME = "title";
          _this.KB_URL = "http://kb.vmware.com/kb/";
          return _this;
        }

        _createClass(ExternalLinkDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var element = this.el.nativeElement; // continue only if element is HTML link or button

            if (!this.isLink(element) && !this.isButton(element)) {
              // element is clr-button, wait until html button for it is resolved - handled by resloveButton
              return;
            }

            this.prepareExternalLink(element);
          }
        }, {
          key: "resolveButton",
          value: function resolveButton(clrButton, button, index) {
            // only if element is clr-button. At this point the html button is already resolved. Apply on it.
            this.prepareExternalLink(button);
          }
        }, {
          key: "prepareExternalLink",
          value: function prepareExternalLink(element) {
            this.renderer.addClass(element, this.CONTAINER_CLASS);
            this.setText(element);

            if (this.isLink(element)) {
              this.decorateLink(element);
            } else {
              this.addLinkRole(element);
            }

            this.initializeNavigationHandler(element);
          }
        }, {
          key: "isButton",
          value: function isButton(element) {
            return element instanceof HTMLButtonElement;
          }
        }, {
          key: "isLink",
          value: function isLink(element) {
            return element instanceof HTMLAnchorElement;
          }
        }, {
          key: "setText",
          value: function setText(element) {
            var span = this.renderer.createElement(this.HTML_ELEMENT_SPAN_NAME);
            span.innerText = this.getText(element);
            this.renderer.appendChild(element, span);
            var icon = this.renderer.createElement(this.HTML_ELEMENT_ICON_NAME);
            icon.setAttribute(this.ICON_SHAPE_ATTR_NAME, this.ICON_SHAPE_ATTR_VALUE);
            icon.setAttribute(this.ICON_SIZE_ATTR_NAME, this.ICON_SIZE_ATTR_VALUE);
            icon.setAttribute(this.ICON_CLASS_ATTR_NAME, this.ICON_CLASS_ATTR_VALUE); // Set title of the icon for screen readers clarity

            icon.setAttribute(this.ICON_TITLE_ATTR_NAME, _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString("vsan.screenReader.label.externalLink.icon"));
            this.renderer.appendChild(element, icon);
          }
        }, {
          key: "getText",
          value: function getText(element) {
            if (this.anchorText) {
              return this.anchorText;
            }

            var key = this.isButton(element) ? this.ASK_VMWARE_DEFAULT_TEXT_KEY : this.LEARN_MORE_DEFAULT_TEXT_KEY;
            return _util_vsan_util__WEBPACK_IMPORTED_MODULE_0__["VsanUiUtils"].getString(key);
          }
        }, {
          key: "decorateLink",
          value: function decorateLink(element) {
            var linkElement = element; // don't use href attribute. If omitted, the link will be not visualized properly.

            linkElement.href = this.LEAD_TO_NOWHERE_URL; // display link on same line

            linkElement.style.display = "inline-flex";
          }
        }, {
          key: "initializeNavigationHandler",
          value: function initializeNavigationHandler(element) {
            var _this2 = this;

            element.addEventListener(this.NAVIGATION_EVENT_TYPE, function () {
              if (_this2.helpId) {
                _this2.navigationService.askVMware(_this2.helpId);

                return;
              }

              if (_this2.articleId) {
                _this2.navigationService.navigateToAddress("".concat(_this2.KB_URL).concat(_this2.articleId));

                return;
              }

              if (_this2.url) {
                _this2.navigationService.navigateToAddress(_this2.url);
              }
            });
          } // Indicate external navigation by assigning "link" role

        }, {
          key: "addLinkRole",
          value: function addLinkRole(element) {
            this.renderer.setAttribute(element, this.HTML_ELEMENT_ROLE_ATTR_NAME, this.HTML_ELEMENT_ROLE_ATTR_VALUE);
          }
        }]);

        return ExternalLinkDirective;
      }(_directive_clr_button_group_clr_button_base_directive__WEBPACK_IMPORTED_MODULE_1__["ClrButtonBaseDirective"]);
      /***/

    },

    /***/
    "w/wX":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_baseIsSet.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function wWX(module, exports, __webpack_require__) {
      var getTag = __webpack_require__(
      /*! ./_getTag */
      "QqLw"),
          isObjectLike = __webpack_require__(
      /*! ./isObjectLike */
      "ExA7");
      /** `Object#toString` result references. */


      var setTag = '[object Set]';
      /**
       * The base implementation of `_.isSet` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a set, else `false`.
       */

      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }

      module.exports = baseIsSet;
      /***/
    },

    /***/
    "wrZu":
    /*!************************************************!*\
      !*** ./node_modules/lodash/_initCloneByTag.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function wrZu(module, exports, __webpack_require__) {
      var cloneArrayBuffer = __webpack_require__(
      /*! ./_cloneArrayBuffer */
      "+K+b"),
          cloneDataView = __webpack_require__(
      /*! ./_cloneDataView */
      "XYm9"),
          cloneRegExp = __webpack_require__(
      /*! ./_cloneRegExp */
      "b2z7"),
          cloneSymbol = __webpack_require__(
      /*! ./_cloneSymbol */
      "otv/"),
          cloneTypedArray = __webpack_require__(
      /*! ./_cloneTypedArray */
      "yP5f");
      /** `Object#toString` result references. */


      var boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      /**
       * Initializes an object clone based on its `toStringTag`.
       *
       * **Note:** This function only supports cloning values with tags of
       * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
       *
       * @private
       * @param {Object} object The object to clone.
       * @param {string} tag The `toStringTag` of the object to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the initialized clone.
       */

      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;

        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);

          case boolTag:
          case dateTag:
            return new Ctor(+object);

          case dataViewTag:
            return cloneDataView(object, isDeep);

          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);

          case mapTag:
            return new Ctor();

          case numberTag:
          case stringTag:
            return new Ctor(object);

          case regexpTag:
            return cloneRegExp(object);

          case setTag:
            return new Ctor();

          case symbolTag:
            return cloneSymbol(object);
        }
      }

      module.exports = initCloneByTag;
      /***/
    },

    /***/
    "yHx3":
    /*!************************************************!*\
      !*** ./node_modules/lodash/_initCloneArray.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function yHx3(module, exports) {
      /** Used for built-in method references. */
      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Initializes an array clone.
       *
       * @private
       * @param {Array} array The array to clone.
       * @returns {Array} Returns the initialized clone.
       */

      function initCloneArray(array) {
        var length = array.length,
            result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

        if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
          result.index = array.index;
          result.input = array.input;
        }

        return result;
      }

      module.exports = initCloneArray;
      /***/
    },

    /***/
    "yP5f":
    /*!*************************************************!*\
      !*** ./node_modules/lodash/_cloneTypedArray.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function yP5f(module, exports, __webpack_require__) {
      var cloneArrayBuffer = __webpack_require__(
      /*! ./_cloneArrayBuffer */
      "+K+b");
      /**
       * Creates a clone of `typedArray`.
       *
       * @private
       * @param {Object} typedArray The typed array to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the cloned typed array.
       */


      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }

      module.exports = cloneTypedArray;
      /***/
    },

    /***/
    "zEVN":
    /*!**************************************!*\
      !*** ./node_modules/lodash/isMap.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function zEVN(module, exports, __webpack_require__) {
      var baseIsMap = __webpack_require__(
      /*! ./_baseIsMap */
      "Gi0A"),
          baseUnary = __webpack_require__(
      /*! ./_baseUnary */
      "sEf8"),
          nodeUtil = __webpack_require__(
      /*! ./_nodeUtil */
      "mdPL");
      /* Node.js helper references. */


      var nodeIsMap = nodeUtil && nodeUtil.isMap;
      /**
       * Checks if `value` is classified as a `Map` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a map, else `false`.
       * @example
       *
       * _.isMap(new Map);
       * // => true
       *
       * _.isMap(new WeakMap);
       * // => false
       */

      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      module.exports = isMap;
      /***/
    }
  }]);
})();
//# sourceMappingURL=70-es5.js.map