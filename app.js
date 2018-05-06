
var express = require('express');


var app = express();
var routers = require('./routes/index');
var middleware = require('./middlewares/index');

routers(app);//注册路由

middleware(app);//添加中间件


module.exports = app;
