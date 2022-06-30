var express = require('express');
var app = express();


var login = require('./login.js');

app.use('/login', login);

app.listen(3000);