const Koa = require("koa");
const KoaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const multer = require("@koa/multer");

// 创建app对象
const app = new Koa();

app.use(bodyParser());
const formParser = multer();

const userRouter = new KoaRouter({ prefix: "/users" });
/**
 * 1.get:params 方式,例子: /:id
 * 2.get:query 方式,例子: /?name=tony&age=18
 * 3.post:json方式,例子:{"name":"tony","age":18}
 * 4.post:x-www-form-urlencoded方式,例子:name=tony&age=18
 * 5.post:form-data方式,例子:FormData
 */

// 1.get/params
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "user list data" + id;
});

// 2.get/query
userRouter.get("/", (ctx, next) => {
  const query = ctx.query;
  ctx.body = "用户的信息" + JSON.stringify(query);
});

// 3.post/json
userRouter.post("/json", (ctx, next) => {
  // 注意:不能从ctx.body取出数据
  console.log(ctx.request.body);
  ctx.body = "用户的json信息";
});

// 4.post/x-www-form-urlencoded
userRouter.post("/urlencoded", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的urlencoded信息";
});

// 5.post/form-data
userRouter.post("/formdata",formParser.any() ,(ctx, next) => {
  console.log(ctx.request.body, ctx.req.body);
  ctx.body = "用户的formdata信息";
})

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 启动服务器
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
