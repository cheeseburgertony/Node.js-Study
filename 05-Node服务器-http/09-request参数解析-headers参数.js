const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  console.log(req.headers);
  // content-type 本次请求携带的类型
  console.log(req.headers["content-type"]);

  const token = req.headers["authorization"];
  console.log(token);

  res.end("查看header更多信息");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
