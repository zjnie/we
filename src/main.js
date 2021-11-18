import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入自定义滚动条
import '@libs/vuescroll'

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

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      console.log(i)
    }
  })
}

let prev = Date.now()
let now = 0
function animate() {
  now = Date.now()
  console.log('requestAnimationFrame:' + (now - prev))
  prev = now
  requestAnimationFrame(() => {
    animate()
  })
}

animate()

