var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    /*var name = req.param("name");
    var sql = "SELECT id, name, age, sex, questionnaire_1, questionnaire_2, questionnaire_3, questionnaire_4 FROM user";
    if(name) {
        sql += " WHERE name = '" +name+ "'";
        //sql = "SELECT id FROM user WHERE name = '" +name+ "'";
    }
    sqlite.select(sql).then(function(result) {
        if(result.status === true) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });*/
    res.render('index', { title: 'Express' });
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
