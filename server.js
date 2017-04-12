const express = require('express');
const app = express();
const path = require('path');
const port = (process.env.PORT || 8080);

  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

const indexPath = path.join(__dirname, './dist/index.html');

app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, console.log(`Production server running on port ${port}`))


