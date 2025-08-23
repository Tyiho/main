export default class DrawableObject { 
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    constructor(x, y, width, height) { 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}