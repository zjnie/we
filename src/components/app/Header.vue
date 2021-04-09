<template>
  <div class="header">
    <Nav/>
    <ButtonTheme/>
<!--    <ButtonBackground/>-->
  </div>
</template>

<script>
  export default {
    name: 'Header',
    components: {
      Nav: () => import('@/components/app/header/Nav.vue'),
      ButtonBackground: () => import('@/components/app/header/ButtonBackground.vue'),
      ButtonTheme: () => import('@/components/app/header/ButtonTheme.vue')
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 60px;
    box-shadow: 0 4px 15px rgba(0,0,0,.08);
    background-color: rgb(255,255,255);
    z-index: 999;
    
    .nav {
      margin-left: auto;
    }
  }
</style>