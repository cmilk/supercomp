"use strict";

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

module.exports = {
    resolve: {
        alias: {
            "waypoints": path.resolve(
                __dirname,
                "node_modules/waypoints/lib/jquery.waypoints.min"
            ),
        }
    },
    plugins: [
        new ProvidePlugin({
            $: "jquery/dist/jquery.slim.min.js",
            jQuery: "jquery/dist/jquery.slim.min.js",
            "window.jQuery": "jquery/dist/jquery.slim.min.js"
        }),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: false
        })
    ],
    entry: "./src/js/main.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js"
    }
};
