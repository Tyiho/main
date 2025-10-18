import GameController from "./game-controller.js"

const canvas = document.getElementById("canvas")

GameController.instantiate(canvas);
GameController.update();