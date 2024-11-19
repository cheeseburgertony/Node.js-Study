const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("tony", () => {
//   console.log("on监听");
// });

// 1.once:事件监听只监听一次（第一次发射事件时监听）
emitter.once("tony", () => {
  console.log("once监听");
});

// 默认如果有多个监听是按顺序来执行的
// emitter.on("tony", () => {
//   console.log("on监听");
// });
// 2.将监听事件添加到最前面
emitter.prependListener("tony", () => {
  console.log("prependListener监听");
});

emitter.emit("tony");

// 3.移除所有的事件监听
// 不传递参数的情况下，移除所有事件名称的所有事件监听
// 在传递参数的情况下，只会移除传递的事件名称和事件监听
emitter.removeAllListeners("tony");
