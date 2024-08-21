const fs = require('node:fs')
const fs2 = require('node:fs/promises')

// 1.可读文件 readFile flag
// 2.可读流 createReadStream
// 3.创建文件夹 recursive递归
// 4.删除rm
// 5.重命名 renameSync
// 6.监听文件变化 watch
// 7.源码 libuv
// 8.注意事项 事件循环和setImeediate

// 1.可读文件 readFile flag
// readFile异步  readFileSync同步 promise
// flag r w a r+ w+ a+ rs wx ax 参数
// fs.readFile('./index.txt', {
//   encoding: 'utf-8',
//   flag: 'r'
// }, (err, data) => {
//   if (err) throw err
//   console.log(data);
// })

// 同步方式会阻塞下面的代码
// const res = fs.readFileSync('./index.txt')
// console.log(res.toString('utf-8'));
// console.log('test');

// Promise的形式
// fs2.readFile('./index.txt').then(res => {
//   console.log(res.toString());
// })

// 2.可读流 createReadStream
// 处理大文件的时候会用到 一段一段地读取
// const readStream = fs.createReadStream('./index.txt')

// readStream.on('data', chunk => {
//   console.log(chunk.toString());
// })

// readStream.on('end', () => {
//   console.log('读取完成');
// })


// 3.创建文件夹mkdirSync  可以使用recursive递归创建
// fs.mkdirSync('./tony/tony2', {
//   recursive: true
// })

// 4.删除rm
// 删除文件夹 rmSync  同样可以使用recursive递归创建
// fs.rmSync('./tony', {
//   recursive: true
// })

// 5.重命名 renameSync
// 文件重命名 renameSync
// fs.renameSync('./index.txt', './index2.txt')

// 6.监听文件变化 watch 适用于文件的监听
// watch('文件名',(事件, 文件名)=>{})
// fs.watch('./index.txt', (event, filename) => {
//   console.log(event, filename);
// })

// 8.注意事项 事件循环和setImeediate
// setImmediate会比这个readFile的回调函数先执行
// 因为fs的IO操作都是由libuv完成的   等到完成任务之后才会推入到V8队列 等到IO操作完成后会通知V8执行回调
// setImmediate，setTimeout...计时器都是由V8事件循环完成的

// 异步的方式
// fs.readFile('./index.txt', {
//   encoding: 'utf-8',
//   flag: 'r'
// }, (err, dataStr) => {
//   if (err) throw err
//   console.log(dataStr);
// })

// // setImmediate 会等本轮事件循环结束后执行
// setImmediate(() => {
//   console.log('setImmediate');
// })

// 1.写入文件
// 2.追加写入文件 两种方式
// 3.创建可写流
// 4.软连接 硬链接 也是pnpm底层原理

// 1.写入文件
// fs.writeFileSync('./index.txt', 'tony')

// 2.追加写入文件 两种方式
// 可以加入flag: 'a'表示追加内容
// fs.writeFileSync('./index.txt', '\ntony2', {
//   flag: 'a'
// })

// appendFileSync追加写入
// fs.appendFileSync('./index.txt', '\ntest append')

// 3.创建可写流
// 用于大量数据分批插入
// let writeStream = fs.createWriteStream('./index.txt')
// let verse = ['tony1', 'tony2', 'tony3', 'tony4']

// verse.forEach(item => {
//   writeStream.write(item + '\n')
// })
// // 写完时候将通道关闭，防止通道一直打开
// writeStream.end()

// // 还可以进行监听
// writeStream.on('finish', () => {
//   console.log('写入完成');
// })

// 4.软连接 硬链接 也是pnpm底层原理
// 硬链接  两个文件共享的是同一个地址的，一个文件修改另一个文件的内容也会随着被修改
// 多用于共享文件，备份文件
// linkSync('原始地址','硬链接之后的地址')
// fs.linkSync('./index.txt', './index2.txt')

// 软连接 很像windows的快捷方式 执行包含这个任务的node需要使用管理员权限
// 软链接产生出来的新文件需要依赖于原始的文件，如果原始的文件不存在软连接的文件则不能正常运行
// symlinkSync('原始文件','软链接文件')
fs.symlinkSync('./index.txt', './index3.txt')
