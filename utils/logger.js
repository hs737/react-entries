var winston = require('winston');
var config = require('config');

const loggingConfig = config.get('logging');

module.exports = function (loggerLabel) {
    return new(winston.Logger)({
        transports: [
            new(winston.transports.Console)({
                level: loggingConfig.level,
                colorize: true,
                timestamp: function () {
                    var today = new Date();
                    return today.toString();
                },
                prettyPrint: true,
                label: loggerLabel
                //   formatter: function(options) {
                //       return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
                // (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );

                //   }
            })
        ],
        exitOnError: false
    });
};