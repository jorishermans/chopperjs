(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Device = exports.Device = function () {
  function Device(mobile, tablet, desktop) {
    _classCallCheck(this, Device);

    this._mobile = false;
    this._tablet = false;
    this._desktop = false;

    this._mobile = mobile;
    this._tablet = tablet;
    this._desktop = desktop;
  }

  _createClass(Device, [{
    key: "mobile",
    value: function mobile() {
      return this._mobile;
    }
  }, {
    key: "tablet",
    value: function tablet() {
      return this._tablet;
    }
  }, {
    key: "desktop",
    value: function desktop() {
      return this._desktop;
    }
  }]);

  return Device;
}();
//# sourceMappingURL=device.js.map
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceDetect = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lite_device_resolver = require("../lite_device_resolver.js");

var _device_face = require("../device_face.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceDetect = exports.DeviceDetect = function (_DeviceFace) {
  _inherits(DeviceDetect, _DeviceFace);

  function DeviceDetect() {
    _classCallCheck(this, DeviceDetect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DeviceDetect).call(this));

    _this.user_agent = navigator.userAgent;
    _this.init(navigator.userAgent, new Map(), new _lite_device_resolver.LiteDeviceResolver());
    return _this;
  }

  _createClass(DeviceDetect, [{
    key: "userAgent",
    value: function userAgent() {
      return user_agent;
    }
  }]);

  return DeviceDetect;
}(_device_face.DeviceFace);
//# sourceMappingURL=client_device.js.map
},{"../device_face.js":5,"../lite_device_resolver.js":7}],3:[function(require,module,exports){
"use strict";

if (window === undefined) {
  var Device = require("./server_device.js");

  module.exports = Device;
} else {
  var Device = require("./client_device.js");

  module.exports = Device;
}
//# sourceMappingURL=index.js.map
},{"./client_device.js":2,"./server_device.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceDetect = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lite_device_resolver = require("../lite_device_resolver.js");

var _device_face = require("../device_face.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceDetect = exports.DeviceDetect = function (_DeviceFace) {
  _inherits(DeviceDetect, _DeviceFace);

  function DeviceDetect(opts) {
    _classCallCheck(this, DeviceDetect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DeviceDetect).call(this));

    var req = opts.req | { headers: [] };
    user_agent = req.headers['user-agent'];

    var headers = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = myMap.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        headers[key] = values;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    _this.init(navigator.userAgent, headers, new _lite_device_resolver.LiteDeviceResolver());
    return _this;
  }

  _createClass(DeviceDetect, [{
    key: "userAgent",
    value: function userAgent() {
      return user_agent;
    }
  }]);

  return DeviceDetect;
}(_device_face.DeviceFace);
//# sourceMappingURL=server_device.js.map
},{"../device_face.js":5,"../lite_device_resolver.js":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceFace = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lite_device_resolver = require("./lite_device_resolver.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeviceFace = exports.DeviceFace = function () {
  function DeviceFace() {
    _classCallCheck(this, DeviceFace);

    this.device = null;
  }

  _createClass(DeviceFace, [{
    key: "userAgent",
    value: function userAgent() {
      return "";
    }
  }, {
    key: "init",
    value: function init(userAgent, headers, deviceResolver) {
      if (deviceResolver == null) {
        deviceResolver = new _lite_device_resolver.LiteDeviceResolver();
      }
      this.device = deviceResolver.resolveDevice(userAgent, headers);
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return this.device.mobile();
    }
  }, {
    key: "isTablet",
    value: function isTablet() {
      return this.device.tablet();
    }
  }, {
    key: "isDesktop",
    value: function isDesktop() {
      return this.device.desktop();
    }
  }, {
    key: "blackberry",
    value: function blackberry() {
      return this._find('blackberry') || this._find('bb10') || this._find('rim');
    }
  }, {
    key: "blackberryPhone",
    value: function blackberryPhone() {
      return this.blackberry() && this._find('tablet');
    }
  }, {
    key: "blackberryTablet",
    value: function blackberryTablet() {
      return this.blackberry() && this._find('tablet');
    }
  }, {
    key: "windows",
    value: function windows() {
      return this._find('windows');
    }
  }, {
    key: "windowsPhone",
    value: function windowsPhone() {
      return this.windows() && this._find('phone');
    }
  }, {
    key: "windowsTablet",
    value: function windowsTablet() {
      return this.windows() && this._find('touch');
    }
  }, {
    key: "android",
    value: function android() {
      return this._find("android");
    }
  }, {
    key: "androidPhone",
    value: function androidPhone() {
      return this.android() && this._find('mobile');
    }
  }, {
    key: "androidTablet",
    value: function androidTablet() {
      return this.android() && !this._find('mobile');
    }
  }, {
    key: "_find",
    value: function _find(needle) {
      return this.userAgent().indexOf(needle) != -1;
    }
  }]);

  return DeviceFace;
}();
//# sourceMappingURL=device_face.js.map
},{"./lite_device_resolver.js":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeviceResolver = exports.DeviceResolver = function () {
   function DeviceResolver() {
      _classCallCheck(this, DeviceResolver);
   }

   _createClass(DeviceResolver, [{
      key: "resolveDevice",
      value: function resolveDevice(userAgent, headers) {}
   }]);

   return DeviceResolver;
}();
//# sourceMappingURL=device_resolver.js.map
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiteDeviceResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _device = require("./device.js");

var _device_resolver = require("./device_resolver.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// internal helpers
var KNOWN_MOBILE_USER_AGENT_PREFIXES = ["w3c ", "w3c-", "acs-", "alav", "alca", "amoi", "audi", "avan", "benq", "bird", "blac", "blaz", "brew", "cell", "cldc", "cmd-", "dang", "doco", "eric", "hipt", "htc_", "inno", "ipaq", "ipod", "jigs", "kddi", "keji", "leno", "lg-c", "lg-d", "lg-g", "lge-", "lg/u", "maui", "maxo", "midp", "mits", "mmef", "mobi", "mot-", "moto", "mwbp", "nec-", "newt", "noki", "palm", "pana", "pant", "phil", "play", "port", "prox", "qwap", "sage", "sams", "sany", "sch-", "sec-", "send", "seri", "sgh-", "shar", "sie-", "siem", "smal", "smar", "sony", "sph-", "symb", "t-mo", "teli", "tim-", "tosh", "tsm-", "upg1", "upsi", "vk-v", "voda", "wap-", "wapa", "wapi", "wapp", "wapr", "webc", "winw", "winw", "xda ", "xda-"];

var KNOWN_MOBILE_USER_AGENT_KEYWORDS = ["blackberry", "webos", "ipod", "lge vx", "midp", "maemo", "mmp", "mobile", "netfront", "hiptop", "nintendo DS", "novarra", "openweb", "opera mobi", "opera mini", "palm", "psp", "phone", "smartphone", "symbian", "up.browser", "up.link", "wap", "windows ce"];

var KNOWN_TABLET_USER_AGENT_KEYWORDS = ["ipad", "playbook", "hp-tablet", "kindle"];

/**
 * A "lightweight" device resolver algorithm based on Wordpress's Mobile pack. Detects the
 * presence of a mobile device and works for a large percentage of mobile browsers. Does
 * not perform any device capability mapping, if you need that consider WURFL.
 *
 * The code is based primarily on a list of approximately 90 well-known mobile browser UA
 * string snippets, with a couple of special cases for Opera Mini, the W3C default
 * delivery context and certain other Windows browsers. The code also looks to see if the
 * browser advertises WAP capabilities as a hint.
 *
 * Tablet resolution is also performed based on known tablet browser UA strings. Android
 * tablets are detected based on <a href=
 * "http://googlewebmastercentral.blogspot.com/2011/03/mo-better-to-also-detect-mobile-user.html"
 * >Google's recommendations</a>.
 */

var LiteDeviceResolver = exports.LiteDeviceResolver = function (_DeviceResolver) {
  _inherits(LiteDeviceResolver, _DeviceResolver);

  function LiteDeviceResolver(normalUserAgentKeywords) {
    _classCallCheck(this, LiteDeviceResolver);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LiteDeviceResolver).call(this));

    _this.mobileUserAgentPrefixes = [];
    _this.mobileUserAgentKeywords = [];
    _this.tabletUserAgentKeywords = [];
    _this.normalUserAgentKeywords = [];

    _this.init();
    if (normalUserAgentKeywords != null) {
      _this.normalUserAgentKeywords.addAll(normalUserAgentKeywords);
    }
    return _this;
  }

  _createClass(LiteDeviceResolver, [{
    key: "resolveDevice",
    value: function resolveDevice(userAgent, headers) {
      // UserAgent keyword detection of Normal devices
      var device = new _device.Device(false, false, true);
      if (userAgent != null) {
        userAgent = userAgent.toLowerCase();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.normalUserAgentKeywords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var keyword = _step.value;

            if (userAgent.indexOf(keyword) > -1) {
              device = new _device.Device(false, false, true);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      // UserAgent keyword detection of Tablet devices
      if (userAgent != null) {
        userAgent = userAgent.toLowerCase();
        // Android special case
        if (userAgent.indexOf("android") > -1 && !userAgent.indexOf("mobile") > -1) {
          return new _device.Device(false, true, false);
        }
        // Kindle Fire special case
        if (userAgent.indexOf("silk") > -1 && !userAgent.indexOf("mobile") > -1) {
          return new _device.Device(false, true, false);
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.tabletUserAgentKeywords[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _keyword = _step2.value;

            if (userAgent.indexOf(_keyword) > -1) {
              return new _device.Device(false, true, false);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      // UAProf detection
      if (headers["x-wap-profile"] || headers["Profile"]) {
        return new _device.Device(true, false, false);
      }
      // User-Agent prefix detection
      if (userAgent != null && userAgent.length >= 4) {
        var prefix = userAgent.substring(0, 4).toLowerCase();
        if (this.mobileUserAgentPrefixes.indexOf(prefix) > -1) {
          return new _device.Device(true, false, false);
        }
      }
      // Accept-header based detection
      var lstAccept = headers["Accept"];
      if (lstAccept != null) {
        var accept = lstAccept.first;
        if (accept != null && accept.indexOf("wap") > -1) {
          return new _device.Device(true, false, false);
        }
      }
      // UserAgent keyword detection for Mobile devices
      if (userAgent != null) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.mobileUserAgentKeywords[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _keyword2 = _step3.value;

            if (userAgent.indexOf(_keyword2) > -1) {
              return new _device.Device(true, false, false);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      return device;
    }

    /**
     * List of user agent prefixes that identify mobile devices. Used primarily to match
     * by operator or handset manufacturer.
     */

  }, {
    key: "getMobileUserAgentPrefixes",
    value: function getMobileUserAgentPrefixes() {
      return this.mobileUserAgentPrefixes;
    }

    /**
     * List of user agent keywords that identify mobile devices. Used primarily to match
     * by mobile platform or operating system.
     */

  }, {
    key: "getMobileUserAgentKeywords",
    value: function getMobileUserAgentKeywords() {
      return this.mobileUserAgentKeywords;
    }

    /**
     * List of user agent keywords that identify tablet devices. Used primarily to match
     * by tablet platform or operating system.
     */

  }, {
    key: "getTabletUserAgentKeywords",
    value: function getTabletUserAgentKeywords() {
      return this.tabletUserAgentKeywords;
    }

    /**
     * List of user agent keywords that identify normal devices. Any items in this list
     * take precedence over the mobile and tablet user agent keywords, effectively
     * overriding those.
     */

  }, {
    key: "getNormalUserAgentKeywords",
    value: function getNormalUserAgentKeywords() {
      return this.normalUserAgentKeywords;
    }

    /**
     * Initialize this device resolver implementation. Registers the known set of device
     * signature strings. Subclasses may override to register additional strings.
     */

  }, {
    key: "init",
    value: function init() {
      this.mobileUserAgentPrefixes = this.mobileUserAgentPrefixes.concat(KNOWN_MOBILE_USER_AGENT_PREFIXES);
      this.mobileUserAgentKeywords = this.mobileUserAgentKeywords.concat(KNOWN_MOBILE_USER_AGENT_KEYWORDS);
      this.tabletUserAgentKeywords = this.tabletUserAgentKeywords.concat(KNOWN_TABLET_USER_AGENT_KEYWORDS);
    }
  }]);

  return LiteDeviceResolver;
}(_device_resolver.DeviceResolver);
//# sourceMappingURL=lite_device_resolver.js.map
},{"./device.js":1,"./device_resolver.js":6}],8:[function(require,module,exports){
var deviceLib = require('../../lib/device_detect/');

var device = new deviceLib.DeviceDetect();

console.log(device.isDesktop());

},{"../../lib/device_detect/":3}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9wcm9qZWN0cy9wdWJsaWMvcjJkMi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL3Byb2plY3RzL3B1YmxpYy9yMmQyL2xpYi9kZXZpY2UuanMiLCIvcHJvamVjdHMvcHVibGljL3IyZDIvbGliL2RldmljZV9kZXRlY3QvY2xpZW50X2RldmljZS5qcyIsIi9wcm9qZWN0cy9wdWJsaWMvcjJkMi9saWIvZGV2aWNlX2RldGVjdC9pbmRleC5qcyIsIi9wcm9qZWN0cy9wdWJsaWMvcjJkMi9saWIvZGV2aWNlX2RldGVjdC9zZXJ2ZXJfZGV2aWNlLmpzIiwiL3Byb2plY3RzL3B1YmxpYy9yMmQyL2xpYi9kZXZpY2VfZmFjZS5qcyIsIi9wcm9qZWN0cy9wdWJsaWMvcjJkMi9saWIvZGV2aWNlX3Jlc29sdmVyLmpzIiwiL3Byb2plY3RzL3B1YmxpYy9yMmQyL2xpYi9saXRlX2RldmljZV9yZXNvbHZlci5qcyIsIi9wcm9qZWN0cy9wdWJsaWMvcjJkMi90ZXN0L2Jyb3dzZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRGV2aWNlID0gZXhwb3J0cy5EZXZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERldmljZShtb2JpbGUsIHRhYmxldCwgZGVza3RvcCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXZpY2UpO1xuXG4gICAgdGhpcy5fbW9iaWxlID0gZmFsc2U7XG4gICAgdGhpcy5fdGFibGV0ID0gZmFsc2U7XG4gICAgdGhpcy5fZGVza3RvcCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fbW9iaWxlID0gbW9iaWxlO1xuICAgIHRoaXMuX3RhYmxldCA9IHRhYmxldDtcbiAgICB0aGlzLl9kZXNrdG9wID0gZGVza3RvcDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEZXZpY2UsIFt7XG4gICAga2V5OiBcIm1vYmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb2JpbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9iaWxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0YWJsZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGFibGV0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhYmxldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVza3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXNrdG9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rlc2t0b3A7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERldmljZTtcbn0oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldmljZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRGV2aWNlRGV0ZWN0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2xpdGVfZGV2aWNlX3Jlc29sdmVyID0gcmVxdWlyZShcIi4uL2xpdGVfZGV2aWNlX3Jlc29sdmVyLmpzXCIpO1xuXG52YXIgX2RldmljZV9mYWNlID0gcmVxdWlyZShcIi4uL2RldmljZV9mYWNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEZXZpY2VEZXRlY3QgPSBleHBvcnRzLkRldmljZURldGVjdCA9IGZ1bmN0aW9uIChfRGV2aWNlRmFjZSkge1xuICBfaW5oZXJpdHMoRGV2aWNlRGV0ZWN0LCBfRGV2aWNlRmFjZSk7XG5cbiAgZnVuY3Rpb24gRGV2aWNlRGV0ZWN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXZpY2VEZXRlY3QpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKERldmljZURldGVjdCkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy51c2VyX2FnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBfdGhpcy5pbml0KG5hdmlnYXRvci51c2VyQWdlbnQsIG5ldyBNYXAoKSwgbmV3IF9saXRlX2RldmljZV9yZXNvbHZlci5MaXRlRGV2aWNlUmVzb2x2ZXIoKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERldmljZURldGVjdCwgW3tcbiAgICBrZXk6IFwidXNlckFnZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVzZXJBZ2VudCgpIHtcbiAgICAgIHJldHVybiB1c2VyX2FnZW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEZXZpY2VEZXRlY3Q7XG59KF9kZXZpY2VfZmFjZS5EZXZpY2VGYWNlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudF9kZXZpY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICh3aW5kb3cgPT09IHVuZGVmaW5lZCkge1xuICB2YXIgRGV2aWNlID0gcmVxdWlyZShcIi4vc2VydmVyX2RldmljZS5qc1wiKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IERldmljZTtcbn0gZWxzZSB7XG4gIHZhciBEZXZpY2UgPSByZXF1aXJlKFwiLi9jbGllbnRfZGV2aWNlLmpzXCIpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gRGV2aWNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRldmljZURldGVjdCA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2xpdGVfZGV2aWNlX3Jlc29sdmVyID0gcmVxdWlyZShcIi4uL2xpdGVfZGV2aWNlX3Jlc29sdmVyLmpzXCIpO1xuXG52YXIgX2RldmljZV9mYWNlID0gcmVxdWlyZShcIi4uL2RldmljZV9mYWNlLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEZXZpY2VEZXRlY3QgPSBleHBvcnRzLkRldmljZURldGVjdCA9IGZ1bmN0aW9uIChfRGV2aWNlRmFjZSkge1xuICBfaW5oZXJpdHMoRGV2aWNlRGV0ZWN0LCBfRGV2aWNlRmFjZSk7XG5cbiAgZnVuY3Rpb24gRGV2aWNlRGV0ZWN0KG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGV2aWNlRGV0ZWN0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihEZXZpY2VEZXRlY3QpLmNhbGwodGhpcykpO1xuXG4gICAgdmFyIHJlcSA9IG9wdHMucmVxIHwgeyBoZWFkZXJzOiBbXSB9O1xuICAgIHVzZXJfYWdlbnQgPSByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddO1xuXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgTWFwKCk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBteU1hcC5lbnRyaWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zbGljZWRUb0FycmF5KF9zdGVwLnZhbHVlLCAyKTtcblxuICAgICAgICB2YXIga2V5ID0gX3N0ZXAkdmFsdWVbMF07XG4gICAgICAgIHZhciB2YWx1ZSA9IF9zdGVwJHZhbHVlWzFdO1xuXG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlcztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5pbml0KG5hdmlnYXRvci51c2VyQWdlbnQsIGhlYWRlcnMsIG5ldyBfbGl0ZV9kZXZpY2VfcmVzb2x2ZXIuTGl0ZURldmljZVJlc29sdmVyKCkpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEZXZpY2VEZXRlY3QsIFt7XG4gICAga2V5OiBcInVzZXJBZ2VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1c2VyQWdlbnQoKSB7XG4gICAgICByZXR1cm4gdXNlcl9hZ2VudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGV2aWNlRGV0ZWN0O1xufShfZGV2aWNlX2ZhY2UuRGV2aWNlRmFjZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJ2ZXJfZGV2aWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EZXZpY2VGYWNlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2xpdGVfZGV2aWNlX3Jlc29sdmVyID0gcmVxdWlyZShcIi4vbGl0ZV9kZXZpY2VfcmVzb2x2ZXIuanNcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEZXZpY2VGYWNlID0gZXhwb3J0cy5EZXZpY2VGYWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEZXZpY2VGYWNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXZpY2VGYWNlKTtcblxuICAgIHRoaXMuZGV2aWNlID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEZXZpY2VGYWNlLCBbe1xuICAgIGtleTogXCJ1c2VyQWdlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXNlckFnZW50KCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCh1c2VyQWdlbnQsIGhlYWRlcnMsIGRldmljZVJlc29sdmVyKSB7XG4gICAgICBpZiAoZGV2aWNlUmVzb2x2ZXIgPT0gbnVsbCkge1xuICAgICAgICBkZXZpY2VSZXNvbHZlciA9IG5ldyBfbGl0ZV9kZXZpY2VfcmVzb2x2ZXIuTGl0ZURldmljZVJlc29sdmVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRldmljZSA9IGRldmljZVJlc29sdmVyLnJlc29sdmVEZXZpY2UodXNlckFnZW50LCBoZWFkZXJzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNNb2JpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZXZpY2UubW9iaWxlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVGFibGV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVGFibGV0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlLnRhYmxldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0Rlc2t0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEZXNrdG9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlLmRlc2t0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmxhY2tiZXJyeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibGFja2JlcnJ5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbmQoJ2JsYWNrYmVycnknKSB8fCB0aGlzLl9maW5kKCdiYjEwJykgfHwgdGhpcy5fZmluZCgncmltJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsYWNrYmVycnlQaG9uZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibGFja2JlcnJ5UGhvbmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ibGFja2JlcnJ5KCkgJiYgdGhpcy5fZmluZCgndGFibGV0Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsYWNrYmVycnlUYWJsZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmxhY2tiZXJyeVRhYmxldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmJsYWNrYmVycnkoKSAmJiB0aGlzLl9maW5kKCd0YWJsZXQnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2luZG93c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aW5kb3dzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbmQoJ3dpbmRvd3MnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2luZG93c1Bob25lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpbmRvd3NQaG9uZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLndpbmRvd3MoKSAmJiB0aGlzLl9maW5kKCdwaG9uZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3aW5kb3dzVGFibGV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpbmRvd3NUYWJsZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy53aW5kb3dzKCkgJiYgdGhpcy5fZmluZCgndG91Y2gnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYW5kcm9pZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbmRyb2lkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbmQoXCJhbmRyb2lkXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbmRyb2lkUGhvbmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5kcm9pZFBob25lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5kcm9pZCgpICYmIHRoaXMuX2ZpbmQoJ21vYmlsZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhbmRyb2lkVGFibGV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFuZHJvaWRUYWJsZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbmRyb2lkKCkgJiYgIXRoaXMuX2ZpbmQoJ21vYmlsZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZChuZWVkbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZ2VudCgpLmluZGV4T2YobmVlZGxlKSAhPSAtMTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGV2aWNlRmFjZTtcbn0oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldmljZV9mYWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERldmljZVJlc29sdmVyID0gZXhwb3J0cy5EZXZpY2VSZXNvbHZlciA9IGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIERldmljZVJlc29sdmVyKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldmljZVJlc29sdmVyKTtcbiAgIH1cblxuICAgX2NyZWF0ZUNsYXNzKERldmljZVJlc29sdmVyLCBbe1xuICAgICAga2V5OiBcInJlc29sdmVEZXZpY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlRGV2aWNlKHVzZXJBZ2VudCwgaGVhZGVycykge31cbiAgIH1dKTtcblxuICAgcmV0dXJuIERldmljZVJlc29sdmVyO1xufSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV2aWNlX3Jlc29sdmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MaXRlRGV2aWNlUmVzb2x2ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGV2aWNlID0gcmVxdWlyZShcIi4vZGV2aWNlLmpzXCIpO1xuXG52YXIgX2RldmljZV9yZXNvbHZlciA9IHJlcXVpcmUoXCIuL2RldmljZV9yZXNvbHZlci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBpbnRlcm5hbCBoZWxwZXJzXG52YXIgS05PV05fTU9CSUxFX1VTRVJfQUdFTlRfUFJFRklYRVMgPSBbXCJ3M2MgXCIsIFwidzNjLVwiLCBcImFjcy1cIiwgXCJhbGF2XCIsIFwiYWxjYVwiLCBcImFtb2lcIiwgXCJhdWRpXCIsIFwiYXZhblwiLCBcImJlbnFcIiwgXCJiaXJkXCIsIFwiYmxhY1wiLCBcImJsYXpcIiwgXCJicmV3XCIsIFwiY2VsbFwiLCBcImNsZGNcIiwgXCJjbWQtXCIsIFwiZGFuZ1wiLCBcImRvY29cIiwgXCJlcmljXCIsIFwiaGlwdFwiLCBcImh0Y19cIiwgXCJpbm5vXCIsIFwiaXBhcVwiLCBcImlwb2RcIiwgXCJqaWdzXCIsIFwia2RkaVwiLCBcImtlamlcIiwgXCJsZW5vXCIsIFwibGctY1wiLCBcImxnLWRcIiwgXCJsZy1nXCIsIFwibGdlLVwiLCBcImxnL3VcIiwgXCJtYXVpXCIsIFwibWF4b1wiLCBcIm1pZHBcIiwgXCJtaXRzXCIsIFwibW1lZlwiLCBcIm1vYmlcIiwgXCJtb3QtXCIsIFwibW90b1wiLCBcIm13YnBcIiwgXCJuZWMtXCIsIFwibmV3dFwiLCBcIm5va2lcIiwgXCJwYWxtXCIsIFwicGFuYVwiLCBcInBhbnRcIiwgXCJwaGlsXCIsIFwicGxheVwiLCBcInBvcnRcIiwgXCJwcm94XCIsIFwicXdhcFwiLCBcInNhZ2VcIiwgXCJzYW1zXCIsIFwic2FueVwiLCBcInNjaC1cIiwgXCJzZWMtXCIsIFwic2VuZFwiLCBcInNlcmlcIiwgXCJzZ2gtXCIsIFwic2hhclwiLCBcInNpZS1cIiwgXCJzaWVtXCIsIFwic21hbFwiLCBcInNtYXJcIiwgXCJzb255XCIsIFwic3BoLVwiLCBcInN5bWJcIiwgXCJ0LW1vXCIsIFwidGVsaVwiLCBcInRpbS1cIiwgXCJ0b3NoXCIsIFwidHNtLVwiLCBcInVwZzFcIiwgXCJ1cHNpXCIsIFwidmstdlwiLCBcInZvZGFcIiwgXCJ3YXAtXCIsIFwid2FwYVwiLCBcIndhcGlcIiwgXCJ3YXBwXCIsIFwid2FwclwiLCBcIndlYmNcIiwgXCJ3aW53XCIsIFwid2lud1wiLCBcInhkYSBcIiwgXCJ4ZGEtXCJdO1xuXG52YXIgS05PV05fTU9CSUxFX1VTRVJfQUdFTlRfS0VZV09SRFMgPSBbXCJibGFja2JlcnJ5XCIsIFwid2Vib3NcIiwgXCJpcG9kXCIsIFwibGdlIHZ4XCIsIFwibWlkcFwiLCBcIm1hZW1vXCIsIFwibW1wXCIsIFwibW9iaWxlXCIsIFwibmV0ZnJvbnRcIiwgXCJoaXB0b3BcIiwgXCJuaW50ZW5kbyBEU1wiLCBcIm5vdmFycmFcIiwgXCJvcGVud2ViXCIsIFwib3BlcmEgbW9iaVwiLCBcIm9wZXJhIG1pbmlcIiwgXCJwYWxtXCIsIFwicHNwXCIsIFwicGhvbmVcIiwgXCJzbWFydHBob25lXCIsIFwic3ltYmlhblwiLCBcInVwLmJyb3dzZXJcIiwgXCJ1cC5saW5rXCIsIFwid2FwXCIsIFwid2luZG93cyBjZVwiXTtcblxudmFyIEtOT1dOX1RBQkxFVF9VU0VSX0FHRU5UX0tFWVdPUkRTID0gW1wiaXBhZFwiLCBcInBsYXlib29rXCIsIFwiaHAtdGFibGV0XCIsIFwia2luZGxlXCJdO1xuXG4vKipcbiAqIEEgXCJsaWdodHdlaWdodFwiIGRldmljZSByZXNvbHZlciBhbGdvcml0aG0gYmFzZWQgb24gV29yZHByZXNzJ3MgTW9iaWxlIHBhY2suIERldGVjdHMgdGhlXG4gKiBwcmVzZW5jZSBvZiBhIG1vYmlsZSBkZXZpY2UgYW5kIHdvcmtzIGZvciBhIGxhcmdlIHBlcmNlbnRhZ2Ugb2YgbW9iaWxlIGJyb3dzZXJzLiBEb2VzXG4gKiBub3QgcGVyZm9ybSBhbnkgZGV2aWNlIGNhcGFiaWxpdHkgbWFwcGluZywgaWYgeW91IG5lZWQgdGhhdCBjb25zaWRlciBXVVJGTC5cbiAqXG4gKiBUaGUgY29kZSBpcyBiYXNlZCBwcmltYXJpbHkgb24gYSBsaXN0IG9mIGFwcHJveGltYXRlbHkgOTAgd2VsbC1rbm93biBtb2JpbGUgYnJvd3NlciBVQVxuICogc3RyaW5nIHNuaXBwZXRzLCB3aXRoIGEgY291cGxlIG9mIHNwZWNpYWwgY2FzZXMgZm9yIE9wZXJhIE1pbmksIHRoZSBXM0MgZGVmYXVsdFxuICogZGVsaXZlcnkgY29udGV4dCBhbmQgY2VydGFpbiBvdGhlciBXaW5kb3dzIGJyb3dzZXJzLiBUaGUgY29kZSBhbHNvIGxvb2tzIHRvIHNlZSBpZiB0aGVcbiAqIGJyb3dzZXIgYWR2ZXJ0aXNlcyBXQVAgY2FwYWJpbGl0aWVzIGFzIGEgaGludC5cbiAqXG4gKiBUYWJsZXQgcmVzb2x1dGlvbiBpcyBhbHNvIHBlcmZvcm1lZCBiYXNlZCBvbiBrbm93biB0YWJsZXQgYnJvd3NlciBVQSBzdHJpbmdzLiBBbmRyb2lkXG4gKiB0YWJsZXRzIGFyZSBkZXRlY3RlZCBiYXNlZCBvbiA8YSBocmVmPVxuICogXCJodHRwOi8vZ29vZ2xld2VibWFzdGVyY2VudHJhbC5ibG9nc3BvdC5jb20vMjAxMS8wMy9tby1iZXR0ZXItdG8tYWxzby1kZXRlY3QtbW9iaWxlLXVzZXIuaHRtbFwiXG4gKiA+R29vZ2xlJ3MgcmVjb21tZW5kYXRpb25zPC9hPi5cbiAqL1xuXG52YXIgTGl0ZURldmljZVJlc29sdmVyID0gZXhwb3J0cy5MaXRlRGV2aWNlUmVzb2x2ZXIgPSBmdW5jdGlvbiAoX0RldmljZVJlc29sdmVyKSB7XG4gIF9pbmhlcml0cyhMaXRlRGV2aWNlUmVzb2x2ZXIsIF9EZXZpY2VSZXNvbHZlcik7XG5cbiAgZnVuY3Rpb24gTGl0ZURldmljZVJlc29sdmVyKG5vcm1hbFVzZXJBZ2VudEtleXdvcmRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpdGVEZXZpY2VSZXNvbHZlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGl0ZURldmljZVJlc29sdmVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLm1vYmlsZVVzZXJBZ2VudFByZWZpeGVzID0gW107XG4gICAgX3RoaXMubW9iaWxlVXNlckFnZW50S2V5d29yZHMgPSBbXTtcbiAgICBfdGhpcy50YWJsZXRVc2VyQWdlbnRLZXl3b3JkcyA9IFtdO1xuICAgIF90aGlzLm5vcm1hbFVzZXJBZ2VudEtleXdvcmRzID0gW107XG5cbiAgICBfdGhpcy5pbml0KCk7XG4gICAgaWYgKG5vcm1hbFVzZXJBZ2VudEtleXdvcmRzICE9IG51bGwpIHtcbiAgICAgIF90aGlzLm5vcm1hbFVzZXJBZ2VudEtleXdvcmRzLmFkZEFsbChub3JtYWxVc2VyQWdlbnRLZXl3b3Jkcyk7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaXRlRGV2aWNlUmVzb2x2ZXIsIFt7XG4gICAga2V5OiBcInJlc29sdmVEZXZpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZURldmljZSh1c2VyQWdlbnQsIGhlYWRlcnMpIHtcbiAgICAgIC8vIFVzZXJBZ2VudCBrZXl3b3JkIGRldGVjdGlvbiBvZiBOb3JtYWwgZGV2aWNlc1xuICAgICAgdmFyIGRldmljZSA9IG5ldyBfZGV2aWNlLkRldmljZShmYWxzZSwgZmFsc2UsIHRydWUpO1xuICAgICAgaWYgKHVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgIHVzZXJBZ2VudCA9IHVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLm5vcm1hbFVzZXJBZ2VudEtleXdvcmRzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGtleXdvcmQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKGtleXdvcmQpID4gLTEpIHtcbiAgICAgICAgICAgICAgZGV2aWNlID0gbmV3IF9kZXZpY2UuRGV2aWNlKGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gVXNlckFnZW50IGtleXdvcmQgZGV0ZWN0aW9uIG9mIFRhYmxldCBkZXZpY2VzXG4gICAgICBpZiAodXNlckFnZW50ICE9IG51bGwpIHtcbiAgICAgICAgdXNlckFnZW50ID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIEFuZHJvaWQgc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMSAmJiAhdXNlckFnZW50LmluZGV4T2YoXCJtb2JpbGVcIikgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBuZXcgX2RldmljZS5EZXZpY2UoZmFsc2UsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBLaW5kbGUgRmlyZSBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwic2lsa1wiKSA+IC0xICYmICF1c2VyQWdlbnQuaW5kZXhPZihcIm1vYmlsZVwiKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBfZGV2aWNlLkRldmljZShmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLnRhYmxldFVzZXJBZ2VudEtleXdvcmRzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgX2tleXdvcmQgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihfa2V5d29yZCkgPiAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IF9kZXZpY2UuRGV2aWNlKGZhbHNlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFVBUHJvZiBkZXRlY3Rpb25cbiAgICAgIGlmIChoZWFkZXJzW1wieC13YXAtcHJvZmlsZVwiXSB8fCBoZWFkZXJzW1wiUHJvZmlsZVwiXSkge1xuICAgICAgICByZXR1cm4gbmV3IF9kZXZpY2UuRGV2aWNlKHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICAvLyBVc2VyLUFnZW50IHByZWZpeCBkZXRlY3Rpb25cbiAgICAgIGlmICh1c2VyQWdlbnQgIT0gbnVsbCAmJiB1c2VyQWdlbnQubGVuZ3RoID49IDQpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHVzZXJBZ2VudC5zdWJzdHJpbmcoMCwgNCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlVXNlckFnZW50UHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IF9kZXZpY2UuRGV2aWNlKHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEFjY2VwdC1oZWFkZXIgYmFzZWQgZGV0ZWN0aW9uXG4gICAgICB2YXIgbHN0QWNjZXB0ID0gaGVhZGVyc1tcIkFjY2VwdFwiXTtcbiAgICAgIGlmIChsc3RBY2NlcHQgIT0gbnVsbCkge1xuICAgICAgICB2YXIgYWNjZXB0ID0gbHN0QWNjZXB0LmZpcnN0O1xuICAgICAgICBpZiAoYWNjZXB0ICE9IG51bGwgJiYgYWNjZXB0LmluZGV4T2YoXCJ3YXBcIikgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBuZXcgX2RldmljZS5EZXZpY2UodHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gVXNlckFnZW50IGtleXdvcmQgZGV0ZWN0aW9uIGZvciBNb2JpbGUgZGV2aWNlc1xuICAgICAgaWYgKHVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSB0aGlzLm1vYmlsZVVzZXJBZ2VudEtleXdvcmRzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgX2tleXdvcmQyID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoX2tleXdvcmQyKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgX2RldmljZS5EZXZpY2UodHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV2aWNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgdXNlciBhZ2VudCBwcmVmaXhlcyB0aGF0IGlkZW50aWZ5IG1vYmlsZSBkZXZpY2VzLiBVc2VkIHByaW1hcmlseSB0byBtYXRjaFxuICAgICAqIGJ5IG9wZXJhdG9yIG9yIGhhbmRzZXQgbWFudWZhY3R1cmVyLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TW9iaWxlVXNlckFnZW50UHJlZml4ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TW9iaWxlVXNlckFnZW50UHJlZml4ZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2JpbGVVc2VyQWdlbnRQcmVmaXhlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHVzZXIgYWdlbnQga2V5d29yZHMgdGhhdCBpZGVudGlmeSBtb2JpbGUgZGV2aWNlcy4gVXNlZCBwcmltYXJpbHkgdG8gbWF0Y2hcbiAgICAgKiBieSBtb2JpbGUgcGxhdGZvcm0gb3Igb3BlcmF0aW5nIHN5c3RlbS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE1vYmlsZVVzZXJBZ2VudEtleXdvcmRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vYmlsZVVzZXJBZ2VudEtleXdvcmRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9iaWxlVXNlckFnZW50S2V5d29yZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiB1c2VyIGFnZW50IGtleXdvcmRzIHRoYXQgaWRlbnRpZnkgdGFibGV0IGRldmljZXMuIFVzZWQgcHJpbWFyaWx5IHRvIG1hdGNoXG4gICAgICogYnkgdGFibGV0IHBsYXRmb3JtIG9yIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUYWJsZXRVc2VyQWdlbnRLZXl3b3Jkc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWJsZXRVc2VyQWdlbnRLZXl3b3JkcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhYmxldFVzZXJBZ2VudEtleXdvcmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgdXNlciBhZ2VudCBrZXl3b3JkcyB0aGF0IGlkZW50aWZ5IG5vcm1hbCBkZXZpY2VzLiBBbnkgaXRlbXMgaW4gdGhpcyBsaXN0XG4gICAgICogdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlIG1vYmlsZSBhbmQgdGFibGV0IHVzZXIgYWdlbnQga2V5d29yZHMsIGVmZmVjdGl2ZWx5XG4gICAgICogb3ZlcnJpZGluZyB0aG9zZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE5vcm1hbFVzZXJBZ2VudEtleXdvcmRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5vcm1hbFVzZXJBZ2VudEtleXdvcmRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsVXNlckFnZW50S2V5d29yZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGlzIGRldmljZSByZXNvbHZlciBpbXBsZW1lbnRhdGlvbi4gUmVnaXN0ZXJzIHRoZSBrbm93biBzZXQgb2YgZGV2aWNlXG4gICAgICogc2lnbmF0dXJlIHN0cmluZ3MuIFN1YmNsYXNzZXMgbWF5IG92ZXJyaWRlIHRvIHJlZ2lzdGVyIGFkZGl0aW9uYWwgc3RyaW5ncy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMubW9iaWxlVXNlckFnZW50UHJlZml4ZXMgPSB0aGlzLm1vYmlsZVVzZXJBZ2VudFByZWZpeGVzLmNvbmNhdChLTk9XTl9NT0JJTEVfVVNFUl9BR0VOVF9QUkVGSVhFUyk7XG4gICAgICB0aGlzLm1vYmlsZVVzZXJBZ2VudEtleXdvcmRzID0gdGhpcy5tb2JpbGVVc2VyQWdlbnRLZXl3b3Jkcy5jb25jYXQoS05PV05fTU9CSUxFX1VTRVJfQUdFTlRfS0VZV09SRFMpO1xuICAgICAgdGhpcy50YWJsZXRVc2VyQWdlbnRLZXl3b3JkcyA9IHRoaXMudGFibGV0VXNlckFnZW50S2V5d29yZHMuY29uY2F0KEtOT1dOX1RBQkxFVF9VU0VSX0FHRU5UX0tFWVdPUkRTKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGl0ZURldmljZVJlc29sdmVyO1xufShfZGV2aWNlX3Jlc29sdmVyLkRldmljZVJlc29sdmVyKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdGVfZGV2aWNlX3Jlc29sdmVyLmpzLm1hcCIsInZhciBkZXZpY2VMaWIgPSByZXF1aXJlKCcuLi8uLi9saWIvZGV2aWNlX2RldGVjdC8nKTtcblxudmFyIGRldmljZSA9IG5ldyBkZXZpY2VMaWIuRGV2aWNlRGV0ZWN0KCk7XG5cbmNvbnNvbGUubG9nKGRldmljZS5pc0Rlc2t0b3AoKSk7XG4iXX0=
