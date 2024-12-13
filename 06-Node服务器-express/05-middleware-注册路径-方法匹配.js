const express = require("express");

const app = express();

// 注册中间件，对path和mothod都有匹配
// app.method(path, (req, res, next) => {})
app.post('/login',(req,res,next)=>{
  console.log('match POST /login middleware');
  res.end('登录成功');
})

app.get('/home',(req,res,next)=>{
  console.log('match GET /home middleware');
  res.end('home data')
})

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
