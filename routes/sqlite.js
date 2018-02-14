var sqlite_util = function() {
    var sqlite3 = require("sqlite3").verbose();
    //var db = new sqlite3.Database("./novel2music_backup.sqlite");
    var db = new sqlite3.Database("./novel2music.sqlite");

    this.select = function(sql) {
        return new Promise(function(resolve) {
            db.serialize(function () {
                db.all(sql, function(err, rows) {
                    if(err) {
                        //console.dir(err);
                        datas = {status: false, datas: err};
                        resolve(datas);
                    } else{
                        //console.log("success");
                        datas = {status: true, datas: rows};
                        resolve(datas);
                    }
                });
                /*db.each("SELECT * FROM user", function (err, row) {
                    console.dir(row);
                    //console.log(row.id + " : " + row.name);
                });*/
            });
        });
        //db.close();
    };

    this.insert = function(sql) {
        return new Promise(function(resolve) {
            //console.log(sql);
            db.serialize(function () {
                //var stmt = db.prepare(sql);
                db.run(sql, function(err, row) {
                    if(err) {
                        //console.dir(err);
                        resolve(err);
                    } else{
                        //console.log("success");
                        resolve(true);
                    }
                });
                //stmt.finalize();
            });
            //db.close();
        });
    };
};

module.exports = sqlite_util;