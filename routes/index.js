var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dance page */
router.get('/dance', function(req, res, next) {
  res.render('dance', { title: 'Dance' });
});

module.exports = router;
