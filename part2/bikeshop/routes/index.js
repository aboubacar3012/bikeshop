var express = require('express');
var router = express.Router();

const dataBike = [
  {
    model: "BIKO45",
    price: 679,
    imageURL : "bike-1.jpg"
  },
  {
    model: "KY012",
    price: 1580,
    imageURL : "bike-2.jpg"
  },
  {
    model: "WX895",
    price: 570,
    imageURL : "bike-3.jpg"
  },
  {
    model: "JKYO45",
    price: 690,
    imageURL : "bike-4.jpg"
  },
  {
    model: "CHI777",
    price: 1299,
    imageURL : "bike-5.jpg"
  },
  {
    model: "PHT456",
    price: 779,
    imageURL : "bike-6.jpg"
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BikeShop - Home' , data: dataBike});
});

module.exports = router;
