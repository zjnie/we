<template>
  <div class="base">
    <div class="header" style="text-align: center">
<!--      <span class="name">PERSONAL RESUME</span>-->
<!--      <span class="name">个人简历</span>-->
<!--      <span class="split">&#45;&#45;</span>-->
<!--      <span class="tip">一直在努力，从未停止过</span>-->
    </div>
		<ColumnHeader title="基本信息" icon="we-xinming" />
    <div class="info">
      <div v-for="info in infos" :key="info.value" class="info-item">
        <i :class="['we', info.icon]"></i>
        <label class="label">{{ info.label }}：</label>
        <span class="value">{{ info.value }}</span>
      </div>
    </div>
    <img class="photo" :src="photoSrc" />
  </div>
</template>

<script>
  export default {
    name: 'Base',
    data() {
      return {
        infos: [
          { label: '姓名', value: '聂正杰', icon: 'we-xinming' },
          { label: '性别', value: '男', icon: 'we-xinbie' },
          { label: '电话', value: '18114493356', icon: 'we-dianhua' },
          { label: '学历', value: '本科', icon: 'we-minzu' },
          { label: '籍贯', value: '安徽滁州', icon: 'we-jiguan' },
          { label: '邮箱', value: '347835755@qq.com', icon: 'we-youxiang' },
          { label: '年龄', value: '29', icon: 'we-nianling' },
          { label: '现居', value: '江苏南京', icon: 'we-xianju' },
          { label: '意向', value: '前端开发工程师', icon: 'we-yixiang' }
        ],
        photoSrc: require('@assets/resume/photo.jpg')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .base {
    position: relative;
    padding-right: 200px;
  }
  
  .header {
    color: #0ea391;
    
    .name {
      font-size: 36px;
      font-family: fantasy;
    }
    
    .split {
      margin: 0 10px 0 20px;
    }
    
    .tip {
      font-size: 14px;
    }
  }
  
  .info {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    
    .info-item {
      width: 33%;
      line-height: 32px;
      flex-shrink: 0;
      
      .we {
        color: #0ea391;
        vertical-align: -1px;
      }
      
      .label {
        margin-left: 6px;
      }
    }
  }
  
  .photo {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 100px;
  }
</style>