const fs = require("fs");

// 1.通过流读取文件
// 创建一个可读流
// start：从什么位置开始读取
// end：读取到什么位置结束（包括end位置的字节）
// highWaterMark：每次读取多少个字节（字节的长度，默认不传是64kb）
const readStream = fs.createReadStream("./aaa.txt", {
  start: 3,
  end: 24,
  highWaterMark: 3,
});

// 2.监听读到的数据
readStream.on("data", (data) => {
  console.log(data.toString());
});

// 3.补充其他的事件监听
readStream.on("open", (fd) => {
  console.log("通过流将文件打开", fd);
});

readStream.on("end", () => {
  console.log("文件已经读到end位置");
});

readStream.on("close", () => {
  console.log("文件读取结束，并且文件被关闭");
});
