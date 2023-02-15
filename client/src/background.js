class Background extends Drawable{

  constructor(x, y, context){
    super()
    this.background_x = x
    this.background_y = y
    this._ctx  = context
    this._not_load = true
  }

  create(src){
    let image = new Image()
    image.src = src
    this.image = image;
  }

  draw(){
    if(this._not_load){
      this._not_load = false  
      return new Promise((resolve) =>{
        this.image.onload = () => resolve(
          this._ctx.drawImage(this.image, this.background_x, this.background_y
        ))
      })
    }
    this._ctx.drawImage(this.image, this.background_x, this.background_y)
    
  }

  update(){
    this._ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this._ctx.drawImage(this.image, this.background_x, this.background_y)
  }

  set_pos(x,y){
    this.background_x += x
    this.background_y += y
  }

}


