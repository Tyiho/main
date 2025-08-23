import DrawableObject from "../drawable-object.js";

export default class DrawableImage extends DrawableObject { 
    image;
    constructor(x, y, image) { 
        super(x, y, image.width, image.height);
        this.image = image;
    }
    draw(context) { 
        context.drawImage(this.image, this.x, this.y,this.width,this.height);
    }
}