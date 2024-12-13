const express = require("express");

const app = express();

// 注册普通的中间件
// app.use((req, res, next) => {
//   console.log("first middleware exec~");
//   res.end('这是普通的中间件');
// });

// 注册路径匹配的中间件
// 路径匹配的中间件是不会对请求方式进行限制的
app.use('/login',(req,res,next)=>{
  console.log('match /login middleware');
  res.end('这是路径匹配的中间件');
})

app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
