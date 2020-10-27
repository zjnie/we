const Monitor = function(Vue) {
  window.onerror = function(message, url, row, column, error) {
    console.log('--------------monitor-------------')
    console.log('message: ', message)
    console.log('url: ', url)
    console.log('row: ', row)
    console.log('column: ', column)
    console.log('error: ', error)
    return false
  }
  
  window.addEventListener('error', event => {
  //  console.log('资源error', event)
  //   this.add({
  //     time: Date.now(),
  //     content: '资源加载错误',
  //     url: 'www.baidu.com'
  //   })
  }, true)
  
  window.addEventListener('unhandlerdrejection', function(event) {
   // console.log('promise error')
  })
  
  Vue.config.errorHandler = (err, vm, info) => {
    this.add({
      time: Date.now(),
      type: 'vue error',
      content: err.message,
      url: info
    })
  }
  
  Vue.config.warnHandler = (err, vm, info) => {
    this.add({
      time: Date.now(),
      type: 'vue warn',
      content: err,
      url: info
    })
  }
}

Monitor.prototype.get = function() {
  return JSON.parse(localStorage.getItem('$logs') || '[]')
}

Monitor.prototype.add = function(options) {
  let logs = this.get()
  logs.unshift(options)
  logs = logs.slice(0, 100)
  localStorage.setItem('$logs', JSON.stringify(logs))
}

Monitor.prototype.clear = function() {
  localStorage.removeItem('$logs')
}

export default Monitor