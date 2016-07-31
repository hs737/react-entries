var mongoose = require('mongoose')

var entrySchema = new mongoose.Schema({
    text: {type: String, trim: true, default: ''},
    timestamp:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Entry', entrySchema)
