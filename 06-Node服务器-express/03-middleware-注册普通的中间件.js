const express = require("express");

const app = express();

// 总结：当express接收到客户端发送的网络请求时，在所有中间件中开始进行匹配
// 当匹配到第一个符合要求的中间件时，那么就会执行这个中间件
// 后续的中间件是否执行取决于上一个中间件是否进行next

// 通过use方法注册的中间件是最普通/最简单的中间件
// 通过use注册的中间件，无论是什么请求方式都可以匹配上
// login/get
// login/post
// abc/patch
app.use((req, res, next) => {
  console.log("normal middleware 01");
  // res.end("返回结果，不要再等了");
  next();
});
app.use((req, res, next) => {
  console.log("normal middleware 02");
});

// 开启服务器
app.listen(8000, () => {
  console.log("服务器启动成功~");
});
