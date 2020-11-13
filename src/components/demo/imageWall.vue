<template>
  <div class="image-wall">
    <div class="container">
      <div v-for="image in images" :key="image" class="item">
        <img
          class="image"
          :style="image.style"
          :src="image.src"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imageWall',
    data() {
      return {
        images: []
      }
    },
    created() {
      const files = require.context('../../../public/img/image-wall/', false, /\.(png|jpg|jpeg)$/)
      this.images = files.keys().map(key => {
        return {
          src: key.replace('./', 'img/image-wall/'),
          style: {
            top: Math.random() * 100 - 50 + 'px',
            left: Math.random() * 30 - 15 + 'px',
            transform: `rotateZ(${ Math.random() * 90 - 45 }deg) scale(${ Math.random() + 0.5 })`
          }
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .image-wall {
    height: 100%;
    
    .container {
      display: flex;
      flex-wrap: wrap;
      padding: 50px 200px;
      
      .item {
        position: relative;
        width: 12.5%;
        height: 280px;
      }
    }
    
    .image {
      position: absolute;
      margin: 30px;
      max-width: 100%;
      transition: transform .3s;
      
      &:hover {
        transform: rotateZ(0) scale(2) !important;
        z-index: 999;
      }
    }
  }
</style>