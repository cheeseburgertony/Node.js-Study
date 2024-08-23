import nodemailer from 'nodemailer'
import yaml from 'js-yaml'
import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'
const mailInfo = yaml.load(fs.readFileSync('./mail.yaml', 'utf-8'))

// 初始化邮件服务
const transport = nodemailer.createTransport({
  service: 'qq',  // 服务商
  host: 'smtp.qq.com',
  post: 465,
  secure: true,
  auth: {
    user: mailInfo.user,  // 邮箱账号
    pass: mailInfo.pass  // 授权码
  }

})

http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url)
  const { method } = req
  if (method === 'POST' && pathname === '/send/mail') {
    // 发送邮件
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      const { to, subject, text } = JSON.parse(data)
      transport.sendMail({
        to,  // 收件人
        from: mailInfo.user,  // 发件人
        subject,  // 主题
        text  // 内容
      })
      res.end('ok')
    })
  }

}).listen(3000, () => {
  console.log('listening on port 3000');
})
