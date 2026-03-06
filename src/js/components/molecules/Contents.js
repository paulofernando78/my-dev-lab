import componentStyles from "@css/imports/component.css?inline";

const style = /* css */ `
  .contents-navbar {
    margin-block: 10px
  }

  .contents-navbar-title {
    font-weight: bold;
    text-transform: uppercase;
    display: block;
  }

  .contents-navbar ul {
    padding-inline-start: 1.6rem;
  }

  .contents-navbar a {
    font-size: 1rem;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .section::before,
  .content::before {
    transform: translateY(-2px)
  }

  .section::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    background: url("/assets/images/icons/section.svg");
  }

  .content::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    background: url("/assets/images/icons/sub-section.svg");
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
        <img src="/assets/images/icons/contents.svg" />
        <span class="contents-navbar-title">Table of Contents</span>
      </div>

      <nav class="contents-navbar">
        <ul>
          ${contents
            .map(
              (section) => /* html */ `
              <li class="section">
                  <a data-target="${section.id}">${section.sectionLabel}</a>
                <ul>
                  ${section.content ? section.content
                     .filter((subSection) => subSection.subSectionLabel)
                     .map((subSection) => /* html */ `
                      <li class="content">
                        <a data-target="${subSection.id}">${subSection.subSectionLabel}</a>
                      </li>
                    `
                    ,).join("")
                    : "" }
                </ul>
              </li>
            `,
            )
            .join("")}
        </ul>
      </nav>
    `;

    this.shadowRoot.querySelectorAll("a[data-target]").forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.dataset.target;
        const root = this.getRootNode({ composed: true });
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
