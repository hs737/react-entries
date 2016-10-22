export default {
    debug: function(msg) {
        if ("production" !== process.env.NODE_ENV) {
            console.log(msg);
        }
    },
    error: function(msg) {
        console.error(msg);
    }
}
