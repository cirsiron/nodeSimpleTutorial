var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('login');
});  
router.post('/', function() {
    
});
module.exports = router;