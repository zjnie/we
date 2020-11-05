import Vue from 'vue'
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