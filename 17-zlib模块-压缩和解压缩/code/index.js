const zlib = require('node:zlib')
const fs = require('node:fs')
const http = require('node:http')

// gzip压缩  Gzip压缩通常具有更高的压缩率 常用于文件压缩
// const readStream = fs.createReadStream('index.txt')
// const writeStream = fs.createWriteStream('index.txt.gz')  // 后缀是.gz
// readStream.pipe(zlib.createGzip()).pipe(writeStream)

// gzip解压
// const readStream = fs.createReadStream('index.txt.gz')
// const writeStream = fs.createWriteStream('index2.txt')
// readStream.pipe(zlib.createGunzip()).pipe(writeStream)


// deflate压缩  在压缩速度方面，Deflate可能比Gzip更快  常用于网络传输和HTTP响应的内容编码
// const readStream = fs.createReadStream('index.txt')
// const writeStream = fs.createWriteStream('index.txt.deflate')  // 后缀是.deflate
// readStream.pipe(zlib.createDeflate()).pipe(writeStream)

// deflate解压
// const readStream = fs.createReadStream('index.txt.deflate')
// const writeStream = fs.createWriteStream('index3.txt')
// readStream.pipe(zlib.createInflate()).pipe(writeStream)

// 原始4.2kB gzip 230B   deflate 221B  所以deflate更加适合压缩http编码里的内容  gzip更适合压缩一些文件
const server = http.createServer((req, res) => {
  const txt = 'tony'.repeat(1000)
  res.setHeader('Content-Encoding', 'deflate')
  res.setHeader('Content-type', 'text/plan;charset=utf-8')
  let result = zlib.deflateSync(txt)
  res.end(result)
})

server.listen(3000, () => {
  console.log('服务器启动成功');

})
