const StarSky = function(ctx, number = 100, speed = 10) {
  this.ctx = ctx
  this.number = number
  this.speed = speed
  this.canvasWidth = this.ctx.canvas.clientWidth
  this.canvasHeight = this.ctx.canvas.clientHeight
  this.centerX = this.canvasWidth / 2
  this.centerY = this.canvasHeight / 2
  this.f = 100
  this.points = []
  this.requestAnimationFrame = null
  this.init()
}

StarSky.prototype.init = function() {
  this.ctx.canvas.style.backgroundColor = '#000'
  this.create()
  this.animate()
}

StarSky.prototype.create = function(number = this.number) {
  let x, y, distanceX, distanceY, hypotenuse, i = 0
  while (i < number) {
    x = Math.ceil(Math.random() * this.canvasWidth / 2) + this.canvasWidth / 4
    y = Math.ceil(Math.random() * this.canvasHeight / 2) + this.canvasHeight / 4
    distanceX = x - this.centerX
    distanceY = y - this.centerY
    hypotenuse = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
    
    this.points.push({
      x: x,
      y: y,
      z: Math.ceil(Math.random() * this.f),
      cos: distanceX / hypotenuse,
      sin: distanceY / hypotenuse
    })
    i++
  }
}

StarSky.prototype.update = function() {
  this.points = this.points.filter(point => {
    point.x = point.x + point.cos * this.speed
    point.y = point.y + point.sin * this.speed
    point.z = point.z < 1 ? 1 : point.z - 1
    return point.x > 0 && point.x < this.canvasWidth && point.y > 0 && point.y < this.canvasHeight
  })
  if (this.points.length < this.number) {
    this.create(this.number - this.points.length)
  }
}

StarSky.prototype.render = function() {
  this.points.forEach(point => {
    this.ctx.beginPath()
    this.ctx.arc(point.x, point.y, Math.min(this.f / point.z, 10), 0, 2 * Math.PI)
    this.ctx.fillStyle = '#fff'
    this.ctx.fill()
    this.ctx.strokeStyle = '#fff'
    this.ctx.stroke()
  })
}

StarSky.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
}

StarSky.prototype.animate = function(context) {
  this.clear()
  this.update()
  this.render()
  this.requestAnimationFrame = window.requestAnimationFrame(() => {
    this.animate()
  })
}

StarSky.prototype.stopAnimate = function() {
  window.cancelAnimationFrame(this.requestAnimationFrame)
}

StarSky.prototype.remove = function() {
  this.ctx.canvas.style.backgroundColor = null
  this.clear()
  this.stopAnimate()
}

export default StarSky