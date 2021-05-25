var express = require('express');
var router = express.Router();
var mysql = require("mysql");
/* GET home page. */
//get请求方式，浏览器回车
//'/'

router.get('/', function(req, res) {
  //返回index模板

  res.render('index');
  //返回obj json数据
 // res.json();
});
//post方法   可以有多个路由
//router.post('b',(req,res) => {
//  res.json();
//})
// router.all('/',(req,res,next) =>{
//   console.log('......');
//   next();
// })不写next不会往下走


//数据库
// var settings = {};
// settings.db={
//   host:"localhost",
//   port:3306,
//   user:"root",
//   password:"123456",
//   database:"movie"
// }
// settings.connect();


module.exports = router;
