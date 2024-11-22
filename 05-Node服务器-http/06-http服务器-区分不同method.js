const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/login") {
    if (method === "POST") {
      res.end("登陆成功");
    } else {
      res.end("不支持的请求方式，请检查你的请求");
    }
  } else if (url === "/products") {
    res.end("商品列表~");
  } else if (url === "/lyric") {
    res.end("这个是歌词");
  }
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
