var express = require('express');
var app = express();
// post请求加了下面三行
var bodyParser = require('body-parser');
app.use(bodyParser.json());// 解析 json 参数
app.use(bodyParser.urlencoded({ extended: true }));// 创建 application/x-www-form-urlencoded 编码解析

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    });
var users = [
        {name:'Tim', age:12},
        {name:'Tom', age:13},
        {name:'Jack', age:14},
        {name:'Kitty', age:15}
    ];
app.get('/',function(req, res){
    res.end('Hello World!');
});
app.get('/user',function(req, res){
    res.json(users);//返回json数据
    res.end();
});
app.get('/user/add', function(req, res){
   console.log("GET请求参数：",req.query) //{num:'2',name:'Tim'}
   res.json(req.query); //拿到前端传过来的参数 
   res.end();
});
app.post('/user/update', function(req, res){
    console.log(req.query);
    console.log(req.body.name);
    res.json(Object.assign(req.body,req.query));
    res.end();
});
    var server = app.listen(80, function(){
    var host = server.address().address
    var port = server.address().port
          console.log("应用实例，访问地址为 http://%s:%s", host, port)
});