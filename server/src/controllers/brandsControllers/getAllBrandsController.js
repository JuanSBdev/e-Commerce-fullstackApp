const {Product} = require('../../db.js');
//products
const getAllBrands = async()=>{
     const products = await Product.findAll({
       attributes: ['brand'],
     });


    const brands = [...new Set(products.map(product => product.brand))];
    return brands;
};

module.exports = getAllBrands;

