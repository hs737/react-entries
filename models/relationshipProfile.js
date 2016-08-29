var mongoose = require('mongoose')

var relationshipProfileSchema = new mongoose.Schema({
    name: {type: String, trim: true, required: true}
})

module.exports = mongoose.model('RelationshipProfile', relationshipProfileSchema)
