const _svgNS = 'http://www.w3.org/2000/svg';

/*
* Carousel Class built for an svg
*/
export default class Carousel { 
    static count = 0;
    constructor(svgGroup, options) { 
        const defaultOptions = {
                PreserveAspectRatio: true,
                AnimationTime: .5,
                AutoCycle: false,
                AutoCycleDirection: "right",
                AutoCycleTime: 5,
            };
        if (options == null) { 
            options = defaultOptions;
        }
        Object.keys(defaultOptions).forEach((key) => {
            if (options[key] == null) { 
                options[key] = defaultOptions[key];
            }
        })
        this.svgGroup = svgGroup;
        this.options = options;
        this.background = svgGroup.children.namedItem("carouselBackground");
        this.controls = svgGroup.children.namedItem("carouselControls").children;
        this.slides = svgGroup.children.namedItem("carouselSlides").children;  //slides are expected to be images
        console.log(this.slides);
        //create a clip path to prevent image overflow
        const clipPath = document.createElementNS(_svgNS, "clipPath");
        clipPath.setAttributeNS(null,"id", "carouselClipPath" + String(Carousel.count));
        Carousel.count++;
        this.clipPath = clipPath;
        const rect = document.createElementNS(_svgNS,"rect");
        rect.setAttributeNS(null, "x", this.background.getAttributeNS(null, "x"));
        rect.setAttributeNS(null, "y", this.background.getAttributeNS(null, "y"));
        rect.setAttributeNS(null, "height", this.background.getAttributeNS(null, "height"));
        rect.setAttributeNS(null, "width", this.background.getAttributeNS(null, "width"));
        clipPath.appendChild(rect);
        svgGroup.append(clipPath);

        for (let i = 0; i < this.slides.length; i++) { 
            let item = this.slides.item(i);
            if (item.tagName != "image" && item.tagName != "a") {
                item.remove();
                i--; //since this.slides is a collection that automatically updates when an item is removed
                continue;
            }
            if (item.tagName == "a") { 
                const item2 = item.children.item(0);
                if (item2.tagName != "image" || item.children.length > 1) { 
                    item.remove();
                    i--; //since this.slides is a collection that automatically updates when an item is removed
                    continue;
                }
                item = item2;
            }
            //add clip path to stop image overflow
            item.setAttributeNS(null, "clip-path", "url(#" + clipPath.getAttribute("id") + ")");
            if (options["PreserveAspectRatio"] == false) {
                item.setAttributeNS(null,"preserveAspectRatio","none")
            }
            item.setAttributeNS(null, "width", this.background.getAttributeNS(null, "width"));
            item.setAttributeNS(null, "height", this.background.getAttributeNS(null, "height"));
            item.setAttributeNS(null,"x",this.background.getAttributeNS(null, "x"));
            item.setAttributeNS(null, "y",this.background.getAttributeNS(null, "y"));
        }
        this.activeSlide = this.slides.item(0);
        if (this.activeSlide.tagName == "a") { 
            this.activeSlide = this.activeSlide.children.item(0);
        }
        this.activeSlideIndex = 0;
        for (let i = 0; i < this.slides.length; i++) { 
            let item = this.slides.item(i);
            if (item.tagName == "a") { 
                item = item.children.item(0);
            }
            if (item != this.activeSlide) { 
                item.setAttributeNS(null, "x", -10000);
            }
            
            item.setAttribute("start", Number(item.getAttributeNS(null, "x")));
            item.setAttribute("destination", Number(item.getAttributeNS(null, "x")));
            item.setAttribute("startTime", Date.now());
            item.setAttribute("destinationTime", Date.now());
        }
        for (let i = 0; i < this.controls.length; i++) { 
            let control = this.controls.item(i);
            if (control.hasAttribute("direction") == false) { 
                continue;
            }
            if (control.getAttribute("direction") == "left") { 
                control.addEventListener("click", function () { 
                    this.options.AutoCycle = false;
                    this.cycleDown();
                }.bind(this))
            }
            if (control.getAttribute("direction") == "right") {
                control.addEventListener("click", function() { 
                    this.options.AutoCycle = false;
                    this.cycleUp();
                }.bind(this))
            }
        }

        function cycle() { 
            if (this.options.AutoCycle == true) { 
                if (this.options.AutoCycleDirection == "left") {
                    this.cycleDown();
                } else { 
                    this.cycleUp();
                }
            }
            setTimeout(function () { cycle.bind(this)() }.bind(this),1000 * options.AutoCycleTime)
        }
        setTimeout(function () { cycle.bind(this)() }.bind(this),1000 * options.AutoCycleTime)
    }

    runAnimation(element) { 
        //not yet at destination
        if (Date.now() < element.getAttribute("destinationTime")) {
            let des = element.getAttribute("destination");
            let sta = element.getAttribute("start");
            let staTime = element.getAttribute("startTime");
            let desTime = element.getAttribute("destinationTime");
            let deltaTime = desTime - staTime;
            let curTime = Date.now();
            let pos = (desTime - curTime) / deltaTime * sta + des * (curTime - staTime) / deltaTime;
            element.setAttributeNS(null, "x", pos);
            requestAnimationFrame(function () {this.runAnimation(element)}.bind(this));
        }
        else { // at destination
            element.setAttributeNS(null, "x", element.getAttribute("destination"));
        }
    }

    updateSlides(direction) { 
        let newActiveSlide = this.slides.item(this.activeSlideIndex);
        if (newActiveSlide.tagName == "a") { 
            newActiveSlide = newActiveSlide.children.item(0)
        }
        if (newActiveSlide == this.activeSlide) { 
            return;
        }
        let currentSlide = this.activeSlide;
        if (currentSlide.tagName == "a") { 
            currentSlide = currentSlide.children.item(0)
        }
        this.activeSlide = newActiveSlide;
        if (direction == false) { //up (right)
            //move slides here
            const time = Date.now();
            currentSlide.setAttribute("destination", Number(this.background.getAttributeNS(null, "x")) + Number(this.background.getAttributeNS(null, "width")));
            currentSlide.setAttribute("start", Number(currentSlide.getAttributeNS(null, "x")));
            currentSlide.setAttribute("startTime", time );
            currentSlide.setAttribute("destinationTime", time + 1000 * this.options.AnimationTime);

            newActiveSlide.setAttribute("destination", 0);
            newActiveSlide.setAttribute("start", Number(this.background.getAttributeNS(null, "x")) - Number(this.background.getAttributeNS(null, "width")));
            newActiveSlide.setAttribute("startTime", time );
            newActiveSlide.setAttribute("destinationTime", time + 1000 * this.options.AnimationTime);
            
            requestAnimationFrame(function () { this.runAnimation(currentSlide); }.bind(this));
            requestAnimationFrame(function () { this.runAnimation(newActiveSlide); }.bind(this));
        }
        else { //down (left)
            //move slides here
            const time = Date.now();
            currentSlide.setAttribute("destination", Number(this.background.getAttributeNS(null, "x")) - Number(this.background.getAttributeNS(null, "width")));
            currentSlide.setAttribute("start", Number(currentSlide.getAttributeNS(null, "x")));
            currentSlide.setAttribute("startTime", time );
            currentSlide.setAttribute("destinationTime", time + 1000 * this.options.AnimationTime);

            newActiveSlide.setAttribute("destination", 0);
            newActiveSlide.setAttribute("start", Number(this.background.getAttributeNS(null, "x")) + Number(this.background.getAttributeNS(null, "width")));
            newActiveSlide.setAttribute("startTime", time );
            newActiveSlide.setAttribute("destinationTime", time + 1000 * this.options.AnimationTime);
            
            requestAnimationFrame(function () { this.runAnimation(currentSlide); }.bind(this));
            requestAnimationFrame(function () { this.runAnimation(newActiveSlide); }.bind(this));
        }
    }

    cycleUp() { 
        this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
        this.updateSlides(true)
    }

    cycleDown() { 
        this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
        this.updateSlides(false)
    }
}