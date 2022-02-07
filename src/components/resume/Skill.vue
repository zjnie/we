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
          '熟练掌握HTML、CSS、Javascript、H5、CSS3、ES6等前端技术',
          '熟练掌握flex布局，对自适应布局研究较深，尽可能的减少元素嵌套来实现复杂布局',
          '熟练使用css代替javascript完成一些交互操作',
          '熟练掌握Vue框架以及基于Vue的第三方库，包括vuex、vue-router、view-ui、element-ui',
          '熟练使用正则表达式进行字符串处理',
          '熟练使用Webpack打包工具，能够开发loader和plugin',
          '熟练使用jQuery、DOM、JSON、Echarts等技术',
          '熟练手写实现promise、async函数',
          '熟悉基于Vue的服务器渲染，能够搭建具有热更新功能的开发框架',
          '熟悉使用uni-app进行移动端开发',
          '熟悉关于Http协议相关内容',
          '熟悉使用canvas进行图形绘制，熟练使用konva.js实现适用于web/移动端的canvas图形绘制',
          '熟练使用markdown编写技术文档，gitbook构建个人文档网站，通过nodeppt编写培训文档',
          '了解web常见安全问题，如XSS、DDOS、CSRF等',
          '了解常见的web性能优化方式',
          '了解排序算法、贪心算法、动态规划算法',
          '了解nodejs、react、shell、typescript、java、sql、nginx等其他技术'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped></style>