const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ]
  }
}