<template>
  <div class="background">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  import Particle from '@utils/canvas/particle.js'
  import StarSky from '@utils/canvas/starSky.js'
  
  export default {
    name: 'Background',
    data() {
      return {
        ctx: null,
        canvas: null,
        data: {
          'Particle': {
            constructor: Particle,
            params: [250]
          },
          'StarSky': {
            constructor: StarSky,
            params: [150]
          }
        },
        value: 'Particle'
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.ctx = this.$el.querySelector('#canvas').getContext('2d')
        this.listenerContainerResize()
      },
      setCanvasSize() {
        this.ctx.canvas.width = this.$el.clientWidth
        this.ctx.canvas.height = this.$el.clientHeight
      },
      listenerContainerResize() {
        const resizeObserver = new ResizeObserver(item => {
          if (item) {
            this.setCanvasSize()
            this.render()
          }
        })
        resizeObserver.observe(this.$el)
      },
      render() {
        if (this.canvas) {
          this.canvas.remove()
        }
        const canvas = this.data[this.value]
        this.canvas = new canvas.constructor(this.ctx, ...canvas.params)
      },
      change(value) {
        this.value = value
        this.render()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
   
    #canvas {}
  }
</style>