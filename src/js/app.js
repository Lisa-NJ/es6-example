// 引入 m1.js m2 m3 模块内容
import * as m1 from './m1.js'
import { school as gui, findJob } from './m2.js'
import m3 from "./m3.js"

// console.log(m1)
// console.log(gui, findJob)
// console.log(m3)

// m3.change()

// 修改背景颜色为粉色
import $ from 'jquery' //等价于之前 commonJS 的 const $ = require('jquery')
$('body').css('background', 'pink')