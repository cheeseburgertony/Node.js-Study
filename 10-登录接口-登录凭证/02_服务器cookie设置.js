const Koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new Koa();
const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/login", (ctx, next) => {
  // 在服务器中为登录的客户端设置cookie

  // 在这之前应该还有一系列的登录校验逻辑，这里就省略了默认登录成功
  // 设置cookie
  ctx.cookies.set("slogan", "ikun", { maxAge: 30 * 1000 });

  ctx.body = "登录成功";
});

/**
 * 1.服务器设置cookie
 * 2.客户端(浏览器)保存cookie
 * 3.在同一个作用域下，客户端(浏览器)每次请求都会携带cookie
 * 4.服务器验证客户端携带的cookie
 *
 * 缺点：cookie是明文传输，不安全，所以这里使用session来加强安全性
 */
userRouter.get("/list", (ctx, next) => {
  // 查看是否携带登录凭证
  const slogan = ctx.cookies.get("slogan");
  console.log("slogan", slogan);
  if (slogan === "ikun") {
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
