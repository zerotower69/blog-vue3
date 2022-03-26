const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.js');

const config = {
    mode: "production"
}

module.exports = merge(baseConfig, config);