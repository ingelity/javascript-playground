// NoErrorsPlugin stops webpack from outputting anything when there's an error
// in compiling. e.g. eslint loader warnings will fail the build.

// output.publicPath has to end with a slash

//    new webpack.NoErrorsPlugin()

//         loaders: [ 'react-hot', 'babel?stage=0&optional=runtime' ]


var webpack = require('webpack');

module.exports = {
  entry: [ './server/main.jsx' ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/server/assets',
    publicPath: 'http://localhost:8080/assets/'
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve : {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx$/,
        exclude: 'node_modules',
        loaders: [ 'react-hot', 'babel' ]
      }
    ]
  }
};
