/**
 *@author zhangyuhua
 *@DATE 2019-05-03 17:39
 */
const fs = require("fs");

function copy(src, dist) {

  const rs = fs.createReadStream(src, {highWaterMark: 4});


  const ws = fs.createWriteStream(dist, {highWaterMark: 1});

  // rs.on("data", function (chunk) {
  //   // 不能写了就暂停读取
  //   if(!ws.write(chunk)){
  //     rs.pause()
  //   }
  // })
  //
  // // 写完了就继续读
  // ws.on("drain", function () {
  //   console.log("drain")
  //   rs.resume()
  // })
  //
  // rs.on("end" ,function () {
  //   console.log("读完了")
  //   ws.end()
  // })

  // 相当于上边的代码
  rs.pipe(ws)

}
copy("./hua.txt", 'hua1.txt')