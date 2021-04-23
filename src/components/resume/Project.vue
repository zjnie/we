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
          <div class="portal-desc list-prefix">{{ item.portalDesc }}</div>
          <label v-if="item.workDescs" class="label">工作描述：</label>
          <div class="work-desc">
            <div v-for="desc in item.workDescs" :key="desc" class="desc-item list-prefix">{{ desc }}</div>
          </div>
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
            portalDesc: '解决不同终端类型应用的注册、接入、分配、授权、上下线、评价、意见反馈、数据采集的全生命周期管理，面向学校师生用户提供一站式线上服务大厅',
            workDescs: [
              '主要工作负责H5移动端和PC产品的开发与维护工作',
              '客户要求产品首页内容自定义，我建议通过异步加载首页内容的方式去实现，首先给现场开发人员搭建开发框架，制定开发规则，' +
              '开发完的包上传到约定的目录下，首页通过ajax请求获取内容进行动态加载到首页，最终在该方案下成功解决了该问题，' +
              '通过解决这个问题使我更深入的掌握webpack的打包原理及相关配置library和externals的作用',
              'H5移动端的页面要求一级页面跳到二级页面，页面返回时不刷新页面，我主要通过vue-router的beforeRouteLeave函数设置keep-alive组件' +
              '的exclude和include值，动态的设置组件是否缓存，最后成功解决这个问题，从这个问题中让我能够灵活的使用keep-alive组件和组件内的路由守卫函数',
              '客户要求上线项目的主题色可配置，最初方案是新增主题样式文件，把涉及到主题色的元素用主题class代替，但实际上项目太大，增加class的工作量较大，' +
              '我认为可以在打包中不替换css预处理器中主题色，而是在webpack中新增style-loader通过内部样式表方式加载css，同时在组件style标签上加上shin标记，' +
              '在组件的created生命周期中找到带有shin属性的style元素替换主题色为设置的主题色，并删除style的shin属性，避免重复获取，通过解决这个问题，加深了我对css相关loader的理解和运用，' +
              '并且可以通过这种方式实现动态换肤的功能，缺点是css不能单独打包成文件，只能通过内部样式表的方式加载',
              '本地开发需要登录时，需要到第三方授权网站登录后，复制cookie到本地开发服务器，重启服务器完成登录授权，我认为该操作比较繁琐，想到父子域可以共享cookie的方式，' +
              '我就主动尝试是否可以通过父子域的方式解决开发环境登录问题，最后发现可以在本地hosts文件中配置开发地址映射，把开发地址配置成测试环境的兄弟域，这样每次在测试环境登录后，' +
              '提升cookie作用域为父域，则开发环境可以共享cookie完成授权，提高开发效率，从这个问题上，我学习加深了对顶级域名、父域、子域的理解和cookie的HttpOnly属性等',
              '本地开发时发现构建速度较慢并且打包文件体积较大，初始webpack配置下的每个组件都会加载通用css文件，public下的文件也全部打包，生成源文件映射，' +
              'UI组件也没有按需加载，发现这些问题后，主要优化webpack的配置，设置每个组件只加载预处理器的变量文件，忽略多余的静态资源，生产环境下不生成源文件，UI组件按需加载，' +
              '配置babel-loader的匹配范围，配置加载第三方模块的后缀名、路径及入口文件，搜小查找范围，通过处理这些问题，我对webpack的运用更加熟练化'
            ],
            technicals: [
              'vue、vuex、vue-router、view-ui、vuescroll、axios、stylus、postcss、vue-i18n、webpack'
            ]
          },
          {
            time: '2019.05 - 2019.12',
            project: '绿湾智子',
            position: '前端开发工程师',
            portalDesc: `智子大数据智能应用系统是一个基于多源异构海量数据的平台，
              它集智慧搜索、数据融合、分析挖掘为一体，借助最先进的机器学习技术，
              能对海量、多源、异构且高关联性、复杂性、动态性的大数据进行快速处理、
              整合、可视化及建模。计算和挖掘以人为实体的时间与空间关联，
              形成全文检索、图谱分析、时空分析等各种可视化工具。
              通过人机结合模式，助力实战人员挖掘数据深层价值`,
            workDescs: [
              '负责H5移动端项目搭建、功能开发和维护',
              '负责PC产品的需求迭代开发和维护',
              '负责处理现场紧急问题',
              '负责移动端项目需求调研、开发环境搭建、功能研发及环境部署等工作',
              '开发Vue自定义指令，包括v-loading，v-infiniteScroll等'
            ],
            technicals: [
              'react、redux、react-redux、react-router、sass、leaflet.js、sigma.js、immutable.js、webpack'
            ]
          },
          {
            time: '2017.05 - 2019.05',
            project: '综合安防管理平台',
            position: '前端开发工程师',
            portalDesc: '综合安防管理平台是给华为园区制定的一套园区智能管理系统，该系统涉及到人员布控、人脸识别、地图轨迹跟踪、视频实时监控、设备一键远程布防撤防等功能',
            workDescs: [
              '负责独立开发项目中的新模块',
              '配合前端架构师解决前端性能优化和内存泄漏问题',
              '负责与新员工讲解开发流程，并帮助他们解决问题',
              '参与旧模块页面的代码重构工作'
            ],
            technicals: [
              'vue、vuex、vue-router、axios、element-ui、iGis、Echarts、websocket、webpack',
            ]
          },
          {
            time: '2015.04 - 2017.05',
            project: '南瑞集团人资管理系统',
            position: 'web开发工程师',
            portalDesc: '南瑞集团人资管理系统，包含多个子项目，都属于前后端不分离的web项目，项目较多，所以没有详细列举',
            workDescs: [
              '参与前端，后端的代码编写',
              '实现Excel、Word文件上传、下载、导入、导出等功能',
              '负责使用echarts实现大屏可视化数据展示',
              '推进整体项目开发的进度，保证阶段性项目交付',
              '解决IE8下的部分兼容问题'
            ],
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