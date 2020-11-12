<template>
  <div class="article">
    <iframe class="iframe" src="./gitbook/book/index.html"></iframe>
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
  .iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>