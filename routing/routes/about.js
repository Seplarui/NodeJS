var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.send('Est�s en About');
});

module.exports = router;
