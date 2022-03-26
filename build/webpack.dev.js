const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.js');


const config = {
    devServer: {
        client: {
            logging: 'info',
            overlay: true
        },
        static: {
            directory: path.resolve(__dirname, '../public')
        },
        compress: true,
        host: '0.0.0.0',
        port: 8000,
    },
    //开发环境
    mode: 'development'
}

module.exports = merge(baseConfig, config);