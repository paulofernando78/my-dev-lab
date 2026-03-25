import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("fonts", "3.1 Fonts", [
    subSection("font-basics", "Font Basics", [
      topic("font-family", "font-family"),
      topic("font-size", "font-size"),
      topic("font-weight-style", "font-weight and font-style"),
    ]),
    subSection("web-fonts", "Web Fonts", [
      topic("font-stacks", "Font stacks"),
      topic("hosted-fonts", "Hosted web fonts"),
      topic("font-loading", "Font loading basics"),
    ]),
  ]),
  section("text-layout", "3.2 Text Layout", [
    subSection("readability", "Readability", [
      topic("line-height", "line-height"),
      topic("text-align", "text-align"),
      topic("measure-max-width", "Readable line length"),
    ]),
    subSection("text-styling", "Text Styling", [
      topic("letter-word-spacing", "letter-spacing and word-spacing"),
      topic("text-transform", "text-transform"),
      topic("text-decoration-shadow", "text-decoration and text-shadow"),
    ]),
  ]),
  section("color-readability", "3.3 Color & Readability", [
    subSection("color-application", "Color Application", [
      topic("surface-text-pairs", "Surface and text color pairs"),
      topic("semantic-colors", "Semantic color systems"),
      topic("gradients", "Gradients"),
    ]),
    subSection("readable-interfaces", "Readable Interfaces", [
      topic("contrast", "Contrast"),
      topic("visual-hierarchy", "Visual hierarchy"),
      topic("state-colors", "State colors"),
    ]),
  ]),
  section("lists-links", "3.4 Lists & Links", [
    subSection("lists", "Lists", [
      topic("list-style", "list-style"),
      topic("list-position", "list-style-position"),
      topic("custom-markers", "::marker"),
    ]),
    subSection("links", "Links", [
      topic("link-states", "Link states"),
      topic("hover-focus-styles", "Hover and focus styles"),
      topic("visited-active", ":visited and :active"),
    ]),
  ]),
];
