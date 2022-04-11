//1. 引入 fs
const fs = require('fs')

//2. 定义函数来读取指定名称的文件
function readAFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./resources/${filename}.md`, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

//3. 声明一个 async 函数
async function main() {
  let weixue = await readAFile('weixue')
  let chayang = await readAFile('chayang')
  let yougan = await readAFile('yougan')

  console.log(weixue.toString());
  console.log(chayang.toString());
  console.log(yougan.toString());
}

main()