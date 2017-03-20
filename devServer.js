// const path = require('path');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const config = require('./webpack.config.js');
// const express = require('express');

// const app = express();
// const port = (process.env.PORT || 8080);

// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   noInfo: false,
//   publicPath: config.output.publicPath,
//   colors: true
// }));

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'index.html'));
// // });

// app.get('*', (req, res) => {
//   console.log('req', req)
//   res.sendFile(path.resolve(__dirname, './index.html'));
// });

// app.listen(port, error => {
//   /* eslint-disable no-console */
//   if (error) {
//     console.error(error);
//   } else {
//     console.info(
//       'Listening on port %s. Open up http://localhost:%s/ in your browser.',
//       port,
//       port
//     );
//   }
//   /* eslint-enable no-console */
// });