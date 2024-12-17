const Koa = require("koa");
const axios = require("axios");

const app = new Koa();

// koa中的next其实是一个dispatch，是一个Promise对象，所以可使用async/await来处理异步操作
// 这样当所有的异步操作都处理完之后有回到了第一个next就可以继续执行next后面的内容了,并且也拿到了通过异步操作拿到的数据
app.use(async (ctx, next) => {
  console.log("koa middleware 01");
  ctx.msg = "aaa";
  await next();

  // 返回结果
  // ctx.body = "middleware 01 result";
  ctx.body = ctx.msg;
});

app.use(async (ctx, next) => {
  console.log("koa middleware 02");
  ctx.msg += "bbb";
  // 如果执行的下一个中间件是一个异步函数,那么next默认不会等到中间件的结果,就会执行下一步操作
  // 如果我们希望等待下一个异步函数的执行结果,那么就需要在next函数前面加await
  await next();
});

app.use(async (ctx, next) => {
  console.log("koa middleware 03");
  ctx.msg += "ccc";
  await next();
});

// 执行异步操作
app.use(async (ctx, next) => {
  const res = await axios.get("http://123.207.32.32:8000/home/multidata");
  ctx.msg += res.data.data.banner.list[0].title;
});

app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
