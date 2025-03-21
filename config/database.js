const mongoose = require('mongoose')
module.exports.connect = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Example')
        console.log("Success!")
        
    } catch (error) {
        console.log("Error!")
    }
}
