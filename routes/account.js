const MODULE_NAME = 'account.js'

var express = require('express');

var logger = require('../utils/logger')(MODULE_NAME)
var CONSTANTS = require('../utils/constants')

var User = require('../models/user')

logger.debug("Creating controllers")
var controllers = {
    user: require('../controllers/genericModelController')(User)
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

router.get('/:action', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/signin', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
    controllers['user'].create(req.body, false, function(err, user) {
        if (err) {
            logger.error("User Controller returned error", err)

            res.json({
                code: CONSTANTS.RETURN_CODES.FUNCTION_EXECUTION_FAILED,
                message: err
            })

            return
        }

        req.session.userId = user._id
        // TODO: Do not return user's password to the UI
        res.json({
            code: CONSTANTS.RETURN_CODES.SUCCESS,
            message: CONSTANTS.RETURN_MESSAGES.SUCCESS,
            result: user
        })
    })
});

module.exports = router;
