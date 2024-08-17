const { log } = require('node:console');
const path = require('node:path')
// 1.basename 返回给指定路径的最后一部分
// 在Windows系统下 默认是反斜杠的写法 D:\Front-end\index.js
// Windows兼容正斜杠的写法
// POSIX系统下 默认是正斜杠的写法 /Front-end/index.js 处理不了反斜杠的写法
// 比如现在是MacOS 要处理Windows的路径 可以使用path.win32.basename()方法
// 要处理POSIX的路径 可以使用path.posix.basename()方法
// console.log(path.win32.basename('/Front-end/code/src/index.js'));

// 2.dirname 返回指定路径的目录名 例如：/Front-end/code/src/index.js 返回 /Front-end/code/src
// 所有的node的API下都可以使用.win32和.posix方法
// console.log(path.dirname('/Front-end/code/src/index.js'));

// 3.extname 返回指定路径的扩展名 例如：/Front-end/code/src/index.js 返回 .js
// 返回值是带点的
// 如果没有扩展名，则返回空字符串
// 如果有多个点，则返回最后一个点后面的内容
// log(path.extname('/Front-end/code/src/index.js'));
// log(path.extname('./index.js.a.b.c'));

// 4.join() 拼接路径
// console.log(path.join('/a','/b','/c','/d'));
// console.log(path.join('/a','/b','/c','../'));

// 5.resolve() 解析路径 返回的是绝对路径
// 如果都是绝对路径，返回最后一个绝对路径
// 如果只有一个相对路径，返回当前文件的绝对路径
// console.log(path.resolve('./index.js'));
// console.log(path.resolve(__dirname, 'index.js'));

// 6.parse() 解析路径 返回一个对象
// console.log(path.parse('/home/user/dir/file.txt'));
// {
//   root: '/',             根目录
//   dir: '/home/user/dir', 文件所在的目录
//   base: 'file.txt',      文件名+扩展名
//   ext: '.txt',           扩展名
//   name: 'file'           文件名
// }

// 7.format() 与parse()相反 将对象转换为路径
// console.log(path.format(
//   {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
//   }
// ));

// 8.sep 返回当前系统的路径分隔符
// 根据当前系统返回不同的路径分隔符
// Windows下是反斜杠 \  
// POSIX下是正斜杠 /
console.log(path.sep);
