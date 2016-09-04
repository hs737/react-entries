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

            model.create(docs, function(err, docs) {
                if (err) {
                    logger.error(moduleNameForLogger + " " + FUNCTION_NAME, err)
                    callback(err, null)
                } else {
                    callback(null, docs)
                }
            })
        },

        read: function(params, isRaw, callback) {
            const FUNCTION_NAME = 'read'
            logger.debug(moduleNameForLogger + " " + FUNCTION_NAME + " called", params, isRaw)

            model.find(params, function(err, docs) {
                if (err) {
                    logger.error(moduleNameForLogger + " " + FUNCTION_NAME, err)
                    callback(err, null)
                } else {
                    callback(null, docs)
                }
            })
        }
        // update: function(params, isRaw, callback) {},
        // delete: function(params, isRaw, callback) {}
    }
}
