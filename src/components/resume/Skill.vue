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
          '精通Vue框架以及基于Vue的第三方库，包括vuex、vue-router、view-ui、element-ui',
          '精通正则表达式',
          '掌握Webpack打包工具',
          '掌握jQuery、DOM、JSON、Echarts等技术',
          '掌握H5以及uni-app进行移动端开发',
          '掌握Http协议相关内容',
          '掌握基于Vue的服务器渲染',
          '掌握web常见安全问题，如XSS、DDOS、CSRF等',
          '了解nodejs、shell、typescript、java、sql等其他技术'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped></style>