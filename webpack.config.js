const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom',
];

module.exports = {
  devtool: 'eval',
  entry: {
    bundle: './src/app/app.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: ['react-hot-loader', 'babel-loader'],
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
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.tmpl.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
};
