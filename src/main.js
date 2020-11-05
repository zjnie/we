import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入自定义滚动条
import '@libs/vuescroll'

const promise1 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise1')
    }, 1000)
  })
}

promise1().then(null, err => {
  console.log(2)
}).then(res => {
  console.log(res)
}, err => {
  console.log(22)
}).catch(err => {
  console.log(5)
}).then(res => {
  console.log(6)
}, err => {
  console.log(7)
})



// 创建一个promise
// import Promise from '@libs/promise'
// const promise1 = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('promise1')
//     }, 1000)
//   })
// }
// promise1().then(res => {
//   console.log('1')
// }, err => {
//   console.log('2')
// })



// 引入全局样式
import './styles/global.styl'

// 全局混入
import global from '@libs/mixins/global'
Vue.mixin(global)

// 关闭生产环境的提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
