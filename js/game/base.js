import ViewHandler from "./view/view-handler.js"
import DrawableObject from "./view/drawable-object.js"

const canvas = document.getElementById("canvas")
const myImage = document.getElementById("website-icon")

const viewHandler = new ViewHandler(canvas)
const drawableObject = new DrawableObject(myImage)

viewHandler.draw(drawableObject)