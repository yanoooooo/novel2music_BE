var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "SELECT id, name FROM master_rhythm";
    sqlite.select(sql).then(function(result) {
        if(result.status === true) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });
});

module.exports = router;