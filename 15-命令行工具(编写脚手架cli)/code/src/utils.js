import fs, { readlink } from 'node:fs'
import download from 'download-git-repo'
import ora from 'ora'

const spinner = ora('下载中...')

// 检查是否存在该路径
export const checkPath = (path) => fs.existsSync(path) ? true : false

// 下载模板
export const downloadTemp = (branch, projectName) => {
  return new Promise((resolve, reject) => {
    spinner.start()
    download(`direct:https://gitee.com/chinafaker/vue-template.git#${branch}`, projectName, { clone: true }, function (err) {
      if (err) reject(err)
      resolve()
      spinner.succeed('下载完成')
    })
  })
}
