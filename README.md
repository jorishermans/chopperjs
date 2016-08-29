# chopperjs

Chopperjs is a modern device detection framework that uses node.js.
It detects a mobile, tablet and desktop device in the browser and on the server.

## basic example

```javascript
var deviceLib = require('chopperjs');

var device = new deviceLib.DeviceDetect();
console.log(device.isDesktop());
console.log(device.isTablet());
console.log(device.isMobile());
```

## serverside example

You can use this device detection functionality in your express.js application like below.

```javascript
var chopper = require('chopperjs');

...

app.get('/', (req, res) => {
  var device = new chopper.DeviceDetect({req: req});
  res.render('index', {
    title: 'chopperjs example',
    mobile: device.isMobile(),
    tablet: device.isTablet(),
    desktop: device.isDesktop()
  });
});
```
