var express = require('express');
var react = require('react')
var reactRouter = require('react-router')
var reactDomServer = require('react-dom/server')

var ServerApp = require('../public/build/es5/ServerApp')
var Main = require('../public/build/es5/components/Main')

var router = express.Router();
require('node-jsx').install({extension: '.js'})

/* GET home page. */
router.get('/', function(req, res, next) {
    var html = reactDomServer.renderToString(react.createElement(ServerApp))
    res.render('index', {
        title: 'Express',
        react: html
    });
});

module.exports = router;
