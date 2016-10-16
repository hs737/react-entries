const MODULE_NAME = 'relationshipProfile.js'

var logger = require('../utils/logger')(MODULE_NAME)
var mongoose = require('mongoose')

var relationshipProfileSchema = new mongoose.Schema({
    name: {type: String, trim: true, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    timestamp:{type:Date, default:Date.now}
})

module.exports = mongoose.model('RelationshipProfile', relationshipProfileSchema)
