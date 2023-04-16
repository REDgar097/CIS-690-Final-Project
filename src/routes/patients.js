var express = require('express');
var router = express.Router();

/* GET Patients page. */
router.get('/', function(req, res, next) {
  res.render('createPatients');
});

module.exports = router;
