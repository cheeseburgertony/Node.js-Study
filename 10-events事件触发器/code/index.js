const eventEmitter = require('events')

// 用法更vue2的event bus，还有第三方库mitt类似  都是使用发布-订阅模式

// 发布订阅模式  off on emit once(只执行一次)

// 创建一个事件对象
const bus = new eventEmitter()

// 订阅一个事件 根据事件的名字订阅
// bus.on('事件名字', 回调函数)
// on 可以订阅多次 有多少同名个事件就会触发多少次
// bus.on('test', (name) => {
//   console.log(name)
// })

// once 同名事件只订阅一次
// bus.once('test', (name) => {
//   console.log(name);
// })

// off 取消订阅
// const fn = (name) => {
//   console.log(name);
// }
// bus.on('test', fn)
// bus.off('test', fn)

// 事件只能监听10个
// 设置最大监听数
// bus.setMaxListeners(20)
// console.log(bus.getMaxListeners());

// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)
// bus.on('test', fn)

// 发布事件
// bus.emit('事件名', '参数1', '参数2', ...)
// bus.emit('test', 'tony')
// bus.emit('test', 'tony')
// bus.emit('test', 'tony')
// bus.emit('test', 'tony')



// const fn = function () {

// }

// const fn2 = function () {

// }

// fn.prototype.test = 111
// fn2.prototype.test = 222

// const a = new fn()
// const b = new fn2()

// Object.setPropertyOf() 设置对象的原型  原来的原型会被覆盖
// Object.setPrototypeOf(a, b)

// Object.getPropertyOf() 获取对象的原型
// console.log(Object.getPrototypeOf(a));
// console.log(a.test);
