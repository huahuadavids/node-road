/**
 *@author zhangyuhua
 *@DATE 2019-05-03 18:23
 */

const http = require("http");
const path = require("path");
const port = 8088;
const fs = require("fs");
const mime = require("mime");

// 把路径解析成一个对象
const url = require("url");

http.createServer((req, res) => {

  // req 是客户端 代表 可读流

  // step 0
  // // res 可写流
  // res.setHeader("Content-Type", 'text/html;charset=utf8')
  // res.write("hello huahua")
  // res.end()

  // step 1
  // fs.readFile("./index.html", function(err,data){
  //   res.end(data);
  // })

  // step 2
  // fs.createReadStream("./index.html").pipe(res)


  // 这样不管什么请求，如css返回的还是html文件
  // 不支持../ ./ 文件路径
  // true 是把query变成对象
  // 根据路径返回内容 / 代表首页资源要返回文件 文件夹重定向到index
  const routes = url.parse( req.url, true);

  const {pathname, query} = routes;
  console.log(pathname)


  if(pathname === '/time'){
    const t =  new Date().toLocaleDateString()
    res.end(t)
    return;
  }

  //  不加点，如/index.html 则去电脑根路径找了
  fs.stat('.'+ pathname, function (err,stat) {
    if(err) {
      res.statusCode = '404';
      res.statusMessage = 'not found'
      res.end()
    }

    // 是文件
    if(stat.isFile()){
      res.setHeader("Content-Type", mime.getType(pathname)+ ';charset=utf8')
      fs.createReadStream('.'+pathname).pipe(res)
    }

    // ./ 也是文件夹  拼接index.html(默认首页) 返回
    if(stat.isDirectory()){
      res.setHeader("Content-Type", 'text/html;charset=utf8')
      const p = path.resolve('.'+pathname, './index.html')
      fs.createReadStream(p).pipe(res)
    }


  })



}).listen(port, () => {
  console.log("the server runs @ http://localhost:8088")
})
