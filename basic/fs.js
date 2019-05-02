/**
 *@author zhangyuhua
 *@DATE 2019-05-02 09:41
 */

const fs = require("fs");
const util = require("util");

// 普通用法
fs.readFile("./index.js", 'utf8', function (err, data) {
  if(err){
    throw err;
  }
  console.log(typeof data)
})

// prommise 用法

const readFile = util.promisify(fs.readFile);

readFile("./core1.js", 'utf-8').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})