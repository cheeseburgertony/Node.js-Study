const Koa = require("koa");
const KoaRouter = require("@koa/router");
const koaSession = require("koa-session");

const app = new Koa();
const userRouter = new KoaRouter({ prefix: "/users" });

// 设置session
// Session是基于cookie是实现机制
const session = koaSession(
  {
    key: "sessionid",
    signed: true,
    maxAge: 60 * 1000,
    // httpOnly: true,
  },
  app
);

// 进行加盐操作
// 这样在解析的时候既需要sessionid还需要这里加盐的sign签名
app.keys = ["aaa", "bbb", "tony", "666"];
app.use(session);

userRouter.get("/login", (ctx, next) => {
  // 在服务器中为登录的客户端设置session
  ctx.session.slogan = "ikun";

  ctx.body = "登录成功";
});

userRouter.get("/list", (ctx, next) => {
  // 查看是否携带登录凭证
  const value = ctx.session.slogan;
  console.log(value);
  if (value === "ikun") {
    ctx.body = "查看用户列表";
  } else {
    ctx.body = "没有登录权限，请先登录";
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("Koa服务启动成功~");
});
