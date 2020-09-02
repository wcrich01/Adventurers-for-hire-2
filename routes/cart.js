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
    const shoppingCart = await ShoppingCart.findAll().then( (result) => {
        
        res.json(result); 
        //console.log(result);
    });
}));

/* --- POST to shopping cart --- */
router.post('/add',asyncHandler(async (req, res) => {
    const findcart = await ShoppingCart.findOne({ where: { name: req.body.name } });
    if (findcart === null) {
        const shoppingCart = await ShoppingCart.create(req.body).then( (result) => {
            res.json(result);
        });
    } else {
        let newQuantity = findcart.quantity+1;
        await ShoppingCart.update({quantity:newQuantity}, { where: { name: findcart.name } }).then( (result) => {
        res.json(result);
    }); 
    }
    
}));

/* Update quantity of item in shopping cart */
router.post('/:id/quantity', asyncHandler(async (req, res) => {
    let shoppingCart;
    shoppingCart = await ShoppingCart.findByPk(req.params.id);
    if(shoppingCart) {
        await shoppingCart.update(req.body).then( (result) => {
        res.json(result); 
        //console.log(result);
    }); 
    } else {
        res.sendStatus(404);
    }
}));

/* Delete item in cart. */
router.post('/:id/delete', asyncHandler(async (req ,res) => {
    const cartItem = await ShoppingCart.findByPk(req.params.id);
    await cartItem.destroy();
    res.redirect(req.get('referer'));
}));


module.exports = router;  