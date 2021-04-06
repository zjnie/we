<template>
  <div class="edit">
    <div class="container" @click="click" @mousedown="mousedown" @mouseup="mouseup" @focus="focus" @blur="blur" tabindex="1" >
      <div ref="child" @click="click2" @mousedown="mousedown2" @mouseup="mouseup2" @blur="blur2" tabindex="2">children</div>
    </div>
    <input @blur="blur3"/>
    <a href="http://www.baidu.com" target="_blank">11111111111</a>
  </div>
</template>

<script>
  export default {
    name: 'Edit',
    data() {
      return {}
    },
    methods: {
      mousedown() {
        console.log('mousedown')
      },
      mousedown2() {
        console.log('mousedown2')
      },
      mouseup() {
        console.log('mouseup')
      },
      mouseup2() {
        console.log('mouseup2')
      },
      click() {
        console.log('click')
      },
      click2() {
        console.log('click2')
      },
      focus() {
        console.log('focus')
  
      },
      focus2() {
        console.log('focus2')
      },
      blur() {
        console.log('blur')
      },
      blur2() {
        console.log('blur2')
      },
      blur3() {
        console.log('blur3')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    margin: 200px;
    width: 200px;
    height: 30px;
    border: 1px solid red;
    display: flex;
    overflow: hidden;
  }
</style>