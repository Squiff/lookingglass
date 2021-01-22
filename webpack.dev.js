// webpack serve --config webpack.dev.js
// react hot loader

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/demo/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    // target is here to resolve https://github.com/webpack/webpack-dev-server/issues/2758
    // (HMR not working when there is a .browserslistrc)
    target: 'web',
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),

        // DEP_WEBPACK_COMPILATION_ASSETS: https://github.com/jantimon/html-webpack-plugin/issues/1527
        new HtmlWebpackPlugin({
            template: './src/demo/index.html',
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                enforce: 'pre',
                use: 'source-map-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { plugins: ['react-refresh/babel'] },
                    },
                ],
            },
            {
                test: /\.(scss|sass|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    //devtool: '(none)',
    devServer: {
        contentBase: '/dist',
        open: true,
        hot: true,
        port: 7357,
        clientLogLevel: 'silent',
    },
};
