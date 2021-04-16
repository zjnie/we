<template>
  <div class="article">
    <iframe class="iframe" src="./gitbook/_book/index.html"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
.article {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  
  .iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>