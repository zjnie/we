<template>
  <div class="home">
    <div class="flex">
      <div class="item">
        <div class="item-wrapper">12</div>
      </div>
      <div class="item">
        <div class="item-wrapper">12</div>
      </div>
      <div class="item">
        <div class="item-wrapper">11</div>
      </div>
      <div class="item">
        <div class="item-wrapper">12</div>
      </div>
      <div class="item">
        <div class="item-wrapper">3</div>
      </div>
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
    width: 500px;
    border: 1px solid tan;
    margin: 100px;
    
    .flex {
      display: flex;
      height: auto;
      margin: 30px -30px -30px 30px;
      border: 1px solid gold;
  
      .item {
        padding: 0 30px;
        min-width: 20px;
        
        .item-wrapper {
          border: 1px solid red;
        }
      }
    }
  }
</style>