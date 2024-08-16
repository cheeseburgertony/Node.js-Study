# 1.0.0
主版本号 重大的更新 或者重大的改动 Vue2 Vue3  2.6.0 3.0.0
次版本号 功能的更新 例如编译宏3.1.0
修订号 fix bug 3.1.1

### devDependencies
开发的依赖都要装到这里
```sh
npm i 包名 --save-dev
npm i 包名 -D
```
比如说webpack vite rollup 生产环境下不需要

### dependencies 生产环境所需的依赖
例如：Vue Vuex vue-router md5

### peerDependencies 给编写插件人员或者编写npm包的开发人员去使用的
对等依赖
例如：vite plugin 插件不能凭空运行 需要依赖宿主环境 依赖vite