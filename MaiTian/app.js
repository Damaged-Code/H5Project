var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks')
const session = require('express-session')
var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));*/
nunjucks.configure(path.join(__dirname, 'views'), {
	autoescape: true,
	express: app,
	noCache: false,
	watch: true
});
app.set('view engine', 'html');

app.all("*", function (req, res, next) {
	if (req.path !== "/" && !req.path.includes(".")) {
		res.header("Access-Control-Allow-Credentials", true);
		// 这里获取 origin 请求头 而不是用 *
		res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.header("Content-Type", "application/json;charset=utf-8");
	}
	next();
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: '100231',
	name: 'maitian',
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false, maxAge: null},

}))
app.use(require('./controllers')())

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error.html');
});

module.exports = app;
