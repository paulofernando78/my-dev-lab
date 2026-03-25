import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("headings-paragraphs", "2.1 Headings & Paragraphs", [
    subSection("headings", "Headings", [
      topic("h1-to-h6", "<h1> to <h6>"),
      topic("heading-hierarchy", "Heading hierarchy"),
      topic("one-h1-per-page", "Page title structure"),
    ]),
    subSection("paragraphs", "Paragraphs", [
      topic("paragraph-element", "<p>"),
      topic("line-breaks", "<br>"),
      topic("thematic-breaks", "<hr>"),
    ]),
  ]),
  section("inline-text-semantics", "2.2 Inline Text Semantics", [
    subSection("emphasis", "Emphasis", [
      topic("strong", "<strong>"),
      topic("em", "<em>"),
      topic("small-mark", "<small> and <mark>"),
    ]),
    subSection("special-inline-text", "Special Inline Text", [
      topic("sup-sub", "<sup> and <sub>"),
      topic("abbr-cite", "<abbr> and <cite>"),
      topic("time-data", "<time>"),
    ]),
  ]),
  section("quotes-code", "2.3 Quotes & Code Text", [
    subSection("quotes", "Quotes", [
      topic("blockquote", "<blockquote>"),
      topic("inline-quote", "<q>"),
      topic("quote-citation", "Citations and attribution"),
    ]),
    subSection("code-text", "Code Text", [
      topic("inline-code", "<code>"),
      topic("preformatted-text", "<pre>"),
      topic("keyboard-sample", "<kbd> and <samp>"),
    ]),
  ]),
  section("text-structure-patterns", "2.4 Text Structure Patterns", [
    subSection("reading-structure", "Reading Structure", [
      topic("heading-plus-paragraph", "Combining headings and paragraphs"),
      topic("scannable-content", "Scannable content blocks"),
      topic("document-outline-thinking", "Document outline thinking"),
    ]),
  ]),
];
