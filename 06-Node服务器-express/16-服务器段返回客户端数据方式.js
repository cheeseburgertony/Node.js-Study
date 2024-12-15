const express = require("express");

// 创建app对象
const app = express();

app.post("/login", (req, res, next) => {
  // 服务器端返回给客户端的数据方式
  // 1.res.end方法（比较少）
  // res.end('登录成功');
  // 2.res.json方法（最多）
  // res.json({
  //   code: 0,
  //   message: "登录成功",
  //   list: [
  //     { name: "iPhone", price: 6666 },
  //     { name: "iPad", price: 6666 },
  //     { name: "MacBook Pro", price: 6666 },
  //     { name: "iMac", price: 6666 },
  //   ],
  // });

  // 3.res.status方法 设置http状态码
  res.status(201);
  res.json("创建用户成功");
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
