import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("svg-basics", "8.1 SVG Basics", [
    subSection("intro", "Introduction", [
      topic("what-is-svg", "What SVG is"),
      topic("svg-vs-raster", "SVG vs raster images"),
      topic("when-to-use-svg", "When to use SVG"),
    ]),
    subSection("using-svg", "Using SVG", [
      topic("inline-svg", "Inline SVG"),
      topic("svg-in-img", "SVG in <img>"),
      topic("svg-in-css", "SVG in CSS"),
    ]),
  ]),
  section("svg-coordinate-system", "8.2 Coordinate System", [
    subSection("viewport-viewbox", "Viewport & viewBox", [
      topic("svg-element", "<svg>"),
      topic("width-height", "width and height"),
      topic("viewbox", "viewBox"),
    ]),
    subSection("scaling", "Scaling", [
      topic("preserve-aspect-ratio", "preserveAspectRatio"),
      topic("responsive-scaling", "Responsive scaling"),
      topic("svg-sizing-behavior", "How SVG scales"),
    ]),
  ]),
  section("shapes-styling", "8.3 Shapes & Styling", [
    subSection("basic-shapes", "Basic Shapes", [
      topic("rect-circle-ellipse", "rect, circle, ellipse"),
      topic("line-polyline-polygon", "line, polyline, polygon"),
      topic("grouping-elements", "<g>"),
    ]),
    subSection("styling", "Styling", [
      topic("fill-stroke", "fill and stroke"),
      topic("stroke-width-linecap", "stroke-width and linecap"),
      topic("styling-with-css", "Styling SVG with CSS"),
    ]),
  ]),
  section("paths-reuse-accessibility", "8.4 Paths, Reuse & Accessibility", [
    subSection("paths-and-reuse", "Paths & Reuse", [
      topic("path-basics", "<path> basics"),
      topic("defs-use", "<defs> and <use>"),
      topic("symbols-sprites", "Symbols and sprites"),
    ]),
    subSection("accessible-svg", "Accessible SVG", [
      topic("title-desc", "<title> and <desc>"),
      topic("decorative-vs-informative-svg", "Decorative vs informative SVG"),
      topic("practical-svg-patterns", "Practical SVG patterns"),
    ]),
  ]),
  section("svg-animation", "8.5 SVG Animation", [
    subSection("motion-basics", "Motion Basics", [
      topic("animate", "<animate>"),
      topic("animatetransform", "<animateTransform>"),
      topic("animatemotion", "<animateMotion>"),
    ]),
    subSection("motion-paths", "Motion Paths", [
      topic("mpath", "<mpath>"),
      {
        topicId: "animation-along-a-path",
        topicLabel: "Animation Along a Path",
        topicAriaLabel: "Animation Along a Path",
        description: /* html */ `
          <p>SVG allows elements to move along complex paths using <code>&lt;animateMotion&gt;</code>. Instead of animating with simple x and y values, we define a <code>&lt;path&gt;</code> and attach it to the animation using <code>&lt;mpath&gt;</code>.</p>
          <p>The moving element follows the exact shape of the path, which is useful for motion graphics and interactive UI patterns.</p>
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
    ]),
  ]),
];
