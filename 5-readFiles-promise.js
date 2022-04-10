// 使用 promise 实现依次读取三个文件并输出

const fs = require('fs')
const { resolve } = require('path')

const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/weixue.md', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/chayang.md', (err, data) => {
      resolve([value, data])
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/yougan.md', (err, data) => {
      //压入
      value.push(data)
      resolve(value)
    })
  })
}).then(value => { //value 是一个数组，拼接
  console.log(value.join('\r\n'))
})

// ==> 通过 then 方法将多个异步任务串联了起来