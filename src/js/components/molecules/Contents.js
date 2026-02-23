import componentStyles from "@css/imports/component.css?inline";
import { contents as contentsIcon, section as sectionIcon, codeBlock } from "../../../assets/images/svg-imports";

const style = /* css */ `
.contents-navbar {
  margin-bottom: 32px
}

.contents-navbar-title {
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
  transform: translateY(3px)
}

.contents-navbar ul ul {
  padding-left: 1.9rem;
  list-style: none;
  margin-bottom: 0.2rem
}

.contents-navbar a {
  font-size: 1rem;
  cursor: pointer
}

.code-block {
  transform: translateY(-1.6px)
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
        <span class="contents-navbar-title">Table of Contents</span>
      </div>

      <nav class="contents-navbar">
        <ul>
          ${contents.map((section) => /* html */ `
              <li>
                <div class="flex-align-center">
                  ${sectionIcon()}
                  <a data-target="${section.id}">${section.sectionLabel}</a>
                </div> 
                <ul>
                  ${section.content
                    ? section.content
                    .filter((subSection) => subSection.subSectionLabel)
                    .map((subSection) => /* html */`
                    <li>
                      <div class="flex-align-center">
                        <span class="code-block">${codeBlock()}</span>
                        <a data-target="${subSection.id}">${subSection.subSectionLabel}</a>
                      </div>
                    </li>
                  `).join("") : ""}
                </ul>
              </li>
            `,
            ).join("")}
        </ul>
      </nav>
    `;

    this.shadowRoot.querySelectorAll("a[data-target]").forEach((link) => {
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
