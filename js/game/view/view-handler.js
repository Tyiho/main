export default class ViewHandler { 
    constructor(canvas) { 
        this.canvas = canvas;
        this.context = canvas.getContext("2d")
    }

    draw(drawableObject) { 
        drawableObject.draw(this.context)
    }
}