/**
 *@author zhangyuhua
 *@DATE 2019-05-01 12:19
 */

function Modal(){
  this.time = 500
}

Modal.name = 'modal'

Modal.prototype.show = function(){
  console.log("show")
}

Modal.prototype.hide = function(){
  console.log("hide")
}

class Dialog {
  constructor(){
    this.time = 300
  }
  static name = 'dialog'

  show(){
    console.log("show")
  }
}




