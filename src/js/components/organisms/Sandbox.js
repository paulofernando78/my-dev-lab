import styleImports from "@css/styles.css?inline";

import "@/js/components/atoms/CardCode.js";

const style = /* css */ `
  .container, textarea {
    color: var(--text-color)
  }

  .container {
    background-color: var(--gray-7);
    border-radius: 5px 5px 0 0;
  }
  
  .container__header {
    background-color: var(--gray-7);
    border: 1px solid var(--gray-6);
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
  }
  
  .container__title {
    display: block;
    font-weight: bold;
    padding: 5px;
  }
  
  .container__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;

    border: 1px solid var(--gray-6);
    border-radius: 0 0 5px 5px;
    padding: 5px
  }

  .cards__code-container {
    display: grid;
    gap: 1rem;
  }

  img {
    width: 20px
  }

  textarea {
    width: 100%;
    background-color: var(--gray-8);
    font-family: 'Courier New', Courier, monospace;
    min-height: 150px;
  }

  label {
    font-weight: bold;
  }

  .output-container {
    display: flex;
    flex-direction: column;
  }

  iframe {
    flex: 1;
    width: 100%;
    border-radius: 5px;
    background-color: white;
  }

  @media (width < 600px) {
    .container {
      grid-template-columns: 1fr
    }
  }
`;

class Sandbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // 1️⃣ connectedCallback
  // 2️⃣ iframe loads once
  // 3️⃣ user types
  // 4️⃣ state updates
  // 5️⃣ innerHTML updated inside iframe

  connectedCallback() {
     this.instanceId = this.getAttribute("id") || crypto.randomUUID();
    this.render();
    this.setup();
  }

  state = {
    html: "",
    css: "",
    js: "",
  };

  editors = [
    {
      cardLabelIcon: "/assets/images/icons/html5.svg",
      cardLabel: "HTML",
      id: "htmlCode",
      key: "html",
    },
    {
      cardLabelIcon: "/assets/images/icons/css.svg",
      cardLabel: "CSS",
      id: "cssCode",
      key: "css",
    },
    {
      cardLabelIcon: "/assets/images/icons/javascript.svg",
      cardLabel: "JS",
      id: "jsCode",
      key: "js",
    },
  ];

  setup() {
    const output = this.shadowRoot.querySelector("#output");

    this.editors
      .filter((editor) => this.hasAttribute(editor.key))
      .forEach((editor) => {
        const textarea = this.shadowRoot.querySelector(`#${editor.id}`);
        const saved = localStorage.getItem(
          `sandbox-${this.instanceId}-${editor.key}`,
        );

        if (saved) {
          this.state[editor.key] = saved;
          textarea.value = saved;
        }

        textarea.addEventListener("input", () => {
          this.state[editor.key] = textarea.value;
          localStorage.setItem(
            `sandbox-${this.instanceId}-${editor.key}`,
            textarea.value,
          );
          this.updatePreview();
        });
      });

    this.updatePreview();
  }

  buildDocument() {
    return /* html*/ `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
      ${this.state.css}
      body {
        margin: 0;
        padding: 10px;
        font-family: sans-serif;
      }
    </style>
    </head>
    <body>
      ${this.state.html}
      <script>
        window.addEventListener("DOMContentLoaded", () => {
          ${this.state.js}
        })
      </script>
    </body>
    </html>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      
        <div class="container__header">
          <span class="container__title">Playground</span>
        </div>
        <div class="container__content">
          <!-- Left Column -->
          <div class="cards__code-container">
            ${this.editors
              .filter((editor) => this.hasAttribute(editor.key))
              .map(
                (editor) => /* html */ `
              <wc-card-code cardLabelIcon="${editor.cardLabelIcon}" cardLabel="${editor.cardLabel}">
                <textarea spellcheck="false" autocorrect="off" autocapitalize="off" translate="no" id="${editor.id}"></textarea>
              </wc-card-code>
            `,
              )
              .join("")}
          </div>

          <!-- Right Column -->
          <div class="output-container">
           
            <iframe id="output" sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
      
          
        </div>
      
      
    `;
  }

  updatePreview() {
    const output = this.shadowRoot.querySelector("#output");
    if (!output) return;
    output.srcdoc = this.buildDocument();
  }
}

customElements.define("wc-sandbox", Sandbox);
export default Sandbox;
