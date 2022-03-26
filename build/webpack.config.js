const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin, default: loader } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //配置入口文件
    entry: {
        index: path.resolve(__dirname, '../src/pages/index/main.js'),
        // admin: {
        // }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../blog')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(css|postcss|s[a|c]ss)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[id].[hash:8].css'
        }),
        new VueLoaderPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/pages/index/index.html'),
            inject: true,
            chunks: ['index']
        })
    ]
}