const mysql2 = require("mysql2");

// 1.创建一个连接（连接上数据库）
const connection = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  database: "music_db",
  user: "root",
  password: "1234",
});

// 2.执行操作语句，操作数据库，这里使用预处理语句
// 我们知道之前在使用普通的sql语句的时候就是要将每次都进行解析/优化/执行，
// 这样每次都要执行相同的操作，造成性能问题以及sql注入问题
// 所以我们可以使用预处理语句，会将sql语句预处理好，也就是我们可以使用?进行占位，sql提前解析好，然后每次只需要传入参数就可以了
const statement = "SELECT * FROM `products` WHERE price > ? AND score > ?;";
connection.execute(statement, [1000, 8], (err, values) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(values);
});
