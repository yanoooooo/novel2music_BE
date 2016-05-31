var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({ message: 'This is /v1/user GET method.' });
});

router.post('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.dir(req);
  res.status(200).json({ message: 'This is /v1/user POST method.' });
});

module.exports = router;
