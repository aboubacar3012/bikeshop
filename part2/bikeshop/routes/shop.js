var express = require('express');
var router = express.Router();


const dataCardBike = [
  {
    model: "BIKO45",
    price: 679,
    imageURL : "bike-1.jpg",
    quantity: 3,
  },
  {
    model: "KY012",
    price: 1580,
    imageURL : "bike-2.jpg",
    quantity: 4,
  },
  {
    model: "WX895",
    price: 570,
    imageURL : "bike-3.jpg",
    quantity: 2,
  },
  {
    model: "JKYO45",
    price: 690,
    imageURL : "bike-4.jpg",
    quantity: 1,
  },
  {
    model: "CHI777",
    price: 1299,
    imageURL : "bike-5.jpg",
    quantity: 2,
  },
  {
    model: "PHT456",
    price: 779,
    imageURL : "bike-6.jpg",
    quantity: 1,
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('shop', {dataCardBike: dataCardBike});
});


module.exports = router;
