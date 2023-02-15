class Canvas{

  constructor(canvas, width, height){
    canvas.width     = width
    canvas.height    = height
    this.drawable    = new Array()
    this.drawable.push(new Origin(...ORIGIN_POS))
    this._ctx        = canvas.getContext("2d");
    this._background = new Background(...BACKGROUND_POS, this._ctx)
    this.init_events(canvas)
    this.init_drawable()
    
  }

  async draw(){
    await this._background.draw()
    this.drawable.forEach(obj => {
      obj.draw()
    });
  }

  init_drawable(){
    this._background.create(BACKGROUND_IMAGE_PATH)
    this.drawable.push(new MapUser(this._ctx))
    this.draw()
  }

  init_events(canvas){

    var is_enter = false;
    var is_click = false;

    canvas.onmouseenter = () => {
      is_enter = true
    }

    canvas.onmouseleave = () => {
      is_enter = false
      is_click = false
    }

    canvas.onmousedown = () => {
      is_click = true
    }

    canvas.onmouseup = () => {
      is_click = false
    }

    canvas.onmousemove = (_with) => {
      if(is_enter && is_click){
         this._ctx.clearRect(0, 0, WIDTH, HEIGHT); // to do move

        this.set_pos(_with.movementX, _with.movementY)
        this.draw()
      }

    }

    //test function
    canvas.onclick = (_with) => {
      this.drawable.push(new ActivelyTrashing(_with.offsetX, _with.offsetY, this._ctx))
      this.draw()
    }

  }

  set_pos(x,y) {//to-do : loop
    this._background.set_pos(x, y)
    this.drawable.forEach(obj => {
      obj.set_pos(x,y)
    });
  }






}