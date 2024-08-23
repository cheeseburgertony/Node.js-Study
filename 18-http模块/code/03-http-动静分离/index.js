import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import mime from 'mime'

const server = http.createServer((req, res) => {
  const { method, url } = req
  // 静态资源
  if (method === 'GET' && url.startsWith('/static')) {
    const staticPath = path.join(process.cwd(), url)
    fs.readFile(staticPath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'content-type': 'text/plant'
        })
        res.end('not found')
      } else {
        console.log('test');
        const type = mime.getType(staticPath)
        res.writeHead(200, {
          'content-type': type, // mime类型
          'cache-control': 'public, max-age=3600'  // 缓存
        })
        res.end(data)
      }
    })
  }
  // 动态资源
  if ((method === 'GET' || method === 'POST') && url.startsWith('.api')) {
    // 接口逻辑
  }

})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})
