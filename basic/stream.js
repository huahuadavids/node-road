/**
 *@author zhangyuhua
 *@DATE 2019-05-03 15:26
 */

// 流，边读边写
const fs = require("fs");

// highWaterMark默认读64k 需要配合事件使用 
let stream = fs.createReadStream("./core.js")

const arr = []
// 默认非流动模式
// data 事件一直触发，知道文件读完 
stream.on("data", function (chunk) {
  arr.push(chunk)
  // console.log(chunk)
})


stream.on("end", function () {
  console.log("end")
  console.log(Buffer.concat(arr).toString())
})

// 读大文件或者小文件乱码问题
stream.on("err", function(){
  console.log("error")
})