'use strict'

const express = require('express')
const productController = require('../controllers/product')
const userController = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productController.getProduct)
api.get('/product/:productId', productController.getProductById)
api.post('/product', productController.postProduct)
api.put('/product/:productId', productController.putProduct)
api.delete('/product/:productId', productController.deleteProduct)
api.post('/signup', userController.signUp)
api.post('/signin', userController.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api