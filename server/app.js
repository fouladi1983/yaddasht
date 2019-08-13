const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const registerRoutes = require('./api/routes/register');
const useractivationRoutes = require('./api/routes/useractivation');

app.use('/register', registerRoutes);
app.use('/useractivation', useractivationRoutes);

module.exports = app;
