const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env.production')
    })
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist')
  }
}
