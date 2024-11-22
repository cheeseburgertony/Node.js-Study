const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // request对象中包含哪些信息?
  // 1.url信息
  console.log(req.url);
  // 2.method信息(请求方式)
  console.log(req.method);
  // 3.headers信息(请求信息)
  console.log(req.headers);

  res.end("Hello World");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
