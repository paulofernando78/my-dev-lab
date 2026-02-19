import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/Card.js";
import "@/js/components/atoms/Wrapper.js";
import "@/js/components/atoms/Description.js";
import "@/js/components/molecules/Code.js";
import "@/js/components/atoms/Notes.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `

`;

class ModuleFour extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      {
        sectionId: "media",
        sectionLabel: "Media & Embedded Content",
        sectionAriaLabel: "Media and Embedded Content",
        examples: [
          {
            cardLabel: "Image",
            language: "html",
            code: `
<img src="image.jpg" alt="Description">
        `,
            preview: () => `
<img src="/assets/images/semantic.jpg" alt="Example image">
        `,
          },
          {
            cardLabel: "Figure & Figcaption",
            language: "html",
            code: `
<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Image description</figcaption>
</figure>
        `,
            preview: () => `
<figure>
  <img src="/assets/images/semantic.jpg" alt="Example image">
  <figcaption>Image description</figcaption>
</figure>
        `,
          },
          {
            cardLabel: "Audio",
            language: "html",
            code: `
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
        `,
            preview: () => `
<audio controls></audio>
        `,
          },
          {
            cardLabel: "Video",
            language: "html",
            code: `
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
        `,
            preview: () => `
<video controls width="320"></video>
        `,
          },
          {
            cardLabel: "Iframe",
            language: "html",
            code: `
<iframe src="https://example.com"></iframe>
        `,
            preview: () => `
<iframe src="https://example.com" width="300" height="150"></iframe>
        `,
          },
        ],
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>

      <wc-page-header
        category="HTML"
        page="Module 4"
        unit="Media & Embedded Content"
        aria-label="..."
      ></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">
        ${renderSections(sections)}
      </div>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-html-module-four", ModuleFour);
export default ModuleFour;
