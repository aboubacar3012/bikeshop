var express = require('express');
var router = express.Router();

const dataBike = [
  { model: "BIKO45", price: 679, imageURL : "bike-1.jpg" },
  { model: "KY012", price: 1580, imageURL : "bike-2.jpg"  },
  {
    model: "WX895",  price: 570, imageURL : "bike-3.jpg" },
  {
    model: "JKYO45", price: 690, imageURL : "bike-4.jpg"},
  {
    model: "CHI777", price: 1299, imageURL : "bike-5.jpg"},
  {
    model: "PHT456", price: 779, imageURL : "bike-6.jpg"}
]

let dataCardBike = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BikeShop - Home' , data: dataBike});
});

/* GET shops listing. */
router.get('/shop', function(req, res, next) {
  if(req.query.model){
    if(dataCardBike.find(bike => bike.model === req.query.model)){
      let cart = dataCardBike.filter(bike => bike.model === req.query.model);
      cart.map(item => {
       item.quantity++;
      })
      res.redirect("/shop");
     }else{
       let newCart = {}
       const product =  dataBike.filter(data => data.model === req.query.model)
       product.map(item => { 
         cart = {
           model: item.model,
           price: item.price,
           imageURL: item.imageURL,
           quantity: 1
         }
         dataCardBike.push(cart);
       })
       res.redirect("/shop");
     }
  }
  res.render('shop', {dataCardBike: dataCardBike});
});

/* Delete shop by item */
router.get('/delete-shop', function(req, res, next) {
  if(req.query.model){
    if(dataCardBike.find(bike => bike.model === req.query.model)){
        dataCardBike = dataCardBike.filter(bike => bike.model !== req.query.model);
        res.redirect("/shop")
     }
  }else{
    res.redirect("/")
   } 
})

router.post('/update-shop', function(req, res, next) {
  if(req.body.model){
    if(dataCardBike.find(bike => bike.model === req.body.model)){
        found = dataCardBike.filter(bike => bike.model === req.body.model);
        found.map(item => {
          item.quantity = req.body.quantity;
        })
        res.redirect("/shop")
     }
  }else{
    res.redirect("/shop")
   } 
})

module.exports = router;
