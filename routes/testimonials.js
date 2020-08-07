var express = require('express');
var router = express.Router();

/* ---- Get Testimonials page -----*/

router.get('/testimonials', function(req, res, next) {
    res.render('testimonials', { title: 'Testimonials' })
});


module.exports = router;