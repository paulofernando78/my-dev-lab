import{s as e}from"./styles-DqAceQQB.js";import"./PageHeader-CvP__jNJ.js";import{r as a,s as o}from"./renderSection-DMH7LDba.js";import"./CardIcon-DXecrH-W.js";import"./SubSection-DcD0hYDi.js";import"./Topic-ezzIs3LG.js";import"./CardCode-B2gB2WjZ.js";import"./Code-CJxCtOLx.js";import"./LessonNav-DJR07540.js";import"./index-BlILq7lZ.js";const s={sectionId:"svg-basics",sectionLabel:"8.1 SVG Basics",sectionAriaLabel:"8.1 SVG Basics",subSections:[{subSectionId:"intro",subSectionLabel:"Introduction",subSectionAriaLabel:"Introduction",topics:[{topicId:"what-is-svg",topicLabel:"What SVG is",topicAriaLabel:"What SVG is"},{topicId:"svg-vs-raster",topicLabel:"SVG vs raster images",topicAriaLabel:"SVG vs raster images"},{topicId:"when-to-use-svg",topicLabel:"When to use SVG",topicAriaLabel:"When to use SVG"}]},{subSectionId:"using-svg",subSectionLabel:"Using SVG",subSectionAriaLabel:"Using SVG",topics:[{topicId:"inline-svg",topicLabel:"Inline SVG",topicAriaLabel:"Inline SVG"},{topicId:"svg-in-img",topicLabel:"SVG in <img>",topicAriaLabel:"SVG in <img>"},{topicId:"svg-in-css",topicLabel:"SVG in CSS",topicAriaLabel:"SVG in CSS"}]}]},c={sectionId:"svg-coordinate-system",sectionLabel:"8.2 Coordinate System",sectionAriaLabel:"8.2 Coordinate System",subSections:[{subSectionId:"viewport-viewbox",subSectionLabel:"Viewport & viewBox",subSectionAriaLabel:"Viewport & viewBox",topics:[{topicId:"svg-element",topicLabel:"<svg>",topicAriaLabel:"<svg>"},{topicId:"width-height",topicLabel:"width and height",topicAriaLabel:"width and height"},{topicId:"viewbox",topicLabel:"viewBox",topicAriaLabel:"viewBox"}]},{subSectionId:"scaling",subSectionLabel:"Scaling",subSectionAriaLabel:"Scaling",topics:[{topicId:"preserve-aspect-ratio",topicLabel:"preserveAspectRatio",topicAriaLabel:"preserveAspectRatio"},{topicId:"responsive-scaling",topicLabel:"Responsive scaling",topicAriaLabel:"Responsive scaling"},{topicId:"svg-sizing-behavior",topicLabel:"How SVG scales",topicAriaLabel:"How SVG scales"}]}]},n={sectionId:"shapes-styling",sectionLabel:"8.3 Shapes & Styling",sectionAriaLabel:"8.3 Shapes & Styling",subSections:[{subSectionId:"basic-shapes",subSectionLabel:"Basic Shapes",subSectionAriaLabel:"Basic Shapes",topics:[{topicId:"rect-circle-ellipse",topicLabel:"rect, circle, ellipse",topicAriaLabel:"rect, circle, ellipse"},{topicId:"line-polyline-polygon",topicLabel:"line, polyline, polygon",topicAriaLabel:"line, polyline, polygon"},{topicId:"grouping-elements",topicLabel:"<g>",topicAriaLabel:"<g>"}]},{subSectionId:"styling",subSectionLabel:"Styling",subSectionAriaLabel:"Styling",topics:[{topicId:"fill-stroke",topicLabel:"fill and stroke",topicAriaLabel:"fill and stroke"},{topicId:"stroke-width-linecap",topicLabel:"stroke-width and linecap",topicAriaLabel:"stroke-width and linecap"},{topicId:"styling-with-css",topicLabel:"Styling SVG with CSS",topicAriaLabel:"Styling SVG with CSS"}]}]},l={sectionId:"paths-reuse-accessibility",sectionLabel:"8.4 Paths, Reuse & Accessibility",sectionAriaLabel:"8.4 Paths, Reuse & Accessibility",subSections:[{subSectionId:"paths-and-reuse",subSectionLabel:"Paths & Reuse",subSectionAriaLabel:"Paths & Reuse",topics:[{topicId:"path-basics",topicLabel:"<path> basics",topicAriaLabel:"<path> basics"},{topicId:"defs-use",topicLabel:"<defs> and <use>",topicAriaLabel:"<defs> and <use>"},{topicId:"symbols-sprites",topicLabel:"Symbols and sprites",topicAriaLabel:"Symbols and sprites"}]},{subSectionId:"accessible-svg",subSectionLabel:"Accessible SVG",subSectionAriaLabel:"Accessible SVG",topics:[{topicId:"title-desc",topicLabel:"<title> and <desc>",topicAriaLabel:"<title> and <desc>"},{topicId:"decorative-vs-informative-svg",topicLabel:"Decorative vs informative SVG",topicAriaLabel:"Decorative vs informative SVG"},{topicId:"practical-svg-patterns",topicLabel:"Practical SVG patterns",topicAriaLabel:"Practical SVG patterns"}]}]},p={sectionId:"svg-animation",sectionLabel:"8.5 SVG Animation",sectionAriaLabel:"8.5 SVG Animation",subSections:[{subSectionId:"motion-basics",subSectionLabel:"Motion Basics",subSectionAriaLabel:"Motion Basics",topics:[{topicId:"animate",topicLabel:"<animate>",topicAriaLabel:"<animate>"},{topicId:"animatetransform",topicLabel:"<animateTransform>",topicAriaLabel:"<animateTransform>"},{topicId:"animatemotion",topicLabel:"<animateMotion>",topicAriaLabel:"<animateMotion>"}]},{subSectionId:"motion-paths",subSectionLabel:"Motion Paths",subSectionAriaLabel:"Motion Paths",topics:[{topicId:"mpath",topicLabel:"<mpath>",topicAriaLabel:"<mpath>"},{topicId:"animation-along-a-path",topicLabel:"Animation Along a Path",topicAriaLabel:"Animation Along a Path",description:`
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
          `,sandbox:[{html:!0}]}]}]},i=[s,c,n,l,p],r=`

`;class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
        ${r}
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
    `}}customElements.define("wc-css-svg-custom-path",b);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${e}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${a(i)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `,o(this.shadowRoot,i)}}customElements.define("wc-frontend-html-module-8",d);export{d as default};
