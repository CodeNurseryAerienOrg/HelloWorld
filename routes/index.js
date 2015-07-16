var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function(req, res, next) {
        res.render('index', { title: 'Express', user: 'Joe'  });
    })
    .get('/d3', function(req, res, next) {
        res.render('d3', { title: 'Essai D3'});
    });

module.exports = router;
