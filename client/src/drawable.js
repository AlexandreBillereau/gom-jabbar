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
}