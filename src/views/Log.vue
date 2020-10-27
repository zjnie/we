<template>
  <div class="log">
    <div class="header">
      <label class="label">搜索：</label>
      <input class="input" placeholder="请输入搜索的内容"/>
      <button class="btn btn-search">搜索</button>
      <button class="btn btn-download" @click="handleDownload">下载</button>
      <button class="btn btn-clear" @click="handleClearAll">清空所有日志</button>
    </div>
    <div class="body">
      <div class="table-header-wrapper">
        <table class="table-header">
          <colgroup>
            <col width="100"/>
            <col width="100"/>
            <col width="200"/>
            <col width="100"/>
          </colgroup>
          <tr class="row">
            <td class="column">
              <div class="cell">时间</div>
            </td>
            <td class="column">
              <div class="cell">类型</div>
            </td>
            <td class="column">
              <div class="cell">内容</div>
            </td>
            <td class="column">
              <div class="cell">位置</div>
            </td>
          </tr>
        </table>
      </div>
      <div class="table-body-wrapper">
        <vue-scroll>
          <table class="table-body">
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="200"/>
              <col width="100"/>
            </colgroup>
            <tr v-for="item in filterData" :key="item.time" class="row">
              <td class="column">
                <div class="cell">{{ item.time | timeFilter }}</div>
              </td>
              <td class="column">
                <div class="cell">{{ item.type }}</div>
              </td>
              <td class="column">
                <div class="cell">{{ item.content }}</div>
              </td>
              <td class="column">
                <div class="cell">{{ item.url }}</div>
              </td>
            </tr>
          </table>
          <div v-if="filterData.length === 0" class="empty">暂无数据</div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Log',
    inject: ['monitor'],
    data() {
      return {
        data: this.monitor.get()
      }
    },
    computed: {
      filterData() {
        return this.data
      }
    },
    watch: {
      data() {
        this.setScrollHeight()
      }
    },
    methods: {
      setScrollHeight() {
        this.$nextTick(() => {
          const table_body_wrapper = this.$el.querySelector('.table-body-wrapper')
          const table_body = this.$el.querySelector('.table-body')
          table_body_wrapper.style.height = table_body.scrollHeight + 'px'
        })
      },
      handleClearAll() {
        this.monitor.clear()
        this.data = []
      },
      handleDownload() {
        const text = JSON.stringify(this.filterData)
        const element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
        element.setAttribute('download', 'log.txt')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.removeChild(element)
      }
    },
    filters: {
      timeFilter(time) {
        const date = new Date(time)
        return date.toLocaleDateString().replace(/\//g, '-') + '  ' + date.toTimeString().replace(/\s.+$/, '')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .log {
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    
    .header {
      display: flex;
      align-items: center;
      height: 70px;
      padding-top: 10px;
      
      .input {
        width: 300px;
        height: 32px;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid $border-color;
        outline: none;
      }
      
      .btn {
        height: 32px;
        padding: 0 20px;
        margin-left: 20px;
        background-color: $primary-color;
        color: #fff;
      }
    }
    
    .body {
      height: calc(100% - 70px);
      padding-bottom: 30px;
  
      .table-header-wrapper {
        height: 48px;
        border: 1px solid $border-color;
        border-radius: 4px 4px 0 0;
        background-color: #f5f5f5;
  
        .table-header {
          width: 100%;
          height: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          font-size: 14px;
    
          .row {
            .column {
              border-right: 1px solid $border-color;
              
              &:last-child {
                border-right: none;
              }
        
              .cell {
                padding: 10px;
              }
            }
          }
        }
      }
  
      .table-body-wrapper {
        max-height: calc(100% - 48px);
        min-height: 40px;
        overflow: hidden;
        border: 1px solid $border-color;
        border-top: none;
        border-radius: 0 0 4px 4px;
        box-sizing: content-box;
  
        .table-body {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
    
          .row {
            height: 48px;
      
            .column {
              border-right: 1px solid $border-color;
              border-bottom: 1px solid $border-color;
              
              &:last-child {
                border-right: none;
              }
        
              .cell {
                padding: 10px;
                word-break: break-word;
              }
            }
          }
    
          .row:last-of-type {
            .column {
              border-bottom: none;
            }
          }
        }
        
        .empty {
          padding: 10px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
</style>