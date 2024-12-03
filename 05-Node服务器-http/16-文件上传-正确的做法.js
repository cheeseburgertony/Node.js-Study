const http = require("http");
const fs = require("fs");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 客户端传输的数据是表单数据（请求体）
  // 所以使用req.on去监听data获取

  // 设置接收到的数据的格式为binary，这里会转成ascii码
  req.setEncoding("binary");

  // 获取boundary数据
  const boundary = req.headers["content-type"]
    .split("; ")[1]
    .replace("boundary=", "");

  // 设置一个formData用来存储表单传递过来的数据
  let formData = "";
  req.on("data", (data) => {
    console.log(data);
    formData += data;
  });

  req.on("end", () => {
    // 1.图片的数据从image/jpeg后面开始后面所有的数据
    const imageType = "image/jpeg";
    const imageTypePosition = formData.indexOf(imageType) + imageType.length;
    let imageData = formData.substring(imageTypePosition);
    // 2.去掉前面的两个空格
    imageData = imageData.replace(/^\s\s*/, "");
    // 3.去除尾部boundary数据
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`));
    // 4.将数据写入文件中
    fs.writeFile("./bar.png", imageData, { encoding: "binary" }, () => {
      console.log("文件存储成功");
      res.end("文件上传成功");
    });
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器启动成功🚀");
});
