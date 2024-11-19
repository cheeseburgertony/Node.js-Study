// events模块中的事件总线
const EventEmitter = require("events");

// 创建EventEmitter的实例
const emitter = new EventEmitter();

const handleFn = (name, age, height) => {
  // 可以使用剩余参数，也可以一个个接收
  console.log("监听tony的事件", name, age, height);
};

// 监听事件
emitter.on("tony", handleFn);

// 发射事件
setTimeout(() => {
  // 传递参数
  emitter.emit("tony", "cheeseburger", 18, 1.88);

  // 取消事件监听
  // emitter.off("tony", handleFn);

  // 取消事件监听后再发送事件，这时一定监听不到
  setTimeout(() => {
    emitter.emit("tony");
  }, 1000);
}, 2000);
