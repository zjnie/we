import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll'
const options = {
  ops: {
    vuescroll: { wheelScrollDuration: 200 },
    scrollPanel: { scrollingX: false },
    bar: { onlyShowBarOnScroll: false, background: '#c1c1c1', size: '6px' },
    rail: { size: '6px' }
  }
}
Vue.use(vuescroll, options)

import './styles/base.styl'

import global from '@utils/mixins/global.js'
Vue.mixin(global)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(a)
//     console.log(2)
//   }, 2000)
// })
// promise.then(() => {
//   console.log('then')
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
