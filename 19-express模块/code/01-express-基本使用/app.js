import express from 'express'

import List from './src/list.js'
import User from './src/user.js'
import LoggerMiddleware from './middleware/logger.js'

// express是个函数
const app = express()

app.use(express.json())  // 支持post解析json 才能使得post能够获取到前端的参数
app.use(LoggerMiddleware)
app.use('/user',User)
app.use('/list',List)

// // get
// // 第一个参数是api的地址
// // 第二个参数是回调函数 req是请求 res是响应
// // reques 接收客户端的参数
// // response返回客户端
// // req.query 获取前端请求参数
// app.get('/get', (req, res) => {
//   console.log(req.query);
//   res.send('get')
// })

// // post
// // req.body 获取前端请求参数
// app.post('/post', (req, res) => {
//   console.log(req.body);
//   res.send('post')
// })

// // 动态参数
// // req.params 获取前端请求参数
// app.get('/get/:id', (req, res) => {
//   console.log(req.params);
//   res.send('动态参数')
// })


app.listen(3000, () => {
  console.log('http://localhost:3000');
})
