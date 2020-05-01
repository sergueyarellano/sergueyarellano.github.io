const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../.env.development')
    })
  ],
  devServer: {
    contentBase: false,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, '../', 'temp')
  }
}
