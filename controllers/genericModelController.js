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

        read: function(query, options, isRaw, callback) {
            const FUNCTION_NAME = 'read'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", query, options, isRaw)

            model.find(query, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback)).setOptions(options)
        },
        readById: function(id, options, isRaw, callback) {
            const FUNCTION_NAME = 'readById'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", id, options, isRaw)

            model.findById(id, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback)).setOptions(options)
        },
        update: function(id, params, isRaw, callback) {
            const FUNCTION_NAME = 'update'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", id, params, isRaw)

            model.findByIdAndUpdate(id, params, {new: true}, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback))
        },
        deleteById: function(id, isRaw, callback) {
            const FUNCTION_NAME = 'del'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", id, isRaw)

            model.findByIdAndRemove(id, genericModelCallback(moduleNameForLogger, FUNCTION_NAME, callback))
        }
    }
}

var genericModelCallback = function (moduleNameForLogger, functionName, callback) {
    return function(err, docs) {
        var logPrefix = moduleNameForLogger + " " + functionName
        if (err) {
            logger.error(logPrefix, err)
            callback(err, null)
        } else {
            logger.debug(logPrefix, "Docs", JSON.stringify(docs))
            callback(null, docs)
        }
    }
}
