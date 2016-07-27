/**
 * Created by Shrimp on 16/7/25.
 */
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback:true
}).listen(8088,'localhost')