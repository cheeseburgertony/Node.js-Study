const express = require("express");

const app = express();

// 一次性注册多个中间件
// app.method(路径, 中间件1, 中间件2, 中间件3)
// 用于处理比较复杂的逻辑，原本只需要放在一个中间件中处理的逻辑，但是为了更好的去处理，将其拆分成多个中间件，每个中间件负责自身应该做的逻辑
// 需要通过next方法才能执行下一个中间件
app.post(
  "/login",
  (req, res, next) => {
    console.log("match POST /login middleware01");
    next();
  },
  (req, res, next) => {
    console.log("match POST /login middleware02");
    next();
  },
  (req, res, next) => {
    console.log("match POST /login middleware03");
    next();
  },
  (req, res, next) => {
    console.log("match POST /login middleware04");
    res.end("所有的逻辑都处理完毕了，登录成功");
  }
);

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
