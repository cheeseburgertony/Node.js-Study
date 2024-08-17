// nodejs定义全局变量 (全局都可以用，但是要注意引入顺序)
// 浏览器定义全局变量->window  nodejs定义全局变量->global
// globalThis根据环境自动判断，如果是浏览器环境就是window，如果是nodejs环境就是global
// globalThis.name = 'tony'
// require('./child')

// js由ECMA Script DOM BOM三部分组成
// nodejs中没有 DOM和BOM
// nodejs环境内置的API
// __dirname  当前文件所在的目录，绝对路径
// __filename 当前文件的绝对路径

// process 处理进程
// 获取在命令行输入时更在命令后面的参数
// console.log(process.argv);
setTimeout(()=>{
  console.log('结束');
},5000)
setTimeout(()=>{
  // 两秒提前中断进程
  process.exit()
},2000)
