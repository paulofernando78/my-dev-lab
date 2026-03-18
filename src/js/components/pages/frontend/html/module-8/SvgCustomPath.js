import styleImports from "@css/styles.css?inline";

const style = /* css */ `

`;

class SvgCustomPath extends HTMLElement {
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
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <div class="wrapper">
        <svg viewBox="0 0 800 200">
          <path
            id="path"
            d="M0,100 C100,20 200,180 300,100 S500,20 600,100 S700,180 800,100"
            fill="none"
            stroke="black"
            stroke-width="2"
          />

          <circle r="15" fill="red">
            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path"></mpath>
            </animateMotion>
          </circle>
        </svg>
      </div>
    `;
  }
}

customElements.define("wc-css-svg-custom-path", SvgCustomPath);
export default SvgCustomPath;
