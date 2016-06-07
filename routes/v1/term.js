var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.param("novel_id") && req.param("paragraph_id")) {
        res.status(400).json({error: "this request need novel_id."});
    }
    var sql = "SELECT * FROM master_term";
    if(req.param("novel_id")) {
        sql += " WHERE novel_id = " +req.param("novel_id");
        if(req.param("paragraph_id")) {
            sql += " AND paragraph_id = " +req.param("paragraph_id");
        }
    }
    sqlite.select(sql).then(function(result) {
        if(result.status === true) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });
});

module.exports = router;