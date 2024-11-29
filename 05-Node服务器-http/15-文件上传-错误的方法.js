const http = require("http");
const fs = require("fs");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 创建writeable的stream
  const writeStream = fs.createWriteStream("./foo.png", {
    flags: "a+",
  });

  // 这是文件上传的一个大体的流程，读取上传的消息，然后剔除掉无用的消息，将有效的文件消息写入到服务器的一个文件中进行存储
  // 简洁写法通过pipe直接将可读流的数据直接写入可写流
  // req.pipe(writeStream);

  // 客户端传输的数据是表单数据（请求体）
  // 所以使用req.on去监听data获取
  req.on("data", (data) => {
    console.log(data);
    // 由于是将图片消息和其他的别的消息混合在一起的所以将这些混合的消息写入的图片不能正常显示，需要剔除
    writeStream.write(data)
  });

  req.on("end", () => {
    console.log("数据传输完成");
    writeStream.close();
    res.end("文件上传成功");
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
