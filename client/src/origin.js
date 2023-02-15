class Origin extends Drawable{
  constructor(){
    super()
    this.x = 0
    this.y = 0

  }

  draw(){

  }

  set_pos(x,y){
    this.x += x
    this.y += y
  }

}