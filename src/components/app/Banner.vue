<template>
  <div class="banner">
    <img class="banner-img" :src="bannerSrc" @click="handleError"/>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data() {
      return {
        bannerSrc: require('@assets/image-wall/1.jpg')
      }
    },
    methods: {
      handleError() {}
    }
  }
</script>

<style lang="stylus" scoped>
  .banner {
    height: 300px;
    overflow: hidden;
    
    .banner-img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      min-width: 750px;
      min-height: 300px;
    }
  }
</style>