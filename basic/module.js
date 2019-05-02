/**
 *@author zhangyuhua
 *@DATE 2019-05-01 12:05
 */

// .js .json .node 依次找
// 这样是同步的
const math = require("./math")
console.log(require.cache)
const {add, sum} = math;
console.log(add(2,3) )
console.log(sum(2,3, 333) )

// 查看模块寻找路径
console.log(module.paths)


