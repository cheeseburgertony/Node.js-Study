const http = require('node:http')
const url = require('node:url')

// req接受前端的信息  res是给前端返回返回的信息
// url.parse(req.url, true)  设置为true之后接收到的query是一个对象
http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true)

  if (req.method === 'POST') {
    if (pathname === '/login') {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
      })
      req.on('end', () => {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(data)
      })
    } else {
      res.statusCode = 404
      res.end('404')
    }
  } else if (req.method === 'GET') {
    if (pathname === '/get') {
      console.log(query);
      res.end('GET')
    } else {
      res.statusCode = 404
      res.end('404')
    }
  }
}).listen(98, () => {
  console.log('98端口号启动成功');
})

