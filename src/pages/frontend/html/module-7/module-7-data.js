import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("accessibility-foundations", "7.1 Accessibility Foundations", [
    subSection("semantic-accessibility", "Semantic Accessibility", [
      topic("semantic-html", "Semantic HTML"),
      topic("accessible-structure", "Accessible page structure"),
      topic("native-elements-first", "Use native elements first"),
    ]),
    subSection("keyboard-basics", "Keyboard Basics", [
      topic("focusable-elements", "Focusable elements"),
      topic("tab-order", "Tab order"),
      topic("skip-links", "Skip links"),
    ]),
  ]),
  section("aria-basics", "7.2 ARIA Basics", [
    subSection("common-aria-attributes", "Common ARIA Attributes", [
      topic("aria-label", "aria-label"),
      topic("aria-hidden", "aria-hidden"),
      topic("aria-expanded", "aria-expanded"),
    ]),
    subSection("roles-and-states", "Roles & States", [
      topic("role-attribute", "role"),
      topic("aria-controls", "aria-controls"),
      topic("when-to-avoid-aria", "No ARIA is better than bad ARIA"),
    ]),
  ]),
  section("accessible-content", "7.3 Accessible Content", [
    subSection("media-accessibility", "Media Accessibility", [
      topic("alt-text", "Alt text"),
      topic("decorative-images", "Decorative images"),
      topic("captions-transcripts", "Captions and transcripts"),
    ]),
    subSection("forms-accessibility", "Forms Accessibility", [
      topic("form-labels", "Form labels"),
      topic("help-and-error-text", "Help text and error text"),
      topic("accessible-input-purpose", "Accessible input purpose"),
    ]),
  ]),
  section("seo-foundations", "7.4 SEO Foundations", [
    subSection("metadata-seo", "Metadata & SEO", [
      topic("meta-description", "Meta description"),
      topic("open-graph-basics", "Open Graph basics"),
      topic("meaningful-title", "Meaningful page titles"),
    ]),
    subSection("structure-seo", "Structure & SEO", [
      topic("heading-hierarchy", "Heading hierarchy"),
      topic("semantic-elements-seo", "Semantic elements for SEO"),
      topic("machine-readable-content", "Machine-readable content"),
    ]),
  ]),
];
