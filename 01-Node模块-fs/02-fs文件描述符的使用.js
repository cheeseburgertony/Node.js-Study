const fs = require("fs");

// 打开一个文件
fs.open("./bbb.txt", (err, fd) => {
  if (err) {
    console.log("打开文件错误:", err);
    return;
  }
  // 1.获取文件描述符
  console.log(fd);

  // 2.读取到文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) return;
    console.log(stats);

    // 3.手动关闭文件，防止性能浪费（因为在真实的开发中，这个node程序会一直在服务器中跑着，不会停止，所以这个这个进程没有结束，手动打开的文件也不会自动关闭）
    fs.close(fd)
  });
});
