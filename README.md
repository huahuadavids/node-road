# node-road
step into node and so on 

### features 
- is a server-side js runtime environment 
- using google v8
- non-bloccking 
- event driven 
- 主线程是单线程 
- 异步（回调函数）

### 同步和异步
- 同步是当前任务执行完，才会执行下一任务， 就是程序自上而下运行
- 异步是为任务分配队列，通过回调函数来实现 
- 单线程主线程不停的干活
- 阻塞不能异步
- i/o 操作，异步 
- event-driven 事件驱动，发布订阅 当前队列和异步队列 

### web异步
- 回调函数
- setTimeout
- onclick
- ajax
- 事件


### node install 
- mac use brew , nvm to manage different versions of node 
- windows  nvm-win 


### 模块化的好处
- 高内聚 低耦合
- 方便维护，防止冲突
- 模块化取代了单例模式 
- 浏览器断的模块化 seajs CMD 、reruiresjs AMD 
- node的commonjs实现模块化，依赖实现的是文件的读写，node自带模块
- commonjs 导出模块，exports和module.exports 
- 文件导出模块时，首先隐式执行 ``` module.exports = exports =this = {} ``` 所以 exports = fn 是不可以的 
- 每次require一个模块，只会加载依次，在require这个方法上有缓存 

### node包
- 第三方包 局部安装在当前node_modules ，全局安装 
- 第三方模块，可以直接包名引入，会找当前的package.json的main对应文件运行，如果没有就往上一层 
- 全局的包可用访问，是因为npm的映射 
- mac -13 就是全局安装没权限 
``` 
// 显示全局安装模块根路径 
npm root -g 
```
- nrm 切换仓库地址 
```
nrm test 

// 显示所有可用仓库 
nrm list 
```
- http-server 以当前目录为网站根目录来启动网页服务器  
- idoc 生成说明文档，博客等
- 发布包,不能和已有的一样 
```
npm addUser 
npm publish 
npm unpublish jdks --force 
```


### buffer 
- buffer 是暂时存放IO数据的，是16进制的
- 固定内存的全局对象 
- 1b = 8个bit
- 1kb = 1024b
- 一个汉字3个字节
- 进制 
``` 
const a = ob010101  //二进制
const b = ox010101  //16进制

```

### http
- 客户端 client request 
- 服务端 server response 
- 路径不同，返回结果不同，就是路由
- 状态码 
- 200 success 
- 404 not found 
- restfully 地址一个，根据请求方法的区别。实现不同的功能 


### redis
- mysql 关系型数据库 表 hang 很可靠，性能不高
- mongodb 非关系数据库 存的是集合 集合存的是文档 性能高，不可靠 
- redis key value 数据库 性能高，也可靠 
- mac install 
```
解压：tar zxvf redis-4.0.9.tar.gz
移动到： mv redis-4.0.9 /usr/local/
切换到：cd /usr/local/redis-4.0.9/
编译测试 sudo make test
编译安装 sudo make install

// 或者 brew install redis

// 在redis目录下建立bin，etc，db三个目录
// 把/usr/local/redis/src目录下的mkreleasehdr.sh，redis-benchmark， redis-check-rdb， redis-cli， redis-server拷贝到bin目录
// cp /usr/local/redis-3.2.8/redis.conf /usr/local/redis-3.2.8/etc

// 启动server 
redis-server 
```
- 两个用途，缓存数据库，集中会话管理
- 高并发 nginx负载均衡  集群 redis放session 
- 新闻页，先读mysql，读完放到redis里，后边直接从redis取数据 
- use 
```
set name huahua
get name 




```