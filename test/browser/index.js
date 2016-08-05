var deviceLib = require('../../lib/device_detect/');

var device = new deviceLib.DeviceDetect();

console.log(device.isDesktop());
