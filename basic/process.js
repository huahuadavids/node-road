/**
 *@author zhangyuhua
 *@DATE 2019-05-01 10:10
 */
// console.log(process)


// 配置环境变量，区分上线和开发
// 在命令行配置 NODE_ENV mac export windows set webstorm也可以配置
if(!process.env.NODE_ENV === 'dev'){
  console.log("生产")
}else {
  console.log("开发")
}

// 执行完当前队列的任务，优先执行，这个任务
process.nextTick(function(){
  console.log("next tick")
})

console.log("before next tick")

// 不加时间的话 使用  setImmediate
setImmediate(function(){
  console.log("setImmediate 下一个队列中的任务，肯定没有nextTick快")
})

// setImmediate和setTimeout不加时间，速度不一定谁快
setTimeout(function(){
  console.log("setTimeout ")
  console.log(this) // 这里的this指向 setTimeout自己
})


setTimeout(() => {
  console.log(this) //还是模块自己
  console.log(arguments) // 这里的arguments是父级函数的参数
})