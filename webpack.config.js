const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin, default: loader } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //配置入口文件
    entry: {
        index: './src/pages/index/main.js',
        // admin: {
        // }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'blog')
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
    devServer: {
        client: {
            logging: 'none',
            overlay: true
        },
        static: {
            directory: path.resolve(__dirname, './src/pages/index')
        },
        compress: true,
        host: '0.0.0.0',
        port: 8000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[id].[hash:8].css'
        }),
        new VueLoaderPlugin(),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/pages/index/index.html'),
            inject: true,
            chunks: ['index']
        })
    ],
    resolve: {
        extensions: ['.vue', '.js'],
        // alias: {
        //     'vue$': '/node_modules/vue/dist/vue.runtime.global.js'
        // }
    }
}