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

### npm run原理
例如执行 npm run vite
先从当前项目的node_modules/.bin去查找可执行命令vite
如果没找到就去全局的node_modules去找可执行命令vite
如果还没找到就去环境变量查找
再找不到就进行报错

### npm 生命周期
在执行npm run dev命令的时候predev会自动执行，他的生命周期是在dev之前执行，然后执行dev命令，再然后执行postdev，也就是dev之后执行
```json
"predev":"node prev.js",
"dev":"node index.js",
"postdev":"node post.js"
```

### npx 的优势
[npx](https://juejin.cn/post/7261423108509302842)

1.避免全局安装：npx允许你执行npm package，而不需要你先全局安装它。
2.总是使用最新版本：如果你没有在本地安装相应的npm package，npx会从npm的package仓库中下载并使用最新版。
3.执行任意npm包：npx不仅可以执行在package.json的scripts部分定义的命令，还可以执行任何npm package。
4.执行GitHub gist：npx甚至可以执行GitHub gist或者其他公开的JavaScript文件。

### npm 和 npx 区别
npx侧重于执行命令的，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令
npm侧重于安装或者卸载某个模块的。重在安装，并不具备执行某个模块的功能。


### 发布npm的包的好处是什么
1.方便团队或者跨团队共享代码，使用npm包就可以方便的管理，并且还可以进行版本控制
2.做开源造轮子必备技术，否则你做完的轮子如何让别人使用难道是U盘拷贝？
3.面试题我面字节的时候就问到了这个
4.增加个人IP 让更多的人知道你的技术能力和贡献

### 搭建npm私服
Verdaccio 是可以帮我们快速构建npm私服的一个工具
```sh
npm install verdaccio -g

#创建账号
npm adduser --registry http://localhost:4873/
# 账号 密码 邮箱

# 发布npm
npm publish --registry http://localhost:4873/

#指定开启端口 默认 4873
verdaccio --listen 9999

# 指定安装源
npm install --registry http://localhost:4873

# 从本地仓库删除包
npm unpublish <package-name> --registry http://localhost:4873
```