import componentStyles from "@css/imports/component.css?inline";
import { contents as contentsIcon } from "../../../assets/images/svg-imports";
import { content as contentIcon } from "../../../assets/images/svg-imports";

const style = /* css */ `
.contents-navbar {
  margin-bottom: 30px
}

.contents-navbar-title {
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
  transform: translateY(3px)
}

.contents-navbar a {
  font-size: 1rem;
  cursor: pointer
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
        ${componentStyles}
        ${style}
      </style>

      <div class="flex-align-center">
        ${contentsIcon()}
        <span class="contents-navbar-title">Contents</span>
      </div>

      <nav class="contents-navbar">
        <ul>
          ${contents
            .map(
              (item) => /* html */ `
              <li class="flex-align-center">
                ${contentIcon()}
                <a data-target="${item.id}">${item.sectionLabel}</a> 
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
        const root = this.getRootNode();
        const target = root.getElementById(id);
        console.log(target);

        target?.scrollIntoView({
          behavior: "smooth",
          // block: "start", *default
        });
      });
    });
  }
}

customElements.define("wc-contents", Contents);
export default Contents;
