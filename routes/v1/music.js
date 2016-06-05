var express = require('express');
var bodyParser = require('body-parser');

var Sqlite = require('../sqlite.js');
var sqlite = new Sqlite();

var router = express.Router();
router.use(bodyParser());

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM master_music";
    if(req.param("rhythm")) {
        var rhythm_id = req.param("rhythm");
        sql = "SELECT * FROM master_music WHERE rhythm_id = " +rhythm_id;
    }
    sqlite.select(sql).then(function(result) {
        if(result.status === true) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });
    //res.json({ message: 'This is /v1/login GET method.', name: req.param("name"), password: req.param("password") });
});

/*router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //console.log(req.body);
    var sql = "INSERT INTO user ";
    sql += "VALUES(NULL, '" +req.body.name+ "', " +req.body.age+ ", '" +req.body.sex+ "', " +req.body.password+ ", ";
    sql += req.body.questionnaire_1+ ", " +req.body.questionnaire_2+ ", " +req.body.questionnaire_3+ ", " +req.body.questionnaire_4+ ", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
    sqlite.insert(sql).then(function(result) {
        if(result === true) {
            res.status(200).json({ message: 'Success! insert into table.' });
        }else {
            console.log(result);
            res.status(400).json({ message: 'Error! insert into table.', detail: result });
        }
    });
});*/

module.exports = router;
