var winston = require('winston')

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'silly',
            colorize: true,
            timestamp: function() {
                var today = new Date()
                return today.toString()
            },
            prettyPrint: true
          //   formatter: function(options) {
          //       return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
          // (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );

          //   }
        })
    ],
    exitOnError: false
})

module.exports = logger
