var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10

var userSchema = new mongoose.Schema({
    username: {type: String, trim: true, index: true, unique: true, required: true},
    password: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    timestamp:{type:Date, default:Date.now}
})

userSchema.pre('save', function(error, doc, next) {
    if (error != null) {
        console.log("Error in pre hook save", error, doc)
        next(error)
    }

    var user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err)

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)

            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })

    })
})

// schema.pre('update', function() {
//   this.update({},{ $set: { updatedAt: new Date() } });
// });

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

module.exports = mongoose.model('User', userSchema)
