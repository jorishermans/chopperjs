import {LiteDeviceResolver} from "../lite_device_resolver.js";
import {DeviceFace} from "../device_face.js";

export class DeviceDetect extends DeviceFace {

  user_agent;

  constructor() {
    super();
    this.user_agent = navigator.userAgent;
    this.init(navigator.userAgent, new Map(), new LiteDeviceResolver());
  }

  userAgent() {
    return user_agent;
  }
}
