//Module dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');

//Define route paths
var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var contactRouter = require('./routes/contact');
var alertRouter = require('./routes/alert');

var app = express();

//Set dotenv path
dotenv.config({
  path: './.env'
});

//Set view engine as handlebars and specify the view direction and partials
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout', 
  layoutDir: path.join(__dirname, '/views/layouts/'),
  partialsDir: path.join(__dirname, '/views/partials')
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Middleware definitions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
  secret: 'super-secret-key',
  key: 'super-secret-cookie',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

//Assign routes to paths
app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/contact', contactRouter);
app.use('/alert', alertRouter);

//Handle errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    res.render('error', {
        message: 'Error:',
        error: error
    });
});

//Run server
app.listen(process.env.PORT, () => console.log('App is running from port ' + process.env.PORT));

module.exports = app;
