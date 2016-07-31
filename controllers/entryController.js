var logger = require('../utils/logger')
var Entry = require('../models/entry')

var MODULE_NAME = 'entryController'

// module.exports['create'] = function(params, isRaw, callback) {}

module.exports['read'] = function(params, isRaw, callback) {
    var FUNCTION_NAME = 'get'
    logger.debug(MODULE_NAME + " " + FUNCTION_NAME + " called", params, isRaw)

    entry.find(params, function(err, docs) {
        if (err) {
            logger.error(err)
            callback(err, null)
            return
        } else {
            callback(null, docs)
        }
    })
}

// module.exports['update'] = function(params, isRaw, callback) {}
// module.exports['delete'] = function(params, isRaw, callback) {}
