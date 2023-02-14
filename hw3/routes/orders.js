var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    test={"data":[
        {topping: "cherry", quantity: "2"},
        {topping: "plain", quantity: "6"},
        {topping: "chocolate", quantity: "3"}
    ]}
  res.send(test);
});
router.post('/', function(req, res, next) {
    test={"data":[
        {topping: "Cherry", quantity: "2"},
        {topping: "Chocolate", quantity: "3"},
        {topping: "Plain", quantity: "6"}
    ]}
    res.json(test);
});

module.exports = router;
