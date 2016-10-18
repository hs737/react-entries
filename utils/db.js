const MODULE_NAME = 'db.js'

var mongoose = require('mongoose')
var logger = require('./logger')(MODULE_NAME)
var config = require('config')

const dbUrl = config.get('dbConfig.uri')

logger.debug("Connecting to mongo database", dbUrl)
mongoose.connect(dbUrl, function(err, res) {
    if (err) {
        logger.error(MODULE_NAME, "Database connection failed", dbUrl, err)
    } else {
        logger.debug(MODULE_NAME, "Database connection succeeded", dbUrl)
    }
})
