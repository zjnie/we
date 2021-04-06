<template>
  <div class="evaluate">
    <ColumnHeader title="个人评价" icon="we-pingjia" />
    <div class="info">
      <div v-for="item in data" :key="item" class="info-item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Evaluate',
    data() {
      return {
        data: [
          '学习能力强'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .info-item {
    position: relative;
    padding-left: 20px;
    line-height: 32px;
    font-size: 14px;
    
    &::before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #0ea391;
    }
  }
</style>