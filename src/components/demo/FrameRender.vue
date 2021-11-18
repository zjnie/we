<template>
  <div class="">
    <div v-for="item in 5" class="container">
      <div class="event-loop-item">微任务</div>
      <div class="event-loop-item">宏任务</div>
      <div class="render-item">帧动画回调函数</div>
      <div class="render-item">帧渲染</div>
      <div class="idle-time">空闲回调函数</div>
      <div class="arrow">→</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Frame',
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    margin-top: 50px;
    margin-left: 300px;
    display: flex;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: relative;
    
    .event-loop-item {
	    width: 120px;
	    background: #989842;
    }
    
    .render-item {
	    width: 120px;
	    background: #299ebe;
    }
    
	
	  .idle-time {
		  width: 120px;
		  background: #bec7cb;
	  }
    
    div:not(:last-child) {
      border-right: 1px solid #fff;
    }
    
    .arrow {
      font-size: 20px;
      position: absolute;
      bottom: -55px;
      left: 300px;
      transform: rotateZ(90deg)
    }
    
    &:last-child .arrow {
      display: none;
    }
  }
</style>