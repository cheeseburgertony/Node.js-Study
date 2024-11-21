const http = require("http");

// 创建第一个服务器
const server1 = http.createServer((req, res) => {
  res.end("服务器2000返回的结果");
});

server1.listen(2000, () => {
  console.log("2000端口对应的服务器启动成功");
});

// 创建第二个服务器
const server2 = http.createServer((req, res) => {
  res.end("服务器3000返回的结果");
});

server2.listen(3000, () => {
  console.log("3000端口对应的服务器启动成功");
});

// createServer底层其实是new一个Server对象
// const server3 = new http.Server();
// server3.listen(4000, () => {
//   console.log("4000端口对应的服务器启动成功");
// });

// listen函数有三个参数
// 1.端口port 可以不传,系统会默认分配,后续项目中会写到环境变量
// 2.主机host 通常可以传入localhost,ip地址127.0.0.1(回环地址,只有自己的主机才能访问到)或者ip地址0.0.0.0(当前同一网段下的所有主机都可以访问到),默认是0.0.0.0
