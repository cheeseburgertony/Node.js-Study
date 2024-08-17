const { JSDOM } = require('jsdom')
const fs = require('node:fs')

const root = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
`)

// 请求一个接口 拿到数据后填充到app里面
// fetch 在node18之后才有 用法和浏览器一样
const window = root.window
const document = window.document
const app = document.querySelector('#app')
fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const img = document.createElement('img')
      img.src = item.url
      img.style.width = '200px'
      img.style.height = '200px'
      app.appendChild(img)
    })
    // 将对象序列化转成字符串
    // 使用fs将转换后的字符串写入文件中  第一个参数是文件路径 第二个参数是要写入的内容
    fs.writeFileSync('./index.html', root.serialize())
  })

// SSR 服务端渲染  提升首屏渲染速度  对SEO更加友好
// CSR客户端渲染 vue react SPA(单页面应用)

// CSR 应用例如 ToB 后台管理系统 大屏可视化 都可以采用CSR渲染不需要很高的SEO支持
// SSR 应用例如 内容密集型应用大部分是ToC 新闻网站 ，博客网站，电子商务，门户网站需要更高的SEO支持