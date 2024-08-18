
// 接收来自主进程的消息
process.on('message', (msg) => {
  console.log('收到信息了:', msg);
})

process.send('我是子进程，收到请回答');
