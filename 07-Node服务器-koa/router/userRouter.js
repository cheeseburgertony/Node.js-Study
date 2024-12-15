const KoaRouter = require('@koa/router');

// 路由的使用
// 1.创建路由对象 通过prefix属性设置路由的前缀
const userRouter = new KoaRouter({prefix:'/users'});

// 2.在路由中注册中间件 
userRouter.get('/',(ctx,next)=>{
  ctx.body = 'user list data';
});
userRouter.get('/:id',(ctx,next)=>{
  const id = ctx.params.id;
  ctx.body = `获取到${id}的数据`;
});
userRouter.post('/',(ctx,next)=>{
  ctx.body = '创建用户成功';
});
userRouter.delete('/:id',(ctx,next)=>{
  const id = ctx.params.id;
  ctx.body = `删除id为${id}的用户信息`;
});
userRouter.patch('/:id',(ctx,next)=>{
  const id = ctx.params.id;
  ctx.body = `修改id为${id}的用户信息`;
});

module.exports = userRouter;