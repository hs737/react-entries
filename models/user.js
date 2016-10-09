var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: {type: String, trim: true, index: true, unique: true, required: true},
    password: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    timestamp:{type:Date, default:Date.now}
})

module.exports = mongoose.model('User', userSchema)
