const express = require("express")
const route = express.Router() // Hàm tạo các route
// Lấy controller của product
const controller = require('./../../controller/client/product.controller')
route.get('/', controller.index) // get ra chính nó
module.exports = route