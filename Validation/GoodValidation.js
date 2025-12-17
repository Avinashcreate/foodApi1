const mongoose = require('mongoose');

const GoodValidation = mongoose.Schema({
    rise:{
        type:String
    },
    orderTime:{
        type:Date,default: Date.now
    }
    
})
const CompleteOrder = mongoose.model("detailsorders",GoodValidation)
module.exports = CompleteOrder;