import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  :host {
    display: block;
    aspect-ratio: 16 / 9
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

class Image extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    const srcAttr = this.getAttribute("src") ?? "";
    const altAttr = this.getAttribute("alt") ?? "image";

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <img src="${srcAttr}" alt="${altAttr}" />
    `;
  }
}

customElements.define("wc-image", Image);
export default Image;
