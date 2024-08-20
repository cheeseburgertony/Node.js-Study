const util = require('node:util');
const { exec } = require('node:child_process')

// exec('node -v', (err, stdout, stderr) => {
//   if (err) return err
//   console.log(stdout);
// })

// util.promisify(函数) 返回一个新的函数，这个函数返回一个Promise对象
// const execPromise = util.promisify(exec)

// util.promisify() 原理实现
// const promisify = (fn) => {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err, ...values) => {
//         if (err) reject(err)
//         if (values && values.length > 1) {
//           let obj = {}
//           for (let key in values) {
//             obj[key] = values[key]
//           }
//           resolve(obj)
//         } else {
//           resolve(values[0])
//         }
//       })
//     })
//   }
// }
// const execPromise = promisify(exec)

// 如果返回的是多个参数 (stdout, stderr) 会返回一个对象,如果返回的是一个参数，就直接返回
// execPromise('node -v').then(res => {
//   // { stdout: 'v20.12.2\r\n', stderr: '' } res
//   console.log(res,'res');
// }, err => {
//   console.log(err,'err');
// })


// // util.callbackify() // 将Promise对象转换成回调函数
// const fn = (type) => {
//   if (type === 1) {
//     return Promise.resolve('success')
//   } else {
//     return Promise.reject('error')
//   }
// }

// // util.callbackify() 原理实现
// const callbackify = (fn) => {
//   return (...args) => {
//     const callback = args.pop()
//     fn(...args).then(res => {
//       callback(null, res)
//     }).catch(err => {
//       callback(err)
//     })
//   }
// }

// // const callback = util.callbackify(fn)
// const callback = callbackify(fn)
// callback(1, (err, res) => {
//   console.log(err, res);
// })


// util.format() // 格式化字符串 类似于C语言的printf %s匹配字符串 %d匹配数字 
console.log(util.format('%s--%s', 'hello', 'world')); // hello--world
