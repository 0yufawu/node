var express = require('express');
var router = express.Router();
let User = require('./user');
var mysql = require("mysql");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
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
  let user = new User(req.body.username,req.body.pwd);
  console.log(user);
  var name = req.body.username;
  var password = req.body.pwd;
  var query = 'select * from authorname where name ="' + name  + '"AND password="' + password+'"';
  database.query(query,function(err,rows,fields){  
      if(err){
          console.log(err);
          return;
      }
      if(!rows[0]){
          res.send("fail")
          return;
      }
      res.redirect("/");
      
  })
 
});

router.post("/l",function(req,res){
  var name = req.body.name


  res.json({"data":1})
})
module.exports = router;