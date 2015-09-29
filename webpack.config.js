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
    new webpack.HotModuleReplacementPlugin()
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
