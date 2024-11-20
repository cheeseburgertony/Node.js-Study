// 1.创建Buffer
// const buf = new Buffer('Hello');
// console.log(buf);

// 2.创建Buffer
// const buf2 = Buffer.from('world')
// console.log(buf2);

// 3.创建Buffer（字符串中包含中文，一个中文3个字节）
// const buf3 = Buffer.from('你好呀')
// console.log(buf3);

// 4.手动指定的Buffer创建过程的编码
// 编码操作
const buf4 = Buffer.from('哈哈哈', 'utf-16le')
console.log(buf4);
// 解码操作
console.log(buf4.toString('utf-16le'));


