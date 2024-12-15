const express = require("express");

const app = express();

// 注册两个实际请求的中间件
// 案例一：用户登录的请求处理 /login post -> username/password
app.post("/login", (req, res, next) => {
  // 获取本次请求传递过来的json值然后进行解析
  let isLogin = false;
  req.on('data',(data)=>{
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);
    if(dataInfo.username === 'tony' && dataInfo.password === '123456'){
      isLogin = true;
    }
  })
  req.on('end',()=>{
    if(isLogin){
      res.end("登录成功，欢迎回来");
    }else{
      res.end('登录失败，用户名或密码错误');
    }
  })
});

// 案例二：注册用户的请求处理 /register post -> username/password
app.post('/register', (req, res, next) => {
  // 获取本次请求传递过来的json值然后进行解析
  let isRegister = false;
  req.on('data',(data)=>{
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);
    // 查询数据库是否已经存在该用户
    isRegister = false;
  })
  req.on('end',()=>{
    if(isRegister){
      res.end('注册成功');
    }else{
      res.end('注册失败，用户名已存在');
    }
  })
});


app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
