<template>
  <div id="map"></div>
</template>

<script>
  export default {
    name: 'Map',
    data() {
      return {
        map: null
      }
    },
    mounted() {
      //配置地图ID、地图接口地址
      this.map = new creeper.VectorMap('map', 9, 'https://wisec.you07.com/cmgis-server/');
    }
  }
</script>

<style lang="stylus" scoped>
  #map {
    height: 100%;
  }
</style>