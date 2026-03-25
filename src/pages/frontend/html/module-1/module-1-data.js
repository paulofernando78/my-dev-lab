import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("document-skeleton", "1.1 Document Skeleton", [
    subSection("core-structure", "Core Structure", [
      topic("doctype", "<!DOCTYPE html>"),
      topic("html-root", "<html>"),
      topic("body-element", "<body>"),
    ]),
    subSection("document-regions", "Document Regions", [
      topic("head-element", "<head>"),
      topic("visible-vs-metadata", "Visible content vs metadata"),
      topic("page-structure-overview", "How the document is organized"),
    ]),
  ]),
  section("head-essentials", "1.2 Head Essentials", [
    subSection("metadata", "Metadata", [
      topic("meta-charset", "<meta charset>"),
      topic("meta-viewport", "<meta name=\"viewport\">"),
      topic("document-title", "<title>"),
    ]),
    subSection("external-resources", "External Resources", [
      topic("link-stylesheet", "<link>"),
      topic("script-tag", "<script>"),
      topic("favicon-basics", "Favicons and head assets"),
    ]),
  ]),
  section("elements-tags-attributes", "1.3 Elements, Tags & Attributes", [
    subSection("tag-basics", "Tag Basics", [
      topic("opening-closing-tags", "Opening and closing tags"),
      topic("void-elements", "Void elements"),
      topic("nested-elements", "Nested elements"),
    ]),
    subSection("attributes", "Attributes", [
      topic("attribute-syntax", "Attribute syntax"),
      topic("global-attributes", "Global attributes"),
      topic("boolean-attributes", "Boolean attributes"),
    ]),
  ]),
  section("html-authoring-basics", "1.4 HTML Authoring Basics", [
    subSection("writing-clean-html", "Writing Clean HTML", [
      topic("indentation", "Indentation and nesting"),
      topic("comments", "Comments"),
      topic("readable-markup", "Readable markup"),
    ]),
    subSection("quality-checks", "Quality Checks", [
      topic("validation-basics", "Validation basics"),
      topic("missing-closing-tags", "Common markup mistakes"),
      topic("devtools-inspection", "Inspecting HTML in DevTools"),
    ]),
  ]),
];
