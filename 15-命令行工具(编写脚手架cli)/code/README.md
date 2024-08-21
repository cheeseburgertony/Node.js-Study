### 编写脚手架

1.自定义命令，而不是node去执行我们的脚本
```json
"bin": {
    "test-cli": "src/index.js "
  }
```
```sh
# 创建一个软链接挂载到全局
npm link
```

2.-V --helo create 命令行交互工具
3.去下载模板 判断isTS，如果是就下载ts版本，如果不是就下载js版本 (根据isTS下载不同分支)

### 仓库 

https://gitee.com/chinafaker/vue-template.git
- js
- ts

### 工具
commander          Commander 是一个用于构建命令行工具的 npm 库。
inquirer           Inquirer 是一个强大的命令行交互工具，用于与用户进行交互和收集信息。
ora                Ora 是一个用于在命令行界面显示加载动画的 npm 库。
download-git-repo  Download-git-repo 是一个用于下载 Git 仓库的 npm 库。