const Koa = require("koa");
const userRouter = require("./router/userRouter");

// 创建app对象
const app = new Koa();

// // 路由的使用
// // 1.创建路由对象 通过prefix属性设置路由的前缀
// const userRouter = new KoaRouter({prefix:'/users'});

// // 2.在路由中注册中间件 
// userRouter.get('/',(ctx,next)=>{
//   ctx.body = 'user list data';
// });
// userRouter.get('/:id',(ctx,next)=>{
//   const id = ctx.params.id;
//   ctx.body = `获取到${id}的数据`;
// });
// userRouter.post('/',(ctx,next)=>{
//   ctx.body = '创建用户成功';
// });
// userRouter.delete('/:id',(ctx,next)=>{
//   const id = ctx.params.id;
//   ctx.body = `删除id为${id}的用户信息`;
// });
// userRouter.patch('/:id',(ctx,next)=>{
//   const id = ctx.params.id;
//   ctx.body = `修改id为${id}的用户信息`;
// });

// 3.让路由中的中间件生效
app.use(userRouter.routes());
// 通过allowedMethods方法返回具有相应的Method Not Allowed状态的响应
/**
 * 例如：
 * 如果客户端发送了一个 DELETE 请求，而你的路由器没有为 DELETE 方法定义路由，
 * allowedMethods() 会通过 Koa 的上下文（ctx) 返回一个 405 Method Not Allowed 错误。
 * 它还会在响应头中加上 Allow 字段，列出所有当前路由器允许的 HTTP 方法。
 * 当请求的方法没有匹配到任何路由时，返回一个 405 状态码，表示该方法不被允许。
 */
app.use(userRouter.allowedMethods());



// 启动服务器
app.listen(8000, () => {
  console.log("koa服务器启动成功~");
});
