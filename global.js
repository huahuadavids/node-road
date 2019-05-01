/**
 *@author zhangyuhua
 *@DATE 2019-05-01 09:53
 */


/**
 * @title 以下这些属性，只在文件中，可以用
 */

///Users/zhangyuhua/Desktop/node-road
console.log(__dirname)

///Users/zhangyuhua/Desktop/node-road/global.js
console.log(__filename)


/**
 * @title 全局对象 process
 */

// node
console.log(process.title)

// 10.14
console.log(process.version)

// console.log(process.env)

/**
 * @title 全局对象 console
 */

// 算时间差
console.time("time")
for(var a = 0; a < 1000; a++){

}
console.timeEnd("time")