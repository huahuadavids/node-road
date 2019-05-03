// 流是基于模块的

const event = require("events");
const util = require("util");

function Man(){}
const man = new Man()

util.inherits(Man, event)

// 订阅
man.on("fight", function(people){
  console.log(people)
  console.log("fight together")
})
// man.once 绑定一次
// 发布
man.emit("fight", 'tom')


class Eventer {
  constructor(){
    this.__ev__ = {}
  }

  on(ename, cb){
    if(!this.__ev__[ename]){
      this.__ev__[ename] = []
    }
    this.__ev__[ename].push(cb)
  }

  once(ename, cb){
    let fn = () => {
      cb()
      this.remove(ename, cb)
    }
    this.on(ename, fn)
  }

  emit(ename){
    if(!this.__ev__[ename]){
      console.error("please bind the event first")
      return;
    }
    this.__ev__[ename].forEach(cb => cb())
  }


  remove(ename, cb){
    this.__ev__[ename] = this.__ev__[ename].filter( fn => fn !== cb)
  }


}

const e = new Eventer()