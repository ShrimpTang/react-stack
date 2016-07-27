var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8088',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            }
        ]
    }
}