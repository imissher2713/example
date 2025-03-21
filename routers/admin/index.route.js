const dashBoardRoute = require('../../routers/admin/dashboard.route')
const productRoute = require('../../routers/admin/product.route')
const SystemConfig = require('../../config/system')
module.exports = (app) => {
    app.use(SystemConfig.PATH_ADMIN + '/dashboard', dashBoardRoute);
    app.use(SystemConfig.PATH_ADMIN + '/product', productRoute);
}