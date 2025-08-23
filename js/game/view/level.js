export default class Level { 
    name = "[name here]";
    description = "[description here]";
    levelObjects = {
        backgroundObjects: [],//in the back
        middlegroundObjects: [],//behind the character layer
        characterLayerObjects: [],
        foregroundObjects: [],//in front of the character layer
    };

    constructor(name,description) { 
        this.name = name;
        this.description = description;
        this.levelComplete = false;
    }

    isLevelComplete() { 
        return this.levelComplete;
    }
    getBackgroundObjects() { 
        return this.levelObjects.backgroundObjects;
    }
    getMiddlegroundObjects() { 
        return this.levelObjects.middlegroundObjects;
    }
    getForegroundObjects() { 
        return this.levelObjects.middlegroundObjects;
    }
    getCharacterLayerObjects() { 
        return this.levelObjects.characterLayerObjects;
    }
    getAllObjectsInOrder() { 
        return this.getBackgroundObjects().concat(this.getMiddlegroundObjects(),this.getCharacterLayerObjects(),this.getForegroundObjects());
    }
    addDrawableObject(drawableObject) { 
        this.levelObjects.characterLayerObjects.push(drawableObject);
    }
}