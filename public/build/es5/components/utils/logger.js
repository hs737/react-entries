"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// import winston from 'winston'
// import config from 'config'

// class Logger extends winston.Logger {
//   constructor() {
//     super();

//     // this.transports = [
//     //     new (winston.transports.Console)({
//     //         level: loggingConfig.level,
//     //         colorize: true,
//     //         timestamp: function() {
//     //             var today = new Date()
//     //             return today.toString()
//     //         },
//     //         prettyPrint: true,
//     //         // label: loggerLabel
//     //     })
//     // ];

//     // this.exitOnError = false;
//   }
// }

// export default Logger

var Logger = (function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _prototypeProperties(Logger, null, {
        debug: {
            value: function debug(msg) {
                if ("production" !== process.env.NODE_ENV) {
                    console.log(msg);
                }
            },
            writable: true,
            configurable: true
        },
        error: {
            value: function error(msg) {
                console.error(msg);
            },
            writable: true,
            configurable: true
        }
    });

    return Logger;
})();

// export default Logger