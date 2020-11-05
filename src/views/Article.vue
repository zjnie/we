<template>
  <div class="article">
    <ul>
      <li>如何实现一个Promise</li>
      <li>html中块级元素的width: 100%和width: auto的区别</li>
      <li>Vue如何实现换肤的功能</li>
      <li>本地开发如何实现跨域cookie共享</li>
      <li>通过Vue.extend + require.js实现动态加载第三方自定义内容开发</li>
      <li>如何实现async</li>
      <li>Vue实现如何拖拽布局</li>
      <li>Vue实现移动端页面动态缓存</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .article {
    ul {
      counter-reset: index;
      li:before {
        counter-increment: index;
        content: counter(index)'.'
      }
    }
  }
</style>