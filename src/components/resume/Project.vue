<template>
  <div class="project">
    <ColumnHeader title="项目经历" icon="we-xiangmu" />
    <div class="info">
      <div v-for="item in data" :key="item.time" class="info-item">
        <div class="info-item-header">
          <span class="time">{{ item.time }}</span>
          <span class="project">{{ item.project }}</span>
          <span class="position">{{ item.position }}</span>
        </div>
        <div class="info-item-body">
          <label class="label">项目描述：</label>
          <div class="desc list-prefix">{{ item.desc }}</div>
          <label class="label">技术架构：</label>
          <div v-for="technical in item.technicals" :key="technical" class="technical-item list-prefix">{{ technical }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Project',
    data() {
      return {
        data: [
          {
            time: '2020.01 - 至今',
            project: 'AMP应用管理平台',
            position: '前端开发工程师',
            desc: '解决不同终端类型应用的注册、接入、分配、授权、上下线、评价、意见反馈、数据采集的全生命周期管理，面向学校师生用户提供一站式线上服务大厅',
            technicals: [
              'vue、vuex、vue-router、view-ui、vuescroll、axios、stylus、postcss、vue-i18n、require.js、webpack'
            ]
          },
          {
            time: '2019.05 - 2019.12',
            project: '绿湾智子',
            position: '前端开发工程师',
            desc: `智子大数据智能应用系统是一个基于多源异构海量数据的平台，
              它集智慧搜索、数据融合、分析挖掘为一体，借助最先进的机器学习技术，
              能对海量、多源、异构且高关联性、复杂性、动态性的大数据进行快速处理、
              整合、可视化及建模。计算和挖掘以人为实体的时间与空间关联，
              形成全文检索、图谱分析、时空分析等各种可视化工具。
              通过人机结合模式，助力实战人员挖掘数据深层价值`,
            technicals: [
              'react、redux、react-redux、react-router、sass、leaflet.js、sigma.js、immutable.js、webpack'
            ]
          },
          {
            time: '2017.05 - 2019.05',
            project: '综合安防管理平台',
            position: '前端开发工程师',
            desc: '综合安防管理平台是给华为园区制定的一套园区智能管理系统，该系统涉及到人员布控、人脸识别、地图轨迹跟踪、视频实时监控、设备一键远程布防撤防等功能',
            technicals: [
              'vue、vuex、vue-router、axios、element-ui、iGis、Echarts、websocket、webpack',
            ]
          },
          {
            time: '2015.04 - 2017.05',
            project: '南瑞集团人资管理系统',
            position: 'web开发工程师',
            desc: '南瑞集团人资管理系统',
            technicals: [
              'javascript、css、html、Echarts、jQuery、bootstrap、java、sql',
            ]
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
      
      .project {
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
  
        &:last-of-type {
          display: block;
          margin-top: 8px;
        }
      }
      
      .desc {
        margin-top: 9px;
        line-height: 22px;
    
        &::before {
          top: 7px;
        }
      }
    }
    
    &:not(:last-child) {
      padding-bottom: 24px;
    }
  }
</style>