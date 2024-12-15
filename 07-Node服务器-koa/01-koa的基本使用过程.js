const Koa = require('koa');

// 创建app对象
const app = new Koa();

// 注册中间件 middleware
// koa中间件的参数有两个，第一个是ctx，第二个是next
app.use((ctx, next)=>{
  console.log('匹配到koa的中间件');
  // 通过ctx.body设置响应体返回数据
  ctx.body = '哈哈哈哈';
})

// 启动服务器
app.listen(8000, () => {
  console.log('koa服务器启动成功~');
});
