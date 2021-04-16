# async函数的实现
```
// 编译前
function* fn() {
  console.log(0)
  const a = yield Promise.resolve(23)
  console.log(a)
  yield 2
  console.log(3)
  return 5
}

// 编译后
function async(fn) {
  return new Promise(resolve => {
    let it = fn()
    run(it.next())
  
    function run(result) {
      if (result.done) {
        resolve(result.value)
      }
      else {
        if (result.value instanceof Promise) {
          result.value.then(res => {
            run(it.next(res))
          })
        }
        else {
          run(it.next(result.value))
        }
      }
    }
  })
}

// 示例
let result = async(fn)
result.then(res => {
  console.log(res)
})

```