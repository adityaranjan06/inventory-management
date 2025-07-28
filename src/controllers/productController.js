const productService = require('../services/productService');

const addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json({ message: 'Product added successfully', product_id: product._id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProductQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const updatedProduct = await productService.updateProductQuantity(id, quantity);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    addProduct,
    getProducts,
    updateProductQuantity
};