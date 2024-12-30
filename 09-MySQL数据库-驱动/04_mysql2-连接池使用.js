const mysql2 = require("mysql2");

// 1.创建一个连接
// 前面我们是创建了一个连接，但是如果我们有多个请求的话，这个连接可能被占用，所以我们可以使用连接池
// 连接池是一个连接的集合，可以从连接池中获取连接，并且创建的连接不会被销毁，使用完毕后再将连接放回连接池，后续可以继续使用
const connectionPool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  database: "music_db",
  user: "root",
  password: "1234",
  connectionLimit: 5, // 限制连接池的最大连接数量
});

// 2.执行一个SQL语句预处理语句
const statement = "SELECT * FROM `products` WHERE price > ? AND score > ?;";
connectionPool.execute(statement, [1000, 8], (err, values) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(values);
});
