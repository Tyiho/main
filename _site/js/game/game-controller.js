import LevelHandler from "./view/level-handler.js";

import Level1 from "./view/levels/level-1.js";


export default class GameController{ 
    static levels = [Level1];
    static currentLevelIndex = 0;
    static canvas;
    static levelHandler;

    static instantiate(canvas) { 
        GameController.canvas = canvas;
        GameController.levelHandler = new LevelHandler(canvas, GameController.levels[GameController.currentLevelIndex]);
    }

    static update() { 
        if (GameController.levelHandler.isLevelComplete()) { 
            GameController.currentLevelIndex = (GameController.currentLevelIndex + 1) % GameController.levels.length;
            GameController.instantiate(GameController.canvas);
        }
        GameController.levelHandler.update();
        GameController.levelHandler.draw();
    }
}