import SliceableImage from "../sliceable-image.js";

export default class SequenceableImage extends SliceableImage { 
    row = 0;
    column = 0;
    constructor(x, y, image, frameOffsetX, frameOffsetY, frameWidth, frameHeight, column, row, dw, dh) { 
        super(x, y, image, frameOffsetX + frameWidth * column, frameOffsetY + frameHeight * row, frameWidth, frameHeight, dw, dh);
        this.row = row;
        this.column = column;
    }
    
    changeRow(row) { 
        this.row = row;
        this.sy = frameOffsetY + frameHeight * row;
    }

    changeColumn(column) { 
        this.column = column;
        this.sx = frameOffsetX + frameWidth * column;
    }

    /* This is implied when we don't define draw(context)
    draw(context) { 
        super(context);
    }
    */
}