/**
 *@author zhangyuhua
 *@DATE 2019-05-03 11:33
 */
const {readFile}  =   require("fs");
const {promisify} =   require("util");
const read        =   promisify(readFile);

// 返回一个快的，不管成功还是失败, 就结束了
Promise.race([read("./file.js", 'utf8'), read("./core.js", 'utf8')]).then(res => {
  console.log(res)
})

// 包装普通数据为promise Promise.resolve/Promise.reject
Promise.resolve('haha').then(res => {
  console.log(res)
})