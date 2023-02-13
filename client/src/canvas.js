class Canvas{

  constructor(canvas, width, height){
    canvas.width     = width
    canvas.height    = height
    this._ctx        = canvas.getContext("2d");
    this._background = new Background(...BACKGROUND_POS, this._ctx)
    this.origin      = new Origin(...ORIGIN_POS)
    this.circle = new ActivelyTrashing(10,10, this._ctx)
    this.init_events(canvas)
  }

  async draw(){
    let background_image = this._background.create(BACKGROUND_IMAGE_PATH)
    await this._background.draw(background_image)
    this.circle.draw()
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

  }

  set_pos(x,y) {//to-do : loop
    this._background.set_pos(x, y)
  }




}