<template>
  <ul class="nav">
    <router-link
      v-for="nav in navs"
      :key="nav.path"
      class="nav-item"
      :to="nav.path"
      tag="li"
      v-text="nav.name"
    />
  </ul>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        navs: [
          { name: '首页', path: '/home' },
          { name: 'Demo', path: '/demo' },
          { name: '文章', path: '/article' },
          { name: '日志分析', path: '/log' }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .nav {
    display: flex;
    height: 100%;
    
    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;
      transition: border-bottom-width 2s;
      
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: $primary-color;
        transition: width .2s;
      }
    }
    
    .router-link-active {
      color: $primary-color;
      
      &::after {
        width: 100%;
      }
    }
  }
</style>