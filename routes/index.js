var express = require('express');
var react = require('react')
var reactRouter = require('react-router')
var reactDomServer = require('react-dom/server')

var logger = require('../utils/logger')
var ServerApp = require('../public/build/es5/ServerApp')
var Main = require('../public/build/es5/components/Main')
var Home = require('../public/build/es5/components/layout/Home')
var store = require('../public/build/es5/components/stores/store')

var router = express.Router();
require('node-jsx').install({extension: '.js'})

router.use(function(req, res, next) {
    var params = req.params
    var query = req.query

    logger.debug(req.path, "called", req.method, params, query)

    next()
})

/* GET home page. */
router.get('/', function(req, res, next) {


    var reducers = {
        entriesReducer: {}
    }
    var initialStore = store.createStore(reducers)

    var routes = {
        path: '/',
        component: ServerApp,
        initial: initialStore,
        indexRoute: {
            component: Home
        }
    }

    reactRouter.match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
        if (error){
            logger.error('ReactRouter - ERROR: '+error)
            return
        }
        if (redirectLocation){
            logger.debug('ReactRouter - redirectLocation: '+redirectLocation)
            return
        }

        logger.debug('ReactRouter - renderProps: '+JSON.stringify(renderProps))
        var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, renderProps))
        res.render('index', {
            title: 'Express',
            react: html
        });
    })
});

module.exports = router;
