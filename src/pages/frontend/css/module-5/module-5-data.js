import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("flex-container-basics", "5.1 Flex Container Basics", [
    subSection("starting-flexbox", "Starting Flexbox", [
      topic("display-flex", "display: flex"),
      topic("inline-flex", "display: inline-flex"),
      topic("main-cross-axis", "Main axis and cross axis"),
    ]),
    subSection("direction", "Direction", [
      topic("flex-direction", "flex-direction"),
      topic("row-vs-column", "Row vs column"),
      topic("reversed-axes", "Reversed axes"),
    ]),
  ]),
  section("alignment-distribution", "5.2 Alignment & Distribution", [
    subSection("main-axis-alignment", "Main Axis Alignment", [
      topic("justify-content", "justify-content"),
      topic("space-distribution", "Space distribution values"),
      topic("gap-in-flexbox", "gap"),
    ]),
    subSection("cross-axis-alignment", "Cross Axis Alignment", [
      topic("align-items", "align-items"),
      topic("align-content", "align-content"),
      topic("place-content", "place-content"),
    ]),
  ]),
  section("flex-items", "5.3 Flex Items", [
    subSection("sizing-items", "Sizing Items", [
      topic("flex-grow", "flex-grow"),
      topic("flex-shrink", "flex-shrink"),
      topic("flex-basis", "flex-basis"),
    ]),
    subSection("item-controls", "Item Controls", [
      topic("flex-shorthand", "flex shorthand"),
      topic("align-self", "align-self"),
      topic("item-min-size", "Intrinsic sizing limits"),
    ]),
  ]),
  section("wrapping-patterns", "5.4 Wrapping & Patterns", [
    subSection("wrapping", "Wrapping", [
      topic("flex-wrap", "flex-wrap"),
      topic("multi-row-flex", "Multi-row layouts"),
      topic("order-property", "order"),
    ]),
    subSection("common-patterns", "Common Patterns", [
      topic("navbars", "Navbars"),
      topic("card-rows", "Card rows"),
      topic("sidebar-layouts", "Sidebar layouts"),
    ]),
  ]),
];
