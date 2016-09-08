var mongoose = require('mongoose')

var relationshipProfileSchema = new mongoose.Schema({
    name: {type: String, trim: true, required: true},
    timestamp:{type:Date, default:Date.now}
})

module.exports = mongoose.model('RelationshipProfile', relationshipProfileSchema)
