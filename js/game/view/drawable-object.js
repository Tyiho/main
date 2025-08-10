export default class DrawableObject { 
    constructor(image) { 
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw(context) {
        context.drawImage(this.image,0,0)
    }
}