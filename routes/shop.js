var express = require('express');
var router = express.Router();

/*----- Get to Shop page -------*/

router.get('/shop', function(req, res, next) {
    res.render('shop', { title: 'Shop' })
});

module.exports = router;
