'use strict';

const path = require('path'),
      webpack = require('webpack');

var config = require('./config'),
    configWebpack = config.webpack;

var Clean = require('clean-webpack-plugin');

var devConfig = {
    entry: path.join(configWebpack.path.example, "index.js"),
    output: {
        path: path.join(configWebpack.path.dev),
        filename: "index.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: './.webpack_cache/',
                    presets: [
                        ["es2015", {"loose": true}],
                        'react',
                        'stage-0'
                    ]
                },
                exclude: /node_modules/,
            },
        ],
        noParse: [
            
        ]
    },
    resolve: {
        root: [
            path.resolve(configWebpack.path.src)
        ],
        moduledirectories:['node_modules', configWebpack.path.src],
        extensions: ["", ".js", ".jsx", ".es6", "css", "scss", "less", "png", "jpg", "jpeg", "ico"],
        alias: {
        }
    },
    plugins: [
        // remove previous build folder
        new Clean(['dev'], {root: path.resolve()}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    watch: true, //  watch mode
    // 是否添加source-map，可去掉注释开启
    // devtool: "#inline-source-map",
};


module.exports = devConfig;