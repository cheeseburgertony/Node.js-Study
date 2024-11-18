// 使用commonjs
const fs = require("fs");

// 1.同步读取
// const res1 = fs.readFileSync('./abc.txt', {
//   encoding:'utf-8'
// });
// // 可以通过再api中添加配置项来指定字符集编码，或者对结果进行toString来实现将二进制代码指定为可见格式例如utf-8
// console.log(res1);

// // 使用同步读取的方式，回先进行前面读取文件，再执行后续的文件，所以容易造成阻塞
// console.log('后续的代码');

// 2.异步读取：回调函数
// 使用异步的读取不会造成堵塞问题，但是通过回调将函数来获取最终的data，容易造成回调地狱
// fs.readFile('./abc.txt',{
//   encoding:'utf-8'
// },(err,data)=>{
//   if(err){
//     console.log('读取文件错误:', err);
//     return;
//   }
//   console.log('读取到的内容:', data);
// })

// console.log('后续的代码');

// 3.异步读取：Promise
// 使用Promise形式的异步读取可以很好地解决可能会产生的回调地狱的问题
fs.promises
  .readFile("./abc.txt", {
    encoding: "utf-8",
  })
  .then((res) => {
    console.log("读取到的内容:", res);
  })
  .catch((err) => {
    console.log("读取文件错误:", err);
  });

console.log("后续的代码");
