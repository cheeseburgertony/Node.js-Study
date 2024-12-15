const Koa = require("koa");

// 创建app对象
const app = new Koa();

// 中间件
app.use((ctx, next) => {
  // koa中没有像express一样将req和res分开,而是将他们作为ctx的属性
  // 1.请求对象
  console.log(ctx.request); // 请求对象:Koa封装的请求对象
  console.log(ctx.req); // 请求对象:Node封装的请求对象

  // 2.响应对象
  console.log(ctx.response); // 响应对象:Koa封装的响应对象
  console.log(ctx.res); // 响应对象:Node封装的响应对象

  // 3.其他属性
  console.log(ctx.query); // 获取查询字符串参数
  console.log(ctx.params); // 获取动态路由参数

  next();
});

app.use((ctx, next) => {
  ctx.body = "哈哈哈哈";
});

// 启动服务器
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
