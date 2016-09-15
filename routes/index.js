var express        = require('express');
var react                   = require('react')
var reactRouter             = require('react-router')
var reactDomServer          = require('react-dom/server')

var logger                  = require('../utils/logger')
var CONSTANTS               = require('../utils/constants')
var Entry                   = require('../models/entry')
var RelationshipProfile     = require('../models/relationshipProfile')

var ServerApp               = require('../public/build/es5/ServerApp')
var Main                    = require('../public/build/es5/components/Main')
var Home                    = require('../public/build/es5/components/layout/Home')
var PageNotFound            = require('../public/build/es5/components/layout/PageNotFound')
var Search                  = require('../public/build/es5/components/layout/Search')
var Profile                 = require('../public/build/es5/components/layout/Profile')
var store                   = require('../public/build/es5/components/stores/store')

var controllers = {
    entry: require('../controllers/genericModelController')(Entry),
    profile: require('../controllers/genericModelController')(RelationshipProfile),
}

var router = express.Router();
require('node-jsx').install({extension: '.js'})
const MODULE_NAME = "index.js"

router.use(function(req, res, next) {
    var params = req.params
    var query = req.query

    logger.debug(MODULE_NAME, req.path, "called", req.method, params, query)

    next()
})

/* GET home page. */
router.get('/', function(req, res, next) {

    var initialStatePerReducer = {}
    var initialStore = store.createStore(initialStatePerReducer)

    var routes = {
        path: '/',
        component: ServerApp,
        initial: initialStore,
        indexRoute: {
            component: Home
        },
        childRoutes: [
            {path: 'search', component: Search},
            {path: 'profile', component: Profile}
        ]
    }

    reactRouter.match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
        if (error){
            logger.error('ReactRouter - ERROR: ' + error)
            return
        }
        if (redirectLocation){
            logger.debug('ReactRouter - redirectLocation: ' + redirectLocation)
            return
        }

        logger.debug('ReactRouter - renderProps: ' + JSON.stringify(renderProps))
        var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, renderProps))
        res.render('index', {
            title: 'Express',
            react: html,
            preloadedState: JSON.stringify(initialStore.getState())
        });
    })
});

router.get('/:page', function(req, res, next) {
    // TODO: This route has a generic path but search-specific logic. This should be abstracted out

    if (req.params.page == 'api'){
        next()
        return
    }

    var initialStatePerReducer = {
        searchReducer: {
            searchResults: null
        }
    }
    var initialStore = store.createStore(initialStatePerReducer)

    var routes = {
        path: '/',
        component: ServerApp,
        initial: initialStore,
        indexRoute: {
            component: Home
        },
        childRoutes: [
            {path: 'search', component: Search},
            {path: '*', component: PageNotFound}
        ]
    }

    reactRouter.match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
        if (error){
            logger.error('ReactRouter - ERROR: ' + error)
            return
        }
        if (redirectLocation){
            logger.debug('ReactRouter - redirectLocation: ' + redirectLocation)
            return
        }

        logger.debug('ReactRouter - renderProps: ' + JSON.stringify(renderProps))
        var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, renderProps))
        res.render('index', {
            title: 'Express',
            react: html,
            preloadedState: JSON.stringify(initialStore.getState())
        });
    })
});

router.get('/:page/:slug', function(req, res, next) {
    // TODO: This route has a generic path but profile-specific logic. This should be abstracted out
    logger.debug(MODULE_NAME, req.path, "req.params", req.params)

    if (req.params.page == 'api'){
        next()
        return
    }

    controllers['entry'].read({profile: req.params.slug}, false, function(error, docs) {
        if (error) {
            logger.error('ReactRouter - ERROR: ' + error)
            // TODO render page not found
            return
        }

        var initialStatePerReducer = {
            entryReducer: {
                entriesList: docs
            }
        }
        var initialStore = store.createStore(initialStatePerReducer)

        var routes = {
            path: '/',
            component: ServerApp,
            initial: initialStore,
            indexRoute: {
                component: Home
            },
            childRoutes: [
                {path: 'profile/:id', component: Profile}
            ]
        }

        reactRouter.match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
            if (error){
                logger.error('ReactRouter - ERROR: ' + error)
                return
            }
            if (redirectLocation){
                logger.debug('ReactRouter - redirectLocation: ' + redirectLocation)
                return
            }

            logger.debug('ReactRouter - renderProps: ' + JSON.stringify(renderProps))
            var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, renderProps))
            res.render('index', {
                title: 'Express',
                react: html,
                preloadedState: JSON.stringify(initialStore.getState())
            });
        })
    })
});

module.exports = router;
