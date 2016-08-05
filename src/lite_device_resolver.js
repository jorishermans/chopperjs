import {Device} from "./device.js";
import {DeviceResolver} from "./device_resolver.js";

// internal helpers
let KNOWN_MOBILE_USER_AGENT_PREFIXES = [
    "w3c ", "w3c-", "acs-", "alav", "alca", "amoi", "audi", "avan", "benq",
    "bird", "blac", "blaz", "brew", "cell", "cldc", "cmd-", "dang", "doco",
    "eric", "hipt", "htc_", "inno", "ipaq", "ipod", "jigs", "kddi", "keji",
    "leno", "lg-c", "lg-d", "lg-g", "lge-", "lg/u", "maui", "maxo", "midp",
    "mits", "mmef", "mobi", "mot-", "moto", "mwbp", "nec-", "newt", "noki",
    "palm", "pana", "pant", "phil", "play", "port", "prox", "qwap", "sage",
    "sams", "sany", "sch-", "sec-", "send", "seri", "sgh-", "shar", "sie-",
    "siem", "smal", "smar", "sony", "sph-", "symb", "t-mo", "teli", "tim-",
    "tosh", "tsm-", "upg1", "upsi", "vk-v", "voda", "wap-", "wapa", "wapi",
    "wapp", "wapr", "webc", "winw", "winw", "xda ", "xda-"];

let KNOWN_MOBILE_USER_AGENT_KEYWORDS = [
    "blackberry", "webos", "ipod", "lge vx", "midp", "maemo", "mmp", "mobile",
    "netfront", "hiptop", "nintendo DS", "novarra", "openweb", "opera mobi",
    "opera mini", "palm", "psp", "phone", "smartphone", "symbian", "up.browser",
    "up.link", "wap", "windows ce"];

let KNOWN_TABLET_USER_AGENT_KEYWORDS = [
    "ipad", "playbook", "hp-tablet", "kindle"];

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
export class LiteDeviceResolver extends DeviceResolver {

  mobileUserAgentPrefixes = [];
  mobileUserAgentKeywords = [];
  tabletUserAgentKeywords = [];
  normalUserAgentKeywords = [];

  constructor(normalUserAgentKeywords) {
    super();
    this.init();
    if (normalUserAgentKeywords!=null) {
      this.normalUserAgentKeywords.addAll(normalUserAgentKeywords);
    }
  }

  resolveDevice( userAgent, headers ) {
    // UserAgent keyword detection of Normal devices
    let device = new Device(false, false, true);
    if (userAgent != null) {
      userAgent = userAgent.toLowerCase();
      for (let keyword of this.normalUserAgentKeywords) {
        if (userAgent.indexOf(keyword) > -1) {
          device = new Device(false, false, true);
        }
      }
    }
    // UserAgent keyword detection of Tablet devices
    if (userAgent != null) {
      userAgent = userAgent.toLowerCase();
      // Android special case
      if (userAgent.indexOf("android") > -1 && !userAgent.indexOf("mobile") > -1) {
        return new Device(false, true, false);
      }
      // Kindle Fire special case
      if (userAgent.indexOf("silk") > -1 && !userAgent.indexOf("mobile") > -1) {
        return new Device(false, true, false);
      }
      for (let keyword of this.tabletUserAgentKeywords) {
        if (userAgent.indexOf(keyword) > -1) {
           return new Device(false, true, false);
        }
      }
    }
    // UAProf detection
    if (headers["x-wap-profile"]
        || headers["Profile"]) {
      return new Device(true, false, false);
    }
    // User-Agent prefix detection
    if (userAgent != null && userAgent.length >= 4) {
      let prefix = userAgent.substring(0, 4).toLowerCase();
      if (this.mobileUserAgentPrefixes.indexOf(prefix) > -1) {
         return new Device(true, false, false);
      }
    }
    // Accept-header based detection
    let lstAccept = headers["Accept"];
    if (lstAccept != null) {
      let accept = lstAccept.first;
      if (accept != null && accept.indexOf("wap") > -1) {
        return new Device(true, false, false);
      }
    }
    // UserAgent keyword detection for Mobile devices
    if (userAgent != null) {
      for (let keyword of this.mobileUserAgentKeywords) {
        if (userAgent.indexOf(keyword) > -1) {
          return new Device(true, false, false);
        }
      }
    }

    return device;
  }

  /**
   * List of user agent prefixes that identify mobile devices. Used primarily to match
   * by operator or handset manufacturer.
   */
  getMobileUserAgentPrefixes() {
    return this.mobileUserAgentPrefixes;
  }

  /**
   * List of user agent keywords that identify mobile devices. Used primarily to match
   * by mobile platform or operating system.
   */
  getMobileUserAgentKeywords() {
    return this.mobileUserAgentKeywords;
  }

  /**
   * List of user agent keywords that identify tablet devices. Used primarily to match
   * by tablet platform or operating system.
   */
  getTabletUserAgentKeywords() {
    return this.tabletUserAgentKeywords;
  }

  /**
   * List of user agent keywords that identify normal devices. Any items in this list
   * take precedence over the mobile and tablet user agent keywords, effectively
   * overriding those.
   */
  getNormalUserAgentKeywords() {
    return this.normalUserAgentKeywords;
  }

  /**
   * Initialize this device resolver implementation. Registers the known set of device
   * signature strings. Subclasses may override to register additional strings.
   */
  init() {
    this.mobileUserAgentPrefixes = this.mobileUserAgentPrefixes.concat(KNOWN_MOBILE_USER_AGENT_PREFIXES);
    this.mobileUserAgentKeywords = this.mobileUserAgentKeywords.concat(KNOWN_MOBILE_USER_AGENT_KEYWORDS);
    this.tabletUserAgentKeywords = this.tabletUserAgentKeywords.concat(KNOWN_TABLET_USER_AGENT_KEYWORDS);
  }

}
