const fs = require("fs");

// 有一段内容（客户端传递过来，使用http/express/koa）
const content = "Hello World, my name is tony";

// 文件写入操作
fs.writeFile(
  "./ccc.txt",
  content,
  {
    encoding: "utf-8",
    // 使用w则是写入，w+是可读可写，a是进行追加写入
    flag: "w",
  },
  (err) => {
    if (err) {
      console.log("文件写入错误:", err);
    } else {
      console.log("文件写入成功");
    }
  }
);
