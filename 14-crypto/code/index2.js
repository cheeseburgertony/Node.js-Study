const crypto = require('node:crypto')

// 非对称加密
// 生成公钥和私钥
// 私钥只能是管理员拥有的，不能对外公开
// 公钥可以对外公开

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048  // 长度越长越安全，但是解密加密越慢
})

// 公钥加密
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('tony'))
console.log(encrypted.toString('hex'))

// 私钥解密
const decrypted = crypto.privateDecrypt(privateKey, encrypted)
console.log(decrypted.toString())

