var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

var swagger = require('swagger-express');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

//ここでv1とかルーティングをし、ファイルを指定する
app.use('/', routes);

/* v1 */
app.use('/v1/user', require('./routes/v1/user'));
app.use('/v1/login', require('./routes/v1/login'));
app.use('/v1/scale', require('./routes/v1/scale'));
app.use('/v1/time', require('./routes/v1/time'));
app.use('/v1/rhythm', require('./routes/v1/rhythm'));
app.use('/v1/music', require('./routes/v1/music'));
app.use('/v1/novel', require('./routes/v1/novel'));
app.use('/v1/term', require('./routes/v1/term'));
app.use('/v1/relation/novel', require('./routes/v1/relation/novel'));

//swagger
app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/swagger',           // swaggerページのパス
    swaggerJSON: '/api-docs',      // swagger表示用のデータアクセス先
    swaggerUI: './swagger',           // swagger-uiが置いてあるパス
    basePath: 'http://localhost:2800',
    apis: ['./api_documents/v1.js'],            // ドキュメントが記載されているファイル
    middleware: function(req, res){}
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
