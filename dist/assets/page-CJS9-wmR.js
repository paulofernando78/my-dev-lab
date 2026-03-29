import{s as t}from"./index-WhkxeUrP.js";import"./PageHeader-Bcrc5fxd.js";import{r as o,s as i}from"./renderSection-DkGTr7g2.js";import"./CardIcon-DIE4COqa.js";import"./SubSection-Dx3IDIH1.js";import"./Topic-7L1nWIDb.js";import"./Image-BzCDZVMb.js";import"./CardCode-DTGEN7ch.js";import"./Code-D-Sdk-Zj.js";import"./LessonNav-C8O3cQxq.js";const a={subSectionId:"svg-vs-raster",subSectionLabel:"SVG vs raster images",description:`
            <p><strong>SVG</strong> images are vector-based. They are built from shapes, lines, and paths, so they can scale up or down without losing quality.</p>
            <p><strong>Raster</strong> images are made of pixels. They look good at their intended size, but if you enlarge them too much, they can become blurry or blocky.</p>
            <p>Common raster formats include <code>JPG</code>, <code>PNG</code>, <code>GIF</code>, and pixel-based <code>WebP</code> images.</p>
          `,notes:`
            <p>Use SVG for icons, logos, and simple illustrations. Use raster images for photos and detailed pixel-based artwork.</p>
          `,imgs:[{imgSrc:"/assets/images/html/svg-raster.png",alt:"SVG vs. Raster"}],cardCodes:[{cardLabel:"Comparison",language:"html",code:`
<!-- SVG: scales cleanly -->
<img src="logo.svg" alt="Logo">

<!-- Raster: can lose quality when enlarged -->
<img src="photo.png" alt="Photo">
              `}]},c={sectionId:"svg-basics",sectionLabel:"8.1 SVG Basics",description:`
    <p>SVG stands for <strong>Scalable Vector Graphics</strong>. It is a web-friendly image format commonly used for icons, logos, diagrams, and simple illustrations.</p>
    <p>In this section, you will learn what SVG is, how it compares to raster images, and the main ways to use it in HTML and CSS.</p>
  `,subSections:[a]},n={sectionId:"svg-coordinate-system",sectionLabel:"8.2 Coordinate System",subSections:[{subSectionId:"viewport-viewbox",subSectionLabel:"Viewport & viewBox",topics:[{topicId:"svg-element",topicLabel:"<svg>"},{topicId:"width-height",topicLabel:"width and height"},{topicId:"viewbox",topicLabel:"viewBox"}]},{subSectionId:"scaling",subSectionLabel:"Scaling",topics:[{topicId:"preserve-aspect-ratio",topicLabel:"preserveAspectRatio"},{topicId:"responsive-scaling",topicLabel:"Responsive scaling"},{topicId:"svg-sizing-behavior",topicLabel:"How SVG scales"}]}]},l={sectionId:"shapes-styling",sectionLabel:"8.3 Shapes & Styling",subSections:[{subSectionId:"basic-shapes",subSectionLabel:"Basic Shapes",topics:[{topicId:"rect-circle-ellipse",topicLabel:"rect, circle, ellipse"},{topicId:"line-polyline-polygon",topicLabel:"line, polyline, polygon"},{topicId:"grouping-elements",topicLabel:"<g>"}]},{subSectionId:"styling",subSectionLabel:"Styling",topics:[{topicId:"fill-stroke",topicLabel:"fill and stroke"},{topicId:"stroke-width-linecap",topicLabel:"stroke-width and linecap"},{topicId:"styling-with-css",topicLabel:"Styling SVG with CSS"}]}]},p={sectionId:"paths-reuse-accessibility",sectionLabel:"8.4 Paths, Reuse & Accessibility",subSections:[{subSectionId:"paths-and-reuse",subSectionLabel:"Paths & Reuse",topics:[{topicId:"path-basics",topicLabel:"<path> basics"},{topicId:"defs-use",topicLabel:"<defs> and <use>"},{topicId:"symbols-sprites",topicLabel:"Symbols and sprites"}]},{subSectionId:"accessible-svg",subSectionLabel:"Accessible SVG",topics:[{topicId:"title-desc",topicLabel:"<title> and <desc>"},{topicId:"decorative-vs-informative-svg",topicLabel:"Decorative vs informative SVG"},{topicId:"practical-svg-patterns",topicLabel:"Practical SVG patterns"}]}]},r={sectionId:"svg-animation",sectionLabel:"8.5 SVG Animation",subSections:[{subSectionId:"motion-basics",subSectionLabel:"Motion Basics",topics:[{topicId:"animate",topicLabel:"<animate>"},{topicId:"animatetransform",topicLabel:"<animateTransform>"},{topicId:"animatemotion",topicLabel:"<animateMotion>"}]},{subSectionId:"motion-paths",subSectionLabel:"Motion Paths",topics:[{topicId:"mpath",topicLabel:"<mpath>"},{topicId:"animation-along-a-path",topicLabel:"Animation Along a Path",description:`
            <p>SVG allows elements to move along complex paths using <code>&lt;animateMotion&gt;</code>. Instead of animating with simple x and y values, we define a <code>&lt;path&gt;</code> and attach it to the animation using <code>&lt;mpath&gt;</code>.</p>
            <p>The moving element follows the exact shape of the path, which is useful for motion graphics and interactive UI patterns.</p>
          `,cardCodes:[{cardLabel:"HTML",language:"html",code:`
<div class="wrapper">
  <svg viewBox="0 0 800 200">
    <path
      id="path"
      d="M0,100 C100,20 200,180 300,100 S500,20 600,100 S700,180 800,100"
      fill="none"
      stroke="black"
      stroke-width="2"
    />

    <circle r="15" fill="red">
      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
        <mpath href="#path"></mpath>
      </animateMotion>
    </circle>
  </svg>
</div>
              `}],preview:`
            <wc-css-svg-custom-path></wc-css-svg-custom-path>
          `,sandbox:[{html:!0}]}]}]},e=[c,n,l,p,r],d=`

`;class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
        ${d}
      </style>
      <div class="wrapper">
        <svg viewBox="0 0 800 200">
          <path
            id="path"
            d="M0,100 C100,20 200,180 300,100 S500,20 600,100 S700,180 800,100"
            fill="none"
            stroke="black"
            stroke-width="2"
          />

          <circle r="15" fill="red">
            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path"></mpath>
            </animateMotion>
          </circle>
        </svg>
      </div>
    `}}customElements.define("wc-css-svg-custom-path",m);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${t}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${o(e)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,i(this.shadowRoot,e)}}customElements.define("wc-frontend-html-module-8",h);export{h as default};
