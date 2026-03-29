import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  ul {
    padding-left: 1.23rem
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
`;

class Links extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  getLinks() {
    const data = this.getAttribute("data-links");
    if (!data) return [];

    try {
      return JSON.parse(decodeURIComponent(data));
    } catch {
      return [];
    }
  }

  render() {
    const links = this.getLinks();
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <ul>
        ${links
          .map(
            (link) => /* html */ `
          <li>
            <a href="${link.href}" target="_blank" rel="noopener"><b>${link.label}</b></a>
          </li>
        `,
          )
          .join("")}
      </ul>
    `;
  }
}

customElements.define("wc-links", Links);
export default Links;
