/**
 *@author zhangyuhua
 *@DATE 2019-05-02 10:07
 */

// buffer是固定长度，3个创建方式
// 比allocUnsafe消耗性能
const buf = Buffer.alloc(10)
// <Buffer 00 00 00 00 00 00 00 00 00 00>
buf.fill(64)

//buffer 的slice是浅拷贝
const buf0 = Buffer.from([1,2,3])
const buf1 =  Buffer.from("dd")
console.log(buf0)
console.log(buf1)
console.log(Buffer.concat([buf0, buf1]))
