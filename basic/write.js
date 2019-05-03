/**
 *@author zhangyuhua
 *@DATE 2019-05-03 11:53
 */
const fs = require("fs");


/**
 *@title
 *@description 读取文件必须存在，写的时候，文件不存在，自动创建 ，里边有内容会覆盖
 *写入时候，编码是utf8,写入时候调用tostring方法 ，obj是不行的
 * 一般同步读取，如，在运行开始，读入配置文件
 */
// const obj = 'huahua'
// writeFile("hua.txt" ,obj, function(err,data){
//     if(err) console.log(err)
//     console.log(data)
// })

function copy(src, dist, cb) {
  const data = fs.readFileSync(src);
  fs.writeFileSync(dist, data)
}

// copy('file.js', 'file2.js')

// fs.stat("./file.js", function (err, data) {
//   if (err) {
//     console.log("file not exist")
//   } else {
//     console.log(data)
//
//     // 是不是文件
//     console.log(data.isFile())
//
//     // 是不是文件夹
//     console.log(data.isDirectory())
//   }
// })

// 创建目录
// fs.mkdir("hua", function(err,data){
//   console.log(err)
//   console.log(data)
// })

// 判断 文件/文件夹 是否存在
fs.exists("./hua", function(exist){
  console.log(exist)
})

function makep(url, cb){
  const paths = url.split("/");
  const len = paths.length;
  let index = 0;

  function make(p){
    if(len < index ) return;
    fs.exists(p, function(isExist){
      if(isExist){
        make(paths.slice(0, ++index+1).join('/'))
      }else {
        fs.mkdir(p, function (err) {
          if(err) return
          make(paths.slice(0, ++index+1).join('/'))
        })
      }
    })
  }
  make(paths[index])
}

makep("hua/a/b" ,function(err){
  console.log("创建好了")
})