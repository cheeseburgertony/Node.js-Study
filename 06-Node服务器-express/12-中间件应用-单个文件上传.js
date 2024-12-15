const express = require("express");
const multer = require("multer");

// 创建app对象
const app = express();

// 应用三方中间件
// 这里使用multer来实现文件上传
const upload = multer({
  dest:'./uploads'
})

// 创建一些中间件
// 使用upload.single('avatar')来处理文件上传 这里upload.single表示是单文件 avatar是文件上传的字段名
app.post("/avatar", upload.single('avatar') ,(req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功');
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
