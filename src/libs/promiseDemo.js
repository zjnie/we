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
	return promise2
}).then(res => {
	console.log(res)
	return promise3()
}).then(res => {
	console.log(res)
})

// 实现步骤
// 1.基本用法实现
// 2.resolve同步调用
// 3.then方法中不传参数，或者参数不是函数
// 4.then方法异步调用
// 5.链式调用
// 6.链式调用中间then方法中不传参数，或者参数不是函数
// 7.then回调函数return promise对象
// 8.加入reject,catch
// 9.实现静态方法resolve, reject, race, all
// 10.catch和reject错误捕获的冒泡执行步骤


