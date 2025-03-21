const express = require('express')
// Tao router
const route = express.Router()
// Lấy controller
const controller = require('./../../controller/client/home.controller')
// lấy route trang chủ
route.get('/', controller.index)
module.exports = route