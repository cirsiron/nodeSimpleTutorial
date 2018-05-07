var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('reg');
});
router.post('/', function (req, res) {
    console.log(req.body);
    res.send('post');
});
module.exports = router;