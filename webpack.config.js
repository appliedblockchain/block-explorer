var path = require('path')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ],
            plugins: [
              'transform-object-rest-spread',
              'transform-react-jsx',
              'transform-class-properties',
              'lodash'
            ]
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  },
  plugins: [
    new LodashModuleReplacementPlugin
  ]
}