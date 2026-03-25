import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("organizing-styles", "8.1 Organizing Styles", [
    subSection("structure", "Structure", [
      topic("file-organization", "File organization"),
      topic("component-vs-page-styles", "Component vs page styles"),
      topic("separation-of-concerns", "Separation of concerns"),
    ]),
    subSection("style-strategy", "Style Strategy", [
      topic("global-vs-local", "Global vs local styles"),
      topic("composition", "Composition"),
      topic("avoiding-duplication", "Avoiding duplication"),
    ]),
  ]),
  section("naming-methodologies", "8.2 Naming & Methodologies", [
    subSection("naming", "Naming", [
      topic("semantic-class-names", "Semantic class names"),
      topic("state-classes", "State classes"),
      topic("naming-consistency", "Naming consistency"),
    ]),
    subSection("bem", "BEM", [
      topic("block-element-modifier", "Block, element, modifier"),
      topic("bem-when-to-use", "When to use BEM"),
      topic("bem-tradeoffs", "BEM tradeoffs"),
    ]),
  ]),
  section("reuse-tokens", "8.3 Reuse & Tokens", [
    subSection("custom-properties", "Custom Properties", [
      topic("css-variables", "CSS variables"),
      topic("fallback-values", "Fallback values"),
      topic("theming", "Theming"),
    ]),
    subSection("reuse-patterns", "Reuse Patterns", [
      topic("utility-classes", "Utility classes"),
      topic("design-tokens", "Design tokens"),
      topic("shared-components", "Shared component patterns"),
    ]),
  ]),
  section("cascade-control", "8.4 Cascade Control", [
    subSection("managing-specificity", "Managing Specificity", [
      topic("specificity-strategy", "Specificity strategy"),
      topic("low-specificity-selectors", "Low-specificity selectors"),
      topic("override-strategy", "Override strategy"),
    ]),
    subSection("modern-cascade-tools", "Modern Cascade Tools", [
      topic("cascade-layers", "@layer"),
      topic("resets-normalize", "Resets and normalize"),
      topic("architecture-review", "Auditing a CSS architecture"),
    ]),
  ]),
];
