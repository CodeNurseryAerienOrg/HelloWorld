var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function(req, res, next) {
        res.render('index', { title: 'Express', user: 'Joe'  });
    })
    .get('/d3/:id', function(req, res, next) {
        console.log("get d3: " +  req.params.id);
        res.render('d3_' + req.params.id, { title: 'Essai D3' +  req.params.id});
    });

module.exports = router;
