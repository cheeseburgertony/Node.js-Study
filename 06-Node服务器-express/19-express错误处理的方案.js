const express = require("express");

// 创建app对象
const app = express();

// 使用三方中间件
app.use(express.json());

// 编写中间件
app.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(-1001);
  } else if (username !== "tony" || password !== "123456") {
    next(-1002);
  } else {
    res.json({
      code: 0,
      message: "登录成功",
      token:'cdscsscascadscccc'
    });
  }
});

// 错误处理中间件
app.use((errCode, req,res,next)=>{
  const code = errCode;
  let message = '未知的错误信息';
  switch (code){
    case -1001:
      message = '没有输入用户名或密码';
      break;
    case -1002:
      message = '用户名或密码错误';
      break;
  }
  res.json({
    code,
    message
  })
})

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
