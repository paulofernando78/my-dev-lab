import styleImports from "@css/styles.css?inline";

const style = /* css */ `
.contents-navbar {
  margin-bottom: 30px
}

.contents-navbar-title {
  font-weight: bold;
  text-transform: uppercase
}

.contents-navbar a {
  font-size: 1rem;
}
`;

class Contents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.contents = [];
  }

  render() {
    const contents = this.contents || [];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <span class="contents-navbar-title">Contents</span>

      <nav class="contents-navbar">
        <ul>
          ${contents
            .map(
              (item) => `
              <li>
                <a data-target="${item.id}">${item.label}</a> 
              </li>
            `,
            )
            .join("")}
        </ul>
      </nav>
    `;

    this.shadowRoot.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.dataset.target;
        const host = this.getRootNode().host;
        const target = host.shadowRoot.getElementById(id);

        target?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }
}

customElements.define("wc-contents", Contents);
export default Contents;
