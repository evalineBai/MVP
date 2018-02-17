var path = require('path');

var comp_dir = path.join(__dirname, '/client/index.js');
var dist_dir = path.join(__dirname, '/client/dist');

module.exports = {
  entry: comp_dir,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: dist_dir
  }
}