const os = require('node:os')
const { exec } = require('node:child_process')
// 1.platform 获取操作系统平台 win32 windows darwin mac linux
// 2.release 获取操作系统版本号
// 3.type 获取操作系统名称
// 4.version 获取操作系统版本
// console.log(os.platform());
// console.log(os.release());
// console.log(os.type());
// console.log(os.version());

// 实现 webpack vite rollup open:true 打开浏览器方法
// 判断不同的操作系统，分别调用对应的shell命令来打开浏览器
// const platform = os.platform()
// const open = (url) => {
//   // windows
//   if (platform === 'win32') {
//     exec(`start ${url}`)
//   } else if (platform === 'darwin') { // mac
//     exec(`open ${url}`)
//   } else { // linux
//     exec(`xdg-open ${url}`)
//   }
// }

// open('https://www.baidu.com')

// 5.homedir 获取当前用户的根目录 底层原理 Windows %userprofile%  Mac $HOME
// console.log(os.homedir());

// 6.arch 获取操作系统架构 x64
// console.log(os.arch());

// 7.cpus 获取cpu信息
// console.log(os.cpus());
// console.log(os.cpus().length);  // cpu线程数
// {
//   model: 'AMD Ryzen 7 6800HS Creator Edition', // cpu型号
//   speed: 3194, // cpu速度
//   times: { 
//      user: 45765,
//      nice: 0,
//      sys: 54375,
//      idle: 14816078,
//      irq: 390 
//   }
// }

// 8.networkInterfaces 获取网络接口信息
// console.log(os.networkInterfaces());
// {
//   address: '127.0.0.1',      // ip地址
//   netmask: '255.0.0.0',      // 子网掩码
//   family: 'IPv4',            // ip版本
//   mac: '00:00:00:00:00:00',  // mac地址
//   internal: true,            // 是否是内网
//   cidr: '127.0.0.1/8'        // cidr地址
// }
