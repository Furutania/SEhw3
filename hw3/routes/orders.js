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


//database connection
const dbquery = require('./dbms.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});



/**
 * Creates a query to grab all cheesecakes where the month 
 * is the same as the selected value
 * 
 * Counts the number of Plain Chocolate and Cherry
 */
router.post('/', function(req, res, next) {

  dbquery.dbquery("select * from ORDERS where MONTH='" + req.body.month + "';",  function(err, results){
    
    var plainCount = new Object();
    plainCount.topping = "Plain";
    plainCount.quantity = 0;

    var chocoCount = new Object();
    chocoCount.topping = "Chocolate";
    chocoCount.quantity = 0;

    var cherryCount = new Object();
    cherryCount.topping = "Cherry";
    cherryCount.quantity = 0;

    results.forEach(element => {
      switch(element.TOPPING){ //counts number of each topping
        case "Plain":
          plainCount.quantity += 1;
          break;

        case "Chocolate":
          chocoCount.quantity += 1;
          break;  
        case "Cherry":
          cherryCount.quantity += 1;
          break;  
      }
    });
  data = new Array();
  data.push(cherryCount);
  data.push(chocoCount);
  data.push(plainCount);

  res.send(data); //return count data
  });
});

module.exports = router;
