class _Promise {
  constructor(fn) {
      let callbacks = []
      let status = 'pending'
      let value = ''
      let error = ''
    
      this.then = function(resFn, errFn) {
        return new _Promise((resolve, reject) => {
          handle({
            resFn: resFn,
            errFn: errFn,
            resolve: resolve,
            reject: reject
          })
        })
      }
    
      this.catch = function(errFn) {
        this.then(null, errFn)
      }
    
      const resolve = function(newValue) {
        if (status !== 'pending') return
        if (newValue && newValue instanceof _Promise) {
          newValue.then(resolve, reject)
          return
        }
      
        status = 'fulfilled'
        value = newValue
      
        setTimeout(() => {
          callbacks.forEach(callback => {
            handle(callback)
          })
        })
      }
    
      const reject = function(newError) {
        if (status !== 'pending') return
        if (newError && newError instanceof _Promise) {
          newError.then(resolve)
          return
        }
      
        status = 'rejected'
        error = newError
      
        setTimeout(() => {
          callbacks.forEach(callback => {
            handle(callback)
          })
        })
      }
    
      const handle = function(callback) {
        if (status === 'pending') {
          callbacks.push(callback)
        }
        try {
        
          if (status === 'fulfilled') {
            if (callback.resFn instanceof Function) {
              let result = callback.resFn(value)
              callback.resolve(result)
            }
            else {
              callback.resolve(value)
            }
          }
        
          if (status === 'rejected') {
            if (callback.errFn instanceof Function) {
              let result = callback.errFn(error)
              callback.resolve(result)
            }
            else {
              callback.reject(error)
            }
          }
        }
        catch(err) {
          callback.reject(err)
        }
      }
    
      fn(resolve, reject)
    }
  
    static all(promiseArr) {
      let result = []
      return new _Promise(resolve => {
        promiseArr.forEach((promise, index) => {
          promise.then(res => {
            result.push(res())
            if (result.length === promiseArr.length) {
              resolve(result)
            }
          })
        })
      })
    }
  
    static race(promiseArr) {
      return new _Promise(resolve => {
        promiseArr.forEach((promise, index) => {
          promise.then(res => {
            resolve(res())
          })
        })
      })
    }
  
    static resolve(value) {
      return new _Promise(resolve => {
        resolve(value)
      })
    }
  
    static reject(error) {
      return new _Promise((resolve, reject) => {
        reject(error)
      })
    }
}

export default _Promise

