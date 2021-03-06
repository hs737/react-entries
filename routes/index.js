const MODULE_NAME = "index.js";

var express = require('express');
var react = require('react');
var reactRouter = require('react-router');
var reactDomServer = require('react-dom/server');
var promise = require('bluebird');
var config = require('config');

var logger = require('../utils/logger')(MODULE_NAME);
var Entry = require('../models/entry');
// var RelationshipProfile = require('../models/relationshipProfile');
// var User = require('../models/user');

// var ServerApp = require('../public/build/es5/ServerApp').default;
// var Main = require('../public/build/es5/components/Main').default;
// var Home = require('../public/build/es5/components/layout/Home').default;
// var PageNotFound = require('../public/build/es5/components/layout/PageNotFound').default;
// var Search = require('../public/build/es5/components/layout/Search').default;
// var Profile = require('../public/build/es5/components/layout/Profile').default;
// var store = require('../public/build/es5/components/stores/store').default;
var CONSTANTS = require('../public/build/es5/components/constants/constants');

logger.debug("Creating controllers");
var controllers = {
    entry: promise.promisifyAll(require('../controllers/genericModelController')(Entry)),
    // profile: promise.promisifyAll(require('../controllers/genericModelController')(RelationshipProfile)),
    // search: promise.promisifyAll(require('../controllers/searchController')),
    // user: promise.promisifyAll(require('../controllers/genericModelController')(User))
};
var routesToSkip = ['api', 'account', 'favicon.ico'];
const sessionConfig = config.get('session');

var router = express.Router();
require('node-jsx').install({
    extension: '.js'
});

function matchRoute(req, childRoutes) {
    return function (result) {
        // var initialStatePerReducer = {
        //     entryReducer: {
        //         entriesList: result.entries,
        //     },
        //     profileReducer: {
        //         currentProfile: result.profileDetails
        //     },
        //     searchReducer: {
        //         searchResults: result.searchResults
        //     },
        //     uiReducer: {
        //         displaySelection: CONSTANTS.HOME_DISPLAY_ENUM.SHOW_DEFAULT
        //     },
        //     userReducer: {
        //         currentUser: result.userDetails
        //     }
        // };
        // var initialStore = store.createStore(initialStatePerReducer);

        var routes = {
            path: '/',
            // component: ServerApp,
            component: App,
            // initial: initialStore,
            // indexRoute: {
            //     component: Home
            // },
            childRoutes: childRoutes
        };

        return new Promise(function (resolve, reject) {
            reactRouter.match({
                routes,
                location: req.url
            }, function (error, redirectLocation, renderProps) {
                console.log("matchRoute", error, redirectLocation, renderProps);

                if (error) {
                    reject(error);
                    return;
                }

                resolve({
                    redirectLocation: redirectLocation,
                    renderProps: renderProps,
                    // initialStore: initialStore
                });
            });
        });
    };
}

function renderRoute(res) {
    return function (result) {
        logger.debug("renderRoute", result);
        if (result.redirectLocation) {
            logger.debug('ReactRouter - redirectLocation: ' + result.redirectLocation);
            return;
        }

        logger.debug('ReactRouter - renderProps: ' + JSON.stringify(result.renderProps));
        var html = reactDomServer.renderToString(react.createElement(reactRouter.RouterContext, result.renderProps));
        res.render('index', {
            title: 'Express',
            react: html,
            // preloadedState: JSON.stringify(result.initialStore.getState())
        });

        return;
    };
}

router.use(function (req, res, next) {
    var params = req.params;
    var query = req.query;

    logger.debug(req.path, "called", req.method);
    logger.debug(req.path, req.method, "params", params);
    logger.debug(req.path, req.method, "query", query);
    logger.debug(req.path, req.method, "session", req[sessionConfig.name]);

    next();
});

// router.use(function(req, res, next) {
//     logger.debug("req[sessionConfig.name].userDetails", req[sessionConfig.name].userDetails)

//     if (req[sessionConfig.name].userDetails != null) {
//         next()
//         return
//     }

//     // User is not logged in
//     matchRoute(req, [
//         {path: '*', component: PageNotFound}
//     ])({})
//     .then(renderRoute(res))
//     .catch(function (err) {
//         logger.error(MODULE_NAME, err)
//         res.status(404).send({ error: err });       // TODO: Verify correct html error code
//     })
// })

/* GET home page. */
router.get('/', function (req, res, next) {
    logger.debug(req.path, "called");
    // promise.props({
    //         // userDetails: controllers.user.readByIdAsync(req[sessionConfig.name].userId, null, false),
    //         entries: controllers.entry.readAsync({
    //             // profile: req.params.slug
    //         }, {
    //             sort: {
    //                 timestamp: -1
    //             }
    //         }, false)
    //     })
    //     .then(matchRoute(req, [{
    //             path: 'search',
    //             component: Search
    //         },
    //         {
    //             path: 'profile',
    //             component: Profile
    //         },
    //         {
    //             path: '*',
    //             component: PageNotFound
    //         }
    //     ]))
    //     .then(renderRoute(res))
    //     .catch(function (err) {
    //         logger.error(MODULE_NAME, err);
    //         res.status(404).send({
    //             error: err
    //         }); // TODO: Verify correct html error code
    //     });
    // res.json({
    //     "hello": "world"
    // });
    res.render('index', {
        title: 'Express'
    });
});

// router.get('/:page', function (req, res, next) {
//     logger.debug(req.path, "called");
//     // TODO: This route has a generic path but search-specific logic. This should be abstracted out
//     logger.debug(req.path, "req.params", req.params)

//     if (routesToSkip.indexOf(req.params.page) >= 0) {
//         next()
//         return
//     }

//     promise.props({
//             userDetails: controllers['user'].readByIdAsync(req[sessionConfig.name].userId, null, false),
//             searchResults: controllers['search'].searchAsync({
//                 text: req.query.q
//             }, false)
//         })
//         .then(matchRoute(req, [{
//                 path: 'search',
//                 component: Search
//             },
//             {
//                 path: '*',
//                 component: PageNotFound
//             }
//         ]))
//         .then(renderRoute(res))
//         .catch(function (err) {
//             logger.error(MODULE_NAME, err)
//             res.status(404).send({
//                 error: err
//             }); // TODO: Verify correct html error code
//         })
// });

// router.get('/:page/:slug', function (req, res, next) {
//     logger.debug(req.path, "called");
//     // TODO: This route has a generic path but profile-specific logic. This should be abstracted out
//     logger.debug(req.path, "req.params", req.params)

//     if (routesToSkip.indexOf(req.params.page) >= 0) {
//         next()
//         return
//     }

//     promise.props({
//             userDetails: controllers['user'].readByIdAsync(req[sessionConfig.name].userId, null, false),
//             profileDetails: controllers['profile'].readByIdAsync(req.params.slug, null, false),
//             entries: controllers['entry'].readAsync({
//                 profile: req.params.slug
//             }, {
//                 sort: {
//                     timestamp: -1
//                 }
//             }, false)
//         })
//         .then(matchRoute(req, [{
//                 path: 'profile/:id',
//                 component: Profile
//             },
//             {
//                 path: '*',
//                 component: PageNotFound
//             }
//         ]))
//         .then(renderRoute(res))
//         .catch(function (err) {
//             logger.error(MODULE_NAME, err);
//             res.status(404).send({
//                 error: err
//             }); // TODO: Verify correct html error code
//         })
// });

module.exports = router;