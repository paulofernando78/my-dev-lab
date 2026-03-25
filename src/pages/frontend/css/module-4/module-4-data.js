import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("normal-flow", "4.1 Normal Flow", [
    subSection("document-flow", "Document Flow", [
      topic("static-position", "position: static"),
      topic("flow-order", "Flow order"),
      topic("containing-blocks", "Containing blocks"),
    ]),
  ]),
  section("positioned-elements", "4.2 Positioned Elements", [
    subSection("relative-absolute", "Relative & Absolute", [
      topic("position-relative", "position: relative"),
      topic("position-absolute", "position: absolute"),
      topic("absolute-containing-block", "Absolute positioning context"),
    ]),
    subSection("offsets-inset", "Offsets & Inset", [
      topic("top-right-bottom-left", "top, right, bottom, left"),
      topic("inset", "inset"),
      topic("offset-vs-margin", "Offsets vs margin"),
    ]),
    subSection("fixed-sticky", "Fixed & Sticky", [
      topic("position-fixed", "position: fixed"),
      topic("position-sticky", "position: sticky"),
      topic("sticky-boundaries", "Sticky boundaries"),
    ]),
  ]),
  section("stacking-layering", "4.3 Stacking & Layering", [
    subSection("z-index", "z-index", [
      topic("stack-order", "Stack order"),
      topic("stacking-context", "Stacking context"),
      topic("negative-z-index", "Negative z-index"),
    ]),
    subSection("clipping-overlap", "Clipping & Overlap", [
      topic("overflow-clipping", "Overflow clipping"),
      topic("overlapping-elements", "Overlapping elements"),
      topic("pointer-events", "pointer-events"),
    ]),
  ]),
  section("positioning-patterns", "4.4 Positioning Patterns", [
    subSection("common-patterns", "Common Patterns", [
      topic("centered-overlay", "Centered overlay"),
      topic("sticky-header", "Sticky header"),
      topic("badge-tooltip", "Badges and tooltips"),
    ]),
  ]),
];
