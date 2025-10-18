---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
title: Trystan's Portal
dateAvailable: 2025
dateModified: 2025-10-17
theme: bg-dark
---
<link href="{{site.baseurl}}/styles/svg.css" rel="stylesheet" type="text/css" />

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200">
    <style>
        .index-title:hover {
            fill: url("#BackgroundGradient");
            font: bold 11px serif;
            cursor: grabbing;
        }
    </style>
    <defs>
        <radialGradient id="BackgroundGradient">
            <stop offset="0%" stop-color="#f0f598" />
            <stop offset="20%" stop-color="#f5ff32ff" />
            <stop offset="40%" stop-color="#f0f598" />
            <stop offset="60%" stop-color="#f5ff32ff" />
            <stop offset="80%" stop-color="#f0f598" />
            <stop offset="100%" stop-color="#f5ff32ff" />
        </radialGradient>
        <linearGradient id="HeaderUnderlineGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="var(--index-header-color-light)" />
            <stop offset="30%" stop-color="var(--index-header-color-light)" />
            <stop offset="100%" stop-color="var(--index-header-color)" />
        </linearGradient>
    </defs>
    <!-- carousel 1 -->
    <g id="carousel">
        <rect id="carouselBackground" fill="white" width="100" height="34" x="0" y="11" />
        <g id="carouselSlides">
            <!--<a href="{{site.baseurl}}/"><image width="10" height="10" href="{{site.baseurl}}/images/website-icon.png"/></a>-->
            <image width="100" height="34" href="{{site.baseurl}}/images/index-page/WelcomeSlide.svg"/>
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
    <!-- left side -->
    <polygon  fill="#ffbf00ff" stroke="#00000030" stroke-width=".25" points="0,0 3,0 6,100 0,100" />
    <!-- section 1 -->
    <path d="M 0 40 C 33 35, 67 50, 100 40 L 100 70, C 67 80 33 80 0 75 Z"  fill="#424242ff" />
    <text textLength="60" text x="10" y="63" class="index-header">About Me</text>
    <text textLength="1" text x="70" y="63" class="index-header">.</text>
    <line x1="11" x2="47" y1="65" y2="65" stroke="var(--index-header-color-light)" stroke-linecap="round" stroke-width="2"/>
    <line x1="50" x2="69" y1="65" y2="65" stroke="var(--index-header-color-light)" stroke-linecap="round" stroke-width="2"/>
    <path d="M 72 65 L 76 65 C 90 65, 90 75, 90 75 C 90 90, 80 90, 50, 85" stroke="url(#HeaderUnderlineGradient)" stroke-linecap="round" stroke-width="2" fill="transparent"/>
    <path d="M 87 72 C 88 73, 89 78, 86.5 81.5" stroke="#ff582aff" fill="transparent" stroke-linecap="round" stroke-width="1" stroke-dasharray="2" />
    <path d="M 85.5 79.5 A 1 1.5 135 0 0 83.3787 78.7929" stroke="#ff8462ff" fill="transparent" stroke-linecap="round" stroke-width=".5"/>
    <path d="M 86.5 79.75 A 1.8 1.2 45 0 0 83 77.5066" stroke="#ff8462ff" fill="transparent" stroke-linecap="round" stroke-width=".5"/>
    <circle cx="83" cy="82.75" r="3" fill="#ff3700ff"/>
    <!-- right side -->
    <polygon  fill="#ffe600ff"  stroke="#00000030" stroke-width=".25" points="92,0 100,0 100,100 95,100" />
    <!-- title -->
    <polygon  fill="#3d3d3dff" points="0,0 100,0 100,11 0,17" />
    <text stroke="black" stroke-width=".15" textLength="80" text x="10" y="10" class="index-title">Trystan's Portal</text>
</svg>

<script type="module" src="{{site.baseurl}}/js/index/main.js"></script>