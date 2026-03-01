import styleImports from "@css/styles.css?inline";

import "@/js/components/atoms/CardCode.js";

const style = /* css */ `
  .container, textarea {
    border: 1px solid var(--gray-5);
    border-radius: var(--border-radius);
    padding: 5px;
    color: var(--text-color)
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }

  .cards-code-container {
    display: grid;
    gap: 1rem;
  }

  img {
    width: 20px
  }

  textarea {
    width: 100%;
    height: calc(100% - 1.7rem);
    background-color: var(--gray-8);
    font-family: 'Courier New', Courier, monospace;
    min-height: 200px;

  }

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: white
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

    this.editors.forEach((editor) => {
      const textarea = this.shadowRoot.querySelector(`#${editor.id}`);
      const saved = localStorage.getItem(`sandbox-${editor.key}`);

      if (saved) {
        this.state[editor.key] = saved;
        textarea.value = saved;
      }

      textarea.addEventListener("input", () => {
        this.state[editor.key] = textarea.value;
        localStorage.setItem(`sandbox-${editor.key}`, textarea.value);
        this.updatePreview();
      });
    });

    output.srcdoc = this.buildDocument();
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
        ${this.state.js}
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
      <div class="container">
        <!-- Left Column -->
        <div class="cards-code-container">
          ${this.editors.map((editor) => /* html */ `
            <wc-card-code cardLabelIcon="${editor.cardLabelIcon}" cardLabel="${editor.cardLabel}">
              <textarea spellcheck="false" id="${editor.id}"></textarea>
            </wc-card-code>
          `,).join("")}
        </div>

        <!-- Right Column -->
        <iframe id="output" sandbox="allow-scripts allow-same-origin"></iframe>
      </div>
    `;
  }

  updatePreview() {
    const output = this.shadowRoot.querySelector("#output");
    output.srcdoc = this.buildDocument();
  }
}

export default Sandbox;
