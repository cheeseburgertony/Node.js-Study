const express = require("express");

// 1.创建路由对象
const userRouter = express.Router();

// 2.定义路由对象中的映射接口
userRouter.get("/", (req, res, next) => {
  res.end("获取用户列表");
});
userRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.end(`获取id为${id}的用户信息`);
});
userRouter.post("/", (req, res, next) => {
  res.end("创建用户成功");
});
userRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.end(`删除id为${id}的用户信息`);
});
userRouter.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  res.end(`修改id为${id}的用户信息`);
});

// 3.导出路由对象
module.exports = userRouter;
