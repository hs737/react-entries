var logger = require('../utils/logger')
var Entry = require('../models/entry')
var RelationshipProfile = require('../models/relationshipProfile')

var MODULE_NAME = 'searchController'
var controllers = {
    entry: require('./genericModelController')(Entry),
    profile: require('./genericModelController')(RelationshipProfile),
}

module.exports['controllerName'] = MODULE_NAME

module.exports['search'] = function(params, isRaw, callback) {
    const FUNCTION_NAME = 'search'
    logger.debug(FUNCTION_NAME + " called", params, isRaw)

    var searchParams = {
        name: params.text
    }

    controllers.profile.read(searchParams, null, false, function(err, profiles) {
        if (err) {
            logger.error(FUNCTION_NAME, err)
            callback(err, null)
        } else {
            logger.debug(FUNCTION_NAME, "Docs", JSON.stringify(profiles))
            callback(null, profiles)
        }
    })
    // callback()
}

// module.exports['create'] = function(params, isRaw, callback) {}
// module.exports['update'] = function(params, isRaw, callback) {}
// module.exports['delete'] = function(params, isRaw, callback) {}
