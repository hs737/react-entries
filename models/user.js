const MODULE_NAME = 'user.js'

var logger = require('../utils/logger')(MODULE_NAME)
var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10

var userSchema = new mongoose.Schema({
    username: {type: String, trim: true, index: true, unique: true, required: true},
    password: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    timestamp:{type:Date, default:Date.now}
})

userSchema.pre('save', function(next) {
    const FUNCTION_NAME = 'save'
    logger.debug(FUNCTION_NAME + " called")

    var user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        logger.debug(FUNCTION_NAME, "Password is not modified. Calling next()")
        return next()
    }

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
            logger.error(FUNCTION_NAME, "Could not generate salt. Calling next(err)")
            return next(err)
        }

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                logger.error(FUNCTION_NAME, "Could not generate hash. Calling next(err)")
                return next(err)
            }

            // override the cleartext password with the hashed one
            user.password = hash
            logger.debug(FUNCTION_NAME, "Successfully created hash upon save. Calling next()")
            next()
        })

    })
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    const FUNCTION_NAME = 'comparePassword'
    logger.debug(FUNCTION_NAME + " called", candidatePassword)

    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            logger.error(FUNCTION_NAME, "Could not generate hash. Calling next(err)")
            return cb(err)
        }

        cb(null, isMatch)
    })
}

module.exports = mongoose.model('User', userSchema)
