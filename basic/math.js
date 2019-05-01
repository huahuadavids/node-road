/**
 *@author zhangyuhua
 *@DATE 2019-05-01 12:08
 */

var add = function (a, b) {
  return a + b;
}

// module.exports = {
//   add
// }

exports.add = add;

console.log(module.exports === exports) // true