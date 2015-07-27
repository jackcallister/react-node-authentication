var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: {
    application: [
      'webpack-dev-server/client?http://0.0.0.0:3001',
      'webpack/hot/only-dev-server',
      './src/client/application'
    ],
    session: [
      'webpack-dev-server/client?http://0.0.0.0:3001',
      'webpack/hot/only-dev-server',
      './src/client/session'
    ]
  },

  devtool: '#inline-source-map',

  output: {
    path: path.join(__dirname, '/build/'),
    filename: "[name].js",
    publicPath: 'http://localhost:3001/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
