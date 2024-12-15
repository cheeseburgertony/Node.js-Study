const express = require("express");

// 创建app对象
const app = express();

// 使用静态资源中间件
// 内置的中间件，直接将一个文件作为一个静态资源，也可以用来部署，比如将打包好的前端项目直接作为以一个静态文件进行部署
app.use(express.static('./uploads'))

// 编写中间件
app.post("/login", (req, res, next) => {
})

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
