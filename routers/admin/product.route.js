const express = require("express")
const ProductController = require('../../controller/admin/product.controller')
const productRoute = express.Router()
productRoute.get('/', ProductController)
module.exports = productRoute
