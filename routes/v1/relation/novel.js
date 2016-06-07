var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.param("novel_id") || !req.param("user_id") || !req.param("paragraph_id")) {
        res.status(400).json({error : "you need more paramaters."});
    }
    var sql = "SELECT * FROM relation_novel_music WHERE novel_id = " +req.param("novel_id")+ " AND user_id = " +req.param("user_id")+ " AND paragraph_id = " + req.param("paragraph_id");
    sqlite.select(sql).then(function(result) {
        if(result.status === true) {
            res.status(200).json(result);
        }else {
            //console.log(result);
            res.status(400).json(result);
        }
    });
});

router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //console.log(req.body);
    var sql = "INSERT INTO relation_novel_music ";
    sql += "VALUES(NULL, " +req.body.paragraph_id+ ", " +req.body.user_id+ ", " +req.body.music_id+ ", " +req.body.novel_id+ ")";
    sqlite.insert(sql).then(function(result) {
        if(result === true) {
            res.status(200).json({ message: 'Success! insert into table.' });
        }else {
            console.log(result);
            res.status(400).json({ message: 'Error! insert into table.', detail: result });
        }
    });
});

module.exports = router;
