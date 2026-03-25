import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("box-model", "2.1 The Box Model", [
    subSection("box-parts", "Box Parts", [
      topic("content-box", "Content area"),
      topic("padding-box", "Padding"),
      topic("border-margin", "Border and margin"),
    ]),
    subSection("sizing", "Sizing", [
      topic("width-height", "width and height"),
      topic("min-max-sizing", "min/max width and height"),
      topic("box-sizing", "box-sizing"),
    ]),
  ]),
  section("display-flow", "2.2 Display & Flow", [
    subSection("display-types", "Display Types", [
      topic("block-inline", "block and inline"),
      topic("inline-block", "inline-block"),
      topic("none-visibility", "display: none vs visibility: hidden"),
    ]),
    subSection("document-flow", "Document Flow", [
      topic("normal-flow", "Normal flow"),
      topic("overflow", "overflow"),
      topic("whitespace-space", "white-space"),
    ]),
  ]),
  section("spacing-patterns", "2.3 Spacing Patterns", [
    subSection("margin-padding", "Margin & Padding", [
      topic("margin-shorthand", "Margin shorthand"),
      topic("padding-shorthand", "Padding shorthand"),
      topic("logical-spacing", "Logical spacing properties"),
    ]),
    subSection("common-spacing", "Common Spacing Patterns", [
      topic("margin-auto", "margin: auto"),
      topic("margin-vs-padding", "Margin vs padding"),
      topic("margin-collapse", "Margin collapsing"),
    ]),
  ]),
  section("backgrounds-borders", "2.4 Backgrounds & Borders", [
    subSection("borders", "Borders", [
      topic("border-basics", "Border basics"),
      topic("border-radius", "border-radius"),
      topic("outline", "outline"),
    ]),
    subSection("backgrounds", "Backgrounds", [
      topic("background-color", "background-color"),
      topic("background-image", "background-image"),
      topic("background-size-position", "background-size and background-position"),
    ]),
  ]),
];
