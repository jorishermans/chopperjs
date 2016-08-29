'use strict';
require('./utils/rootRequire')();
require('./utils/prodEnv')();
let express = require('express');
let http    = require('http');
let app     = express();
let server  = http.createServer(app);
var chopper = require('..');

/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

app.use(rootRequire('utils/flash'));

app.get('/', (req, res) => {
  var device = new chopper.DeviceDetect({req: req});
  res.render('index', {
    title: 'chopperjs example',
    mobile: device.isMobile(),
    tablet: device.isTablet(),
    desktop: device.isDesktop()
  });
});

app.use((req, res, next) => {
  res.status(404);
  res.render('global/404', {
    title: 'Page not found!',
  });
});

server.listen(8080);
console.log('Server started on localhost:8080\n');
