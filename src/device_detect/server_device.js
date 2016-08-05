import {LiteDeviceResolver} from "../lite_device_resolver.js";
import {DeviceFace} from "../device_face.js";

export class DeviceDetect extends DeviceFace {

  user_agent;

  constructor( opts ) {
    super();
    var req = opts.req | {headers: []};
    user_agent = req.headers['user-agent'];

    let headers = new Map();
    for (var [key, value] of myMap.entries()) {
         headers[key] = values;
    }

    this.init(navigator.userAgent, headers, new LiteDeviceResolver());
  }

  userAgent() {
    return user_agent;
  }
}
