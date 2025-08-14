export default class Carousel { 
    constructor(svgGroup,options) { 
        this.svgGroup = svgGroup;
        this.background = svgGroup.children.namedItem("carouselBackground");
        this.slideWidth = this.background.width;
        this.controls = svgGroup.children.namedItem("carouselControls");
        this.slides = svgGroup.children.namedItem("carouselSlides");
        this.activeSlide = this.slides.item(0);
        this.activeSlideIndex = 0;
    }

    updateSlides(newActiveSlide, direction) { 
        if (newActiveSlide == this.activeSlide) { 
            return;
        }
        if (direction == true) { //up (right)
            //move slides here
        }
        else { //down (left)
            //move slides here
        }
    }

    cycleUp() { 
        this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length();
    }

    cycleDown() { 
        this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length();
    }
}