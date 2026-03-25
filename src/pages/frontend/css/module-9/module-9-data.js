import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("transforms", "9.1 Transforms", [
    subSection("transform-functions", "Transform Functions", [
      topic("translate", "translate()"),
      topic("scale", "scale()"),
      topic("rotate-skew", "rotate() and skew()"),
    ]),
    subSection("transform-control", "Transform Control", [
      topic("transform-origin", "transform-origin"),
      topic("combining-transforms", "Combining transforms"),
      topic("transform-vs-layout", "Transforms vs layout properties"),
    ]),
  ]),
  section("transitions", "9.2 Transitions", [
    subSection("transition-basics", "Transition Basics", [
      topic("transition-property", "transition-property"),
      topic("duration-delay", "duration and delay"),
      topic("timing-functions", "Timing functions"),
    ]),
    subSection("interactive-transitions", "Interactive Transitions", [
      topic("hover-focus-states", "Hover and focus states"),
      topic("multi-property-transitions", "Multiple-property transitions"),
      topic("when-not-to-transition", "When not to transition"),
    ]),
  ]),
  section("keyframes", "9.3 Keyframe Animations", [
    subSection("animation-basics", "Animation Basics", [
      topic("keyframes-rule", "@keyframes"),
      topic("animation-properties", "Animation properties"),
      topic("animation-shorthand", "Animation shorthand"),
    ]),
    subSection("animation-control", "Animation Control", [
      topic("iteration-direction", "Iteration count and direction"),
      topic("fill-mode-play-state", "fill-mode and play-state"),
      topic("sequencing", "Sequencing motion"),
    ]),
  ]),
  section("motion-quality", "9.4 Motion Quality", [
    subSection("performance", "Performance", [
      topic("cheap-properties", "Transform and opacity"),
      topic("will-change", "will-change"),
      topic("compositing-basics", "Compositing basics"),
    ]),
    subSection("accessibility", "Accessibility", [
      topic("reduced-motion", "prefers-reduced-motion"),
      topic("motion-purpose", "Motion with purpose"),
      topic("avoiding-motion-fatigue", "Avoiding motion fatigue"),
    ]),
  ]),
];
