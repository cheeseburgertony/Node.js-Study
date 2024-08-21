#!/usr/bin/env node
// 告诉操作系统执行自定义命令的时候，帮我使用node去执行这个文件
import fs from 'node:fs'
import { program } from 'commander'
import inquirer from 'inquirer'
import { checkPath, downloadTemp } from './utils.js'

let json = fs.readFileSync('./package.json')
json = JSON.parse(json)
// 获取版本
program.version(json.version)
// 获取create 后面的参数
program.command('create <projectName>').alias('c').description('创建项目').action((projectName) => {
  // 命令行中进行交互
  inquirer.prompt([
    {
      type: 'input',   // 输入input   confirm确认框   list选择框  checkbox多选框 
      name: 'projectName',     // 返回的key值(键值)
      message: '请输入项目名称',  // 描述
      default: projectName     // 默认值
    },
    {
      type: 'confirm',   // 输入input   confirm确认框   list选择框  checkbox多选框 
      name: 'isTS',     // 返回的key值(键值)
      message: '是否选用TypeScript模板',  // 描述
    }
  ]).then(res => {
    // res是根据上面交互之后的结果，是一个对象  { projectName: 'tony', isTS: false }
    if (checkPath(res.projectName)) {
      console.log('文件已存在')
      return
    }
    if (res.isTS) {
      // 根据isTS选择模板
      downloadTemp('ts', projectName)
    } else {
      downloadTemp('js', projectName)
    }
  })
})





program.parse(process.argv)
