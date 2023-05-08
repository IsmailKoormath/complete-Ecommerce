const express = require('express')
const { createProduct, getaProduct } = require('../controller/productCtrl')
const router =express.Router()

router.post('/create-product',createProduct)
router.get('/:id',getaProduct)

module.exports = router