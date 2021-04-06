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


let loader = require('@libs/loader.js')
console.log(loader)
