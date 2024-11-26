const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 响应状态码
  // 1.方式一：statusCode
  // res.statusCode = 401;

  // 2.方式二：writeHead 响应头
  res.writeHead(201)

  res.end("Hello World");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
