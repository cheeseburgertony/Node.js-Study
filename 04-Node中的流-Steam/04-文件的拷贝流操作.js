const fs = require("fs");

// 1.方式一：一次性读取和写入
// fs.readFile("./foo.txt", (err, data) => {
//   fs.writeFile("./foo.txt_copy01.txt", data, (err) => {
//     console.log("文件写入完成");
//   });
// });

// 2.方式二：创建可读流和可写流
// const readStream = fs.createReadStream("./foo.txt");
// const writeStream = fs.createWriteStream("./foo.txt_copy02.txt");

// readStream.on("data", (data) => {
//   writeStream.write(data);
// });

// readStream.on("end", () => {
//   writeStream.close();
// });

// 3.方式三：在可读流和可写流之间建立一个管道
const readStream = fs.createReadStream("./foo.txt");
const writeStream = fs.createWriteStream("./foo.txt_copy03.txt");

readStream.pipe(writeStream);
