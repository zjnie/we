<template>
  <div class="home">
    <div class="parent">
      <span>parent</span>
      <div class="children width-100">
        children
        <div style="display: flex; background-color: red;">
          <div style="flex-grow: 1">1</div>
          <div style="flex-grow: 1">1</div>
          <div style="flex-grow: 1">1</div>
        </div>
      </div>
      <p>width: 100%</p>
    </div>
    <div class="parent">
      <span>parent</span>
      <div class="children width-auto">
        children
        <div style="display: flex; ">
          <div style="flex-grow: 1; background-color: red; margin: 0 30px;">1</div>
          <div style="flex-grow: 1; background-color: red; margin: 0 30px;">2</div>
          <div style="flex-grow: 1; background-color: red; margin: 0 30px;">3</div>
        </div>
      </div>
      <p>width: auto</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        text: ''
      }
    },
    created() {
    }
  }
</script>

<style lang="stylus" scoped>
  .home {
    padding-left: 400px;
    padding-top: 30px;
    
    .parent {
      overflow: hidden;
      position: relative;
      float: left;
      width: 500px;
      height: 250px;
      margin-left: 100px;
      padding-top: 10px;
      background-color: tan;
      text-align: center;
      
      .children {
        margin: 10px -30px 0;
        height: 150px;
        text-align: center;
        line-height: 50px;
        background-color: #00CC66;
      }
      
      .width-100 {
        width: 100%;
      }
      
      .width-auto {
        width: auto;
      }
      
      p {
        position: absolute;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        padding-top: 10px;
        text-align: center;
      }
    }
  }
</style>