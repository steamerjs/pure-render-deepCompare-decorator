var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxy = require('http-proxy-middleware');
var path = require('path');

var webpackConfig = require("./webpack.config.js"),
	config = require("../config/project");
var port = config.port;

for (var key in webpackConfig.entry) {
	webpackConfig.entry[key].unshift('webpack-hot-middleware/client');
	webpackConfig.entry[key].unshift('react-hot-loader/patch');
}

var compiler = webpack(webpackConfig),
	devMiddleWare = webpackDevMiddleware(compiler, {
	    hot: true,
		historyApiFallback: true,
		// noInfo: true,
		stats: { 
			chunks: false,
			colors: true 
		},
	}),
	hotMiddleWare = webpackHotMiddleware(compiler);


app.use(devMiddleWare);

app.use(hotMiddleWare);

// 前端转发
app.use(config.route, proxy({target: 'http://localhost:' + port}));

app.listen(port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});