<template>
  <div class="banner">
    <!--<img class="banner-img" :src="bannerSrc"/>-->
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data() {
      return {
        bannerSrc: require('@assets/banner.jpg')
      }
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