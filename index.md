---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---
<link href="{{site.baseurl}}/styles/svg.css" rel="stylesheet" type="text/css" />

<svg viewBox="0 0 100 100">
    <defs>
        <radialGradient id="BackgroundGradient">
            <stop offset="0%" stop-color="#f0f598" />
            <stop offset="20%" stop-color="#f5ff32ff" />
            <stop offset="40%" stop-color="#f0f598" />
            <stop offset="60%" stop-color="#f5ff32ff" />
            <stop offset="80%" stop-color="#f0f598" />
            <stop offset="100%" stop-color="#f5ff32ff" />
        </radialGradient>
    </defs>
    <!-- carousel 1 -->
    <g id="carousel">
        <rect id="carouselBackground" stroke="black" width="100" height="28" x="0" y="11" />
        <g id="carouselSlides"/>
        <g id="carouselControls">
            <text textLength="5" text x="10" y="25" id="carouselControlLeft" class="carouselControl"><</text>
            <text textLength="5" text x="80" y="25" id="carouselControlRight" class="carouselControl">></text>
        </g>
    </g>
    <!-- sides -->
    <polygon  fill="#ffe600ff" points="0,0 3,0 6,100 0,100" />
    <polygon  fill="#424242ff" points="0,30 100,40 100,60 0,70" />
    <polygon  fill="#ffe600ff" points="92,0 100,0 100,100 95,100" />
    <!-- title -->
    <polygon  fill="#3d3d3dff" points="0,0 100,0 100,11 0,17" />
    <text stroke="black" stroke-width=".15" textLength="80" text x="10" y="10" class="title">Trystan's Portal</text>
</svg>

