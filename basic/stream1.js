/**
 *@author zhangyuhua
 *@DATE 2019-05-03 16:02
 */
const fs = require("fs");
// 默认可写流，是16k大小
const stream = fs.createWriteStream("./huahua.md", {
  highWaterMark: 4
});

// 异步，返回值是表示一个highWaterMark能不能它容纳的下
const flag = stream.write('123456789')

console.log(flag)

const flag1 = stream.write('abcgjkkgh')

console.log(flag1)

// 吧wrote的内容最快写入文件
stream.end("写入完毕")

