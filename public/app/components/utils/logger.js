const DEBUG = false;

export default {
    debug: function() {
        if (DEBUG) {
            console.log.apply(console, arguments);
        }
    },
    error: function() {
        console.error.apply(console, arguments);
    }
};