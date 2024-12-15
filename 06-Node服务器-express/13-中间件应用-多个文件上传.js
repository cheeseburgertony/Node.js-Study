const express = require("express");
const multer = require("multer");

// 创建app对象
const app = express();

// 应用三方中间件
// 这里使用multer来实现文件上传
// 这里可以使用storage来设置文件上传的存储位置和存储名称
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./uploads");
    },
    filename(req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

// 创建一些中间件
// 上传单个文件
// 使用upload.single('avatar')来处理文件上传 这里upload.single表示是单文件 avatar是文件上传的字段名
app.post("/avatar", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功");
});

// 上传多个文件
app.post("/photos", upload.array("photos"), (req, res, next) => {
  console.log(req.files);
  res.end("文件上传成功");
});

// 启动服务器
app.listen(8000, () => {
  console.log("express服务器启动成功~");
});
