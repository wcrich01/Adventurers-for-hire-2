var express = require('express');
var router = express.Router();
var ShoppingCart = require('../models').ShoppingCart;

function asyncHandler(cb){
    return async(req, res, next) => {
        try {
            await cb(req, res, next)
        } catch(error){
            res.status(500).send(error);
        }
    }
}

/* ---- Get the Shopping Cart page -----*/

router.get('/list', asyncHandler(async (req, res) => {
    //res.render('shopping-cart', { title: 'Shopping Cart' });
    const shoppingCart = await ShoppingCart.findAll().then( (result) => res.json(result) );
}));

/* --- POST to shopping cart --- */
router.post('/add',asyncHandler(async (req, res) => {
    console.log("Hello");
    const shoppingCart = await ShoppingCart.create(req.body);
}));

/* Delete individual article. */
router.post('/:id/delete', asyncHandler(async (req ,res) => {
    const cartItem = await ShoppingCart.findByPk(req.params.id);
    await cartItem.destroy();
    res.redirect(req.get('referer'));
}));


module.exports = router;  