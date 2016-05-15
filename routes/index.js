var express = require('express');
var router = express.Router();
var Entry = require('../models/entry');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dance page */
router.get('/dance', function(req, res, next) {
  var db = req.db;
  // console.log(db.collections);
  Entry.find({}, function(err, entries) {
    if (err) throw err;
    // object of all the entries
    res.render('dance', {
      "entries": entries
    });
  });
});

module.exports = router;
