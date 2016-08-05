import {LiteDeviceResolver} from "./lite_device_resolver.js";

export class DeviceFace {

  userAgent() {return ""};

  device = null;

  init(userAgent, headers, deviceResolver) {
    if (deviceResolver==null) {
        deviceResolver = new LiteDeviceResolver();
    }
    this.device = deviceResolver.resolveDevice(userAgent, headers);
  }

  isMobile() {
     return this.device.mobile();
  }

  isTablet() {
     return this.device.tablet();
  }

  isDesktop() {
    return this.device.desktop();
  }

  blackberry() {
    return this._find('blackberry') || this._find('bb10') || this._find('rim');
  }

  blackberryPhone() {
    return this.blackberry() && this._find('tablet');
  }

  blackberryTablet() {
    return this.blackberry() && this._find('tablet');
  }

  windows() {
    return this._find('windows');
  }

  windowsPhone() {
    return this.windows() && this._find('phone');
  }

  windowsTablet() {
    return this.windows() && this._find('touch');
  }

  android() {
    return this._find("android");
  }

  androidPhone() {
    return this.android() && this._find('mobile');
  }

  androidTablet() {
    return this.android() && !this._find('mobile');
  }

  _find(needle) {
    return this.userAgent().indexOf(needle) != -1;
  }
}
