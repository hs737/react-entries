var logger = require('../utils/logger')
var Entry = require('../models/entry')

var MODULE_NAME = 'entryController'

module.exports['create'] = function(docs, isRaw, callback) {
    var FUNCTION_NAME = 'create'
    logger.debug(MODULE_NAME + " " + FUNCTION_NAME + " called", docs, isRaw)

    Entry.create(docs, function(err, docs) {
        if (err) {
            logger.error(MODULE_NAME + " " + FUNCTION_NAME, err)
            callback(err, null)
        } else {
            callback(null, docs)
        }
    })
}

module.exports['read'] = function(params, isRaw, callback) {
    var FUNCTION_NAME = 'read'
    logger.debug(MODULE_NAME + " " + FUNCTION_NAME + " called", params, isRaw)

    Entry.find(params, function(err, docs) {
        if (err) {
            logger.error(MODULE_NAME + " " + FUNCTION_NAME, err)
            callback(err, null)
        } else {
            callback(null, docs)
        }
    })
}

// module.exports['update'] = function(params, isRaw, callback) {}
// module.exports['delete'] = function(params, isRaw, callback) {}
