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
    logger.debug(req.path, req.method, "session", req.session)

    next()
})

router.post('/login', function(req, res, next) {
    // var constraints = req.query.constraints
    // var options = req.query.options

    var userInput = {
        username: req.body.username
    }

    controllers['user'].readOne(userInput, null, false, function(err, user) {
        if (err) {
            logger.error("Controller returned error", err)

            req.session = {}
            res.json({
                code: CONSTANTS.RETURN_CODES.FUNCTION_EXECUTION_FAILED,
                message: err
            })

            return
        }

        if (user == null) {
            logger.warn("Controller returned null user")

            req.session = {}
            res.json({
                code: CONSTANTS.RETURN_CODES.FUNCTION_EXECUTION_FAILED,
                message: CONSTANTS.RETURN_MESSAGES.NULL_RESPONSE,
                result: null
            })

            return
        }

        user.comparePassword(req.body.password, function(error, isMatch) {
            if (error != null) {
                logger.warn("Schema password comparison had error", error)
                return
            }

            if (!isMatch) {
                req.session = {}
                res.json({
                    code: CONSTANTS.RETURN_CODES.INVALID_INPUT_ERROR,
                    message: "",    // TODO: Should be an enum with a better description than ""
                    result: null
                })
            } else {
                req.session.userId = user._id

                res.json({
                    code: CONSTANTS.RETURN_CODES.SUCCESS,
                    message: CONSTANTS.RETURN_MESSAGES.SUCCESS,
                    result: user
                })
            }
        })
    })
});

router.get('/logout', function (req, res, next) {
    req.session.reset();
    logger.debug("Resetting client session", req.session)

    res.json({
        code: CONSTANTS.RETURN_CODES.SUCCESS,
        message: CONSTANTS.RETURN_MESSAGES.SUCCESS,
    })
});

router.post('/register', function(req, res, next) {
    controllers['user'].create(req.body, false, function(err, user) {
        logger.debug("/register callback called")
        if (err) {
            logger.error("Controller returned error", err)

            req.session = {}
            res.json({
                code: CONSTANTS.RETURN_CODES.FUNCTION_EXECUTION_FAILED,
                message: err
            })

            return
        }

        if (user == null) {
            logger.warn("Controller returned null user")

            req.session = {}
            res.json({
                code: CONSTANTS.RETURN_CODES.FUNCTION_EXECUTION_FAILED,
                message: CONSTANTS.RETURN_MESSAGES.NULL_RESPONSE,
                result: null
            })

            return
        }

        req.session.userId = user._id

        res.json({
            code: CONSTANTS.RETURN_CODES.SUCCESS,
            message: CONSTANTS.RETURN_MESSAGES.SUCCESS,
            result: user
        })
    })
});

module.exports = router;
