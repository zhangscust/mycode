let express = require('express');
let router = express.Router();
//————————————连接数据库——————————
//记得装mysql依赖啊
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', //数据库用户名
  password: '123456', //密码
  database: 'video' //数据库名
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("数据库连接成功")
  }

});
//获取客户端数据
router.get('/api/video', function (req, res) {
  connection.query("SELECT vurl FROM video", function (err, res, fields) {
    var tabList = [];
    if (res.length > 0) {

      let tabListstring = JSON.stringify(res);
      let tabList = JSON.parse(tabListstring)[0].vurl;
      console.log(tabList);
    }
  });
  res.send(tabList);
});
module.exports = router
