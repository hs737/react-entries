"use strict";

var DEBUG = false;

module.exports = {
    debug: function () {
        if (DEBUG) {
            console.log.apply(console, arguments);
        }
    },
    error: function () {
        console.error.apply(console, arguments);
    }
};