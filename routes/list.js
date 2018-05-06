const express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('lists', {
        title: 'List',
        items: [1,2,3] 
    });
});
 
module.exports = router; 