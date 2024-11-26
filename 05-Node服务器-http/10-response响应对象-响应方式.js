const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // res: response对象 => Writable可写流
  // 响应数据方式write
  res.write('Hello World')
  res.write('My name is tony');
  // 响应数据方式end
  res.end("响应结束");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
