var mongoose = require('mongoose')
var logger = require('./logger')
var config = require('config')

const MODULE_NAME = 'db.js'
const dbConfig = config.get('dbConfig')
const dbUrl = "mongodb://" + [dbConfig.host, dbConfig.name].join('/')

logger.debug(MODULE_NAME, 'DB Config:', JSON.stringify(dbConfig));

mongoose.connect(dbUrl, function(err, res) {
    if (err) {
        logger.error(MODULE_NAME, "Database connection failed", dbUrl, err)
    } else {
        logger.debug(MODULE_NAME, "Database connection succeeded", dbUrl)
    }
})
