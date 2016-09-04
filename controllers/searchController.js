var logger = require('../utils/logger')

var MODULE_NAME = 'searchController'

module.exports['read'] = function(params, isRaw, callback) {
    const FUNCTION_NAME = 'read'
    logger.debug(MODULE_NAME + " " + FUNCTION_NAME + " called", params, isRaw)

    callback()
}

// module.exports['create'] = function(params, isRaw, callback) {}
// module.exports['update'] = function(params, isRaw, callback) {}
// module.exports['delete'] = function(params, isRaw, callback) {}
