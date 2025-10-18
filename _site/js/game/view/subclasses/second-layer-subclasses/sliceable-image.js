import DrawableImage from "../drawable-image.js";

export default class SliceableImage extends DrawableImage { 
    sx = 0;
    sy = 0;
    sw = 0;
    sh = 0;
    constructor(x, y, image, sx, sy, sw, sh, dw, dh) { 
        super(x, y, image);
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.width = dw;
        this.height = dh;
    }
    draw(context) { 
        context.DrawableImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
    }
}