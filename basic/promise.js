/**
 *@author zhangyuhua
 *@DATE 2019-05-02 09:41
 */

/**
 const util = require("util");
 const fs = require("fs")
 // 普通用法
 promise.readFile("./index.js", 'utf8', function (err, data) {
  if(err){
    throw err;
  }
  console.log(typeof data)
})

 // prommise 用法

 const readFile = util.promisify(promise.readFile);

 readFile("./core1.js", 'utf-8').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

 */



/**
 * @title catch 可以统一处理catch promise链
 *
 */
// const read = util.promisify(fs.readFile)
//  const read1 = read("./file.js").then(res => {
//   console.log(res)
//   return read("./core.js")
// }).then(res1 => {
//     console.log("read1")
//     console.log(res1)
// }).catch(err => {
//     console.log(err)
// }


/**
 * @title async await
 * await 后边只能跟着promise
 */
// const read = util.promisify(fs.readFile)
// async function  read1(){
//   const res1 = await read("./file.js", 'utf8')
//   console.log(res1)
// }
// read1()

const {promisify} = require("util")
const {readFile} = require("fs")
const read = promisify(readFile)

const read1 = read("./file.js", 'utf8')
const read2 = read("./core.js", 'utf8')

// 返回一个新的promise
Promise.all([read1, read2]).then(res => {
  console.log(res)
})



