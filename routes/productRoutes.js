 
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

 
router.get('/product/list', productController.listProducts);
router.get('/product/:id', productController.getProduct);
router.post('/product/add', productController.addProduct);
router.put('/product/edit/:id', productController.editProductById);

router.delete('/product/delete/:id', productController.deleteProduct);

module.exports = router;
