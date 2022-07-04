const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);