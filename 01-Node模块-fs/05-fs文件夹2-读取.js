const fs = require("fs");

// 读取文件夹
// 1.读取文件夹，获取文件夹中的文件字符串string[]
// fs.readdir("./tony", (err, files) => {
//   console.log(files);
// });

// 2.读取文件夹，获取到文件夹中文件的信息
// fs.readdir("./tony", { withFileTypes: true }, (err, files) => {
//   files.forEach((item) => {
//     if (item.isDirectory()) {
//       console.log("item是一个文件夹:", item.name);
//       fs.readdir(
//         `./tony/${item.name}`,
//         { withFileTypes: true },
//         (err, files) => {
//           console.log(files);
//         }
//       );
//     } else {
//       console.log("item是一个文件", item.name);
//     }
//   });
// });

// 3.递归读取文件夹中所有的文件
const readDirection = (path) => {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        readDirection(`${path}/${item.name}`);
      } else {
        console.log("获取到文件:", item.name);
      }
    });
  });
};
readDirection('./tony')
