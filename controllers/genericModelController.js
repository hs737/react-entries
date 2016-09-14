var logger = require('../utils/logger')

const MODULE_NAME = 'genericModelController'

module.exports = function(model) {
    const MODEL_NAME = model.modelName
    const moduleNameForLogger = MODULE_NAME + "::" + MODEL_NAME
    logger.debug(moduleNameForLogger, "Created controller for model")

    return {
        controllerName: MODULE_NAME,
        create: function(docs, isRaw, callback) {
            const FUNCTION_NAME = 'create'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", docs, isRaw)

            model.create(docs, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback))
        },

        read: function(params, isRaw, callback) {
            const FUNCTION_NAME = 'read'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", params, isRaw)

            model.find(params, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback))
        },
        update: function(id, params, isRaw, callback) {
            const FUNCTION_NAME = 'update'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", id, params, isRaw)

            model.findByIdAndUpdate(id, params, {new: true}, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback))
        }
        // delete: function(params, isRaw, callback) {}
    }
}

var genericModelCallback = function (moduleNameForLogger, functionName, callback) {
    return function(err, docs) {
        if (err) {
            logger.error(moduleNameForLogger + " " + functionName, err)
            callback(err, null)
        } else {
            callback(null, docs)
        }
    }
}
