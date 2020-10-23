<template>
  <ul class="nav">
    <li class="nav-item">菜单一</li>
    <li class="nav-item">菜单二</li>
    <li class="nav-item">菜单三</li>
    <li class="nav-item">菜单四</li>
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
      color: $primary-color;
    }
  }
</style>