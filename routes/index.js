var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home Page' });
    next();
});

router.get('/testimonials', function(req, res, next) {
    res.render('testimonials', { title: 'Testimonials' });
    next();
});

router.get('/shop', function(req, res, next) {
    res.render('shop', { title: 'Shop' });
    next();
});

router.get('/cart', function(req, res, next) {
    res.render('cart', { title: 'Shopping Cart' });
    next();
});

module.exports = router;
