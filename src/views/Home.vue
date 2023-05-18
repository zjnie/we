<template>
  <div class="home">
    <div class="intro animation">
      <div class="img img-left" src="../assets/home/me.jpg" />
      <p class="content"> 你好，</p>
      <p class="content"> 我是聂正杰，一个自学者。</p>
      <p class="sub-content">爱好健身、游戏和编程。</p>
      <div class="img img-right" src="../assets/home/me.jpg" />
    </div>
    <div class="text animation">
      作为自学者，我彻底脱离了常规教育体系。
  
      我没有在传统学校里上过学，
      只从大自然和互联网获取自己感兴趣的知识。
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        mm: false
      }
    },
    mounted() {
      const callback = function(entries) {
        entries.forEach(entrie => {
          if (entrie.isIntersecting) {
            entrie.target.classList.remove('animation')
            entrie.target.classList.add('fade-in')
            observer.unobserve(entrie.target)
          }
        })
      }
      const options = {}
      const observer = new IntersectionObserver(callback, options)
      const elements = document.querySelectorAll('.animation')
      elements.forEach(element => {
        observer.observe(element)
      })
    },
    methods: {}
  }
</script>
<style lang="stylus" scoped>
  .home {
    width: 100%;
    padding: calc(50% - 600px);
  }
  .intro {
    position: relative;
    width: 1170px;
    margin: 80px auto;
    padding: 100px 350px 300px 350px;
    
    .img {
      position: absolute;
      width: 300px;
      height: 500px;
      background-repeat: no-repeat;
      background-size: cover;
      
      &-left {
        top: 200px;
        left: 0;
        background-image: url("../assets/home/me.jpg")
      }
      
      &-right {
        top: 0;
        right: 0;
        background-image: url("../assets/home/me.jpg")
      }
    }
    
    .content {
      font-size: 77px;
      color: #404040;
    }
    
    .sub-content {
      margin-top: 20px;
      font-size: 33px;
      color: #404040;
    }
  }
  
  .text {
    margin-top: 130px;
    font-size: 44px
  }
  
  .fade-in {
    animation: fadeIn 2s;
    animation-fill-mode: forwards;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(0)
    }
    100% {
      opacity: 1;
      transform: translateY(-50px)
    }
  }
</style>