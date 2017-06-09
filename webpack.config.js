const webpack = require('webpack');
const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: 
  {
    bundle: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index.js'
    ],
    vendor: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
      'react',
      'react-dom',
    ]
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMaps: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('postcss-import'),
                    require('postcss-css-variables'),
                    require('autoprefixer'),
                    require('postcss-custom-media'),
                    require('postcss-import'),
                    require('postcss-nested'),
                    require('postcss-color-function'),
                  ];
                },
              },
            },
          ],
        }),
      },
      {
        use: 'file-loader?[name].[hash].[ext]',
        test: /\.jpg$|\.png$|\.svg$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './index.tmpl.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true
  }
};
