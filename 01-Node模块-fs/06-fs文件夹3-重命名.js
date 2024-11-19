const fs = require("fs");

// 1.对文件夹进行重命名
// fs.rename("./tony", "./cheeseburger", (err) => {
//   console.log(err);
// });

// 2.对文件重命名
fs.rename("./ccc.txt", "./ddd.txt", (err) => {
  console.log(err);
});
