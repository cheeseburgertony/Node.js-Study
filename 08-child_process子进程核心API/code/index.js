const { exec, execSync, spawn, spawnSync, execFile, execFileSync, fork } = require('child_process');
// 1.exec异步的方法 存在回调函数 返回buffer 可以帮我们执行shell命令或者和软件交互
// 2.execSync同步的方法 返回buffer
// 3.执行较小的shell命令 想要立马拿到结果的shell可以是使用execFile  exec字节上限200kb 超出200kb会报错

// exec('node -v', (err, stdout, stderr) => {
//   if (err) {
//     return err
//   }
//   console.log(stdout, toString());
// })

// const nodeVersion = execSync('node -v')
// console.log(nodeVersion.toString());

// execSync('start chrome https://www.baidu.com');
// execSync('D:\\Software\\WeChat\\WeChat.exe')

// 4.spawn 没有字节上限 因为返回的是个流 实时返回的
// 5.spawnSync 同步的方法 返回buffer 用的比较少

// 通过数组的方式传递参数
// const { stdout } = spawn('netstat', ['-a']);
// // 监听data事件
// stdout.on('data', (msg) => {
//   console.log(msg.toString());
// })
// // 监听close事件
// stdout.on('close', () => {
//   console.log('结束了');
// })

// options 配置项
// cwd <string> 子进程的当前工作目录。
// env <Object> 环境变量键值对。
// encoding <string> 默认为 'utf8'。
// shell <string> 用于执行命令的 shell。 在 UNIX 上默认为 '/bin/sh'，在 Windows 上默认为 process.env.ComSpec。 详见 Shell Requirements 与 Default Windows Shell。
// timeout <number> 默认为 0。
// maxBuffer <number> stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止。 查看警告： maxBuffer and Unicode。
// killSignal <string> | <integer> 默认为 'SIGTERM'。
// uid <number> 设置该进程的用户标识。（详见 setuid(2)）
// gid <number> 设置该进程的组标识。（详见 setgid(2)）

// 6.execFile 执行可执行文件
// const path = require('path');
// execFile(path.resolve(__dirname, './bat.cmd'), null, (err, stdout) => {
//   console.log(stdout.toString())
// })
// 底层实现顺序
// exec 由 execFile 实现    execFile 由 spawn 实现

// 7.fork 创建一个新的进程 只接受js模块 Nodejs弱点不适合做CPU密集型的操作
// 可以把耗时的代码塞到子进程中去执行
// 底层通信原理：基于IPC通信 IPC基于libuv  (windows named pipe 命名管道)  (posix unix domain socket 本地套接字)
const testProcess = fork('./test.js');

// testProcess.send('我是主进程')

testProcess.on('message', (msg) => {
  console.log(msg);
})