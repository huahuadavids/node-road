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
- 文件导出模块时，首先隐式执行 ``` module.exports = exports = this = {} ``` 所以 exports = fn 是不可以的 