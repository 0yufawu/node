var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var playRouter = require('./routes/play');
var usersRouter = require('./routes/users');
var htaiRouter = require('./routes/htai');
var gliRouter = require('./routes/gli');
var haitRouter = require('./routes/hait');
var dataPageRouter = require('./routes/dataPage');
var useRouter = require('./routes/use');
// //配置模块
// var settings = require('./settings');
// //连接数据库
// var connection = mysql.createConnection(settings.db);
// //查询
// var selectSQL = 'select * from `mytable`';

// var arr = [];
// connection.query(selectSQL, function(err, rows) {
//     if (err) throw err;
//     for (var i = 0; i < rows.length; i++) {
//         arr[i] = rows[i].name;
//     }

//     //把搜索值输出
//     app.get('/', function(req, res) {
//         res.send(arr);
//     });
//   });
//   connection.end();
//   app.listen(3000);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine(".html",ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/play', playRouter);
app.use('/users',usersRouter);
app.use('/htai',htaiRouter);
app.use('/gli',gliRouter);
app.use('/hait',haitRouter);
app.use('/dataPage',dataPageRouter);
app.use('/use',useRouter);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
  secret:"123",
  cookie:{maxAge:60000}
}))
app.use(express.static(path.join(__dirname, 'public')));






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
