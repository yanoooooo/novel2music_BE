var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({ message: 'This is /v1/user GET method.' });
});

router.post('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log(req.body);
  res.status(200).json({ message: 'This is /v1/user POST method.' });
});

module.exports = router;
