---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
title: Trystan's Portal
dateAvailable: 2025
dateModified: 2025-10-17
---
<link href="{{site.baseurl}}/styles/svg.css" rel="stylesheet" type="text/css" />

<svg viewBox="0 0 100 200">
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
        <rect id="carouselBackground" fill="white" width="100" height="34" x="0" y="11" />
        <g id="carouselSlides">
            <!--<a href="{{site.baseurl}}/"><image width="10" height="10" href="{{site.baseurl}}/images/website-icon.png"/></a>-->
            <a href="{{site.baseurl}}/c-sharp">
                <image width="100" height="34" href="{{site.baseurl}}/images/index-page/CSharpSlide.svg"/>
            </a>
            <a href="{{site.baseurl}}/java">
                <image width="100" height="34" href="{{site.baseurl}}/images/index-page/JavaSlide.svg"/>
            </a>
        </g>
        <g id="carouselControls">
            <text textLength="5" text x="10" y="31" id="carouselControlLeft" class="carouselControl" direction="left"><</text>
            <text textLength="5" text x="80" y="31" id="carouselControlRight" class="carouselControl" direction="right">></text>
        </g>
    </g>
    <!-- sides -->
    <polygon  fill="#ffe600ff" points="0,0 3,0 6,100 0,100" />
    <polygon  fill="#424242ff" points="0,40 100,45 100,60 0,70" />
    <polygon  fill="#ffe600ff" points="92,0 100,0 100,100 95,100" />
    <!-- title -->
    <polygon  fill="#3d3d3dff" points="0,0 100,0 100,11 0,17" />
    <text stroke="black" stroke-width=".15" textLength="80" text x="10" y="10" class="title">Trystan's Portal</text>
</svg>

<script type="module" src="{{site.baseurl}}/js/index/main.js"></script>