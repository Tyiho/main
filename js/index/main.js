import Carousel from "../classes/carousel.js";

new Carousel(document.getElementById("carousel"), {
    PreserveAspectRatio: true,
    AutoCycle: true,
    AutoCycleDirection: "right",
    AutoCycleTime: 10,
});