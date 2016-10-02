const MODULE_NAME = 'db.js'

var mongoose = require('mongoose')
var logger = require('./logger')(MODULE_NAME)
var config = require('config')

const dbConfig = config.get('dbConfig')
const dbUrl = "mongodb://" + [dbConfig.host, dbConfig.name].join('/')

logger.debug('DB Config:', JSON.stringify(dbConfig));

mongoose.connect(dbUrl, function(err, res) {
    if (err) {
        logger.error(MODULE_NAME, "Database connection failed", dbUrl, err)
    } else {
        logger.debug(MODULE_NAME, "Database connection succeeded", dbUrl)
    }
})
