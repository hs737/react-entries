var express = require('express');
var react = require('react')
var reactRouter = require('react-router')
var reactDomServer = require('react-dom/server')

var ServerApp = require('../public/build/es5/ServerApp')
var Main = require('../public/build/es5/components/Main')
var Home = require('../public/build/es5/components/layout/Home')

var router = express.Router();
require('node-jsx').install({extension: '.js'})

/* GET home page. */
router.get('/', function(req, res, next) {

    var routes = {
        path: '/',
        component: ServerApp,
        indexRoute: {
            component: Home
        }
    }

    reactRouter.match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
        if (error){
            console.log('ReactRouter - ERROR: '+error)
            return
        }
        if (redirectLocation){
            console.log('ReactRouter - redirectLocation: '+redirectLocation)
            return
        }

        console.log('ReactRouter - renderProps: '+JSON.stringify(renderProps))
        var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, renderProps))
        res.render('index', {
            title: 'Express',
            react: html
        });
    })
});

module.exports = router;
