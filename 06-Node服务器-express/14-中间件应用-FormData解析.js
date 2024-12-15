const express = require("express");
const multer = require("multer");

// 创建app对象
const app = express();

// 应用一些中间件
app.use(express.json()); // 解析来自客户端的json数据
app.use(express.urlencoded({ extended: true })); // 解析客户端传递过来的urlencoded数据
// 通过multer解析FormData数据
const formData = multer();

// 编写中间件
app.post("/login", formData.any(), (req, res, next) => {
  console.log(req.body);
  res.end("登录成功");
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
