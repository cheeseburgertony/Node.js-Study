const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("tony", () => {});
emitter.on("tony", () => {});
emitter.on("tony", () => {});
emitter.on("tony", () => {});

emitter.on("cheese", () => {});
emitter.on("cheese", () => {});

// 1.获取所有监听事件的名称
console.log(emitter.eventNames());

// 2.获取监听最大的监听个数
console.log(emitter.getMaxListeners());

// 3.获取某一个事件名称对应的监听器个数
console.log(emitter.listenerCount('tony'));

// 4.获取某一个事件名称对应的监听器函数（数组形式）
console.log(emitter.listeners('tony'));

