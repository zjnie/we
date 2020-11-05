class Promise {
  constructor(fn) {
    let status = 'pending'
    let value = null
    let error = null
    let callbacks = []
  
    this.then = function(fnRes, fnErr) {
      return new Promise(resolve => {
        thenHandle({
          fnRes: fnRes || null,
          fnErr: fnErr || null,
          resolve: resolve
        })
      })
    }
    
    function thenHandle(callback) {
      if (status === 'pending') {
        return callbacks.push(callback)
      }
      if (!callback.fnRes) {
        return callback.resolve()
      }
      const result = callback.fnRes(value)
      callback.resolve(result)
    }
  
    function resolveHandle(callback) {
      if (!callback.fnRes) {
        return callback.resolve()
      }
      const result = callback.fnRes(value)
      callback.resolve(result)
    }
  
    function resolve(newValue) {
      if (typeof newValue === 'function') {
        newValue = newValue()
      }
      if (newValue && typeof newValue === 'object') {
        if (typeof newValue.then === 'function') {
          return newValue.then(resolve)
        }
      }
      status = 'fulfilled'
      value = newValue
      setTimeout(() => {
        callbacks.forEach(callback => {
          resolveHandle(callback)
        })
      }, 0)
    }
  
    function reject(newError) {
      status = 'rejected'
      error = newError
      setTimeout(() => {
        callbacks.forEach(callback => {
          resolveHandle(callback)
        })
      }, 0)
    }
  
    fn(resolve, reject)
  }
  catch() {}
  static all() {}
  static race() {}
  static resolve() {}
  static reject() {}
}

export default Promise