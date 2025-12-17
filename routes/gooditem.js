var express = require('express');
var router = express.Router();
var GoodValidation = require('../Validation/GoodValidation')

router.post('/', async function(req, res, next) {
try{
    console.log("---------------",req.body);
    const {rise} = req.body;
    const currentTime = new Date();
    const data = new GoodValidation({
       rise,
       orderTime: currentTime
    })
  await data.save()

    
}
catch(e){
    console.log("Error Post Method",e)
}
}
)
module.exports = router;