import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("responsive-foundations", "7.1 Responsive Foundations", [
    subSection("mindset", "Mindset", [
      topic("mobile-first", "Mobile-first design"),
      topic("content-driven-breakpoints", "Content-driven breakpoints"),
      topic("progressive-enhancement", "Progressive enhancement"),
    ]),
    subSection("layout-constraints", "Layout Constraints", [
      topic("min-width-max-width", "min-width and max-width"),
      topic("fluid-containers", "Fluid containers"),
      topic("intrinsic-layout-thinking", "Intrinsic layout thinking"),
    ]),
  ]),
  section("flexible-units", "7.2 Flexible Units", [
    subSection("responsive-sizing", "Responsive Sizing", [
      topic("percentages", "Percentages"),
      topic("rem-based-systems", "rem-based systems"),
      topic("viewport-units", "Viewport units"),
    ]),
    subSection("fluid-scales", "Fluid Scales", [
      topic("clamp-typography", "Fluid typography with clamp()"),
      topic("fluid-spacing", "Fluid spacing"),
      topic("aspect-ratio", "aspect-ratio"),
    ]),
  ]),
  section("media-queries", "7.3 Media Queries", [
    subSection("query-basics", "Query Basics", [
      topic("media-query-syntax", "Media query syntax"),
      topic("min-width-vs-max-width", "min-width vs max-width"),
      topic("range-queries", "Range queries"),
    ]),
    subSection("environment-queries", "Environment Queries", [
      topic("orientation-query", "orientation"),
      topic("prefers-color-scheme", "prefers-color-scheme"),
      topic("prefers-reduced-motion", "prefers-reduced-motion"),
    ]),
  ]),
  section("responsive-patterns", "7.4 Responsive Patterns", [
    subSection("layout-adaptation", "Layout Adaptation", [
      topic("stack-to-row", "Stack to row layouts"),
      topic("responsive-grid", "Responsive grid patterns"),
      topic("content-reflow", "Content reflow"),
    ]),
    subSection("container-queries", "Container Queries", [
      topic("container-type", "container-type"),
      topic("container-query-syntax", "Container query syntax"),
      topic("component-responsive-design", "Component-level responsiveness"),
    ]),
  ]),
];
