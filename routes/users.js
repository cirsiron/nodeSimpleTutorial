var express = require('express');
var router = express.Router();

var users = {
  'by': {
    name: "jack",
    sex: "1"
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`this is users`);
});
router.all('/:id', function(req, res, next) {
  // res.send(`id: ${req.params.id}`);
  if(users[req.params.id]) {
    next()
  }else {
    next(new Error(req.params.id + ' is not exist'));
  }
});
router.get('/:id', function(req, res) {
  res.send(JSON.stringify(users[req.params.id]));
});
router.put('/user/:username', function(req, res) {
  // 修改用户信息
  res.send('Done');
  });

module.exports = router;
