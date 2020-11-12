# 如何简单实现一个promise

## 什么是promise

> promise是异步编程的一种解决方案：从语法上讲promise是一个对象，他可以
> 获取异步操作的消息；从本意上说，它是承诺，承诺它过一段时间会给你一个结果。
> promise有三种状态：pending(等待中)，fulfilled(已成功)，rejected(已失败)；
> 状态一旦改变，就不会在变。创造promise实例后，它会立即执行。

## promise是用来解决什么问题的

> 回调地狱，代码难以维护，常常第一个的函数输出是第二个函数的输入这种现象


## promise实现过程(为了演示只写resolve)

先看一下promise的用法

```
const promise = function() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('promise')
    }, 1000)
  })
}

promise().then(res => {
  console.log(res) // 输出promise
})
```

如果自己实现一个MyPromise也去执行上面的代码,并且达到同样的效果，怎么做

```
// 定义一个构造函数 MyPromise
class MyPromise {
  // 接受一个参数fn
  constructor(fn) {
    let callback = null

    // 实例对象有个then方法
    this.then = function(fnRes) {
      callback = fnRes
    } 

    // 定义一个resolve函数
    function resolve(value) {
      callback(value)
    }

    // fn是需要在构造器中执行的，同样fn也接受两个函数参数resolve/reject
    fn(resolve) 
  } 
}
```

new MyPromise()在构造器中执行函数参数fn,同时返回一个实例， 因为fn中
存在异步，所以会优先执行实例的then方法，这个方法会把then中的参数fnRes函数
进行**注册**（赋值给上级作用域的变量callback， 以下注册均是此意），fn中的异步执行完，
会调用resolve方法，在resolve中执行函数callback,并传参

### 如果函数fn中不是异步，而是同步怎么办

```
const promise = function() {
  return new MyPromise(resolve => {
    resolve('promise')
  })
}
```

那么执行resolve的时候then中的fnRes函数还注册，这个时候我们可以在resolve中
异步执行callback，确保注册已经完成， 所以在resolve中加入异步机制

```
function resolve(value) {
  setTimeout(() => {
    callback(value)  
  })
}
```

### 如果then中没有传参，或者传的参数不是一个函数

```
promise().then() 或者 promise().then(123)
```

那么在调用resolve时，callback执行会报错，所以resolve中加入判断机制

```
function resolve(value) {
  setTimeout(() => {
    if (callback && typeof callback === 'function') {
      callback(value)  
    }
  })
}
```

### 如果then不是立刻调用而是在异步操作中调用怎么办

```
const instance = promise()
setTimeout(() => {
  instance.then(res => {
    console.log(res) // 输出promise
  })
}, 1000)
```

那么resolve已经执行过了，再去调用then时，then中的fnRes函数怎么触发，所以我们在这里加上
状态机制（pending，fulfilled，rejected），在构造器中加入value和status变量，
在then中根据状态判断代码如何执行，在reslove中把最新值newValue赋值给上级作用域
的value,同时改变状态为fulfilled

```
constructor(fn) {
  let callback = null
  let value = ''
  let status = 'pending'

  // 实例对象有个then方法
  this.then = function(fnRes) {
    if (status === 'pending') {
      return callback = fnRes
    }
    if (fnRes && typeof fnRes === 'function') {
      fnRes(value)  
    }
  } 
  
  function resolve(newValue) {
    value = newValue
    status = 'fulfilled'
    setTimeout(() => {
      if (callback && typeof callback === 'function') {
        callback(value)  
      }
    })
  }
  ... //其他代码省略 
}
```

### 怎么实现链式调用

我们希望是下面输出结果

```
promise().then(res => {
  console.log(res) // 输出promise
  return 'promise2'
}).then(res => {
  console.log(res) // 输出promise2
})
```

但是正常调用then方法后返回一个undefined，然后在调用then会报错，所以在then中
return一个MyPromise实例

```
this.then = function(fnRes) {
  return new MyPromise(resolve => {
    if (status === 'pending') {
      return callback = fnRes
    }
    if (fnRes && typeof fnRes === 'function') {
      fnRes(value)  
    }
  })
} 
```

这时第一个resolve执行注册的第一个callback，能够正常执行，但是第二个callback不能
触发，所以我们把第二个resolve和第一个的fnRes一起注册到第一个callback中

```
this.then = function(fnRes) {
  return new MyPromise(resolve => {
    if (status === 'pending') {
      return callback = {
        fnRes: fnRes || null,
        resolve: resolve
      }
    }
    if (fnRes && typeof fnRes === 'function') {
      const result = fnRes(value)
      resolve(result)
    }
  })
} 

function resolve(newValue) {
  value = newValue
  status = 'fulfilled'
  setTimeout(() => {
    if (callback.fnRes && typeof callback.fnRes === 'function') {
      const result = callback.fnRes(value)  
      callback.resolve(result) 
    }
  })
}
```

### 如果第一个then的fnRes中ruturn一个MyPromise怎么办

```
const promise = function() {
  return new MyPromise(resolve => {
    resolve('promise')
  })
}
const promise2 = function() {
  return new MyPromise(resolve => {
    resolve('promise2')
  })
}
promise().then(res => {
  console.log(res) // 输出promise
  return promise2()
}).then(res => {
  console.log(res) // 输出promise2
})
```

在resolve中newValue是个MyPromise对象，其实我们想要的是这个对象resolve的值，
所以在resolve中添加以下处理

```
function resolve(newValue) {
  if (newValue) {
    if (typeof newValue === 'function') {
      newValue = newValue()
    }
    if (typeof newValue === 'object' && newValue.then) {
      return newValue.then(resolve)
    }
  } 
  value = newValue
  status = 'fulfilled'
  setTimeout(() => {
    if (callback.fnRes && typeof callback.fnRes === 'function') {
      const result = callback.fnRes(value)  
      callback.resolve(result) 
    }
  })
}
```

### 如果其中一个then没有参数，或者不是一个函数

```
const promise = function() {
  return new MyPromise(resolve => {
    resolve('promise')
  })
}
const promise2 = function() {
  return new MyPromise(resolve => {
    resolve('promise2')
  })
}
const promise3 = function() {
  return new MyPromise(resolve => {
    resolve('promise3')
  })
}
promise().then(res => {
  console.log(res) 
  return promise2()
}).then().then(res => {
  console.log(res) 
})
```

那么代码执行到resolve后，出现中断

```
function resolve(newValue) {
  // ...省略 
  setTimeout(() => {
    if (callback.fnRes && typeof callback.fnRes === 'function') {
      const result = callback.fnRes(value)  
      callback.resolve(result) 
    }
  })
}
```

所以如果没有fnRes时，还要继续调用下个promise的resolve，完成链式调用

```
this.then = function(fnRes) {
  return new MyPromise(resolve => {
    // ...省略 
    if (fnRes && typeof fnRes === 'function') {
      const result = fnRes(value)
      resolve(result)
    } else if (callback.resolve && typeof callback.resolve === 'function') {
      callback.resolve() 
    }
  })
} 
function resolve(newValue) {
  // ...省略 
  setTimeout(() => {
    if (callback.fnRes && typeof callback.fnRes === 'function') {
      const result = callback.fnRes(value)  
      callback.resolve(result) 
    } else if (callback.resolve && typeof callback.resolve === 'function') {
      callback.resolve() 
    }
  })
}
```


最后把代码整合一下，把相同的代码提取出来
```
class MyPromise {
  // 这是一个接受参数的构造器, fn就是new的时候传过来的函数参数
  constructor(fn) {
    let callback = {}
    let value = ''
    let status = 'pending'
		
    // 实例对象有个then方法
    this.then = function(fnRes) {
      return new MyPromise(resolve => {
        handle({
          fnRes: fnRes || null,
          resolve: resolve
        })
      })
    }
		
    function resolve(newValue) {
      if (newValue) {
        if (typeof newValue === 'function') {
          newValue = newValue()
        }
        if (typeof newValue === 'object' && newValue.then) {
          return newValue.then(resolve)
        }
      }
      value = newValue
      status = 'fulfilled'
      setTimeout(() => {
        handle(callback)
      })
    }
		
    function handle(_callback) {
      if (status === 'pending') {
        return callback = _callback
      }
      if (_callback.fnRes && typeof _callback.fnRes === 'function') {
        const result = _callback.fnRes(value)
        _callback.resolve(result)
      } else if (_callback.resolve && typeof _callback.resolve === 'function') {
        _callback.resolve()
      }
    }
		
    // fn是需要在构造器中执行的，同样fn也接受两个函数参数resolve/reject
    fn(resolve)
  }
}
```
