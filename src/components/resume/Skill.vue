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
          '精通HTML、CSS、Javascript、H5、CSS3、ES6等前端技术',
          '精通flex布局，对自适应布局研究较深，尽可能的减少元素嵌套来实现复杂布局',
          '能够灵活使用css代替javascript完成一些交互操作，例如通过transform: rotate来实现高度不固定的下拉框展开收起的动画效果、通过伪元素实现三角形、伪类::focus实现下拉框的展开收起',
          '精通Vue框架以及基于Vue的第三方库，包括vuex、vue-router、view-ui、element-ui',
          '掌握基于Vue的服务器渲染',
          '精通正则表达式进行字符串处理',
          '了解排序算法、贪心算法、动态规划算法',
          '熟练使用Webpack打包工具，能够开发loader和plugin',
          '熟练使用jQuery、DOM、JSON、Echarts等技术',
          '熟练使用uni-app进行移动端开发',
          '掌握Http协议相关内容',
          '能够使用canvas进行图形绘制，配合requestAnimationFrame实现动画效果',
          '能够手写实现promise、async函数',
          '了解web常见安全问题，如XSS、DDOS、CSRF等',
          '了解常见的web性能优化方式',
          '了解nodejs、react、shell、typescript、java、sql、nginx等其他技术',
          '熟练使用markdown编写技术文档，gitbook构建个人文档网站，通过nodeppt编写培训文档'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped></style>