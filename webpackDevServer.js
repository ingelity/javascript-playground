// hot-only dev-server (webpack/hot/only-dev-server) is used
// instead of webpack/hot/dev-server because 
// it's harder to break(ignores unaccepted modules).

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry.unshift(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  publicPath: '/assets/',
  hot: true
});

server.listen(8080);
console.log('webpack-dev-server started');
