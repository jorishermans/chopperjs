import {LiteDeviceResolver} from "../lite_device_resolver.js";
import {DeviceFace} from "../device_face.js";

export class DeviceDetect extends DeviceFace {

  user_agent;

  constructor( opts ) {
    super();
    let req = opts.req !== undefined ? opts.req : {headers: []};

    this.user_agent = req.headers['user-agent'];
    let headers = req.headers;

    this.init(this.user_agent, headers, new LiteDeviceResolver());
  }

  userAgent() {
    return this.user_agent;
  }
}
