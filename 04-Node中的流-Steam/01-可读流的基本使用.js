const fs = require("fs");

// 1.一次性读取
// 缺点一：没有办法精准控制从哪里读取，读取什么位置
// 缺点二：无法读取到某一位置的时候进行暂停读取或者恢复读取
// 缺点三：当文件非常大的时候无法进行多次读取
// fs.readFile("./aaa.txt", (err, data) => {
//   console.log(data.toString());
// });

// 2.通过流读取文件
// 创建一个可读流
// start：从什么位置开始读取
// end：读取到什么位置结束（包括end位置的字节）
// highWaterMark：每次读取多少个字节（字节的长度，默认不传是64kb）
const readStream = fs.createReadStream("./aaa.txt", {
  start: 3,
  end: 24,
  highWaterMark: 3,
});

// 因为Stream实际上也是EventBuffer的实例所以他又EventBuffer上的所有方法
// 因此我们可以通过on方法来监听流
readStream.on("data", (data) => {
  console.log(data.toString());

  // 暂停读取
  readStream.pause();

  setTimeout(() => {
    // 两秒后继续读取
    readStream.resume();
  }, 2000);
});
