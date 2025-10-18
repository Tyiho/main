import Level from "../level.js";
import DrawableObject from "../drawable-object.js";
import DrawableInterupt from "../drawable-interupt.js";
import DrawableBezierCurve from "../subclasses/drawable-bezier-curve.js";

export default class Level1 extends Level{ 
    constructor() { 
        super("Level 1", "The Object");
        this.levelObjects.backgroundObjects = [
            new DrawableInterupt({ fillStyle: "blue" }),
            new DrawableObject(250, 250, 500, 500),
            new DrawableInterupt({ fillStyle: "red" }),
            new DrawableObject(300, 300, 400, 400),
            new DrawableInterupt({ strokeStyle: "purple" }),
            new DrawableBezierCurve(500, 100, 800, 350, 200, 700, 500, 900),
        ]
    }
}