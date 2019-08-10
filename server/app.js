const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const helloworldRoutes = require('./routes/helloworld');

app.use('/helloworld', helloworldRoutes);

module.exports = app;
