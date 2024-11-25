const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 设置编码格式
  req.setEncoding("utf-8");
  let isLogin = false;

  // 获取body携带的参数
  // req是一个readable可读流，所以可以通过req.on('data',(data)=>{})去获取，data就是body的数据
  req.on("data", (data) => {
    const dataString = data;
    const loginInfo = JSON.parse(dataString);
    if (loginInfo.name === "tony" && loginInfo.password === "123456") {
      isLogin = true;
    } else {
      isLogin = false;
    }
  });

  req.on("end", () => {
    if (isLogin) {
      res.end("登录成功");
    } else {
      res.end("账号或密码错误，请重新登录");
    }
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
