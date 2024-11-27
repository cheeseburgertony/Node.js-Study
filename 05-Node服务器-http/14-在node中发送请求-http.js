const http = require("http");

// 1.通过http模块发送get请求
// http.get("http://localhost:8000", (res) => {
//   // 返回得res是一个可读流,需要从可读流中读取数据,所以需要通过on方法去监听data事件获取数据
//   res.on("data", (data) => {
//     const dataString = data.toString();
//     console.log(JSON.parse(dataString));
//   });
// });

// 2.通过http模块发送post请求
const req = http.request(
  {
    method: "POST",
    hostname: "localhost",
    port: 8000,
  },
  (res) => {
    // 回调函数中得res也是一个可读流，需要可读流中读取数据
    res.on("data", (data) => {
      const dataString = data.toString();
      console.log(JSON.parse(dataString));
    });
  }
);

// 由于是通过request请求发送一个可写流所以需要通过end来标识写入结束
req.end();
