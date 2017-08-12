var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/duanzi', function(req, res, next) {
  res.send('api response');
});

module.exports = router;
