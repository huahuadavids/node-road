/**
 *@author zhangyuhua
 *@DATE 2019-05-01 12:08
 */

var add = function (a, b) {
  return a + b;
}

const sum = (...args) => args.reduce( (prev, item) => prev + item)

// module.exports = {
//   add
// }

exports.add = add;
exports.sum = sum;

console.log(module.exports === exports) // true