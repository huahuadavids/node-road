
/**
 *@author zhangyuhua
 *@DATE 2019-05-02 09:00
 */
const util = require("util")
// utils 工具模块
// utils.inherit
// utils.isArray
// utils.promisify

// 继承方式


class Child {
  constructor(){
    this.name = "kid"
  }
  say(){
    console.log("hello kid")
  }
}

class Big{
  shout(){
    console.log("Big shout")
  }
}


util.inherits(Child, Big)

