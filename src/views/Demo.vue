<template>
  <div class="demo">
    <ImageWall />
<!--    <Cube/>-->
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    components: {
      ImageWall: () => import('@components/demo/ImageWall.vue'),
      Cube: () => import('@components/demo/Cube.vue')
    },
    data() {
      return {
        arr: []
      }
    },
    computed: {
      arr2() {
        return this.arr.slice(0, 2)
      }
    },
    mounted() {
      setTimeout(() => {
        this.arr = [
          {id: 'id1', value: '1'},
          {id: 'id2', value: '2'},
          {id: 'id3', value: '3'}
        ]
        setTimeout(() => {
          this.arr[0].value = '11'
        }, 1000)
      }, 500)
    }
  }
</script>

<style lang="stylus" scoped>
  .demo {
  
  }
</style>