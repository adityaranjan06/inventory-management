const express = require('express');
const productController = require('../controllers/productController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', isAuthenticated, isAdmin, productController.addProduct);
router.get('/', isAuthenticated, productController.getProducts);
router.put('/:id/quantity', isAuthenticated, isAdmin, productController.updateProductQuantity);

module.exports = router;