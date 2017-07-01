var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: {
        app: "./public/build/es5/App.js"
    },
    output: {
        filename: "public/build/bundle.js",
        sourceMapFilename: "public/build/bundle.map"
    },
    devtool: '#source-map',
    plugins: [
        function () {
            this.plugin('watch-run', function (watching, callback) {
                console.log('Begin compile at ' + new Date());
                callback();
            });
        },
        new webpack.DefinePlugin({
            // Definitions...
        })
        //     new webpack.optimize.UglifyJsPlugin({minimize: true}),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};