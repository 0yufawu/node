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

router.post('/del', function(req, res, next) {
  var name = req.body.name
  console.log(name);
  var query = 'delete from movie where name = "'+name+'" ';

  database.query(query,function(err,rows,fields){
    if(err){
        console.log(err);
        return;
    }
    res.json({"status":1})
  })
});


router.post('/alter',function(req,res,next){
  var type = req.body.type;
  var name = req.body.name;

  var query = 'update movie set type = "'+type+'",name = "'+name+'" where name = "'+req.body.old+'"'
  database.query(query,function(err,rows,fields){
    if(err){
        console.log(err);
        return;
    }
    res.json({"status":1})
  })
})


router.post('/add',function(req,res,next){
  var type = req.body.type;
  var name = req.body.name;
  var query = 'insert into movie values("'+type+'","'+name+'")';
  database.query(query,function(err,rows,fields){
    if(err){
        console.log(err);
        return;
    }
    res.json({"status":1})
  })
})



module.exports = router;