const http = require("http");
const url = require("url");
const qs = require('querystring')

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 参数一：query类型参数
  // /home/list?offset=100&size=20
  // 解析url
  const urlString = req.url;
  const urlInfo = url.parse(urlString);

  // 解析query: offset=100&size=10
  const queryString = urlInfo.query
  const queryInfo = qs.parse(queryString);
  // 或者使用 URLSearchParams
  // const params = new URLSearchParams(queryString)
  // console.log(params.get('offset'));

  res.end("Hello World");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
