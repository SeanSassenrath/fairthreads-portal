const express = require('express');
const app = express();
const path = require('path');
const port = (process.env.PORT || 8080);

const indexPath = path.join(__dirname, './build/index.html');
const publicPath = express.static(path.join(__dirname, './build'));

app.use('/build', publicPath);
app.get('*/', function(_, res) { res.sendFile(indexPath) });

app.listen(port, console.log(`Production server running on port ${port}`))


