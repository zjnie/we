<template>
  <div class="education">
    <ColumnHeader title="教育背景" icon="we-jiaoyu" />
    <div class="info">
      <div v-for="item in data" :key="item.time" class="info-item">
        <span class="time">{{ item.time }}</span>
        <span class="school">{{ item.school }}</span>
        <span class="major">{{ item.major }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Education',
    data() {
      return {
        data: [
          { time: '2020.09 - 2014.05', school: '安徽大学安徽大学', major: '计算机科学与计算' },
          { time: '2020.09 - 2014.03', school: '安徽大学安徽', major: '计算机科学与计算' },
          { time: '2020.09 - 2014.07', school: '安徽大学', major: '计算机科学与计算' }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .info {
    .info-item {
      display: flex;
      line-height: 32px;
      font-weight: bold;
      
      .time {
        width: 150px;
        flex-grow: 1;
      }
      
      .school {
        width: 150px;
        flex-grow: 1;
      }
      
      .major {
        width: 150px;
      }
    }
  }
</style>