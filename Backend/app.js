var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Tillagda moduler
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});
var cors = require('cors');


var indexRouter = require('./routes/index');
var regUsersRouter = require('./routes/regusers');
var regNewUserRouter = require('./routes/regnewuser');
var userLoginRouter = require('./routes/userLogin');
var changeSubscription = require('./routes/changeSubscription');
var getSubscribedUsers = require('./routes/getSubscribedUsers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/regusers', regUsersRouter);
app.use('/regnewuser', regNewUserRouter);
app.use('/userLogin', userLoginRouter);
app.use('/changeSubscription', changeSubscription);
app.use('/getSubscribedUsers', getSubscribedUsers);


module.exports = app;
