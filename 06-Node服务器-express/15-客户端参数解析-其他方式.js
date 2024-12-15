const express = require("express");

// 创建app对象
const app = express();

// 应用一些中间件

// 编写中间件
// 1.解析querysting参数
app.get("/home/list", (req, res, next) => {
  // query参数通过req.query获取
  const queryInfo = req.query;
  console.log(queryInfo);
  res.end("data list 数据");
});

// 2.解析params参数
app.get("/user/:id", (req, res, next) => {
  // 动态参数/:id 通过req.params获取
  const id = req.params.id;
  res.end(`获取到${id}的数据`);
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
