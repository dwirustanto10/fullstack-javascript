require('dotenv').config();
const expess = require('express');
const { gzip } = require('zlib');
const app = expess();
const port = process.env.PORT || 3000;

app.listen(port, () => {});
