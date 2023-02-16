var express = require('express');
var router = express.Router();
var cherryCount = new Object();
cherryCount.topping = "Cherry";
cherryCount.quantity = "2";

var chocoCount = new Object();
chocoCount.topping = "Chocolate";
chocoCount.quantity = "3";

var plainCount = new Object();
plainCount.topping = "Plain";
plainCount.quantity = "6";

data = new Array();
data.push(cherryCount);
data.push(chocoCount);
data.push(plainCount);
var data = JSON.parse(JSON.stringify(data))
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});
router.post('/', function(req, res, next) {
    res.send(data);
});

module.exports = router;
