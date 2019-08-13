const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const registerRoutes = require('./api/routes/register');

app.use('/register', registerRoutes);

module.exports = app;
