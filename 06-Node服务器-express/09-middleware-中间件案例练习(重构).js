const express = require("express");

const app = express();

// 直接在普通中间进行解析
// app.use((req, res, next) => {
//   // 如果是json格式的则进行解析,否则直接前往下一个中间件
//   if (req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       const dataString = data.toString();
//       req.body = JSON.parse(dataString);
//     });
//     req.on("end", () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

// 也可以直接使用express提供的中间件express.json()进行解析
app.use(express.json());

// 注册两个实际请求的中间件
// 案例一：用户登录的请求处理 /login post -> username/password
app.post("/login", (req, res, next) => {
  // 在前面普通中间件处理好数据后可以直接从req.body中获取
  console.log(req.body);
});

// 案例二：注册用户的请求处理 /register post -> username/password
app.post("/register", (req, res, next) => {
  console.log(req.body);
});

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
