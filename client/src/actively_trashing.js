class ActivelyTrashing extends Drawable{
  constructor(x, y, context){
    super()
    this.x   = x
    this.y   = y
    this._ctx = context
  }

  draw(){
    this._ctx.beginPath();
    this._ctx.arc(this.x, this.y, 15, 0, 2 * Math.PI, false);
    this._ctx.fillStyle = "#960000a6"
    this._ctx.fill()
    this._ctx.lineWidth = 2
    this._ctx.strokeStyle = "red"
    this._ctx.stroke()
  }

  set_pos(x, y){
    this.x += x
    this.y += y
  }
}