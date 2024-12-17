const express = require("express");
const axios = require("axios");

const app = express();

// 执行异步操作
app.use((req, res, next) => {
  console.log("express middleware01");
  req.msg = "aaa";
  next();
  // res.json(req.msg);
});

app.use((req, res, next) => {
  console.log("express middleware02");
  req.msg += "bbb";
  next();
});

app.use((req, res, next) => {
  console.log("express middleware03");
  req.msg += "ccc";
  // express这里的next和koa的next不一样,这里的next的返回的是一个void所以无法像koa中一样通过async和await去等待他执行完异步操作再继续往下执行,所以这里只能在最后一个发生请求的异步的中间件中获取异步的结果
  next();
});

app.use(async (req, res, next) => {
  // 这里执行异步操作就只能在最后执行异步操作的地方返回,无法从其他中间件取到
  const result = await axios.get("http://123.207.32.32:8000/home/multidata");
  req.msg += result.data.data.banner.list[0].title;
  res.json(req.msg);
});

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
