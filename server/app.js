const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const registerRoutes = require('./api/routes/register');
const useractivationRoutes = require('./api/routes/useractivation');
const loginRoutes = require('./api/routes/login');
const checkUserRoutes = require('./api/routes/checkUser');
const uploadPhotoRoutes = require('./api/routes/userPhoto');
const taskRoutes = require('./api/routes/task');
const projectRoutes = require('./api/routes/project');

app.use('/register', registerRoutes);
app.use('/useractivation', useractivationRoutes);
app.use('/login', loginRoutes);
app.use('/checkUser', checkUserRoutes);
app.use('/userPhoto', uploadPhotoRoutes);
app.use('/task', taskRoutes);
app.use('/project', projectRoutes);

module.exports = app;
