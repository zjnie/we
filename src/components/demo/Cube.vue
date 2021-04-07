<template>
  <div class="cube">
    <div class="face is-compose">
      <div
        v-for="face in faces"
        :key="face.placement"
        :class="['face-item', 'face-item-' + face.placement]"
        :style="face.style"
      >
        {{ face.content }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cube',
    props: {
      arr: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isCompose: true,
        faces: [
          { placement: 'top', style: { backgroundColor: 'rgba(32, 115, 14)' }, content: 'top' },
          { placement: 'bottom', style: { backgroundColor: 'rgba(12, 125, 54)' }, content: 'bottom' },
          { placement: 'left', style: { backgroundColor: 'rgba(112, 15, 124)' }, content: 'left' },
          { placement: 'right', style: { backgroundColor: 'rgba(12, 115, 24)' }, content: 'right' },
          { placement: 'before', style: { backgroundColor: 'rgba(112, 125, 124)' }, content: 'before' },
          { placement: 'after', style: { backgroundColor: 'rgba(132, 195, 124)' }, content: 'after' }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .cube {
    padding: 60px;
    height: 100%;
    
    .face {
      position: relative;
      height: 100%;
      animation: faces 5s infinite linear;
      transform-style: preserve-3d;
      -webkit-perspective: 1500;
      -webkit-perspective-origin: 0 -150%;
      
      .face-item {
        position: absolute;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        opacity: .5;
        transform-origin: center center;
        
        &-top {
          transform: rotateX(-90deg) translateZ(-100px)
        }
        
        &-bottom {
          transform: rotateX(90deg) translateZ(-100px)
        }
        
        &-left {
          transform: rotateY(-90deg) translateZ(100px)
        }
        
        &-right {
          transform: rotateY(90deg) translateZ(100px)
        }
        
        &-before {
          transform: translateZ(100px)
        }
        
        &-after {
          transform: translateZ(-100px)
        }
      }
    }
    
    .is-compose {
      .face-item {
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -100px;
      }
    }
  }
    
  @keyframes faces {
    from {
      transform: rotateX(0deg) rotateY(0deg)
    }
    to {
      transform: rotateX(360deg) rotateY(360deg)
    }
  }
</style>