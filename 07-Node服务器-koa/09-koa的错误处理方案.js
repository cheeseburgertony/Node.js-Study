const Koa = require("koa");
const KoadRouter = require("@koa/router");

const app = new Koa();
const userRouter = new KoadRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  const isAuth = false;
  if (isAuth) {
    ctx.body = "user list data";
  } else {
    // 返回错误
    // ctx.body = {
    //   code: -1003,
    //   message: "未授权的token，请检查你的token",
    // };

    // app其实也是一个EventEmitter
    ctx.app.emit("error", -1003, ctx);
  }
});

// 抽出来在一个独立的文件中处理错误信息
// 独立的文件 error-handle.js
// 独立的文件中需要导入app才可以使用
app.on("error", (code, ctx) => {
  const errorCode = code;
  let message = "";
  switch (errorCode) {
    case -1001:
      message = "账号密码错误";
      break;
    case -1002:
      message = "请求参数不正确";
      break;
    case -1003:
      message = "未授权的token，请检查你的token";
      break;
  }
  // 最后再通过传递过来的ctx进行响应
  ctx.body = {
    code,
    message,
  };
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
