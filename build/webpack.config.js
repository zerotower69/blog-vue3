const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin, default: loader } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //配置入口文件
    entry: {
        index: path.resolve(__dirname, '../src/pages/index/main'),
        admin: path.resolve(__dirname, '../src/pages/admin/main')
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
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    //让typescript把vue文件作为一个模块来处理
                    appendTsSuffixTo: [/\.vue$/]
                }
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
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,
            chunks: ['index']
        }),
        new HtmlPlugin({
            filename: 'admin.html',
            template: path.resolve(__dirname, "../public/admin.html"),
            inject: true,
            chunks: ['admin']
        })
    ],
    resolve: {
        //哪些类型的文件可以省略后缀
        extensions: ['.ts', 'tsx', '.js', '.jsx', '.vue']
    }
}