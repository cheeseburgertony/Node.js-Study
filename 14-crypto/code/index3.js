const crypto = require('node:crypto')

// 哈希函数
// 不能被解密 因为他是单项的，是不可逆的
// 不是很安全
// 具有唯一性
// md5 包裹一下存储到数据库 不可能明文存储的
// 可以使用撞库去碰你的密码从而进行解密
// 应用场景：读取文件内容，转换成md5，上传给服务端，后端拿到文件内容生成md5
// 跟前端md5进行匹配对比，如果一致，文件就没问题，如果不一致，文件就有问题
// 多用于检验文件的一致性
let hash = crypto.createHash('md5')  // 或者md5加密方式
hash.update('tony')
console.log(hash.digest('hex'))




