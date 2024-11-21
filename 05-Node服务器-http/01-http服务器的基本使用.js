const http = require("http");

// 创建以恶搞http对应的服务器
const server = http.createServer((request, response)=>{
  // request对象中包含本次客户端请求的所有信息
  // 请求的url
  // 请求的method
  // 请求的headers
  // 请求携带的数据

  // response对象用于给客户端返回结果的
  response.end('Hello World')
});

// 开启对应的服务器,并且告知需要监听的端口
// 监听端口时,监听1024以上的端口,65535以下的端口
// 1025-65535之间的端口
// 2个字节 => 256*256 => 65536 => 0~65535
server.listen(8000, () => {
  console.log("服务器启动成功");
});
