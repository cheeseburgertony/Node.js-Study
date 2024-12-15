const Koa = require("koa");
const KoaRouter = require("@koa/router");
const multer = require("@koa/multer");

// 创建app对象
const app = new Koa();

const formParser = multer({
  // dest:'./uploads'
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./uploads");
    },
    filename(req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

const userRouter = new KoaRouter({ prefix: "/upload" });

userRouter.post("/avatar", formParser.single('avatar'),(ctx,next)=>{
  console.log(ctx.file);
  ctx.body = '文件上传成功';
});

// 上传多个文件
userRouter.post('/photos',formParser.array('photos'),(ctx,next)=>{
  console.log(ctx.files);
  ctx.body = '多文件上传成功';
})

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 启动服务器
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
