// events模块中的事件总线
const EventEmitter = require("events");

// 创建EventEmitter的实例
const emitter = new EventEmitter();

// 监听事件
emitter.on("tony", () => {
  console.log("监听tony的事件");
});

// 发射事件
setTimeout(() => {
  emitter.emit("tony");
}, 2000);
