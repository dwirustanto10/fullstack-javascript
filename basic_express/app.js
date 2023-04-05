const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log('listening on port' + port);
});
