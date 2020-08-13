var express = require('express');
var router = express.Router();

/* ---- Get Testimonials page -----*/

router.get('/cart', function(req, res, next) {
    res.render('cart', { title: 'Shopping Cart' });
    next();
});


module.exports = router;