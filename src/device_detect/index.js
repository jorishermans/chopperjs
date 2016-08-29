if (typeof window === 'undefined') {
  var Device = require("./server_device.js");

  module.exports = Device;
} else {
  var Device = require("./client_device.js");

  module.exports = Device;
}
