const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 会被请求两次,因为浏览器还要请求图标favicon.ico
  console.log("服务器被访问");

  res.end("Hello World");
});

// 2.开启server
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
