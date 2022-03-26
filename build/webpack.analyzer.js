const merge = require('webpack-merge');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.js');


const config = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}

module.exports = merge(baseConfig, config)