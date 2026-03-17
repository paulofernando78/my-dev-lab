import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/molecules/CardIcon.js";
import "@/js/components/molecules/SubSection.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Image.js";
import "@/js/components/molecules/Topic.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Demo.js";
import "@/js/components/organisms/Sandbox.js";
import "@/js/components/molecules/Links.js";
import "@/js/components/molecules/LessonNav.js";

import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection.js";

// Previews
import "@/js/components/pages/css/module-9/SvgCustomPath.js"

const style = /* css */ `

`;

class HTMLModuleEight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    const sections = [
      //! 8.1 What is SVG?
      {
        sectionId: "what-is-svg",
        sectionLabel: "8.1 What is SVG?",
        sectionAriaLabel: "8.1 What is SVG?",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! SVG vs. PNG vs. JPG
          {
            subSectionId: "svg-vs-png-jpg",
            subSectionLabel: "SVG vs. PNG vs. JPG",
            subSectionAriaLabel: "SVG vs. PNG vs. JPG",
            description: /* html */ `
              ...
            `,
          },
          //! How to Use SVG
          {
            subSectionId: "how-to-use-svg",
            subSectionLabel: "How to Use SVG",
            subSectionAriaLabel: "How to Use SVG",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Inline SVG
              {
                topicId: "inline-svg",
                topicLabel: "Inline SVG",
                topicAriaLabel: "Inline SVG",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! SVG as image (<img>)
              {
                topicId: "svg-as-image-img",
                topicLabel: "SVG as image (img)",
                topicAriaLabel: "SVG as image (img)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! SVG in CSS (background)
              {
                topicId: "svg-in-css-background",
                topicLabel: "SVG in CSS (background)",
                topicAriaLabel: "SVG in CSS (background)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 8.2 SVG Fundamentals
      {
        sectionId: "svg-fundamentals",
        sectionLabel: "8.2 SVG Fundamentals",
        sectionAriaLabel: "8.2 SVG Fundamentals",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Coordinate System
          {
            subSectionId: "coordinate-system",
            subSectionLabel: "Coordinate System",
            subSectionAriaLabel: "Coordinate System",
            description: /* html */ `
              ...
            `,
            topics: [
              //! viewBox
              {
                topicId: "viewBox",
                topicLabel: "viewBox",
                topicAriaLabel: "viewBox",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! width vs height
              {
                topicId: "width vs height",
                topicLabel: "width vs height",
                topicAriaLabel: "width vs height",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! scaling behavior
              {
                topicId: " scaling behavior",
                topicLabel: "scaling behavior",
                topicAriaLabel: "scaling behavior",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
          //! Basic Shapes
          {
            subSectionId: "basic-shapes",
            subSectionLabel: "Basic Shapes",
            subSectionAriaLabel: "Basic Shapes",
            description: /* html */ `
              ...
            `,
            topics: [
              //! rect
              {
                topicId: "rect",
                topicLabel: "rect",
                topicAriaLabel: "rect",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! circle
              {
                topicId: "circle",
                topicLabel: "circle",
                topicAriaLabel: "circle",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! line
              {
                topicId: "line",
                topicLabel: "line",
                topicAriaLabel: "line",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! ellipse
              {
                topicId: "ellipse",
                topicLabel: "ellipse",
                topicAriaLabel: "ellipse",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! polygon
              {
                topicId: "polygon",
                topicLabel: "polygon",
                topicAriaLabel: "polygon",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 8.3 Paths
      {
        sectionId: "paths",
        sectionLabel: "8.3 Paths",
        sectionAriaLabel: "8.3 Paths",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Basics
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! d attribute
              {
                topicId: "d-attribute",
                topicLabel: "d attribute",
                topicAriaLabel: "d attribute",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Move (M)
              {
                topicId: "Move-m",
                topicLabel: "Move (M)",
                topicAriaLabel: "Move (M)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Line (L)
              {
                topicId: "line-l",
                topicLabel: "Line (L)",
                topicAriaLabel: "Line (L)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Close path (Z)
              {
                topicId: "close-path-z",
                topicLabel: "Close path (Z)",
                topicAriaLabel: "Close path (Z)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
          //! Curves
          {
            subSectionId: "curves",
            subSectionLabel: "Curves",
            subSectionAriaLabel: "Curves",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Cubic Bezier (C)
              {
                topicId: "cubic-bezier-C",
                topicLabel: "Cubic Bezier (C)",
                topicAriaLabel: "Cubic Bezier (C)",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Smooth curves
              {
                topicId: "smooth-curves",
                topicLabel: "Smooth Curves",
                topicAriaLabel: "Smooth Curves",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Practical curve examples
              {
                topicId: "practical-curve-examples",
                topicLabel: "Practical curve examples",
                topicAriaLabel: "Practical curve examples",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 8.4 Styling SVG
      {
        sectionId: "styling-svg",
        sectionLabel: "8.4 Styling SVG",
        sectionAriaLabel: "8.4 Styling SVG",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Fill & Stroke
          {
            subSectionId: "fill-and-stroke",
            subSectionLabel: "Fill & Stroke",
            subSectionAriaLabel: "Fill & Stroke",
            description: /* html */ `
              ...
            `,
            topics: [
              //! fill
              {
                topicId: "fill",
                topicLabel: "fill",
                topicAriaLabel: "fill",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! stroke
              {
                topicId: "stroke",
                topicLabel: "stroke",
                topicAriaLabel: "stroke",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! stroke-width
              {
                topicId: "stroke-width",
                topicLabel: "stroke-width",
                topicAriaLabel: "stroke-width",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 8.5 SVG Animation
      {
        sectionId: "svg-Animation",
        sectionLabel: "8.5 SVG Animation",
        sectionAriaLabel: "8.5 SVG Animation",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Basic
          {
            subSectionId: "basic",
            subSectionLabel: "Basic",
            subSectionAriaLabel: "Basic",
            description: /* html */ `
              ...
            `,
            topics: [
              //! animateMotion
              {
                topicId: "animateMotion",
                topicLabel: "animateMotion",
                topicAriaLabel: "animateMotion",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! mpath
              {
                topicId: "mpath",
                topicLabel: "mpath",
                topicAriaLabel: "mpath",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Animation Along a Path
              {
                topicId: "animation-along-a-path",
                topicLabel: "Animation Along a Path",
                topicAriaLabel: "Animation Along a Path",
                description: /* html */ `
                  <p>SVG allows elements to move along complex paths using <code>&lt;animateMotion&gt;</code>. Instead of animating with simple x and y values, we define a <code>&lt;path&gt;</code> and attach it to the animation using <code>&lt;mpath&gt;</code>. The moving element (in this case, a circle) follows the exact shape of the path. This is commonly used for wave animations, motion graphics, and interactive UI elements.</p>
                  <span>Path = track</span>
                  <span>Circle = object</span>
                  <span>animateMotion</span>
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `
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
                `,
                  },
                ],
                preview: /* html */ `
                  <wc-css-svg-custom-path></wc-css-svg-custom-path>
                `,
                sandbox: [
                  {
                    html: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      //! 8.6 Practical Examples
      {
        sectionId: "practical-examples",
        sectionLabel: "8.6 Practical Examples",
        sectionAriaLabel: "8.6 Practical Examples",
        description: /* html */ `
          ...
        `,
        subSections: [
          //! Sub Section
          {
            subSectionId: "sub-section",
            subSectionLabel: "Sub Section",
            subSectionAriaLabel: "...",
            description: /* html */ `
              ...
            `,
            topics: [
              //! Loading spinner
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Animated icon
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Wave animation (igual seu preview)
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
              //! Logo animation
              {
                topicId: "topic",
                topicLabel: "Topic",
                topicAriaLabel: "...",
                description: /* html */ `
                  ...
                `,
                cardCodes: [
                  {
                    cardLabel: "HTML",
                    language: "html",
                    code: /* html */ `

                `,
                  },
                  {
                    cardLabel: "CSS",
                    language: "css",
                    code: /* css */ `
                    
                `,
                  },
                  {
                    cardLabel: "Javascript",
                    language: "js",
                    code: /* js */ `

                `,
                  },
                ],
                preview: /* html */ `
                  <wc-></wc->
                `,
                sandbox: [
                  {
                    html: true,
                    css: true,
                    js: true,
                    console: true
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <wc-page-header></wc-page-header>
      <wc-contents></wc-contents>
      <div class="line-break">${renderSections(sections)}</div>
      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-frontend-html-module-8", HTMLModuleEight);
export default HTMLModuleEight;
