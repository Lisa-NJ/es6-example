// 需求：一个一个读文件，读完三个后输出
// 引入 fs 模块
const fs = require('fs')

fs.readFile('./resources/weixue.md', (err, data) => {
  fs.readFile('./resources/chayang.md', (err, data1) => {
    fs.readFile('./resources/yougan.md', (err, data2) => {
      let result = data + '\r\n' + data1 + '\r\n' + data2
      console.log(result)
    })
  })
})
// ==> 回调地狱： data 容易重名，