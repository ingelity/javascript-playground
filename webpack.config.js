// NoErrorsPlugin stops webpack from outputting anything when there's an error
// in compiling. e.g. eslint loader warnings will fail the build.

var webpack = require('webpack');

// output.publicPath has to end with a slash

module.exports = {
  entry: [ "./server/main.js" ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/server/assets",
    publicPath: "http://localhost:8080/assets/"
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.jsx$/,
        exclude: "node_modules",
        loader: "babel"
      }
    ]
  }
};
