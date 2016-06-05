var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "SELECT master_novel.id, master_novel.title, master_novel.chronology, master_author.name as author_name, master_category.name as category_name FROM master_novel INNER JOIN master_author, master_category ON master_novel.category_id = master_category.id AND master_novel.author_id = master_author.id";
    sqlite.select(sql).then(function(result) {
        if(result.status === true) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });
});

module.exports = router;