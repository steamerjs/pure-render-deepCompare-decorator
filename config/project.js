'use strict';

const path = require('path'),
      __basename = path.dirname(__dirname),
      __env = process.env.NODE_ENV,
      steamerConfig = require('./steamer.config');

/**
 * [config basic configuration]
 * @type {Object}
 */

var config = {
    env: __env,
    webpack: {
        path: {
            src: path.resolve(__basename, "src"),
            dev: path.resolve(__basename, "dev"),
            build: path.resolve(__basename, "lib"),
            example: path.resolve(__basename, "example"),
        },
    },
    webserver: steamerConfig.webserver, // 
    cdn: steamerConfig.cdn,       // 
    port: steamerConfig.port,    // port for local server
    route: steamerConfig.route  // http://host/
};

module.exports = config;
