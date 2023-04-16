//Dummy file

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('createUsers');
});


module.exports = router;
