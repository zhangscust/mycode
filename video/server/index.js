//const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');

const {
  default: Axios
} = require('axios');
const app = express();
let loginRouter = require('./login')
let registerRouter = require('./register')
let video = require('./video')
app.use(bodyParser.json());

// 后端api路由
// app.use('/api', routerApi);
app.all('/api', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// post
app.use(bodyParser.urlencoded({
  extended: true
}))
// 登录路由
app.use('/api/login', loginRouter)
// 注册路由
app.use('/api/register', registerRouter)
app.use('/api/video', video)
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
