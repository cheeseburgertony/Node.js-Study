// events模块中的事件总线
const EventEmitter = require("events");

// 创建EventEmitter的实例
const emitter = new EventEmitter();

const handleFn = () => {
  console.log("监听tony的事件");
};

// 监听事件
emitter.on("tony", handleFn);

// 发射事件
setTimeout(() => {
  emitter.emit("tony");

  // 取消事件监听
  emitter.off("tony", handleFn);

  // 取消事件监听后再发送事件，这时一定监听不到
  setTimeout(() => {
    emitter.emit("tony");
  }, 1000);
}, 2000);
