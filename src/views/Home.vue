<template>
  <div class="home">
    <div class="select" tabindex="1">
      <div class="select-inner">我是个select</div>
      <div class="select-panel">
        <div class="select-option">我是第一个选项</div>
        <div class="select-option">我是第二个选项</div>
        <div class="select-option">我是第三个选项</div>
        <div class="select-option">我是第四个选项</div>
        <div class="select-option">我是第五个选项</div>
      </div>
    </div>
    <div style="width: 50px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">
      <span style="color: red;">12222222222222</span>
      <span>12222222222222</span>
    </div>
    <img id="img" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae70d414c22a4a668b8da47e2296c10a~tplv-k3u1fbpfcp-watermark.image" />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        text: '我是个select'
      }
    },
    created() {
    },
    methods: {
      a(t) {
        this.text = t
      }
    }
  }
</script>
<style lang="stylus">
  /* Turn on a 13x13 scrollbar */
  ::-webkit-scrollbar {
    width: 7px;/*对垂直流动条有效*/
    height: 10px;/*对水平流动条有效*/
    border-radius:10px;
  
  }
  
  /* 垂直滚动条的滑动块 */
  ::-webkit-scrollbar-thumb:vertical {
    height: 50px;
    background-color: #BDC3CB;
    -webkit-border-radius: 6px;
  }
</style>
<style lang="stylus" scoped>
  .home {
    position: relative;
    padding: 300px;
    height: 100px;
    overflow: auto;
    
    .select {
      position: relative;
      width: 250px;
      font-size: 12px;
      color: #606266;
      outline: none;
      
      &:focus {
        .select-inner {
          border-color: #409eff;
          
          &::after {
            transform: rotateZ(180deg)
          }
        }
        
        .select-panel {
          transform: rotateX(0deg)
        }
      }
      
      .select-inner {
        width: 100%;
        height: 36px;
        line-height: 34px;
        padding: 0 30px 0 10px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        
        &::after {
          content: '';
          position: absolute;
          top: 15px;
          right: 10px;
          border: 6px solid #bbb;
          border-top-width: 7px;
          border-bottom: none;
          border-left-color: transparent;
          border-right-color: transparent;
          transform: rotateZ(0deg)
          transform-origin: center center;
          transition: transform .2s;
        }
      }
      
      .select-panel {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 2px;
        padding: 10px 0;
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, .1);
        transform: rotateX(90deg)
        transform-origin: center 0;
        transition: transform .2s;
        
        .select-option {
          padding: 6px 10px;
          cursor: pointer;
          
          &:hover {
            color: #fff;
            background-color: #409eff;
          }
        }
      }
    }
  }
</style>