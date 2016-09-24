var express                 = require('express');
var react                   = require('react')
var reactRouter             = require('react-router')
var reactDomServer          = require('react-dom/server')
var promise                 = require('bluebird')

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
    entry: promise.promisifyAll(require('../controllers/genericModelController')(Entry)),
    profile: promise.promisifyAll(require('../controllers/genericModelController')(RelationshipProfile)),
    search: promise.promisifyAll(require('../controllers/searchController')),
}

var router = express.Router();
require('node-jsx').install({extension: '.js'})
const MODULE_NAME = "index.js"

function matchRoute(req, childRoutes) {
    return function(result) {
        var initialStatePerReducer = {
            entryReducer: {
                entriesList: result.entries
            },
            profileReducer: {
                currentProfile: result.profileDetails
            },
            searchReducer: {
                searchResults: result.searchResults
            }
        }
        initialStore = store.createStore(initialStatePerReducer)

        var routes = {
            path: '/',
            component: ServerApp,
            initial: initialStore,
            indexRoute: {
                component: Home
            },
            childRoutes: childRoutes
        }

        return new Promise(function(resolve, reject){
            reactRouter.match({ routes, location: req.url }, function(error, redirectLocation, renderProps){
                console.log("matchRoute", error, redirectLocation, renderProps)

                if (error){
                    reject(error)
                    return
                }

                resolve({
                    redirectLocation: redirectLocation,
                    renderProps: renderProps,
                    initialStore: initialStore
                })
            })
        })
    }
}

function renderRoute(res) {
    return function(result) {
        console.log("then", result)
        if (result.redirectLocation){
            logger.debug('ReactRouter - redirectLocation: ' + result.redirectLocation)
            return
        }

        logger.debug('ReactRouter - renderProps: ' + JSON.stringify(result.renderProps))
        var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, result.renderProps))
        res.render('index', {
            title: 'Express',
            react: html,
            preloadedState: JSON.stringify(result.initialStore.getState())
        });

        return
    }
}

router.use(function(req, res, next) {
    var params = req.params
    var query = req.query

    logger.debug(MODULE_NAME, req.path, "called", req.method)
    logger.debug(MODULE_NAME, req.path, req.method, "params", params)
    logger.debug(MODULE_NAME, req.path, req.method, "query", query)

    next()
})

/* GET home page. */
router.get('/', function(req, res, next) {

    matchRoute(req, [
        {path: 'search', component: Search},
        {path: 'profile', component: Profile},
        {path: '*', component: PageNotFound}
    ])({})
    .then(renderRoute(res))
    .catch(function (err) {
        logger.error(MODULE_NAME, err)
        res.status(404).send({ error: err });       // TODO: Verify correct html error code
    })
});

router.get('/:page', function(req, res, next) {
    // TODO: This route has a generic path but search-specific logic. This should be abstracted out

    if (req.params.page == 'api'){
        next()
        return
    }

    promise.props({
        searchResults: controllers['search'].searchAsync({text: req.query.q}, false)
    })
    .then(matchRoute(req, [
        {path: 'search', component: Search},
        {path: '*', component: PageNotFound}
    ]))
    .then(renderRoute(res))
    .catch(function (err) {
        logger.error(MODULE_NAME, err)
        res.status(404).send({ error: err });       // TODO: Verify correct html error code
    })
});

router.get('/:page/:slug', function(req, res, next) {
    // TODO: This route has a generic path but profile-specific logic. This should be abstracted out
    logger.debug(MODULE_NAME, req.path, "req.params", req.params)

    if (req.params.page == 'api'){
        next()
        return
    }

    promise.props({
        profileDetails: controllers['profile'].readByIdAsync(req.params.slug, null, false),
        entries: controllers['entry'].readAsync({profile: req.params.slug}, {sort: {timestamp: -1}}, false)
    })
    .then(matchRoute(req, [
        {path: 'profile/:id', component: Profile},
        {path: '*', component: PageNotFound}
    ]))
    .then(renderRoute(res))
    .catch(function (err) {
        logger.error(MODULE_NAME, err)
        res.status(404).send({ error: err });       // TODO: Verify correct html error code
    })
});

module.exports = router;
