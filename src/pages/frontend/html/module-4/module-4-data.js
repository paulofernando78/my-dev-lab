import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("landmark-elements", "4.1 Landmark Elements", [
    subSection("page-landmarks", "Page Landmarks", [
      topic("header", "<header>"),
      topic("main", "<main>"),
      topic("footer", "<footer>"),
    ]),
    subSection("navigation-and-side-content", "Navigation & Side Content", [
      topic("nav", "<nav>"),
      topic("aside", "<aside>"),
      topic("landmark-purpose", "Why landmarks matter"),
    ]),
  ]),
  section("sectioning-content", "4.2 Sectioning Content", [
    subSection("content-sections", "Content Sections", [
      topic("section", "<section>"),
      topic("article", "<article>"),
      topic("section-headings", "Section headings"),
    ]),
    subSection("choosing-elements", "Choosing Elements", [
      topic("article-vs-section", "article vs section"),
      topic("aside-vs-section", "aside vs section"),
      topic("main-content-boundaries", "Main content boundaries"),
    ]),
  ]),
  section("semantic-vs-generic", "4.3 Semantic vs Generic Containers", [
    subSection("generic-containers", "Generic Containers", [
      topic("div", "<div>"),
      topic("span", "<span>"),
      topic("when-not-to-use-div", "When not to use a div"),
    ]),
    subSection("semantic-decision-making", "Semantic Decision-Making", [
      topic("choose-semantic-first", "Choose semantic elements first"),
      topic("fallback-to-div", "When a div is appropriate"),
      topic("clean-document-structure", "Keeping structure meaningful"),
    ]),
  ]),
  section("layout-patterns", "4.4 Common Layout Patterns", [
    subSection("page-patterns", "Page Patterns", [
      topic("simple-page-layout", "Simple page layout"),
      topic("article-layout", "Article layout"),
      topic("sidebar-layout", "Sidebar layout"),
    ]),
  ]),
];
