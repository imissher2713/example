const model = require('../../models/product.model')
module.exports.index = async(req, res) => {
    let product = await model.find({status: "available"})
    res.render('client/page/products/index.pug', {
        products: product
    })
}