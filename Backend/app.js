var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Tillagd modul
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});

var indexRouter = require('./routes/index');
var regUsersRouter = require('./routes/regusers');
var regNewUserRouter = require('./routes/regnewuser');
var userLoginRouter = require('./routes/userLogin')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Tillagd modul
// app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/regusers', regUsersRouter);
app.use('/regnewuser', regNewUserRouter);
app.use('/userLogin', userLoginRouter);




module.exports = app;
