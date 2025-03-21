const express = require('express')
const clientroute = require('./routers/client/index.route') // Lấy ra route tổng
const adminroute = require('./routers/admin/index.route')
const systemPrefix = require('./config/system')
const database = require('./config/database') // Model database
database.connect()
require('dotenv').config(); // Hàm config
const app = express() // Lấy app
const port = process.env.PORT 
app.set('views', './views') // set views và đường dẫn
app.set('view engine', 'pug') // Sử dụng pug
app.use(express.static('public')) // public thành file tĩnh
// App Local Variable
app.locals.prefixAdmin = systemPrefix.PATH_ADMIN

clientroute(app) // Hoạt động route
adminroute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})