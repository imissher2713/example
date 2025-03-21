const express = require('express')
const route = express.Router()
const dashboardcontroller = require('../../controller/admin/dashboard.controller')

route.get('/', dashboardcontroller)
module.exports = route