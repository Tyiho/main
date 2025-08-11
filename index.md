---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---

<svg viewBox="0 0 100 100">
    <style>
        .title {
            font : bold 10px serif;
            font-family : Times New Roman;
            fill: #ffffffff;
            transition: all 2s;
        }
        .title:hover {
            fill: url("#BackgroundGradient");
            font: bold 11px serif;
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
    </defs>
    <polygon  fill="#272727ff" points="0,0 3,0 6,100 0,100" />
    <polygon  fill="#777777ff" points="0,30 100,40 100,60 0,70" />
    <polygon  fill="#272727ff" points="92,0 100,0 100,100 95,100" />
     <!-- article 1 -->
    <rect stroke="black" width="20" height="11" x="6" y="18" />
    <!-- title -->
    <polygon  fill="#3d3d3dff" points="0,0 100,0 100,11 0,17" />
    <text stroke="black" stroke-width=".15" textLength="80" text x="10" y="10" class="title">Trystan's Portal</text>
</svg>