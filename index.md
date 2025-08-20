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
        <rect id="carouselBackground" stroke="black" width="100" height="34" x="0" y="11" />
        <g id="carouselSlides">
            <a href="{{site.baseurl}}/"><image width="10" height="10" href="{{site.baseurl}}/images/website-icon.png"/></a>
            <image width="10" height="10" href="https://www.differencebetween.net/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg"/>
            <image width="10" height="10" href="https://96274587-5419-457f-b780-87ae1b389972.mdnplay.dev/en-US/docs/Web/SVG/Reference/Element/image/mdn_logo_only_color.png"/>
        </g>
        <g id="carouselControls">
            <text textLength="5" text x="10" y="31" id="carouselControlLeft" class="carouselControl" direction="left"><</text>
            <text textLength="5" text x="80" y="31" id="carouselControlRight" class="carouselControl" direction="right">></text>
        </g>
    </g>
    <!-- sides -->
    <polygon  fill="#ffe600ff" points="0,0 3,0 6,100 0,100" />
    <polygon  fill="#424242ff" points="0,42 100,45 100,60 0,70" />
    <polygon  fill="#ffe600ff" points="92,0 100,0 100,100 95,100" />
    <!-- title -->
    <polygon  fill="#3d3d3dff" points="0,0 100,0 100,11 0,17" />
    <text stroke="black" stroke-width=".15" textLength="80" text x="10" y="10" class="title">Trystan's Portal</text>
</svg>

<script type="module" src="{{site.baseurl}}/js/index/main.js"></script>