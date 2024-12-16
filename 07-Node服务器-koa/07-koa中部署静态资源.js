const Koa = require("koa");
const static = require("koa-static");

// 创建app对象
const app = new Koa();

app.use(static("./uploads"));

// 启动服务器
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
