var express = require('express');

var logger = require('../utils/logger')
var CONSTANTS = require('../utils/constants')

var controllers = {
    entry: require('../controllers/entryController'),
    profile: require('../controllers/profileController')
}


var router = express.Router();

router.use(function(req, res, next) {
    var params = req.params
    var query = req.query

    logger.debug(req.path, "called", req.method, params, query)

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

    var controller = controllers[resource]
    if (controller == null) {
        var errorMessage = "Resource '" + resource + "' not recognized"
        logger.error(errorMessage)

        res.json({
            code: CONSTANTS.RETURN_CODES.INVALID_INPUT_ERROR,
            message: errorMessage
        })
    }

    res.json({
        code: CONSTANTS.RETURN_CODES.SUCCESS,
        message: CONSTANTS.RETURN_MESSAGES.SUCCESS
    })
});

module.exports = router;
