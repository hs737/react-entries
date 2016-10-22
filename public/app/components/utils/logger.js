export default {
    debug: function() {
        if ("production" !== process.env.NODE_ENV) {
            console.log.apply(console, arguments);
        }
    },
    error: function() {
        console.error.apply(console, arguments);
    }
}
