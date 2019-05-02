
var jdks = require("jdks")

// 输出 {} 代表 exports 这个不是global
// node自带模块化功能，一个js文件就是一个模块，模块中的this
console.log(this)

var a= 1;
// 每个文件都有局部作用域，不会把属性放在global上 ，
// 相当于每个文件，一个闭包，这么声明就是声明了一个私有属性
console.log(global.a)

b = 1;
console.log(global.b)

function test(){
  console.log(this == global)
}

test()

console.log(jdks.string.fmoney(1987734))

