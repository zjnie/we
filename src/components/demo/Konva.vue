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
		    stroke: 'black',
		    strokeWidth: -10,
		    draggable: true,
        listening: true,
		    strokeEnabled: true,
		    strokeHitEnabled: true
	    });
	    layer.add(rect);
	    stage.add(layer)
	    const rect3 = new Konva.Rect({
		    x: 223,
		    y: 120,
		    width: 100,
		    height: 50,
		    fill: 'green',
		    stroke: 'black',
		    strokeWidth: 0,
		    draggable: true
	    });
	    layer.add(rect3);
    }
	}
</script>

<style lang="stylus" scoped>
  .stage {
    height: 500px;
  }
</style>