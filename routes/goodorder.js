var express = require('express');
var router = express.Router();

/* GET home page. */
const goodstored = [
  {
    "id":"1",
    "image":"https://thvnext.bing.com/th/id/OIP.PWU14JVOp7Ojogt5UFP_dAHaHa?w=163&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    "price":"Rs:100",
    "rise":"Chicken Rise",
    
  },
  {
    "id":"2",
"image":"https://thvnext.bing.com/th/id/OIP.JbBpts8DpTwg1253grV3YAHaHa?w=191&h=191&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
"price":"Rs : 200",
"rise":"Briyani",

  },
  {
    "id":'3',
    "image":"https://th.bing.com/th/id/OIP.CyoC98CuZWn1mqCBmN5HNQHaEK?w=159&h=108&c=7&bgcl=d45349&r=0&o=6&cb=12&dpr=1.3&pid=13.1",
    "price":'20',
    "rise":"Parotta"
  },
  {
    "id":"4",
    "image":"https://th.bing.com/th?q=Chicken+Curry+Recipe&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",

    "price":"150",
    "rise":"Chicken Curry"
  },
  {
    "id":"5",
    "image":"https://th.bing.com/th/id/OIP.tcDvX6kQw-iIUm3AJ5M93AHaFj?w=210&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "price":"40",
    "rise":"chapati"
  },
  {
    "id":'6',
    "image":"https://th.bing.com/th/id/OIP.6SOA8RbIQhoX1xUWsgz5kAHaFE?w=253&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "price":'10',
    "rise":"Idli"
    
  },
  {
    "id":'7',
    "image":'https://th.bing.com/th/id/OIP.CHqbhf2S2IIT_ii29bCV_QHaEK?w=294&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3',
    "price":'20',
    "rise":'Dosa'
  },
  {
    "id":"8",
        "image":'https://tse1.explicit.bing.net/th/id/OIP.P1eaa0FU6bCtgRRntk9bagHaJ3?cb=12&pid=ImgDet&w=183&h=243&c=7&dpr=1.3&o=7&rm=3',
    "price":"5",
    "rise":"Vada"
  },
  {
    "id":'9',
  "image":"https://th.bing.com/th/id/OIP.BrfjKnJpnPqoBoSZ-qaOzgHaEK?w=322&h=181&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
  "price":"250",
  "rise":"Chicken Grilled"
  },
  {
    "id":'10',
  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4hs5Z02zEtTki2G13Pypbk8Aaeik3Wv_lQ&s",
  "price":'160',
  "rise":"Shawarma"
  },
  {
    "id":"11",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUHV1Bny-NrANRVADc5E95xXCm2ud1jH0FA&s",
    "price":'35',
    "rise":"Puri"
  },
  {
    "id":'12',
    "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHursdRUNaNiTTG1_RatXAjBiG9MHOil1Uiw&s',
    "price":'23',
    "rise":"Fish Fry"
  },
  {
    "id":"13",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBccU4aMX2qz6DcyRdHF1VGjb6UBqMF644-w&s",
    "price":"100",
    "rise":"Fry Rise"
  },
  {
    "id":'14',
    "image":"https://th.bing.com/th/id/OIP.Shmb2NJhwSnQsiK0F66yogHaHD?w=201&h=192&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    "price":"12",
    "rise":"Samosa"
  }
]
router.get('/', function(req, res, next) {
  res.json(goodstored)
});

module.exports = router;