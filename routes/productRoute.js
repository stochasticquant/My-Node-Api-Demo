
const express = require('express')
const Product = require('../models/productModel')
const {getProducts, getProductById, createProduct, updateProductById, deleteProductById} = require('../controllers/productController')

const router = express.Router();

/////   Product routes
// get all products route
router.get('/', getProducts);

// get product by ID route
router.get('/:id', getProductById)

// we use an async/await callback function so that the app is not locked while writing to mongoDB
router.post('/', createProduct)

// update product route
router.put('/:id', updateProductById)

// delete product route
router.delete('/:id', deleteProductById)

// export all routers
module.exports = router;
