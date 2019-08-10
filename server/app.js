const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const helloworldRoutes = require('./api/routes/helloworld');

app.use('/helloworld', helloworldRoutes);

module.exports = app;
