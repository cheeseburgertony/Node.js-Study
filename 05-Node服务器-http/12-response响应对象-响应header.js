const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 设置header信息：数据的类型以及数据编码的格式
  // 1.通过setHeader设置响应头的信息
  // 如果这里的格式错误浏览器会将该请求当作文件进行下载
  // res.setHeader("Content-Type", "application/json;chartset=utf-8;");
  // res.setHeader("Content-Type", "text/plain;chartset=utf-8;");

  // 2.通过writeHead和http StatuCode一起返回
  res.writeHead(200, {
    "Content-Type": "application/json;chartset=utf-8;",
  });

  const list = [
    { name: "tony", age: 18 },
    { name: "tom", age: 20 },
  ];

  res.end(JSON.stringify(list));
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
