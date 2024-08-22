const ejs = require('ejs')
const fs = require('fs')
const marked = require('marked')
const browserSync = require('browser-sync')
let browser

const server = () => {
  browser = browserSync.create()
  browser.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  })
}


const init = (callback) => {
  // 读取md的内容
  const md = fs.readFileSync('test.md', 'utf-8')
  console.log(marked.parse(md));
  // 插入到ejs文件中
  ejs.renderFile('template.ejs', {
    content: marked.parse(md),
    title: 'markdown to html'
  }, (err, data) => {
    if (err) throw err
    fs.writeFileSync('index.html', data)
    callback && callback()
  })
}

fs.watchFile('test.md', (curr, prev) => {
  if (curr.ctime !== prev.ctime) {
    init(() => {
      browser.reload()
    })
  }
})

init(() => {
  server()
})

