const express= require('express');
const app = express();
const mongoose = require('mongoose')
const productRoutes = require('./api/routes/products')
app.use('/products',productRoutes)
mongoose.connect('mongodb+srv://admin:<db_password>@cluster0.keqmm.mongodb.net/')
app.use((req, res)=>{
    res.status(404).json({
        message: 'Route not found'
    })
})
module.exports = app;