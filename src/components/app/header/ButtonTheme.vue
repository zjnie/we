<template>
  <div class="button-topic">
    <span class="text">切换主题色</span>
    <vColorPicker v-model="value"/>
  </div>
</template>

<script>
  import vColorPicker from 'vcolorpicker'
  
  export default {
    name: 'ButtonTopic',
    components: {
      vColorPicker: vColorPicker.colorPicker
    },
    data() {
      return {
        value: 'RGBA(31,11,179,1)'
      }
    },
    watch: {
      value(newValue, oldValue) {
        newValue = this.colorToRgb(newValue)
        oldValue = this.colorToRgb(oldValue)
        const regExp = new RegExp(oldValue.replace(/(\(|\))/g, '\\$1'), 'ig')
        const styles = document.querySelectorAll('style[shinmark]')
        styles.forEach((item, index) => {
          item.innerHTML = item.innerHTML.replace(regExp, newValue)
        })
      }
    },
    methods: {
      colorToRgb(color) {
        color = color.toLowerCase()
        //十六进制颜色值的正则表达式
        const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
        // 如果是16进制颜色
        if (color && reg.test(color)) {
          if (color.length === 4) {
            let colorNew = '#'
            for (let i = 1; i < 4; i += 1) {
              colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
            }
            color = colorNew
          }
          //处理六位的颜色值
          const sColorChange = []
          for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + color.slice(i, i + 2)))
          }
          return 'RGBA(' + sColorChange.join(',') + ',1)'
        }
        return color
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .button-topic {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding-right: 16px;
    height: 100%;
    cursor: pointer;
    
    .text {
      margin-right: 4px;
    }
  }
</style>