let express = require('express');
let router = express.Router();
//————————————连接数据库——————————
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'video'
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  }

});

//获取客户端数据
router.get('/api/register', function (req, response, next) {
  let name = req.query.userName
  console.log(name)
  let pwd = req.query.userPassword


  // 查找数据表中是否已经存在名字
  connection.query("SELECT * FROM user WHERE username = '" + name + "'", function (err, res, fields) {

    let uName = res[0]

    if (uName == undefined) {
      //    不存在时插入数据
      connection.query('INSERT INTO user SET  ?', {
        username: name,
        password: pwd
      }, function (err, data) {
        if (err) {
          response.send({
            statusCode: 0,
            msg: '注册失败，请重试'
          })
          return
        } else {
          response.send({
            statusCode: 200,
            msg: '注册成功'
          })
          return
        }
      })
    } else {

      response.send({
        statusCode: 0,
        msg: '用户名已存在'
      })
    }
  })

});
module.exports = router;
