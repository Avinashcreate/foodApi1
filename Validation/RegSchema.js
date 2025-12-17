const mongoose = require('mongoose');


const RegSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
password:{
    type:Number
},
city:{
    type:String
},
order:{
    type:String
}
})

const regDetail = mongoose.model('detailsorder1',RegSchema);
module.exports = regDetail;