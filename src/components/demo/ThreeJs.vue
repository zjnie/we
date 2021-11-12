<template>
  <div id="three-container'" class=""></div>
</template>

<script>
  const THREE = require('three-js')()

  export default {
    name: 'ThreeJs',
    data() {
      return {
      
      }
    },
    mounted() {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize( window.innerWidth, window.innerHeight )
      this.$el.appendChild( renderer.domElement )
  
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
  
      camera.position.z = 5;
    }
  }
</script>

<style lang="stylus" scoped>

</style>