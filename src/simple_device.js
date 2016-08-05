import {LiteDeviceResolver} from "./lite_device_resolver.js";
import {DeviceFace} from "./device_face.js";

export class SimpleDevice extends DeviceFace {

  user_agent;

  constructor( user_agent ) {
    super();
    this.init(user_agent, new Map(), new LiteDeviceResolver());
  }

  newUserAgent( user_agent ) {
    this.user_agent = user_agent;
    this.init(this.user_agent, new Map(), new LiteDeviceResolver());
  }

  userAgent() {
    return user_agent;
  }

}
