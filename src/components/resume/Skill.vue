<template>
  <div class="">
    <ColumnHeader title="专业技能" icon="we-jineng" />
    <div class="info">
      <div v-for="item in data" :key="item" class="info-item list-prefix">{{ item }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skill',
    data() {
      return {
        data: [
          '熟练掌握HTML、CSS、Javascript、H5、CSS3、ES6+等前端技术',
          '熟练掌握Vue框架以及基于Vue的第三方库，包括vuex、vue-router、vant、element-ui',
          '熟练使用正则表达式',
          '熟练使用Webpack打包工具',
          '熟练使用jQuery、DOM、JSON、Echarts等技术',
          '熟练掌握promise、async函数原理',
          '熟悉使用uni-app进行移动端开发以及微信小程序开发',
          '熟悉使用canvas进行图形绘制，熟练使用konva.js实现适用于web/移动端的canvas图形绘制',
          '熟练使用qiankun框架搭建前端微服务开发平台',
          '了解web常见安全问题，如XSS、DDOS、CSRF等'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped></style>