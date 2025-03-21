const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title: String,
    old_price: Number,
    new_price: Number,
    discount: Number,
    status: String,
    stock: Number
});

const product = mongoose.model('products', productSchema)
module.exports = product