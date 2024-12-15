const express = require("express");

// 创建app对象
const app = express();

// 应用一些中间件
app.use(express.json()); // 解析来自客户端的json数据
// 解析传递过来的urlencoded数据,默认使用的是node内置的querystring模块
// app.use(express.urlencoded({extended:true})) // 使用qs三方库模块进行解析
app.use(express.urlencoded({ extended: true })); // 解析客户端传递过来的urlencoded数据

// 编写中间件
app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("登录成功");
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
