const Product = require('../models/productModel');

const addProduct = async (productData) => {
    const existingProduct = await Product.findOne({ sku: productData.sku });
    if (existingProduct) {
        throw new Error('Product with this SKU already exists');
    }
    const product = await Product.create(productData);
    return product;
};

const getProducts = async (queryParams) => {
    const page = parseInt(queryParams.page, 10) || 1;
    const limit = parseInt(queryParams.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);
    return products;
};

const updateProductQuantity = async (productId, newQuantity) => {
    const product = await Product.findByIdAndUpdate(
        productId,
        { quantity: newQuantity },
        { new: true }
    );
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

module.exports = {
    addProduct,
    getProducts,
    updateProductQuantity
};