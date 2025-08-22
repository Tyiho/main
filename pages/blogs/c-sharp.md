---
permalink: /c-sharp
layout: base
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 300">
    <style>
        .scrollAnimation {
            animation-name: translateAnimation;
            animation-duration: 1ms; /* Firefox requires this to apply the animation */
            animation-timeline: scroll(block nearest);
        }
        @keyframes translateAnimation {
            0% {
                transform: translate(-100px,-5px);
            }
            34% {
                transform: translate(-100px,-5px);
            }
            38% {
                transform: translate(0px,0px);
            }
        }
    </style>
    <defs>
        <linearGradient id="CSharpBackgroundGradient" gradientTransform="rotate(80)">
            <stop offset="0%" stop-color="#e959daff" />
            <stop offset="50%" stop-color="#9c168fff" />
            <stop offset="100%" stop-color="#c129dcff" />
        </linearGradient>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#CSharpBackgroundGradient)" />
    <polygon  fill="#8900ceff" points="0,115 100,115 100,175 0,180" class="scrollAnimation"/>
    <polygon  fill="#410052ff" points="0,100 100,105 100,120 0,115" class="scrollAnimation"/>
    <polygon  fill="#59005fff" points="0,0 3,0 6,300 0,300" />
    <polygon  fill="#59005fff" points="92,0 100,0 100,300 95,300" />
</svg>