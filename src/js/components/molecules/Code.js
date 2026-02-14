import componentStyles from "@css/imports/component.css?inline";
import hljs from "highlight.js";
import hljsTheme from "highlight.js/styles/vs2015.css?inline";

const style = /* css */ `
  pre {
    margin: 0;
    background-color: #252525;
    border-radius: var(--border-radius);
    overflow: auto;
  }

.hljs,
.hljs * {
  font-size: 0.9rem;
}

  code {
    font-family: monospace;
  }
`;

class Code extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const language = this.getAttribute("language") || "";

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${componentStyles}
        ${hljsTheme}
        ${style}
      </style>

      <pre><code class="language-${language}"><slot></slot></code></pre>
    `;

    const slot = this.shadowRoot.querySelector("slot");

    slot.addEventListener("slotchange", () => {
      this.highlight();
    });

    const codeEl = this.shadowRoot.querySelector("code");

    // pega o conteúdo escrito dentro do wc-code
    codeEl.textContent = this.innerHTML.trim();

    this.highlight();
  }

  highlight() {
    const codeEl = this.shadowRoot.querySelector("code");
    if (!codeEl) return;

    hljs.highlightElement(codeEl);
  }
}

customElements.define("wc-code", Code);
export default Code;
