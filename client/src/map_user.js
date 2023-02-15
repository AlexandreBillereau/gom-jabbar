const LENGTH_CROSS = 10


class MapUser extends Drawable{

  
  constructor(context){
    super()
    this.x, this.y
    this._ctx = context
  }
  
  draw(){

    let center_axe_X = this._ctx.canvas.clientWidth/2
    let center_axe_Y = this._ctx.canvas.clientHeight/2

    this._ctx.beginPath()
    this._ctx.moveTo(center_axe_X, center_axe_Y - LENGTH_CROSS)
    this._ctx.lineTo(center_axe_X, center_axe_Y + LENGTH_CROSS)
    this._ctx.moveTo(center_axe_X - LENGTH_CROSS, center_axe_Y)
    this._ctx.lineTo(center_axe_X + LENGTH_CROSS, center_axe_Y)
    this._ctx.strokeStyle = "yellow"
    this._ctx.lineWidth = 1.5
    this._ctx.stroke()
  }

  set_position(x,y){
    //never change position
  }
}