(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "qp7v":
/*!**********************************************!*\
  !*** ./node_modules/ipaddr.js/lib/ipaddr.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function() {
  var expandIPv6, ipaddr, ipv4Part, ipv4Regexes, ipv6Part, ipv6Regexes, matchCIDR, root, zoneIndex;

  ipaddr = {};

  root = this;

  if (( true && module !== null) && module.exports) {
    module.exports = ipaddr;
  } else {
    root['ipaddr'] = ipaddr;
  }

  matchCIDR = function(first, second, partSize, cidrBits) {
    var part, shift;
    if (first.length !== second.length) {
      throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
    }
    part = 0;
    while (cidrBits > 0) {
      shift = partSize - cidrBits;
      if (shift < 0) {
        shift = 0;
      }
      if (first[part] >> shift !== second[part] >> shift) {
        return false;
      }
      cidrBits -= partSize;
      part += 1;
    }
    return true;
  };

  ipaddr.subnetMatch = function(address, rangeList, defaultName) {
    var k, len, rangeName, rangeSubnets, subnet;
    if (defaultName == null) {
      defaultName = 'unicast';
    }
    for (rangeName in rangeList) {
      rangeSubnets = rangeList[rangeName];
      if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
        rangeSubnets = [rangeSubnets];
      }
      for (k = 0, len = rangeSubnets.length; k < len; k++) {
        subnet = rangeSubnets[k];
        if (address.kind() === subnet[0].kind()) {
          if (address.match.apply(address, subnet)) {
            return rangeName;
          }
        }
      }
    }
    return defaultName;
  };

  ipaddr.IPv4 = (function() {
    function IPv4(octets) {
      var k, len, octet;
      if (octets.length !== 4) {
        throw new Error("ipaddr: ipv4 octet count should be 4");
      }
      for (k = 0, len = octets.length; k < len; k++) {
        octet = octets[k];
        if (!((0 <= octet && octet <= 255))) {
          throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
        }
      }
      this.octets = octets;
    }

    IPv4.prototype.kind = function() {
      return 'ipv4';
    };

    IPv4.prototype.toString = function() {
      return this.octets.join(".");
    };

    IPv4.prototype.toNormalizedString = function() {
      return this.toString();
    };

    IPv4.prototype.toByteArray = function() {
      return this.octets.slice(0);
    };

    IPv4.prototype.match = function(other, cidrRange) {
      var ref;
      if (cidrRange === void 0) {
        ref = other, other = ref[0], cidrRange = ref[1];
      }
      if (other.kind() !== 'ipv4') {
        throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
      }
      return matchCIDR(this.octets, other.octets, 8, cidrRange);
    };

    IPv4.prototype.SpecialRanges = {
      unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
      broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
      multicast: [[new IPv4([224, 0, 0, 0]), 4]],
      linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
      loopback: [[new IPv4([127, 0, 0, 0]), 8]],
      carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
      "private": [[new IPv4([10, 0, 0, 0]), 8], [new IPv4([172, 16, 0, 0]), 12], [new IPv4([192, 168, 0, 0]), 16]],
      reserved: [[new IPv4([192, 0, 0, 0]), 24], [new IPv4([192, 0, 2, 0]), 24], [new IPv4([192, 88, 99, 0]), 24], [new IPv4([198, 51, 100, 0]), 24], [new IPv4([203, 0, 113, 0]), 24], [new IPv4([240, 0, 0, 0]), 4]]
    };

    IPv4.prototype.range = function() {
      return ipaddr.subnetMatch(this, this.SpecialRanges);
    };

    IPv4.prototype.toIPv4MappedAddress = function() {
      return ipaddr.IPv6.parse("::ffff:" + (this.toString()));
    };

    IPv4.prototype.prefixLengthFromSubnetMask = function() {
      var cidr, i, k, octet, stop, zeros, zerotable;
      zerotable = {
        0: 8,
        128: 7,
        192: 6,
        224: 5,
        240: 4,
        248: 3,
        252: 2,
        254: 1,
        255: 0
      };
      cidr = 0;
      stop = false;
      for (i = k = 3; k >= 0; i = k += -1) {
        octet = this.octets[i];
        if (octet in zerotable) {
          zeros = zerotable[octet];
          if (stop && zeros !== 0) {
            return null;
          }
          if (zeros !== 8) {
            stop = true;
          }
          cidr += zeros;
        } else {
          return null;
        }
      }
      return 32 - cidr;
    };

    return IPv4;

  })();

  ipv4Part = "(0?\\d+|0x[a-f0-9]+)";

  ipv4Regexes = {
    fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", 'i'),
    longValue: new RegExp("^" + ipv4Part + "$", 'i')
  };

  ipaddr.IPv4.parser = function(string) {
    var match, parseIntAuto, part, shift, value;
    parseIntAuto = function(string) {
      if (string[0] === "0" && string[1] !== "x") {
        return parseInt(string, 8);
      } else {
        return parseInt(string);
      }
    };
    if (match = string.match(ipv4Regexes.fourOctet)) {
      return (function() {
        var k, len, ref, results;
        ref = match.slice(1, 6);
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          part = ref[k];
          results.push(parseIntAuto(part));
        }
        return results;
      })();
    } else if (match = string.match(ipv4Regexes.longValue)) {
      value = parseIntAuto(match[1]);
      if (value > 0xffffffff || value < 0) {
        throw new Error("ipaddr: address outside defined range");
      }
      return ((function() {
        var k, results;
        results = [];
        for (shift = k = 0; k <= 24; shift = k += 8) {
          results.push((value >> shift) & 0xff);
        }
        return results;
      })()).reverse();
    } else {
      return null;
    }
  };

  ipaddr.IPv6 = (function() {
    function IPv6(parts, zoneId) {
      var i, k, l, len, part, ref;
      if (parts.length === 16) {
        this.parts = [];
        for (i = k = 0; k <= 14; i = k += 2) {
          this.parts.push((parts[i] << 8) | parts[i + 1]);
        }
      } else if (parts.length === 8) {
        this.parts = parts;
      } else {
        throw new Error("ipaddr: ipv6 part count should be 8 or 16");
      }
      ref = this.parts;
      for (l = 0, len = ref.length; l < len; l++) {
        part = ref[l];
        if (!((0 <= part && part <= 0xffff))) {
          throw new Error("ipaddr: ipv6 part should fit in 16 bits");
        }
      }
      if (zoneId) {
        this.zoneId = zoneId;
      }
    }

    IPv6.prototype.kind = function() {
      return 'ipv6';
    };

    IPv6.prototype.toString = function() {
      return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, '::');
    };

    IPv6.prototype.toByteArray = function() {
      var bytes, k, len, part, ref;
      bytes = [];
      ref = this.parts;
      for (k = 0, len = ref.length; k < len; k++) {
        part = ref[k];
        bytes.push(part >> 8);
        bytes.push(part & 0xff);
      }
      return bytes;
    };

    IPv6.prototype.toNormalizedString = function() {
      var addr, part, suffix;
      addr = ((function() {
        var k, len, ref, results;
        ref = this.parts;
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          part = ref[k];
          results.push(part.toString(16));
        }
        return results;
      }).call(this)).join(":");
      suffix = '';
      if (this.zoneId) {
        suffix = '%' + this.zoneId;
      }
      return addr + suffix;
    };

    IPv6.prototype.match = function(other, cidrRange) {
      var ref;
      if (cidrRange === void 0) {
        ref = other, other = ref[0], cidrRange = ref[1];
      }
      if (other.kind() !== 'ipv6') {
        throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
      }
      return matchCIDR(this.parts, other.parts, 16, cidrRange);
    };

    IPv6.prototype.SpecialRanges = {
      unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
      linkLocal: [new IPv6([0xfe80, 0, 0, 0, 0, 0, 0, 0]), 10],
      multicast: [new IPv6([0xff00, 0, 0, 0, 0, 0, 0, 0]), 8],
      loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
      uniqueLocal: [new IPv6([0xfc00, 0, 0, 0, 0, 0, 0, 0]), 7],
      ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 0xffff, 0, 0]), 96],
      rfc6145: [new IPv6([0, 0, 0, 0, 0xffff, 0, 0, 0]), 96],
      rfc6052: [new IPv6([0x64, 0xff9b, 0, 0, 0, 0, 0, 0]), 96],
      '6to4': [new IPv6([0x2002, 0, 0, 0, 0, 0, 0, 0]), 16],
      teredo: [new IPv6([0x2001, 0, 0, 0, 0, 0, 0, 0]), 32],
      reserved: [[new IPv6([0x2001, 0xdb8, 0, 0, 0, 0, 0, 0]), 32]]
    };

    IPv6.prototype.range = function() {
      return ipaddr.subnetMatch(this, this.SpecialRanges);
    };

    IPv6.prototype.isIPv4MappedAddress = function() {
      return this.range() === 'ipv4Mapped';
    };

    IPv6.prototype.toIPv4Address = function() {
      var high, low, ref;
      if (!this.isIPv4MappedAddress()) {
        throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
      }
      ref = this.parts.slice(-2), high = ref[0], low = ref[1];
      return new ipaddr.IPv4([high >> 8, high & 0xff, low >> 8, low & 0xff]);
    };

    IPv6.prototype.prefixLengthFromSubnetMask = function() {
      var cidr, i, k, part, stop, zeros, zerotable;
      zerotable = {
        0: 16,
        32768: 15,
        49152: 14,
        57344: 13,
        61440: 12,
        63488: 11,
        64512: 10,
        65024: 9,
        65280: 8,
        65408: 7,
        65472: 6,
        65504: 5,
        65520: 4,
        65528: 3,
        65532: 2,
        65534: 1,
        65535: 0
      };
      cidr = 0;
      stop = false;
      for (i = k = 7; k >= 0; i = k += -1) {
        part = this.parts[i];
        if (part in zerotable) {
          zeros = zerotable[part];
          if (stop && zeros !== 0) {
            return null;
          }
          if (zeros !== 16) {
            stop = true;
          }
          cidr += zeros;
        } else {
          return null;
        }
      }
      return 128 - cidr;
    };

    return IPv6;

  })();

  ipv6Part = "(?:[0-9a-f]+::?)+";

  zoneIndex = "%[0-9a-z]{1,}";

  ipv6Regexes = {
    zoneIndex: new RegExp(zoneIndex, 'i'),
    "native": new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?(" + zoneIndex + ")?$", 'i'),
    transitional: new RegExp(("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)") + (ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part) + ("(" + zoneIndex + ")?$"), 'i')
  };

  expandIPv6 = function(string, parts) {
    var colonCount, lastColon, part, replacement, replacementCount, zoneId;
    if (string.indexOf('::') !== string.lastIndexOf('::')) {
      return null;
    }
    zoneId = (string.match(ipv6Regexes['zoneIndex']) || [])[0];
    if (zoneId) {
      zoneId = zoneId.substring(1);
      string = string.replace(/%.+$/, '');
    }
    colonCount = 0;
    lastColon = -1;
    while ((lastColon = string.indexOf(':', lastColon + 1)) >= 0) {
      colonCount++;
    }
    if (string.substr(0, 2) === '::') {
      colonCount--;
    }
    if (string.substr(-2, 2) === '::') {
      colonCount--;
    }
    if (colonCount > parts) {
      return null;
    }
    replacementCount = parts - colonCount;
    replacement = ':';
    while (replacementCount--) {
      replacement += '0:';
    }
    string = string.replace('::', replacement);
    if (string[0] === ':') {
      string = string.slice(1);
    }
    if (string[string.length - 1] === ':') {
      string = string.slice(0, -1);
    }
    parts = (function() {
      var k, len, ref, results;
      ref = string.split(":");
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        part = ref[k];
        results.push(parseInt(part, 16));
      }
      return results;
    })();
    return {
      parts: parts,
      zoneId: zoneId
    };
  };

  ipaddr.IPv6.parser = function(string) {
    var addr, k, len, match, octet, octets, zoneId;
    if (ipv6Regexes['native'].test(string)) {
      return expandIPv6(string, 8);
    } else if (match = string.match(ipv6Regexes['transitional'])) {
      zoneId = match[6] || '';
      addr = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
      if (addr.parts) {
        octets = [parseInt(match[2]), parseInt(match[3]), parseInt(match[4]), parseInt(match[5])];
        for (k = 0, len = octets.length; k < len; k++) {
          octet = octets[k];
          if (!((0 <= octet && octet <= 255))) {
            return null;
          }
        }
        addr.parts.push(octets[0] << 8 | octets[1]);
        addr.parts.push(octets[2] << 8 | octets[3]);
        return {
          parts: addr.parts,
          zoneId: addr.zoneId
        };
      }
    }
    return null;
  };

  ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = function(string) {
    return this.parser(string) !== null;
  };

  ipaddr.IPv4.isValid = function(string) {
    var e;
    try {
      new this(this.parser(string));
      return true;
    } catch (error1) {
      e = error1;
      return false;
    }
  };

  ipaddr.IPv4.isValidFourPartDecimal = function(string) {
    if (ipaddr.IPv4.isValid(string) && string.match(/^\d+(\.\d+){3}$/)) {
      return true;
    } else {
      return false;
    }
  };

  ipaddr.IPv6.isValid = function(string) {
    var addr, e;
    if (typeof string === "string" && string.indexOf(":") === -1) {
      return false;
    }
    try {
      addr = this.parser(string);
      new this(addr.parts, addr.zoneId);
      return true;
    } catch (error1) {
      e = error1;
      return false;
    }
  };

  ipaddr.IPv4.parse = function(string) {
    var parts;
    parts = this.parser(string);
    if (parts === null) {
      throw new Error("ipaddr: string is not formatted like ip address");
    }
    return new this(parts);
  };

  ipaddr.IPv6.parse = function(string) {
    var addr;
    addr = this.parser(string);
    if (addr.parts === null) {
      throw new Error("ipaddr: string is not formatted like ip address");
    }
    return new this(addr.parts, addr.zoneId);
  };

  ipaddr.IPv4.parseCIDR = function(string) {
    var maskLength, match;
    if (match = string.match(/^(.+)\/(\d+)$/)) {
      maskLength = parseInt(match[2]);
      if (maskLength >= 0 && maskLength <= 32) {
        return [this.parse(match[1]), maskLength];
      }
    }
    throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
  };

  ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
    var filledOctetCount, j, octets;
    prefix = parseInt(prefix);
    if (prefix < 0 || prefix > 32) {
      throw new Error('ipaddr: invalid IPv4 prefix length');
    }
    octets = [0, 0, 0, 0];
    j = 0;
    filledOctetCount = Math.floor(prefix / 8);
    while (j < filledOctetCount) {
      octets[j] = 255;
      j++;
    }
    if (filledOctetCount < 4) {
      octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - (prefix % 8);
    }
    return new this(octets);
  };

  ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
    var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
    try {
      cidr = this.parseCIDR(string);
      ipInterfaceOctets = cidr[0].toByteArray();
      subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
      octets = [];
      i = 0;
      while (i < 4) {
        octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
        i++;
      }
      return new this(octets);
    } catch (error1) {
      error = error1;
      throw new Error('ipaddr: the address does not have IPv4 CIDR format');
    }
  };

  ipaddr.IPv4.networkAddressFromCIDR = function(string) {
    var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
    try {
      cidr = this.parseCIDR(string);
      ipInterfaceOctets = cidr[0].toByteArray();
      subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
      octets = [];
      i = 0;
      while (i < 4) {
        octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
        i++;
      }
      return new this(octets);
    } catch (error1) {
      error = error1;
      throw new Error('ipaddr: the address does not have IPv4 CIDR format');
    }
  };

  ipaddr.IPv6.parseCIDR = function(string) {
    var maskLength, match;
    if (match = string.match(/^(.+)\/(\d+)$/)) {
      maskLength = parseInt(match[2]);
      if (maskLength >= 0 && maskLength <= 128) {
        return [this.parse(match[1]), maskLength];
      }
    }
    throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
  };

  ipaddr.isValid = function(string) {
    return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
  };

  ipaddr.parse = function(string) {
    if (ipaddr.IPv6.isValid(string)) {
      return ipaddr.IPv6.parse(string);
    } else if (ipaddr.IPv4.isValid(string)) {
      return ipaddr.IPv4.parse(string);
    } else {
      throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
    }
  };

  ipaddr.parseCIDR = function(string) {
    var e;
    try {
      return ipaddr.IPv6.parseCIDR(string);
    } catch (error1) {
      e = error1;
      try {
        return ipaddr.IPv4.parseCIDR(string);
      } catch (error1) {
        e = error1;
        throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
      }
    }
  };

  ipaddr.fromByteArray = function(bytes) {
    var length;
    length = bytes.length;
    if (length === 4) {
      return new ipaddr.IPv4(bytes);
    } else if (length === 16) {
      return new ipaddr.IPv6(bytes);
    } else {
      throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
    }
  };

  ipaddr.process = function(string) {
    var addr;
    addr = this.parse(string);
    if (addr.kind() === 'ipv6' && addr.isIPv4MappedAddress()) {
      return addr.toIPv4Address();
    } else {
      return addr;
    }
  };

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "YuTi")(module)))

/***/ }),

/***/ "u7SK":
/*!**********************************************************!*\
  !*** ./src/app/vsan/common/service/ip-parser.service.ts ***!
  \**********************************************************/
/*! exports provided: IpParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpParserService", function() { return IpParserService; });
/* harmony import */ var ipaddr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ipaddr.js */ "qp7v");
/* harmony import */ var ipaddr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ipaddr_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Service to parse IP addresses and some utility methods related to them.
 * Same as js-ui-lib/src/main/ui/services/ipParserService.js for AngularJS and
 * ng-next-app/src/app/platform/services/parser/ip-parser.service.ts
 */
let IpParserService = /*@__PURE__*/ (() => {
    class IpParserService {
        constructor() {
            this.isIpv4AddressValid = (ipAddress) => {
                const trimmedIp = ipAddress.trim();
                return ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv4"].isValid(trimmedIp) && this.validIpV4Address(trimmedIp);
            };
            this.isIpv6AddressValid = (ipAddress, acceptZoneIndex = false) => {
                if (!ipAddress) {
                    return false;
                }
                let addr = ipAddress.trim();
                if (acceptZoneIndex) {
                    const delimiterIndex = addr.indexOf("%");
                    if (delimiterIndex > -1) {
                        const zoneIndex = addr.substring(delimiterIndex + 1);
                        if (!IpParserService.ZONE_INDEX_REGEXP.test(zoneIndex)) {
                            return false;
                        }
                        addr = addr.substring(0, delimiterIndex);
                    }
                }
                if (!ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv6"].isValid(addr)) {
                    return false;
                }
                return !this.equalIpv6Addresses(addr, IpParserService.IPV6_DEFAULT_UNICAST_ROUTE_ADDRESS)
                    && !this.equalIpv6Addresses(addr, IpParserService.IPV6_LOOPBACK_ADDRESS);
            };
            /**
             * @param ipAddressFirst - first ipv4Address for comparison
             * @param ipAddressSecond - second ipv4Address for comparison
             * @param subnetMask - subnetMask associated with the given IPs
             * @returns {boolean} true if all parameters are valid and ipAddressFirst
             *          subnet matches the ipAddressSecond subnet, otherwise returns false
             */
            this.isSameIpv4Subnet = (ipAddressFirst, ipAddressSecond, subnetMask) => {
                if (!this.isIpv4AddressValid(ipAddressFirst)
                    || !this.isIpv4AddressValid(ipAddressSecond)
                    || !this.isSubnetMaskValid(subnetMask)) {
                    return false;
                }
                const splitIpFirst = ipAddressFirst.split(IpParserService.IPV4_SEPARATOR);
                const splitIpSecond = ipAddressSecond.split(IpParserService.IPV4_SEPARATOR);
                const splitSubnet = this.isCidr(subnetMask)
                    ? this.parseCidrToIpv4(+subnetMask).split(IpParserService.IPV4_SEPARATOR)
                    : subnetMask.split(IpParserService.IPV4_SEPARATOR);
                // enable bitwise operations
                /*jshint bitwise:false */
                for (let i = 0; i < 4; i++) {
                    if ((+splitIpFirst[i] & +splitSubnet[i]) !== (+splitIpSecond[i] & +splitSubnet[i])) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * @param ipAddressFirst - first ipv6Address for comparison
             * @param ipAddressSecond - second ipv6Address for comparison. Expect gateway
             * @param prefix - prefix associated with the given IPs
             * @returns {boolean} true if all parameters are valid and ipAddressFirst
             *          subnet matches the ipAddressSecond subnet, otherwise returns false
             */
            this.isSameIpv6Subnet = (ipAddressFirst, ipAddressSecond, prefix) => {
                // The network validation (UI and backend) for ipv6 addresses does not include validation for same ipv6 subnets.
                // Return true to have consistent validations (UI and API), but keep the method to make an easy change if needed.
                // More info in https://bugzilla.eng.vmware.com/show_bug.cgi?id=2583003
                return true;
            };
            /**
             * Returns true if provided ipAddress is valid IPv4 or IPv6 address
             * @param ipAddress
             */
            this.isAddressValid = (ipAddress) => {
                return this.isIpv6AddressValid(ipAddress) || this.isIpv4AddressValid(ipAddress);
            };
            this.expandIpv6Address = (ipAddress) => {
                if (!ipAddress || (!this.isIpv4AddressValid(ipAddress) && !this.isIpv6AddressValid(ipAddress))) {
                    return ipAddress;
                }
                const parsedAddress = Object(ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["parse"])(ipAddress);
                return (typeof parsedAddress.toNormalizedString !== "undefined")
                    ? parsedAddress.toNormalizedString() : ipAddress;
            };
            this.validIpV4Address = (ipAddress) => {
                const splitIpAddress = ipAddress.split(IpParserService.IPV4_SEPARATOR);
                if (splitIpAddress.length !== 4) {
                    return false;
                }
                return splitIpAddress.every((item) => +item >= 0 && +item <= 255);
            };
            this.isSubnetForIpValid = (ipString) => {
                const ipSections = ipString.split("/");
                const isIPv4 = Object(ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["parse"])(ipSections[0]) instanceof ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv4"];
                // IPv4 is 32 bits, each part is a 8 bits number;
                // IPv6 is 128 bits, each part is 16 bits
                const ipAddressDigitsCount = isIPv4 ? 8 : 16;
                const subnet = +ipSections[1];
                if (isNaN(subnet)) {
                    return false;
                }
                // IPv4: subnet === 32 or IPv6: subnet === 128
                // this means we allow all, so no need to validate
                if ((isIPv4 && subnet === 32) || (!isIPv4 && subnet === 128)) {
                    return true;
                }
                if ((isIPv4 && !this.isSubnetValid(subnet)) || (!isIPv4 && !this.isSubnetPrefixValid(subnet.toString()))) {
                    return false;
                }
                const highDigits = subnet % ipAddressDigitsCount;
                const validationStartPosition = Math.floor(subnet / ipAddressDigitsCount);
                const ipNumbers = this.parseIpToNum(ipSections[0]);
                if (ipNumbers.length === 0 || ipNumbers.find(num => isNaN(num))) {
                    return false;
                }
                // all the ip numbers after the starting position should be 0
                // for example: 10.160.0.1/16 is invalid, the valid ip is: 10.160.0.0/16
                if (ipNumbers.find((num, index) => num !== 0 && index > validationStartPosition)) {
                    return false;
                }
                // Now we are checking the number at the starting position
                // for example: the highDigits is 5, it means 11111000, the first 5 bits are all 1
                // the number at starting position cannot have 1 at the last 3 bits in its binary form
                let subnetValidation = 0;
                for (let i = 1; i <= highDigits; i++) {
                    subnetValidation += Math.pow(2, ipAddressDigitsCount - i);
                }
                // for a valid ip number, the or operation returns a number that <= the subnetValidation
                if ((subnetValidation | ipNumbers[validationStartPosition]) > subnetValidation) {
                    return false;
                }
                return true;
            };
            this.parseIpToNum = (ipStr) => {
                const ip = Object(ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["parse"])(ipStr);
                if (ip instanceof ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv4"]) {
                    return ip ? ip["octets"] : [];
                }
                return ip ? ip["parts"] : [];
            };
            this.isSubnetPrefixValid = (prefix) => {
                return +prefix >= 1 && +prefix <= 128;
            };
            this.isSubnetValid = (subnet) => {
                return subnet >= 1 && subnet <= 32;
            };
            this.isSubnetMaskValid = (subnetMask) => {
                if (!subnetMask) {
                    return false;
                }
                // support cidr(Classless Inter-Domain Routing) subnet mask
                if (+subnetMask >= 0 && +subnetMask <= 32) {
                    return true;
                }
                // If the mask ends with '.', or has no number between two '.', then the .split()
                // would return "" in this case, which transformed into a number results in `0`.
                // This should be avoided by filtering the non-empty strings.
                const maskBytes = [];
                subnetMask.split(IpParserService.IPV4_SEPARATOR).forEach((octet) => {
                    if (!!octet) {
                        maskBytes.push(Number(octet));
                    }
                });
                // The first octet cannot be 0 for a valid IP
                if (maskBytes.length !== 4 || maskBytes[0] === 0) {
                    return false;
                }
                // Find the first quad that is not equal to 255
                let firstNonMaxQuadIndex = 0;
                for (const maskByte of maskBytes) {
                    if (maskByte !== IpParserService.SUBNET_MASK_MAX_QUAD_VALUE) {
                        break;
                    }
                    else {
                        firstNonMaxQuadIndex++;
                    }
                }
                // All quads are equal to 255 -> valid subnet mask
                if (firstNonMaxQuadIndex === maskBytes.length) {
                    return true;
                }
                // Quad should be contiguous
                if (IpParserService.SUBNET_MASK_VALID_QUAD_VALUES.indexOf(maskBytes[firstNonMaxQuadIndex]) === -1) {
                    return false;
                }
                // Following quads should be zero
                for (let j = firstNonMaxQuadIndex + 1; j < maskBytes.length; j++) {
                    if (maskBytes[j] !== 0) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * Compares its two ipv6 addresses. Returns true if it's the same ip address even
             * if the format is different.
             *
             * @param addr1 The first valid ipv6 address to be compared
             * @param addr2 The second valid ipv6 address to be compared
             * @returns {boolean}
             */
            this.equalIpv6Addresses = (addr1, addr2) => {
                return this.getNormalizedIpv6Address(addr1) === this.getNormalizedIpv6Address(addr2);
            };
            /**
             * Returns normalized form of IPv6 and IPv4 address
             * @param ipAddress
             *
             */
            this.getNormalizedIpv6Address = (ipAddress) => {
                let addr = Object(ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["parse"])(ipAddress);
                if (addr instanceof ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv4"]) {
                    addr = addr.toIPv4MappedAddress();
                }
                return addr.toNormalizedString();
            };
            this.parse = (addressString) => {
                const addressAndPort = this.detectParts(addressString);
                const portResult = this.parsePort(addressAndPort.port);
                const addressResult = this.parseAddress(addressAndPort.address);
                if (portResult.valid && addressResult.valid) {
                    return this.buildIpAddress(addressResult.address, portResult.port);
                }
                else {
                    return null;
                }
            };
            this.detectParts = (addressString) => {
                const parts = addressString.split(":");
                if (parts.length > 2) {
                    return this.detectIPv6Parts(addressString);
                }
                else {
                    return {
                        address: parts[0],
                        port: parts[1],
                    };
                }
            };
            this.detectIPv6Parts = (address) => {
                const match = IpParserService.IPV6_BRACKETED_NOTATION_REGEX.exec(address);
                if (match) {
                    return {
                        address: match[1],
                        port: match[3],
                    };
                }
                else {
                    return {
                        address: address,
                    };
                }
            };
            this.parseAddress = (address) => {
                if (!ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv4"].isValid(address) && !ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["IPv6"].isValid(address)) {
                    return { valid: false };
                }
                return {
                    valid: true,
                    address: Object(ipaddr_js__WEBPACK_IMPORTED_MODULE_0__["parse"])(address).toString(),
                };
            };
            this.parsePort = (port) => {
                if (port === undefined) {
                    return { valid: true, port: undefined };
                }
                if (!IpParserService.DIGITS_REGEX.test(port)) {
                    return { valid: false };
                }
                const parsedPort = parseInt(port, 10);
                if (parsedPort <= 0) {
                    return { valid: false };
                }
                else if (parsedPort >= IpParserService.MAX_PORT) {
                    return { valid: false };
                }
                else {
                    return { valid: true, port: parsedPort };
                }
            };
            this.buildIpAddress = (address, port) => {
                return {
                    address: address,
                    port: port,
                };
            };
        }
        isCidr(mask) {
            return !isNaN(+mask);
        }
        /**
         * detailed information about CIDR, please check this link:
         * https://docs.netgate.com/pfsense/en/latest/book/network/understanding-cidr-subnet-mask-notation.html
         */
        parseCidrToIpv4(cidr) {
            if (!this.isSubnetMaskValid(String(cidr))) {
                return "";
            }
            const IP_ADDRESS_DIGITS_COUNT = 8;
            const subnet = [];
            for (let i = 0; i < Math.floor(cidr / IP_ADDRESS_DIGITS_COUNT); i++) {
                subnet.push(IpParserService.SUBNET_MASK_MAX_QUAD_VALUE);
            }
            if (cidr % IP_ADDRESS_DIGITS_COUNT !== 0) {
                subnet.push(IpParserService.SUBNET_MASK_VALID_QUAD_VALUES[cidr % IP_ADDRESS_DIGITS_COUNT - 1]);
            }
            while (subnet.length < 4) {
                subnet.push(IpParserService.SUBNET_MASK_VALID_QUAD_VALUES[0]);
            }
            return subnet.join(IpParserService.IPV4_SEPARATOR);
        }
        /**
         * Checks if IPv6 address is a link local address i.e. of the type fe80::/10
         * (fe80:: through febf::)
         *
         * @param address
         *    IPv6 address
         * @param prefixLength
         *    IPv6 prefix length - link-local addresses have a prefix length of 64
         * @return
         *    Returns true if the address is a link local one
         */
        isLinkLocalIpv6Address(address, prefixLength = 64) {
            if (!address ||
                prefixLength !== IpParserService.IPV6_LINK_LOCAL_PREFIX_LENGTH ||
                address.length < 4) {
                return false;
            }
            const addressBegining = parseInt(address.substr(0, 4), 16);
            return (addressBegining & 0xffc0) === 0xfe80;
        }
    }
    IpParserService.SUBNET_MASK_MAX_QUAD_VALUE = 255;
    IpParserService.SUBNET_MASK_VALID_QUAD_VALUES = [0, 128, 192, 224, 240, 248, 252, 254];
    IpParserService.MAX_PORT = Math.pow(2, 16);
    // capture groups are: [fullText, address, portWithColon, port]
    IpParserService.IPV6_BRACKETED_NOTATION_REGEX = new RegExp("^\\[(.*)\\](:(\\d+))?$");
    IpParserService.DIGITS_REGEX = new RegExp("^\\d+$");
    IpParserService.ZONE_INDEX_REGEXP = new RegExp("^\w+$");
    IpParserService.IPV6_LINK_LOCAL_PREFIX_LENGTH = 64;
    IpParserService.IPV6_DEFAULT_UNICAST_ROUTE_ADDRESS = "::";
    IpParserService.IPV6_LOOPBACK_ADDRESS = "::1";
    IpParserService.IPV4_SEPARATOR = ".";
    return IpParserService;
})();



/***/ })

}]);
//# sourceMappingURL=65-es2015.js.map