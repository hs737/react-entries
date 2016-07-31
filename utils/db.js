var mongoose = require('mongoose')
var logger = require('./logger')
var CONSTANTS = require('./constants')

var dbUrl = CONSTANTS.DB_URL

mongoose.connect(dbUrl, function(err, res) {
    if (err) {
        logger.error("Database connection failed", dbUrl, err)
    } else {
        logger.debug("Database connection succeeded", dbUrl)
    }
})
