const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
})
module.export = mongoose.model('product', productSchema);