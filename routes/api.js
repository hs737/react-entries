const MODULE_NAME = 'api.js'

var express = require('express');

var logger = require('../utils/logger')(MODULE_NAME)
var CONSTANTS = require('../utils/constants')

var Entry = require('../models/entry')
var RelationshipProfile = require('../models/relationshipProfile')
var User = require('../models/user')

logger.debug("Creating controllers")
var controllers = {
    entry: require('../controllers/genericModelController')(Entry),
    profile: require('../controllers/genericModelController')(RelationshipProfile),
    user: require('../controllers/genericModelController')(User),
    search: require('../controllers/searchController')
}

var router = express.Router();

router.use(function(req, res, next) {
    var params = req.params
    var query = req.query
    var body = req.body

    logger.debug(req.path, "called", req.method)
    logger.debug(req.path, req.method, "params", params)
    logger.debug(req.path, req.method, "query", query)
    logger.debug(req.path, req.method, "body", body)

    next()
})

router.get('/', function(req, res, next) {
    res.json({
        code: CONSTANTS.RETURN_CODES.SUCCESS,
        message: CONSTANTS.RETURN_MESSAGES.SUCCESS
    })
});

router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource
    var controller = getController(res, resource)

    var constraints = req.query.constraints
    var options = req.query.options

    switch(controller.controllerName) {
        case 'genericModelController':
            controller.read(constraints, options, false, genericControllerCallback(res))
            return;
        case 'searchController':
            controller.search(constraints, false, genericControllerCallback(res))
            return
    }
});

router.get('/:resource/:id', function(req, res, next) {
    var resource = req.params.resource
    var controller = getController(res, resource)

    var options = req.query.options

    controller.readById(req.params.id, options, false, genericControllerCallback(res))
});

router.post('/:resource', function(req, res, next) {
    var resource = req.params.resource
    var controller = getController(res, resource)

    controller.create(req.body, false, genericControllerCallback(res))
});

router.put('/:resource/:id', function(req, res, next) {
    var resource = req.params.resource
    var controller = getController(res, resource)

    var id = req.params.id
    controller.update(id, req.body, false, genericControllerCallback(res))
});

router.delete('/:resource/:id', function(req, res, next) {
    var resource = req.params.resource
    var controller = getController(res, resource)

    controller.deleteById(req.params.id, false, genericControllerCallback(res))
});

var getController = function (res, resource) {
    var controller = controllers[resource]
    if (controller == null) {
        var errorMessage = "Resource '" + resource + "' not recognized"
        logger.error(errorMessage)

        res.json({
            code: CONSTANTS.RETURN_CODES.INVALID_INPUT_ERROR,
            message: errorMessage
        })
    } else {
        return controller
    }
}

var genericControllerCallback = function (res) {
    return function(err, docs) {
        if (err) {
            logger.error("Controller returned error", err)

            res.json({
                code: CONSTANTS.RETURN_CODES.FUNCTION_EXECUTION_FAILED,
                message: err
            })

            return
        }

        res.json({
            code: CONSTANTS.RETURN_CODES.SUCCESS,
            message: CONSTANTS.RETURN_MESSAGES.SUCCESS,
            result: docs
        })
    }
}

module.exports = router;
