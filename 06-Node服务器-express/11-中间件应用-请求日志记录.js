const express = require("express");
const moragn = require("morgan");
const fs = require("fs");

// 创建app对象
const app = express();
const writeStream = fs.createWriteStream("./log/access.log");

// 使用morgan中间件进行日志记录
// combined表示将所有的日志信息记录在一个文件中
app.use(moragn("combined", { stream: writeStream }));

// 创建一些中间件
app.post("/login", (req, res, next) => {
  res.end("登录成功");
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
