# chopperjs

Chopperjs is a modern device detection framework that uses node.js.
It detects a mobile, tablet and desktop device in the browser and on the server.

```javascript
var deviceLib = require('chopperjs');

var device = new deviceLib.DeviceDetect();
console.log(device.isDesktop());
console.log(device.isTablet());
console.log(device.isMobile());
```
