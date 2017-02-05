var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require("client-sessions");

const MODULE_NAME = 'app.js';

console.log(MODULE_NAME + ":: NODE_ENV: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    require('./utils/env');
}

var config = require('config');

var indexRoutes = require('./routes/index');
var apiRoutes = require('./routes/api');
var accountRoutes = require('./routes/account');

var app = express();
require('./utils/db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = config.get('session');
console.log("Session Config", JSON.stringify(sessionConfig));
app.use(sessions({
    cookieName: sessionConfig.name, // cookie name dictates the key name added to the request object
    secret: sessionConfig.secret, // should be a large unguessable string
    duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
    activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));

app.use('/', indexRoutes);
app.use('/api', apiRoutes);
app.use('/account', accountRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;