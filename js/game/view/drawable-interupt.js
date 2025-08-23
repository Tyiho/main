export default class DrawableInterupt { 
    options = {};
    constructor(options) { 
        this.options = options;
    }
    draw(context) {
        Object.keys(this.options).forEach(key => { 
            context[key] = this.options[key];
        })
    }
}