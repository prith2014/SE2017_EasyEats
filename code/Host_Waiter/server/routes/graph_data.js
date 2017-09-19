var express = require('express');
var router = express.Router();
let ytd_data = require('../ytd.json');
let Graph = require('../models/main');


// Graph.getDaily("january");
// Graph.getMonthly();


/* GET ALL YTD DATA. */
router.get('/', function(req, res, next) {
    res.json(ytd_data);
});

router.get('/monthly', function(req, res, next) {

});

router.get('/daily', function(req, res, next) {
    Graph.getDaily(req.query.month , (result) => {
        console.log("Success!");
        console.log(result);
        res.json(result);
    })
});



module.exports = router;
