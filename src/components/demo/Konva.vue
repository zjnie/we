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
    mounted() {
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
		    	x: -50,
          y: -50
        },
		    rotation: 90,
		    width: 100,
		    height: 50,
		    fill: 'green',
		    stroke: 'black',
		    strokeWidth: 4,
		    draggable: true
	    });
	    layer.add(rect);
	    stage.add(layer)
	    const rect1 = new Konva.Rect({
		    x: 120,
		    y: 120,
		    offset: {
			    x: -50,
			    y: -50
		    },
		    width: 100,
		    height: 50,
		    fill: 'green',
		    stroke: 'black',
		    strokeWidth: 4,
		    draggable: true
	    });
	    layer.add(rect1);
	    const rect3 = new Konva.Rect({
		    x: 120,
		    y: 120,
		    width: 100,
		    height: 50,
		    fill: 'green',
		    stroke: 'black',
		    strokeWidth: 4,
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