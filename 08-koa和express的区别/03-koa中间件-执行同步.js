const Koa = require("koa");

const app = new Koa();

// 这里的执行next回到下一个匹配的中间件，当下一个中间件执行完之后又会回到next继续执行next下面的内容，这个在koa中也叫洋葱模型
app.use((ctx, next) => {
  console.log("koa middleware 01");
  ctx.msg = "aaa";
  next();

  // 返回结果
  // ctx.body = "middleware 01 result";
  ctx.body = ctx.msg;
});

app.use((ctx, next) => {
  console.log("koa middleware 02");
  ctx.msg += "bbb";
  next();
});

app.use((ctx, next) => {
  console.log("koa middleware 03");
  ctx.msg += "ccc";
  next();
});

app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
