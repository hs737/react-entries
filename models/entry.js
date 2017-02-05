const MODULE_NAME = 'entry.js';

var logger = require('../utils/logger')(MODULE_NAME);
var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
    text: { type: String, trim: true, default: '' },
    profile: {type: mongoose.Schema.Types.ObjectId, ref: 'RelationshipProfile', required: true},
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);