const mysql2 = require("mysql2");

// 1.创建一个连接

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
connectionPool
  .promise()
  .execute(statement, [1000, 8])
  .then((res) => {
    const [values, fields] = res;
    console.log("-------------------------values-------------------------");
    console.log(values);
    console.log("-------------------------fields-------------------------");
    console.log(fields);
  })
  .catch((err) => {
    console.log(err);
  });
