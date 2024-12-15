const Koa = require("koa");

// 创建app对象
const app = new Koa();

// 中间件 要想通过path/method来区分不同的路由，需要使用koa-router中间件
app.use((ctx, next) => {
  if (ctx.path === "/user") {
    if (ctx.method === "GET") {
      ctx.body = "user data list";
    }
  } else if (ctx.path === "/home") {
    ctx.body = "home data list";
  } else if (ctx.path == "/login") {
    ctx.body = "登录成功";
  }
});

// 启动服务器
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
