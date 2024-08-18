// 1.platform arch  os CPU架构
// console.log(process.platform);
// console.log(process.arch);

// 2.agrv 返回数组
// console.log(process.argv);
// console.log(process.argv.includes('--version') ? '1.0.0' : '无');

// 3.cwd() 获取工作目录  __dirname 在esm模式下使用不了 可以使用cwd()代替__dirname
// console.log(process.cwd(),__dirname);

// 4.memoryUsage() 查看内存信息
// console.log(process.memoryUsage());
// {
//   rss: 25051136,       // 总内存占用 常驻集大小 物理内存的总量
//   heapTotal: 4403200,  // 堆内存总占用 V8引擎分配的堆内存的总大小，包括用到的和未用到的
//   heapUsed: 3471424,   // 堆内存使用量
//   external: 1130068,   // 外部内存使用量 C C++ 使用的
//   arrayBuffers: 10515  // ArrayBuffer内存使用量 二进制数据的总量
// }

// 5.exit() 退出进程
// setTimeout(() => {
//   console.log(5);
// }, 5000)

// process.on('exit',()=>{
//   console.log('进程退出');
// })

// setTimeout(() => {
//   process.exit()
// }, 2000)

// 6.kill() 杀死进程 需要传一个参数pid 进程id
// setTimeout(()=>{
//   console.log(5);
// },5000)

// setTimeout(()=>{
//   process.kill(process.pid)
// },2000)

// 7.env 环境变量 获取操作系统所有的环境变量 可以修改，修改只在当前进程生效，不会真正影响系统的环境变量
// process.env.JAVA_HOME = 'TONYTONY'
// 作用：可以根据环境变量的不同来执行不同的操作 区分开发环境和生产环境
// 插件 cross-env 可以跨平台设置环境变量
// 原理：跨平台的设置环境变量的方式不一样，cross-env会根据当前的操作系统来设置环境变量 Windows使用set设置环境变量  POSIX使用export设置环境变量
console.log(process.env.NODE_ENV === 'dev' ? '开发环境' : '生产环境');

