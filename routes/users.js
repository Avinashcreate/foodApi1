var express = require('express');
var router = express.Router();
var RegSchema = require('../Validation/RegSchema')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name:"Avinash",
    status:"Bsc Computer Science"  })
});


router.post('/',async function(req,res,next){
  console.log(req.body)
  const newData = new RegSchema(req.body)
  await newData.save()
  res.json({
    respone:"Success"
  })
})


module.exports = router;
