<template>
  <div class="">
    <ColumnHeader title="工作经历" icon="we-gongzuojinli" />
    <div class="info">
      <div v-for="item in data" :key="item.time" class="info-item">
        <div class="info-item-header">
          <span class="time">{{ item.time }}</span>
          <span class="company">{{ item.company }}</span>
          <span class="position">{{ item.position }}</span>
        </div>
        <div class="info-item-body">
          <label class="label">岗位职责：</label>
          <div v-for="desc in item.dutys" :key="desc" class="desc-item list-prefix">{{ desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Job',
    data() {
      return {
        data: [
          {
            time: '2020.01 - 至今',
            company: '江苏金智教育信息股份有限公司',
            position: '前端开发工程师',
            dutys: [
              '负责移动端页面、PC端产品页面和管理端页面的开发与维护',
              '与产品、设计沟通，并能够针对不同业务需求给出前端解决方案'
            ]
          },
          {
            time: '2019.05 - 2019.12',
            company: '杭州绿湾网络科技有限公司',
            position: '前端开发工程师',
            dutys: [
              '负责新项目的开发相关工作，编写代码实现项目的界面和功能',
              '负责产品的维护及需求迭代'
            ]
          },
          {
            time: '2015.04 - 2019.05',
            company: '南京软通动力信息技术服务有限公司',
            position: 'web开发工程师',
            dutys: ['负责项目的开发相关工作，编写代码实现项目的界面和功能']
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .info-item {
    .info-item-header {
      display: flex;
      align-items: center;
      height: 32px;
      font-weight: bold;
  
      .time {
        width: 150px;
        flex-grow: 1;
      }
  
      .company {
        width: 150px;
        flex-grow: 1;
      }
  
      .position {
        width: 150px;
      }
    }
    
    .info-item-body {
      .label {
        font-weight: bold;
        line-height: 32px;
      }
    }
    
    &:not(:last-child) {
      padding-bottom: 24px;
    }
  }
</style>