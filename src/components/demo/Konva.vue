<template>
  <div class="stage"></div>
</template>

<script>
  import Konva from 'konva'
	export default {
		name: 'Konva',
		data() {
			return {}
		},
    async mounted() {
			
	    const stage = new Konva.Stage({
		    container: this.$el,
		    width: 500,
		    height: 500
	    })
      
      const layer = new Konva.Layer()
	
	    const rect = new Konva.Rect({
		    x: 120,
		    y: 120,
        offset: {
		    	x: 0,
          y: 0
        },
		    width: 100,
		    height: 50,
		    fill: 'tan',
		    draggable: true,
        listening: true,
		    strokeEnabled: true,
		    strokeHitEnabled: true
	    });
	    layer.add(rect);
	    stage.add(layer)
	    const rect3 = new Konva.Rect({
		    x: 180,
		    y: 120,
		    width: 100,
		    height: 50,
		    fill: 'rgba(0, 0, 0, 0)',
		    stroke: 'black',
		    draggable: true,
		    strokeWidth: 1,
        dash: [2, 2],
        lineJoin: 20
	    });
	    layer.add(rect3);
	
	    let text = new Konva.Text({
		    x: 10,
		    y: 15,
        width: 30,
		    text: '人员12',
        align: 'center',
		    fontSize: 20,
		    fill: 'green',
        wrap: 'word'
	    })
	    console.log(text.height())
	    layer.add(text)
    }
	}
</script>

<style lang="stylus" scoped>
  .stage {
    height: 500px;
  }
</style>