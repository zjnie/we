<template>
  <div class="column-header">
    <i :class="['we', icon]"></i>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ColumnHeader',
    props: ['title', 'icon'],
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .column-header {
    color: #0ea391;
    padding: 24px 0 8px 0;
    border-bottom: 2px solid #0ea391;
    margin-bottom: 12px;
    
    .we {
      font-size: 24px;
      vertical-align: -1px;
    }
    
    .title {
      margin-left: 8px;
      font-size: 20px;
    }
  }
</style>