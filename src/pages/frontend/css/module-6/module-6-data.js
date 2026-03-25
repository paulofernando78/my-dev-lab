import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("grid-basics", "6.1 Grid Basics", [
    subSection("starting-grid", "Starting Grid", [
      topic("display-grid", "display: grid"),
      topic("grid-columns-rows", "grid-template-columns and rows"),
      topic("grid-gap", "gap"),
    ]),
    subSection("explicit-implicit", "Explicit & Implicit Grid", [
      topic("explicit-grid", "Explicit grid"),
      topic("implicit-grid", "Implicit grid"),
      topic("auto-tracks", "Auto-generated tracks"),
    ]),
  ]),
  section("track-sizing", "6.2 Track Sizing", [
    subSection("sizing-tracks", "Sizing Tracks", [
      topic("fr-unit", "fr unit"),
      topic("repeat-function", "repeat()"),
      topic("minmax-function", "minmax()"),
    ]),
    subSection("responsive-tracks", "Responsive Tracks", [
      topic("auto-fit", "auto-fit"),
      topic("auto-fill", "auto-fill"),
      topic("fit-content", "fit-content()"),
    ]),
  ]),
  section("placement", "6.3 Placement", [
    subSection("line-placement", "Line Placement", [
      topic("grid-column", "grid-column"),
      topic("grid-row", "grid-row"),
      topic("span-keyword", "span"),
    ]),
    subSection("auto-placement", "Auto Placement", [
      topic("grid-auto-flow", "grid-auto-flow"),
      topic("dense-packing", "Dense packing"),
      topic("item-overlap", "Overlapping grid items"),
    ]),
  ]),
  section("areas-alignment", "6.4 Areas & Alignment", [
    subSection("template-areas", "Template Areas", [
      topic("grid-template-areas", "grid-template-areas"),
      topic("named-areas", "Named areas"),
      topic("area-based-layouts", "Area-based layouts"),
    ]),
    subSection("alignment", "Alignment", [
      topic("justify-align-items", "justify-items and align-items"),
      topic("justify-align-content", "justify-content and align-content"),
      topic("place-items-content", "place-items and place-content"),
    ]),
  ]),
];
