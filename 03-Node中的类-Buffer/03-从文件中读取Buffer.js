const fs = require("fs");

// 1.从文件中读取buffer
// fs.readFile("./abc.txt", (err, data) => {
//   console.log(data.toString());
// });

// fs.readFile("./abc.txt", (err, data) => {
//   data[0] = 0x6d;
//   console.log(data.toString());
// });

// 2.读取一个图片的二进制（node中有一个库sharp可以协助修改）
fs.readFile("./20231017215048.jpg", (err, data) => {
  console.log(data);
});
