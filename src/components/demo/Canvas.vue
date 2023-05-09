<template>
  <div class="canvas">
    <canvas
      id="canvas"
      width="10000"
      height="10000"
      @mousedown="onmousedown"
      @mouseup="onmouseup"
      @mousemove="onmousemove"
    ></canvas>
  </div>
</template>

<script>
  export default {
    name: 'Canvas',
    data() {
      return {
        canvas: null,
        ctx: null,
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      }
    },
    mounted() {
      this.canvas = document.querySelector('#canvas')
      this.ctx = document.querySelector('#canvas').getContext('2d')
      this.ctx.strokeRect(100, 100, 200, 300)
      this.ctx.translate(200, 250)
      this.ctx.rotate(Math.PI / 18)
      this.ctx.strokeRect(-100, -150, 200, 300)
    },
    methods: {
      onmousedown(event) {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        this.start = {
          x: event.offsetX,
          y: event.offsetY
        }
      },
      onmouseup() {
        this.ctx = null
      },
      onmousemove(event) {
        return
        if (this.ctx === null) return
        this.end = {
          x: event.offsetX,
          y: event.offsetY
        }
        let middlePoints = [
          (this.end.x + this.start.x) / 2, this.start.y,
          (this.end.x + this.start.x) / 2, this.end.y
        ]
        
        this.ctx.beginPath()
        this.ctx.moveTo(this.start.x, this.start.y)
        this.ctx.bezierCurveTo(...middlePoints, this.end.x, this.end.y)
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.ctx.stroke()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .canvas {
    height: 100%;
    overflow: hidden;
  }
  
  #canvas {
    background: #f6f6f6;
  }
</style>