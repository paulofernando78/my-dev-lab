import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("how-css-works", "1.1 How CSS Works", [
    subSection("rule-structure", "Rule Structure", [
      topic("stylesheets-rules", "Stylesheets and rules"),
      topic("selectors-declarations", "Selectors and declarations"),
      topic("comments-formatting", "Comments and formatting"),
    ]),
    subSection("adding-css", "Adding CSS", [
      topic("inline-styles", "Inline styles"),
      topic("style-tag", "Internal style blocks"),
      topic("external-stylesheets", "External stylesheets"),
    ]),
    subSection("devtools-basics", "DevTools Basics", [
      topic("inspect-styles", "Inspecting styles"),
      topic("computed-styles", "Computed styles"),
      topic("toggling-rules", "Testing changes in DevTools"),
    ]),
  ]),
  section("selectors", "1.2 Selectors", [
    subSection("basic-selectors", "Basic Selectors", [
      topic("universal-selector", "Universal selector"),
      topic("type-selector", "Type selector"),
      topic("class-and-id", "Class and ID selectors"),
    ]),
    subSection("combinators", "Combinators", [
      topic("descendant-selector", "Descendant selector"),
      topic("child-selector", "Child selector"),
      topic("sibling-selectors", "Sibling selectors"),
    ]),
    subSection("attribute-and-pseudo", "Attribute and Pseudo Selectors", [
      topic("attribute-selectors", "Attribute selectors"),
      topic("pseudo-classes", "Pseudo-classes"),
      topic("pseudo-elements", "Pseudo-elements"),
    ]),
  ]),
  section("cascade-specificity", "1.3 Cascade & Specificity", [
    subSection("cascade-basics", "Cascade Basics", [
      topic("source-order", "Source order"),
      topic("inheritance", "Inheritance"),
      topic("cascade-conflicts", "Why rules override each other"),
    ]),
    subSection("specificity", "Specificity", [
      topic("specificity-order", "Specificity order"),
      topic("specificity-ties", "Resolving specificity ties"),
      topic("important-flag", "!important"),
    ]),
    subSection("css-keywords", "CSS Keywords", [
      topic("initial-keyword", "initial"),
      topic("inherit-keyword", "inherit"),
      topic("unset-revert", "unset and revert"),
    ]),
  ]),
  section("units-values", "1.4 Units & Values", [
    subSection("length-units", "Length Units", [
      topic("px-unit", "px"),
      topic("percent-unit", "%"),
      topic("em-rem-units", "em and rem"),
    ]),
    subSection("viewport-relative-units", "Viewport & Relative Values", [
      topic("viewport-units", "vw and vh"),
      topic("ch-unit", "ch"),
      topic("vmin-vmax-units", "vmin and vmax"),
    ]),
    subSection("basic-color-values", "Basic Color Values", [
      topic("named-hex-colors", "Named colors and hex"),
      topic("rgb-hsl-colors", "rgb(), rgba(), hsl(), hsla()"),
      topic("currentcolor", "currentColor"),
    ]),
  ]),
];
