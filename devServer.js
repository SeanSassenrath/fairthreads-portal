const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const express = require('express');
const { resolve } = require('path');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);
const app = express();
const port = 8080;

app.use(historyApiFallback({
  verbose: false
}));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: resolve(__dirname, 'dist'),
  noInfo: true,
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr'
}))

app.listen(port, console.log(`Server running on port ${port}`));