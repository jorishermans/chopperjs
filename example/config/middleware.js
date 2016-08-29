'use strict';

let bodyParser     = require('body-parser');
let path           = require('path');
let session        = require('express-session');
let compression    = require('compression');
let hbs            = require('express-hbs');

function relative(p) {
    return path.join(__dirname, p);
}

module.exports = function(app, express) {

  if (global.PROD_ENV) {
    app.use(compression());
  }

  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(session({
    secret: 'sUperS3cr3t',
    saveUninitialized: true,
    resave: true,
  }));

  // Hook in express-hbs and tell it where known directories reside
  app.engine('hbs', hbs.express4({
    partialsDir: [relative('../views/partials')],
    defaultLayout: relative('../views/layout/default.hbs')
  }));
  app.set('view engine', 'hbs');

  app.set('views', relative('../views'));
  app.set('view engine', 'hbs');
  app.use(express.static(relative('public')));
};
