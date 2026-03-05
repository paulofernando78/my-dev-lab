import componentStyles from "@css/imports/component.css?inline";
import hljs from "highlight.js";
import hljsTheme from "highlight.js/styles/vs2015.css?inline";

const style = /* css */ `
  pre {
    position: relative;
    margin: 0;
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  
  .blur-overlay {
    margin: 5px;
    position: absolute;
    
    inset: 0;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    background: rgba(20,20,20,.35);
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s;
  }
  
  :host(.hidden) .blur-overlay {
    opacity: 1;
  }
  
  .hljs {
    display: block;
    margin: 0;
    padding: 0.8rem;
    font-size: 0.9rem;
    white-space: pre-wrap;
    border-radius: inherit;
  }

  .hljs * {
    margin: 0;
    padding: 0;
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

      <pre><div class="blur-overlay"></div><code class="language-${language}"></code></pre>
    `;

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
