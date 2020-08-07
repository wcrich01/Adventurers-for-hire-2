var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/testimonials', function(req, res, next) {
    res.render('testimonials', { title: 'Testimonials' })
});

router.get('/shop', function(req, res, next) {
    res.render('shop', { title: 'Shop' })
});

module.exports = router;
