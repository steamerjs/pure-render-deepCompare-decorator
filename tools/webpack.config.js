'use strict';

const path = require('path'),
      webpack = require('webpack'),
      utils = require('steamer-webpack-utils');

var config = require('../config/project'),
    configWebpack = config.webpack;

var Clean = require('clean-webpack-plugin'),
    HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin-steamer");

var webpackConfig = {
    entry: {
        "index1": [path.join(configWebpack.path.example, "src/index1.js")],
        "index2": [path.join(configWebpack.path.example, "src/index2.js")],
        "index3": [path.join(configWebpack.path.example, "src/index3.js")],
    },
    output: {
        path: path.join(configWebpack.path.example, "dev"),
        filename: "[name].js",
        publicPath: "",
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    "plugins": [
                        "react-hot-loader/babel",
                        "transform-decorators-legacy"
                    ],
                    "presets": [
                        ["es2015", {"loose": true}], 
                        "react",
                        "stage-0"
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?-autoprefixer&localIdentName=[name]-[local]-[hash:base64:5]?postcss-loader!less-loader?root=" + path.resolve('src')
                }),
                include: [configWebpack.path.example],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=1000&name=img/[path]/[name].[ext]",
                ],
                // include: path.resolve(configWebpack.path.src)
            },
        ]
    },
    resolve: {
        modules:['node_modules', configWebpack.path.src],
        extensions: [".js", ".jsx", ".es6", "css", "scss", "less", "png", "jpg", "jpeg", "ico"],
        alias: {}
    },
    plugins: [
        // remove previous build folder
        new Clean([path.join(configWebpack.path.example, "dev")], {root: path.resolve()}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    watch: true, //  watch mode
    // 是否添加source-map，可去掉注释开启
    // devtool: "#inline-source-map",
};

module.exports = webpackConfig;