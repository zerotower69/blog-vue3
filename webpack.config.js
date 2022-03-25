const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    //配置入口文件
    entry: {
        index: ['babel-polyfill', './src/pages/index/main.js'],
        // admin: {

        // }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    devServer: {
        client: {
            logging: 'verbose',
            overlay: true
        },
        static: {
            directory: path.resolve(__dirname, '/src/pages')
        },
        compress: true,
        host: '0.0.0.0',
        port: 8000,
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/pages/index/index.html'),
            inject: true,
            chunks: ['index']
        })
    ]
}