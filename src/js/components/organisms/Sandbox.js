import styleImports from "@css/styles.css?inline";

import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import monacoCss from "monaco-editor/min/vs/editor/editor.main.css?inline";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "html") return new htmlWorker();
    if (label === "css") return new cssWorker();
    if (label === "typescript" || label === "javascript") return new tsWorker();
    return new editorWorker();
  },
};

const style = /* css */ `
  .sandbox {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 8px;
  }
  
  .sandbox__editors,
  .sandbox__preview {
    min-width: 0;
  }

  .sandbox__editors,
  .sandbox__editors > div,
  #html-editor,
  #css-editor,
  #js-editor {
    min-width: 0;
  }

  #html-editor,
  #css-editor,
  #js-editor {
    height: 200px;
  }
  
  .sandbox__header {
    display: flex;
    justify-content: space-between;

    border-radius: 5px 5px 0 0;
    background-color: #1E1E1E;
    border-bottom: 2px solid #0D0F12;
    padding: 7px 5px 5px
  }

  .icon {
    width: var(--icon)
  }

  .reset-btn {
    background-color: #1E1E1E;
    border-radius: 50%;
    cursor: pointer;
    width: 19px;
    height: 19px
  }

   .monaco-editor {
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }

  .sandbox__preview {
    min-width: 0;
  }

  .sandbox__preview iframe {
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (width < 700px) {
    .sandbox {
      grid-template-columns: 1fr;
    }
  }
`;

class Sandbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  saveToStorage(key, value) {
    localStorage.setItem(`sandbox-${this.id}-${key}`, value);
  }

  connectedCallback() {
    // Prevent multiple initializations
    if (this.editors) return;

    this.render();

    this.updatePreviewDebounced = this.debounce(this.updatePreview, 300);

    this.saveDebounced = this.debounce(this.saveToStorage, 500);

    const enableHTML = this.hasAttribute("html");
    const enableCSS = this.hasAttribute("css");
    const enableJS = this.hasAttribute("js");

    this.editors = {};

    if (enableHTML) {
      this.editors.html = monaco.editor.create(
        this.shadowRoot.querySelector("#html-editor"),
        {
          value: localStorage.getItem(`sandbox-${this.id}-html`) || "",
          language: "html",
          theme: "vs-dark",
          automaticLayout: true,
          minimap: { enabled: false },

          tabSize: 2,
          insertSpaces: true,
          detectIndentation: false,

          padding: {
            top: 15,
            bottom: 15,
          },

          glyphMargin: false,
          lineNumbersMinChars: 2,
          lineDecorationsWidth: 12,
          folding: false,
          wordWrap: "on",

          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: "on",
        },
      );
    }

    if (enableCSS) {
      this.editors.css = monaco.editor.create(
        this.shadowRoot.querySelector("#css-editor"),
        {
          value: localStorage.getItem(`sandbox-${this.id}-css`) || "",
          language: "css",
          theme: "vs-dark",
          automaticLayout: true,
          minimap: { enabled: false },

          tabSize: 2,
          insertSpaces: true,
          detectIndentation: false,

          padding: {
            top: 15,
            bottom: 15,
          },

          glyphMargin: false,
          lineNumbersMinChars: 2,
          lineDecorationsWidth: 12,
          folding: false,
          wordWrap: "on",

          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: "on",
        },
      );
    }

    if (enableJS) {
      this.editors.js = monaco.editor.create(
        this.shadowRoot.querySelector("#js-editor"),
        {
          value: localStorage.getItem(`sandbox-${this.id}-js`) || "",
          language: "javascript",
          theme: "vs-dark",
          automaticLayout: true,
          minimap: { enabled: false },

          tabSize: 2,
          insertSpaces: true,
          detectIndentation: false,

          padding: {
            top: 15,
            bottom: 15,
          },

          glyphMargin: false,
          lineNumbersMinChars: 2,
          lineDecorationsWidth: 12,
          folding: false,
          wordWrap: "on",

          quickSuggestions: true,
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: "on",
        },
      );
    }

    this.iframe = this.shadowRoot.querySelector("#output");

    // click reset
    // ↓
    // descobre qual editor
    // ↓
    // limpa o código
    // ↓
    // remove localStorage
    // ↓
    // atualiza iframe

    const resetButtons = this.shadowRoot.querySelectorAll(".reset-btn");

    resetButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const editorType = btn.dataset.editor;
        if (!editorType || !this.editors[editorType]) return;

        this.editors[editorType].setValue("");
        localStorage.removeItem(`sandbox-${this.id}-${editorType}`);
        this.updatePreview();
      });
    });

    Object.entries(this.editors).forEach(([key, editor]) => {
      editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        this.saveDebounced(key, value);
        this.updatePreviewDebounced();
      });
    });

    this.updatePreview();
  }

  render() {
    const enableHTML = this.hasAttribute("html");
    const enableCSS = this.hasAttribute("css");
    const enableJS = this.hasAttribute("js");

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${styleImports}
        ${monacoCss}
        ${style}
      </style>

      <div class="sandbox">
        <div class="sandbox__editors line-break">

          ${
            enableHTML
              ? /* html */ `
          <div>
            <div class="sandbox__header">
              <img src="/assets/images/icons/html5.svg" class="icon"/>
              <img src="/assets/images/icons/reset.svg" class="icon reset-btn" data-editor="html"/>
            </div>
            <div id="html-editor"></div>
          </div>`
              : ""
          }

          ${
            enableCSS
              ? /* html */ `
          <div>
            <div class="sandbox__header">
              <img src="/assets/images/icons/css.svg" class="icon"/>
              <img src="/assets/images/icons/reset.svg" class="icon reset-btn" data-editor="csss"/>
            </div>
            <div id="css-editor"></div>
          </div>`
              : ""
          }

          ${
            enableJS
              ? /* html */ `
          <div>
            <div class="sandbox__header">
              <img src="/assets/images/icons/javascript.svg" class="icon"/>
              <img src="/assets/images/icons/reset.svg" class="icon reset-btn" data-editor="js"/>
            </div>
            <div id="js-editor"></div>
          </div>`
              : ""
          }
        </div>

        <div class="sandbox__preview">
          <iframe id="output"></iframe>
        </div>
      </div>
    `;
  }

  updatePreview() {
    const html = this.editors.html ? this.editors.html.getValue() : "";
    const css = this.editors.css ? this.editors.css.getValue() : "";
    const js = this.editors.js ? this.editors.js.getValue() : "";

    this.iframe.srcdoc = /* html */ `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 10px;
            background: white !important;
            color: black !important;
            color-scheme: light;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
  `;
  }
}

customElements.define("wc-sandbox", Sandbox);
export default Sandbox;
