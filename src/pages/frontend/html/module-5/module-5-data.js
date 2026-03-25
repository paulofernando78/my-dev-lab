import { section, subSection, topic } from "../module-helpers.js";

export const sections = [
  section("images", "5.1 Images", [
    subSection("image-basics", "Image Basics", [
      topic("img-element", "<img>"),
      topic("src-alt", "src and alt"),
      topic("width-height", "width and height"),
    ]),
    subSection("image-context", "Image Context", [
      topic("figure", "<figure>"),
      topic("figcaption", "<figcaption>"),
      topic("decorative-vs-informative", "Decorative vs informative images"),
    ]),
  ]),
  section("responsive-images", "5.2 Responsive Images", [
    subSection("responsive-sources", "Responsive Sources", [
      topic("srcset", "srcset"),
      topic("sizes", "sizes"),
      topic("picture-element", "<picture>"),
    ]),
    subSection("image-performance", "Image Performance", [
      topic("lazy-loading", "loading=\"lazy\""),
      topic("modern-formats", "Modern image formats"),
      topic("choosing-image-size", "Choosing appropriate image sizes"),
    ]),
  ]),
  section("audio-video", "5.3 Audio & Video", [
    subSection("media-elements", "Media Elements", [
      topic("audio-element", "<audio>"),
      topic("video-element", "<video>"),
      topic("source-element", "<source>"),
    ]),
    subSection("accessible-media", "Accessible Media", [
      topic("controls-attribute", "controls"),
      topic("captions-tracks", "<track> and captions"),
      topic("fallback-content", "Fallback content"),
    ]),
  ]),
  section("embedded-content", "5.4 Embedded Content", [
    subSection("embedding", "Embedding", [
      topic("iframe", "<iframe>"),
      topic("embedded-maps-videos", "Embedded maps and videos"),
      topic("iframe-title", "Iframe titles and accessibility"),
    ]),
    subSection("embedding-considerations", "Embedding Considerations", [
      topic("permissions-sandbox", "Permissions and sandboxing"),
      topic("third-party-content", "Third-party embeds"),
      topic("performance-considerations", "Performance considerations"),
    ]),
  ]),
];
