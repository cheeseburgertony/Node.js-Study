import express from 'express'

const app = express()

// 白名单
const whiteList = ['localhost']

// 防盗链中间件
const preventHotLinking = (req, res, next) => {
  // referer 如何获取 如果是直接打开资源是获取不到referer，加入资源在html中，html的一个img，那么当访问这个html的时候会自动发送请求获取这个img，这个是可以获取到referer的
  const referer = req.get('referer')
  if (referer) {
    const { hostname } = new URL(referer)
    if (!whiteList.includes(hostname)) {
      res.status(403).send('禁止访问')
      return
    }
  }
  next()
}

app.use(preventHotLinking)

// 初始化静态资源
app.use('/assets', express.static('static'))

app.listen(3000, () => {
  console.log('server started');
})
