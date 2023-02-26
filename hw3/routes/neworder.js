var express = require('express');
var router = express.Router();

const dbquery = require('./dbms.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 * Post
 * When called will take order information
 * and inserts into database
 * 
 */
router.post('/', async function(req, res, next) {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY",
                "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]; //array of months to be used with js date tool
    let newID = 0 
    console.log("test");
    let string = '';
    await dbquery.dbquery("select MAX(ORDERID) as temp from ORDERS;",  function(err, results){
        newID = results[0].temp + 1; //gets max id and create new key
        //Creates query with new ORDERID
        string = "insert into ORDERS(ORDERID, MONTH, DATE, QUANTITY, TOPPING, NOTES) values("
            + newID + ",'" + months[req.body.month] + "'," + req.body.day + "," + req.body.quantity  + ",'" +
            req.body.topping + "','" + req.body.notes + "');"

        dbquery.dbquery(string,  function(err, results){}); //Inserts into database
    })
  });
module.exports = router;
