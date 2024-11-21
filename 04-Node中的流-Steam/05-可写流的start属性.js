const fs = require("fs");

const writeStream = fs.createWriteStream("./ddd.txt", {
  // mac上使用a+再使用start指定开始输入的位置时没有问题
  // 但是再win上使a+再使用start会直接再原始的数据后面直接追加
  // 所以这里需要使用到r+结合start来指定开始的位置
  flags: "r+",
  start:5
});

writeStream.write("My name is tony");
writeStream.close();
