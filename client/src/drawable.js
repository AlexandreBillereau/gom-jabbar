class Drawable{
  constructor(){
    if(this.constructor == Drawable){
        throw "this class is abstract"
    }
  }

  draw(){
    throw "this function need to be overwrite"
  }

  position_form_origin(){
    throw "this function need to be overwrite"
  }

  set_pos(x,y){
    this.x += x
    this.y += y
  }

  get_posX_from_origin(origin){
    return origin.x - this.x
  }

  get_posY_from_origin(origin){
    return origin.y - this.y    
  }

}