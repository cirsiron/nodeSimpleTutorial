
var express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const md5 = crypto.createHash('md5');
var password = md5.update('1').digest('base64');
console.log(password)
const bodyParser = require('body-parser');
var app = express();
var routers = require('./routes/index');
var middleware = require('./middlewares/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



routers(app);//注册路由

middleware(app);//添加中间件



module.exports = app;
