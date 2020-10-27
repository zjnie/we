<template>
  <ul class="nav">
    <li class="nav-item">首页</li>
    <li class="nav-item">Demo</li>
    <li class="nav-item">文章</li>
    <li class="nav-item">日志分析</li>
  </ul>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .nav {
    display: flex;
    height: 100%;
    
    .nav-item {
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>