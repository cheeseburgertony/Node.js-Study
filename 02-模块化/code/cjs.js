// CommonJS 五种模式
// 1.引入自己编写的模块
// require('./test.js')

// 2.引入第三方模块
// const md5 = require("md5");
// console.log(md5('123456'));

// 3.nodejs内置模块 fs http net os child_process
// const fs = require('node:fs')  // 高版本nodejs  写node:fs 低版本直接写fs (没有严格要求,只是便于区分)
// console.log(fs);

// 4.C++扩展 addon napi node-gyp .node

//5.引入json文件
// const data = require('./data.json')
// console.log(data);
