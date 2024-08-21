const crypto = require('node:crypto')

// 对称加密算法
// 双方协商定义一个密钥以及iv
// iv: 初始化向量Initialization Vector
// 第一个参数 algorithm 加密算法 接收一个算法，例如：aes-256-cbc
// 第二个参数 key 密钥  32位
// 第三个参数 iv 初始化向量 16位  保证生产的密钥串每次都是不一样的，密钥缺少位数，还可以进行补码

let key = crypto.randomBytes(32)
let iv = Buffer.from(crypto.randomBytes(16))
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

// 进行加密
cipher.update('tony', 'utf-8', 'hex')
const result = cipher.final('hex')  // 生成密文 16进制
console.log(result);

// 解密  使用和加密相同的算法，相同的key，相同的iv
const de = crypto.createDecipheriv('aes-256-cbc', key, iv)
de.update(result, 'hex', 'utf-8')
console.log(de.final('utf-8'));
