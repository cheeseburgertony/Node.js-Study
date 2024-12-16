const Koa = require("koa");
const KoaRouter = require("@koa/router");
const fs = require("fs");

// 创建app对象
const app = new Koa();

// 注册路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  // 1.body的类型是string
  // ctx.body = "user list data";

  // 2.body的类型是Buffer
  // ctx.body = Buffer.from("你好 世界");

  // 3.body的类型是Stream
  // const readStream = fs.createReadStream(
  //   "./uploads/1734274852790_20231017215048.jpg"
  // );
  // // 返回的数据会被使用utf-8编码，所以需要设置类型
  // ctx.type = "image/jpeg";
  // ctx.body = readStream;

  // 4.body的类型是数据(Array/Object) => 使用的最多
  // 可以通过ctx.status设置http status code响应状态码
  ctx.status = 201;
  ctx.body = {
    code:0,
    msg:'success',
    data:[
      {id:123, name:'iPhone', price:6666},
      {id:456, name:'iPad', price:6666},
      {id:789, name:'MacBook Pro', price:6666},
    ]
  }

  // 5.body的值是null，会自动设置http status code为204
  // ctx.body = null;
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
