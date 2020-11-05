const Monitor = function (Vue) {
  // 冒泡阶段执行错误监听
  window.onerror = (message, url, row, column, error) => {
    console.log('冒泡阶段执行错误监听')
    // console.log('message: ', message)
    // console.log('url: ', url)
    // console.log('row: ', row)
    // console.log('column: ', column)
    // console.log('error: ', error)
    // this.add({
    //   time: Date.now(),
    //   type: '404',
    //   content: message,
    //   url: url
    // })
    //return true
  }
  
  // 捕获阶段执行错误监听
  window.addEventListener('error', event => {
    console.log('捕获阶段执行错误监听')
    this.add({
      time: Date.now(),
      type: event.type || '404',
      content: event.message || '找不到' + event.target.src,
      url: event.filename || ''
    })
    event.preventDefault()
  }, true)
  
  // promise错误监听
  window.addEventListener('unhandledrejection', event => {
    console.log('promise错误监听')
    this.add({
      time: Date.now(),
      type: event.type || '404',
      content: '没有reject处理器',
      url: ''
    })
    event.preventDefault();
  })
  
  // vue错误监听
  Vue.config.errorHandler = (err, vm, info) => {
    console.log('vue错误监听')
    this.add({
      time: Date.now(),
      type: 'vue error',
      content: err.message,
      url: info
    })
  }
  
  // vue警告监听
  Vue.config.warnHandler = (err, vm, info) => {
    console.log('vue警告监听')
    this.add({
      time: Date.now(),
      type: 'vue warn',
      content: err,
      url: info
    })
  }
}

Monitor.prototype.get = function () {
  return JSON.parse(localStorage.getItem('$logs') || '[]')
}

Monitor.prototype.add = function (options) {
  let logs = this.get()
  logs.unshift(options)
  logs = logs.slice(0, 100)
  localStorage.setItem('$logs', JSON.stringify(logs))
}

Monitor.prototype.clear = function () {
  localStorage.removeItem('$logs')
}

export default Monitor