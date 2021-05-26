let express = require('express');
let router = express.Router();
let User = require('./user');
var mysql = require("mysql");



router.get('/',(req,res) =>{
    res.render('register');
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
    let user = new User(req.body.username,req.body.email,req.body.tel,req.body.pwd,);
    console.log(user);
    var name = req.body.username;
    var password = req.body.pwd;
    var phone = req.body.tel;
    var email = req.body.email;

    var query = 'insert into authorname values("' +name +'","'+password+'","'+email+'" , "'+phone+'")';
    //var password1 = req.body.pwd1;
    // var query = 'insert into authorname values("' +name +'","'+password+'"," ' + password1 + '")';
    // database.query(query,function(req,res,next){
    //     query.count({
    //         name
    //     },function(err,count){
    //         if(count==0){
    //             next();
    //         }
    //         else{

    
    //             req.session.error = "用户存在"
    //             res.redirect("/")
    //         }
    //     })
    // })

    database.query(query,function(err,rows,fields){
        if(err){
            console.log(err);
            return;
        }
    // if(query.password = query.password1){
    //         console.log('注册成功');
    //         return;
    //     }
        // else {

        //     console.log(err);
        //     return;
        // }
        
        // else{
        //     console.log("ok");
        //     res.end("0")
        // }
        res.redirect('/');
    // },function(req,res,next){
    //     query.count({
    //         name
    //     },function(err,count){
    //         if(count==0){
    //             next();
    //         }
    //         else{
    //             req.session.index = "用户存在"
    //             res.redirect("/")
    //         }
    //     })
     })
      
   
});

module.exports = router;

