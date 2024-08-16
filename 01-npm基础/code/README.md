### 1.0.0
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

### .npmrc 也就是npm在项目中的config配置
[npm install 原理](https://juejin.cn/post/7261119531891490877)

config会先从 项目级的.npmrc -> 用户级.npmrc -> 全局的.npmrc -> npm内置.npmrc
找完配置文件之后看有没有package-lock.json文件 如果有的话则和package.json比较是否一致，如果版本不一致，以package.json的为准，并且更新package-lock.json

package-lock.json 帮我们做了缓存，他会通过 name + version + integrity 信息生成一个唯一的key，这个key能找到对应的index-v5 下的缓存记录 也就是npm cache 文件夹下的
