// // 数据库连接配置
// module.exports = {
//   mysql: {
//     host: 'localhost', // 新建数据库连接时的 主机名或ID地址 内容
//     user: 'root',
//     password: '123456', // root 密码
//     database: 'video', // 数据库名
//     port: '3306'
//   }
// }
// let express = require('express');
// let router = express.Router();
// //————————————连接数据库——————————
// //记得装mysql依赖啊
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', //数据库用户名
//   password: '123456', //密码
//   database: 'video' //数据库名
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("数据库连接成功")
//   }

// });
// router.get('/api/', function (req, response, next) {
//   // 把从客户端传来的名字，密码赋值到新的变量
//   let name = req.query.userName
//   let pwd = req.query.userPassword
//   // 通过名字查询数据库用户表得到密码  password是数据表字段名，表名user_info
//   connection.query("SELECT password FROM user_info WHERE user = '" + name + "'", function (err, res, fields) {
//     // 当没有查找到密码时
//     if (err) {
//       throw err
//       return;
//     } else {
//       if (res.length > 0) {
//         //将数据库传来的数据转化为JSON格式
//         let uPasswordString = JSON.stringify(res);
//         let userPassword = JSON.parse(uPasswordString)[0].password;
//         if (userPassword == pwd) {
//           //将数据库的密码userPassword 和服务端 传来的密码相等
//           response.send({
//             statusCode: 200,
//             msg: '登录成功'
//           })
//           return
//         } else {
//           response.send({
//             statusCode: 0,
//             msg: '密码不正确'
//           })
//           return
//         }
//       }
//     }
//     //如果没有数据，说明用户名填写错误 
//     response.send({
//       statusCode: 0,
//       msg: '用户名不正确'
//     })
//   });
// })

// router.get('/api/register', function (req, response, next) {
//   let name = req.query.userName
//   // console.log(name)
//   let pwd = req.query.userPassword
//   let email = req.query.email
//   let radio = req.query.radio

//   // 查找数据表中是否已经存在名字
//   connection.query("SELECT * FROM user_info WHERE user = '" + name + "'", function (err, res, fields) {

//     let uName = res[0]

//     if (uName == undefined) {
//       //    不存在时插入数据
//       connection.query('INSERT INTO user_info SET  ?', {
//         user: name,
//         password: pwd,
//         email: email,
//         role: radio
//       }, function (err, data) {
//         if (err) {
//           response.send({
//             statusCode: 0,
//             msg: '注册失败，请重试'
//           })
//           return
//         } else {
//           response.send({
//             statusCode: 200,
//             msg: '注册成功'
//           })
//           return
//         }
//       })
//     } else {

//       response.send({
//         statusCode: 0,
//         msg: '用户名已存在'
//       })
//     }
//   })

// })
