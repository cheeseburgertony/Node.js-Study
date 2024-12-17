const express = require("express");

const app = express();

// 执行同步操作
app.use((req, res, next) => {
  console.log("express middleware01");
  req.msg = "aaa";
  next();
  res.end(req.msg);
});

app.use((req, res, next) => {
  console.log("express middleware02");
  req.msg += "bbb";
  next();
});

app.use((req, res, next) => {
  console.log("express middleware03");
  req.msg += "ccc";
});

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
