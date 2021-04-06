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
          '精通Web(HTML/CSS/Javascript/H5/CSS3/ES6)、DOM、JQuery、JSON等前端技术',
          '精通Vue框架',
          '精通正则表达式',
          '掌握Webpack打包配置',
          '掌握移动端开发',
          '掌握Http协议',
          '了解基于Vue的服务器渲染',
          '了解web常见安全问题，如XSS、DDOS、CSRF等'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped></style>