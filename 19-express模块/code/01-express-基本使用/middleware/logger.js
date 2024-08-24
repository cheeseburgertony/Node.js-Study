// req 就是接收前端传来的数据
// res 就是返回给前端的数据
// next是执行下一个中间件 如果不写就一直卡在这里

import log4js from 'log4js'

// 控制台输出  文件也要输出
log4js.configure({
  appenders: {
    out: {
      type: "stdout",
      layout: {
        type: "colored"
      }
    },
    file: {
      filename: "logs/server.log",
      type: "file"
    }
  },
  categories:{
    default:{
      appenders:["out","file"],
      level:"debug"
    }
  }
})

const logger = log4js.getLogger('default')

// 每一个请求都会经过中间件
const LoggerMiddleware = (req, res, next) => {
  logger.debug(`[${req.method}] ${req.url}`)
  next()
}

export default LoggerMiddleware
