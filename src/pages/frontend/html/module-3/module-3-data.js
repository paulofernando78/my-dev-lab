import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("lists", "3.1 Lists", [
    subSection("ordered-unordered", "Ordered & Unordered Lists", [
      topic("unordered-list", "<ul>"),
      topic("ordered-list", "<ol>"),
      topic("list-items", "<li>"),
    ]),
    subSection("advanced-lists", "Advanced Lists", [
      topic("nested-lists", "Nested lists"),
      topic("description-list", "<dl>, <dt>, <dd>"),
      topic("choosing-list-type", "Choosing the right list"),
    ]),
  ]),
  section("links", "3.2 Links", [
    subSection("anchor-basics", "Anchor Basics", [
      topic("anchor-element", "<a>"),
      topic("href-attribute", "href"),
      topic("link-text", "Meaningful link text"),
    ]),
    subSection("link-types", "Link Types", [
      topic("relative-vs-absolute", "Relative vs absolute links"),
      topic("mailto-tel", "mailto: and tel:"),
      topic("target-download", "target and download"),
    ]),
  ]),
  section("page-navigation", "3.3 Page Navigation", [
    subSection("navigation-structure", "Navigation Structure", [
      topic("nav-element", "<nav>"),
      topic("navigation-lists", "Navigation with lists"),
      topic("active-link-patterns", "Active link patterns"),
    ]),
    subSection("in-page-navigation", "In-Page Navigation", [
      topic("fragment-links", "Fragment links"),
      topic("id-attribute", "id for section linking"),
      topic("back-to-top-links", "Back to top links"),
    ]),
  ]),
  section("navigation-patterns", "3.4 Navigation Patterns", [
    subSection("common-patterns", "Common Patterns", [
      topic("main-navigation", "Main navigation"),
      topic("footer-navigation", "Footer navigation"),
      topic("table-of-contents", "Table of contents"),
    ]),
  ]),
];
