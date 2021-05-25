var express = require('express');
var router = express.Router();

var mysql = require("mysql");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('use');
});




//连接数据库
const database = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"123456",
    database:"blog"
  });
  database.connect();

 

/* GET home page. */
router.get('/show', function(req, res, next) {
    var query = 'select * from movie ';

    database.query(query,function(err,rows,fields){
      if(err){
          console.log(err);
          return;
      }
      res.json(rows)
    })
});

module.exports = router;