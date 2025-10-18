export default class LevelHandler { 
    canvas;
    level;
    time;
    constructor(canvas,levelClass) { 
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.level = new levelClass();
        this.time = Date.now();
    }

    isLevelComplete() { 
        return this.level.isLevelComplete();
    }

    draw() { 
        this.context.reset();
        const objectsToDraw = this.level.getAllObjectsInOrder();
        for (let i = 0; i < objectsToDraw.length; i++) { 
            objectsToDraw[i].draw(this.context);
        }
    }

    update() { 
        this.time = Date.now();
    }
}