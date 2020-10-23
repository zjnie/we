<template>
  <div class="button-background">
    <span>切换背景</span>
    <ul class="panel">
      <li
        v-for="item in data"
        :key="item"
        :class="['panel-item', { 'panel-item-active': item === value }]"
        @click="change(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BackgroundChange',
    inject: ['changeBackground'],
    data() {
      return {
        data: ['Particle', 'StarSky'],
        value: 'Particle'
      }
    },
    methods: {
      change(value) {
        this.value = value
        this.changeBackground(value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .button-background {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 150px 0 30px;
    padding-right: 16px;
    height: 100%;
    cursor: pointer;
    
    &::after {
      content: '';
      position: absolute;
      right: 0;
      margin-top: 2px;
      border-top: none;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 8px solid #666;
      transition: transform .2s;
      transform-origin: center center;
    }
    
    &:hover {
      &::after {
        transform: rotateZ(180deg)
      }
      
      .panel {
        transform: translateX(-50%) rotateX(0deg);
        opacity: 1;
      }
    }
    
    .panel {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) rotateX(90deg);
      padding: 5px 0;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 0 15px 2px rgba(0, 0, 0, .1);
      transition: transform .2s, opacity .15s;
      transform-origin: center 0;
      opacity: 0;
      
      &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid #fff;
      }
      
      .panel-item {
        padding: 6px 20px;
        margin: 5px 0;
        
        &:hover {
          color: #fff;
          background-color: red;
        }
        
        &-active {
          color: #fff;
          background-color: red;
        }
      }
    }
  }
</style>