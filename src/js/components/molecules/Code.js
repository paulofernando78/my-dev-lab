import componentStyles from "@css/imports/component.css?inline";
import hljs from "highlight.js";
import hljsTheme from "highlight.js/styles/vs2015.css?inline";

const style = /* css */ `
  :host {
    display: block;
  }

  pre {
    position: relative;
    margin: 0;
    border-radius: var(--border-radius);
    overflow: auto;
  }
  
  .blur-overlay {
    position: absolute;
    inset: 5px;
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

    const rawCode = this.innerHTML.trim();
    // decode HTML entities like &gt; &lt; etc.
    const decoder = document.createElement("textarea");
    decoder.innerHTML = rawCode;
    const decodedCode = decoder.value;

    const codeEl = this.shadowRoot.querySelector("code");
    codeEl.textContent = decodedCode;

    this.highlight();
  }

  highlight() {
    const codeEl = this.shadowRoot.querySelector("code");
    hljs.highlightElement(codeEl);
  }
}

customElements.define("wc-code", Code);
export default Code;
