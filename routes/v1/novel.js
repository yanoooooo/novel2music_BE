var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "";
    if(req.param("id")) {
        var novel_id = req.param("id");
        //sql = "SELECT master_novel.id, master_novel.title, master_novel.chronology, master_author.name as author_name, master_category.name as category_name, master_paragraph.number, master_paragraph.sentence as sentence FROM master_novel INNER JOIN master_author, master_category, master_paragraph ON master_novel.category_id = master_category.id AND master_novel.author_id = master_author.id AND master_novel.id = master_paragraph.novel_id WHERE master_novel.id = " +req.param("id");
        sql = "SELECT master_novel.id, master_novel.title, master_novel.chronology, master_author.name as author_name, master_category.name as category_name FROM master_novel INNER JOIN master_author, master_category ON master_novel.category_id = master_category.id AND master_novel.author_id = master_author.id WHERE master_novel.id = " +novel_id;
        sqlite.select(sql).then(function(result) {
            if(result.status === true) {
                sql = "SELECT number, sentence FROM master_paragraph WHERE novel_id = " +novel_id;
                sqlite.select(sql).then(function(result2) {
                    if(result.status === true) {
                        result.datas[0].paragraph = result2.datas;
                        res.status(200).json(result);
                    } else {
                        res.status(400).json(result);
                    }
                });
                //res.status(200).json(result);
            } else {
                res.status(400).json(result);
            }
        });
    } else {
        sql = "SELECT master_novel.id, master_novel.title, master_novel.chronology, master_author.name as author_name, master_category.name as category_name FROM master_novel INNER JOIN master_author, master_category ON master_novel.category_id = master_category.id AND master_novel.author_id = master_author.id";
        sqlite.select(sql).then(function(result) {
            if(result.status === true) {
                res.status(200).json(result);
            } else {
                res.status(400).json(result);
            }
        });
    }
});

module.exports = router;