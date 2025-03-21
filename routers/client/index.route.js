// Router tổng

const productRoute = require('./products.router') // route của product
const homeRoute = require('./home.route') // route của trang home

module.exports = (app) => {
  app.use('/products', productRoute) // 
  app.use('/', homeRoute)
}