'use strict'

const express = require('express')
const productController = require('../controllers/product')
const api = express.Router()

api.get('/product', productController.getProduct)
api.get('/product/:productId', productController.getProductById)
api.post('/product', productController.postProduct)
api.put('/product/:productId', productController.putProduct)
api.delete('/product/:productId', productController.deleteProduct)

module.exports = api