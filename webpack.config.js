const path = require('path');
module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    'discoverMars': './discover-mars.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015']},
        }],
      },
    ],
  }
};