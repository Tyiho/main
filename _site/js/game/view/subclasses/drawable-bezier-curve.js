import DrawableObject from "../drawable-object.js";

export default class DrawableBezierCurve extends DrawableObject {
    p1x = 0;
    p1y = 0;
    p2x = 0;
    p2y = 0;
    ex = 0;
    ey = 0;
    constructor(x, y, p1x, p1y, p2x, p2y, ex, ey) { 
        super(x, y, Math.abs(ex - x), Math.abs(ey - y));
        this.p1x = p1x;
        this.p1y = p1y;
        this.p2x = p2x;
        this.p2y = p2y;
        this.ex = ex;
        this.ey = ey;
    }

    draw(context) { 
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.bezierCurveTo(this.p1x, this.p1y, this.p2x, this.p2y, this.ex, this.ey);
        context.stroke();
    }
}