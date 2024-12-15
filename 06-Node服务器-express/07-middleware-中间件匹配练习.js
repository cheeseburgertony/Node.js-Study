const express = require("express");

const app = express();

// 请求永远匹配第一个符合要求的中间件

// 1.注册两个普通中间件
app.use((req, res, next) => {
  console.log("normal middleware1");
  next();
});

app.use((req, res, next) => {
  console.log("normal middleware2");
  next();
});

// 2.注册路径path/method匹配的中间件
app.get("/home", (req, res, next) => {
  console.log("match /home middleware");
  next();
});
app.post("/login", (req, res, next) => {
  console.log("match /login middleware");
  next();
});

// 3.注册两个普通的中间件
app.use((req, res, next) => {
  console.log("normal middleware3");
  next();
});
app.use((req, res, next) => {
  console.log("normal middleware4");
});

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
