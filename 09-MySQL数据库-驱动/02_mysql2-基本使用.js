const mysql = require("mysql2");

// 1.创建一个连接（连接上数据库）
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "music_db",
  user: "root",
  password: "1234",
});

// 2.执行操作语句，操作数据库
const statement = "SELECT * FROM `students`;";
// 操作数据库
// 这里的query是指 structure query language 结构化查询语言中的query
// 其中就包括了 DDL/DML/DQL/DCL/
connection.query(statement, (err, values, fileds) => {
  if (err) {
    console.log(err);
    return;
  }
  // values是一个数组，数组中的每一个元素都是一个对象，代表一行数据，是查询数据库后返回的数据
  console.log(values);
  // fileds是一个数组，是查询数据库后返回的字段信息
  console.log(fileds);
});
