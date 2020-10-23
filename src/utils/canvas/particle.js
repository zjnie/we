const Particle = function(ctx, number = 100, speed = 1) {
  this.ctx = ctx
  this.number = number
  this.speed = speed
  this.canvasWidth = this.ctx.canvas.clientWidth
  this.canvasHeight = this.ctx.canvas.clientHeight
  this.points = []
  this.lines = []
  this.mousePoint = {}
  this.requestAnimationFrame = null
  this.init()
}

Particle.prototype.init = function() {
  this.ctx.canvas.onmousemove = event => {
    this.mousePoint.x = event.clientX
    this.mousePoint.y = event.clientY
  }
  this.create()
  this.animate()
}

Particle.prototype.create = function() {
  let i = 0
  while (i < this.number) {
    this.points.push({
      x: Math.ceil(Math.random() * this.canvasWidth),
      y: Math.ceil(Math.random() * this.canvasHeight),
      angle: Math.random() * 2 * Math.PI
    })
    i++
  }
}

Particle.prototype.update = function() {
  this.points = this.points.map(point => {
    point.x = point.x + Math.cos(point.angle) * this.speed
    point.y = point.y + Math.sin(point.angle) * this.speed
    if (point.x < 0 || point.x > this.canvasWidth) {
      point.angle = Math.PI > point.angle ? Math.PI - point.angle : 3 * Math.PI - point.angle
    }
    if (point.y < 0 || point.y > this.canvasHeight) {
      point.angle = 2 * Math.PI - point.angle
    }
    return point
  })
  
  const length = this.points.length
  let x, y, x2, y2, distance
  for (let i = -1; i < length; i++) {
    if (i === -1 && this.mousePoint.x) {
      x = this.mousePoint.x
      y = this.mousePoint.y
    } else if (i === -1) {
      continue
    } else {
      x = this.points[i].x
      y = this.points[i].y
    }
    for (let j = i + 1; j < length; j++) {
      x2 = this.points[j].x
      y2 = this.points[j].y
  
      distance = Math.sqrt(Math.pow(Math.abs(x - x2), 2) + Math.pow(Math.abs(y - y2), 2))
      if (distance < 60) {
        this.lines.push({
          x, y, x2, y2
        })
      }
    }
  }
}

Particle.prototype.render = function() {
  this.points.forEach(point => {
    this.ctx.beginPath()
    this.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'rgba(0,0,0,.3)'
    this.ctx.fill()
    this.ctx.stroke()
  })
  
  this.lines.forEach(line => {
    this.ctx.moveTo(line.x, line.y)
    this.ctx.lineTo(line.x2, line.y2)
    this.ctx.strokeStyle = 'rgba(0,0,0,.1)'
    this.ctx.lineWidth = 0.05
    this.ctx.stroke()
  })
}

Particle.prototype.animate = function(context) {
  this.clear()
  this.update()
  this.render()
  this.requestAnimationFrame = window.requestAnimationFrame(() => {
    this.animate()
  })
}

Particle.prototype.stopAnimate = function() {
  window.cancelAnimationFrame(this.requestAnimationFrame)
}

Particle.prototype.clear = function() {
  this.lines = []
  this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
}

Particle.prototype.remove = function() {
  this.clear()
  this.stopAnimate()
}

export default Particle