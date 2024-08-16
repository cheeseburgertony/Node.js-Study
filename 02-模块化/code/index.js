// cjs和esm的区别
// cjs是基于运行时的同步加载,esm时基于编译时的异步加载
// cjs时可以修改值得,esm值是不可以修改的(可读的)
// cjs不可以进行tree shaking,esm支持tree shaking (一个基于运行时,一个基于编译时)
// commonjs中顶层的this指向这个模块本身,而在es6中顶层this指向undefined
console.log(this);
// if(true){
//   require('')
//   // ... 在cjs模式下下面的代码还是可以正常执行的
// }

// if(true){
//   // import '' 
//   // ... 直接使用import会报错: 导入声明只能在模块的顶层使用
// }

// import非要掺杂在逻辑里面则使用impor函数模式
if(true){
  import('./test.js').then(res=>{
    console.log(res);
  })
}