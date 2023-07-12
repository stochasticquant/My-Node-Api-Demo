
/*
Controllers contain the api logic used to access the data
*/



const Product = require('../models/productModel')
const asynchandler = require('express-async-handler')

// get all products route
const getProducts = asynchandler(async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }

})

// get a single product by ID
const getProductById = asynchandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        // using custom error middleware
        res.status(500)
        throw new Error(error.message)
        //res.status(500).json({message: error.message})
    }
})

// create a new product
const createProduct = asynchandler(async(req, res) => {
    try {
        // create data in database
        const product = await Product.create(req.body)
        // response by showing 200 status as successful and show the data written
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// update a product using Id
const updateProductById = asynchandler(async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we can not find ID in database
        if(!product){
            res.status(404)
            throw new Error(`Can not find product with ID ${id}`)
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// delete a product using Id
const deleteProductById = asynchandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404)
            throw new Error(`Can not find product with ID ${id}`)
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
 


// export all logic methods
module.exports = {getProducts, getProductById, createProduct, updateProductById, deleteProductById}
