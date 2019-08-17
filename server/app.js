const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const registerRoutes = require('./api/routes/register');
const useractivationRoutes = require('./api/routes/useractivation');
const loginRoutes = require('./api/routes/login');
const checkUserRoutes = require('./api/routes/checkUser');

app.use('/register', registerRoutes);
app.use('/useractivation', useractivationRoutes);
app.use('/login', loginRoutes);
app.use('/checkUser', checkUserRoutes);

module.exports = app;
