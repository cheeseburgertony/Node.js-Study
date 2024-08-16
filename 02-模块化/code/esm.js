// import * as all from './test.js'
// console.log(all);

// esm不支持引入json文件
// nodejs18 以上的高版本可以使用asser断言指定引入文件的类型
import json from './data.json' assert {type: "json"}
console.log(json);
