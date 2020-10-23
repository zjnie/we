<template>
  <div id="app" v-cloak>
    <vue-scroll>
      <Header/>
      <Banner/>
      <router-view class="router-view"/>
    </vue-scroll>
    <Background ref="background"/>
  </div>
</template>

<script>
  export default {
    components: {
      Header: () => import('@components/app/Header.vue'),
      Banner: () => import('@components/app/Banner.vue'),
      Background: () => import('@components/app/Background.vue')
    },
    provide() {
      return {
        changeBackground: this.changeBackground
      }
    },
    data() {
      return {}
    },
    methods: {
      changeBackground(value) {
        this.$refs.background.change(value)
      }
    }
  }
</script>

<style lang="stylus">
  .v-cloak {
    display: none;
  }
  #app {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    .header {
      flex-shrink: 0;
    }
    
    .banner {
      flex-shrink: 0;
    }
    
    .router-view {
      flex-shrink: 0;
      flex-grow: 1;
    }
  }
</style>
