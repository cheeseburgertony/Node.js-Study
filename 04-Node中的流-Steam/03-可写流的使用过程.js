const fs = require("fs");

// 1.一次性写入内容
// fs.writeFile(
//   "./bbb.txt",
//   "Hello World",
//   {
//     encoding: "utf-8",
//     flag: "a+",
//   },
//   (err) => {
//     console.log("写入文件结果", err);
//   }
// );

// 2.创建一个写入流
const writeStream = fs.createWriteStream("./ccc.txt", {
  flags: "a+",
});

writeStream.on("open", (fd) => {
  console.log("文件被打开了", fd);
});

writeStream.write("tony");
writeStream.write("aaa");
writeStream.write("bbb", (err) => {
  console.log("写入完成", err);
});

writeStream.on("finish", () => {
  console.log("写入文件结束");
});

writeStream.on("close", () => {
  console.log("文件已被关闭");
});

// 3.写入完成时候需要手动调用close去关闭文件
// writeStream.close();

// 4.end方法
// 操作一：将最后的内容写入到文件中
// 操作二：写入文件后将文件关闭
writeStream.end("哈哈哈");
