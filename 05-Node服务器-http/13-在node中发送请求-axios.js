const axios = require("axios");

// 在node中使用axios发送请求，其实axios在node中本质也是http模块
axios.get("http://localhost:8000").then((res) => {
  console.log(res.data);
});
