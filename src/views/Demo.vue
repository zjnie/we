<template>
  <div class="demo">
    <ImageWall />
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    components: {
      ImageWall: () => import('@components/demo/imageWall.vue')
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .demo {
  
  }
</style>