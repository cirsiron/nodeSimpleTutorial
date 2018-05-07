
var homeRouter = require('./home');
var loginRouter = require('./login');
var logoutRouter = require('./logout');
var postRouter = require('./post');
var regRouter = require('./reg');
var userRouter = require('./user');

const routers = function(app) {
  app.use('/', homeRouter);
  app.use('/login', loginRouter);
  app.use('/logout', logoutRouter);
  app.use('/post', postRouter);
  app.use('/reg', regRouter);
  app.use('/user', userRouter);
};

module.exports = routers;