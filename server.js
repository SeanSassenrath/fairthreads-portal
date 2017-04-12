const express = require('express');
const app = express();
const path = require('path');
const port = (process.env.PORT || 8080);

const indexPath = path.join(__dirname, './dist/index.html');
const publicPath = express.static(path.join(__dirname, './dist'));

app.use('/dist', publicPath);
app.get('*', function(_, res) { res.sendFile(indexPath) });

app.listen(port, console.log(`Production server running on port ${port}`))


