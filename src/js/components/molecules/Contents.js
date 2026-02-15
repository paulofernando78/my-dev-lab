import componentStyles from "@css/imports/component.css?inline";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 -960 960 960"
          fill="#999999"
        >
          <path
            d="M130-189 81-546q-5-32 15.5-58t52.5-31l61 435 283-40h267q-8 21-24.5 35.5T695-187l-477 66q-33 5-58-15t-30-53Zm190-127q-33 0-56.5-23.5T240-396v-364q0-33 23.5-56.5T320-840h480q33 0 56.5 23.5T880-760v364q0 33-23.5 56.5T800-316H320Zm0-80h480v-364H320v364Zm0 0v-364 364ZM210-200Zm190-400h320v-80H400v80Zm0 120h200v-80H400v80Z"
          />
        </svg>
        <span class="contents-navbar-title">Contents</span>
      </div>

      <nav class="contents-navbar">
        <ul>
          ${contents
            .map(
              (item) => /* html */ `
              <li class="flex-align-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 -960 960 960"
                fill="#999999">
                <path d="M320-316q-33 0-56.5-23.5T240-396v-364q0-33 23.5-56.5T320-840h480q33 0 56.5 23.5T880-760v364q0 33-23.5 56.5T800-316H320Zm0-80h480v-364H320v364Zm0 0v-364 364Zm80-204h320v-80H400v80Zm0 120h200v-80H400v80Z"/></svg>
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
          // block: "start", *default
        });
      });
    });
  }
}

customElements.define("wc-contents", Contents);
export default Contents;
