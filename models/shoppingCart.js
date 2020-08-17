'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class ShoppingCart extends Sequelize.Model {}
    ShoppingCart.init({
        name: Sequelize.STRING,
        category_range: Sequelize.STRING,
        cost_quantity: Sequelize.INTEGER,
        cost_unit: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
    }, { sequelize });

    return ShoppingCart;
};