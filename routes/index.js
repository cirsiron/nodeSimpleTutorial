
var homeRouter = require('./home');
var usersRouter = require('./users');
var listRouter = require('./list');

const routers = function(app) {
  app.use('/', homeRouter);
  // app.use('/users', usersRouter);
  // app.use('/list', listRouter);
};

module.exports = routers;