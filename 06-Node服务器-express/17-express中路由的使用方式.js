const express = require("express");
const userRouter = require('./router/userRouter')

// 创建app对象
const app = express();

/** 用户相关的接口 */
// app.get('/users',(req,res,next)=>{})
// app.get('/users/:id',(req,res,next)=>{})
// app.post('/users',(req,res,next)=>{})
// app.delete('/users/:id',(req,res,next)=>{})
// app.patch('/users/:id',(req,res,next)=>{})

// 这里都是和用户相关的接口，直接写在app中会让app变得越来越复杂，可以使用路由的方式来处理
// 一个路由实例拥有完整的中间件和路由系统，因此也被称为迷你app mini-app
// const userRouter = express.Router();
// userRouter.get("/", (req, res, next) => {
//   res.end("获取用户列表");
// });
// userRouter.get("/:id", (req, res, next) => {
//   const id = req.params.id
//   res.end(`获取id为${id}的用户信息`);
// });
// userRouter.post("/", (req, res, next) => {
//   res.end('创建用户成功');
// });
// userRouter.delete("/:id", (req, res, next) => {
//   const id = req.params.id
//   res.end(`删除id为${id}的用户信息`);
// });
// userRouter.patch("/:id", (req, res, next) => {
//   const id = req.params.id
//   res.end(`修改id为${id}的用户信息`);
// });

// 使用路由
app.use("/users", userRouter);

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
