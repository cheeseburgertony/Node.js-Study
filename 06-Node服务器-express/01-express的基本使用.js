const express = require("express");

// 1.创建express服务器
const app = express();

// 客户端范围URL /login /home
app.post("/login", (req, res) => {
  // 处理login请求
  res.end("登录成功，欢迎回来");
});

app.get("/home", (req, res) => {
  res.end("展示首页轮播图");
});

// 2.启动服务器，并监听端口
app.listen(8000, () => {
  console.log("服务器启动成功~");
});
