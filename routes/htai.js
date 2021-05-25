var express = require('express');
var router = express.Router();
let Guanli = require('./guanli');
var mysql = require("mysql");
// const Guanli = require('./guanli');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('htai');
  // res.redirect("/gli");
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


router.post('/',(req,res) =>{
  //获取前端传递的参数
  //req.body.username
  let guanli = new Guanli(req.body.username,req.body.pwd);
  console.log(guanli);
  var name = req.body.username;
  var password = req.body.pwd;
  var query = 'select * from guanliyuan where name ="' + name  + '"AND password="' + password+'"';
  database.query(query,function(err,rows,fields){  
      if(err){
          console.log(err);
          return;
      }
      if(!rows[0]){
          res.send("fail")
          return;
      }
      res.redirect("/gli");
      
  })
 
});


module.exports = router;