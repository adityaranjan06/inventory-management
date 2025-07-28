const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;