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
  :root {
    --card-height: 30px
  }

  .sandbox {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 5px;
  }

  .header {
    height: var(--car-height);
    border-radius: 5px 5px 0 0;
    background-color: #374152;
    background-color: var(--slate-7);
    border-bottom: 5px solid #0D0F12;
    padding: 1px 4px
  }

  .title {
    font-weight: bold;
    padding-block: 5px
  }
  .editors {
    display: grid;
    gap: 5px
  }
  
  .editors,
  .editors > div,
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
  
  .editors-header {
    display: flex;
    justify-content: space-between;

    background-color: var(--slate-7);
    padding: 5px
  }

  .icon {
    width: var(--icon)
  }

  .reset-btn {
    background-color: var(--slate-7);
    border-radius: 50%;
    cursor: pointer;
    width: 19px;
    height: 19px
  }

   .monaco-editor {
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }

  .preview {
    min-width: 0;
  }

  .preview iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  .console {
   grid-column: 1 / -1
  }

  .console-header,
  .output-header {
    background-color: #374152;
    background-color: var(--slate-7);
    border-bottom: 5px solid #0D0F12;
    padding: 5px;
  }

  .console-display {
    border: 1px solid var(--slate-5);
    border-radius: 0 0 5px 5px;
    background: #0D0F12;
    color: #8BE9FD;
    font-family: monospace;
    font-size: 12px;
    padding: 8px;
    height: 150px;
    overflow: auto;
  }

  .console-line {
    white-space: pre-wrap;
  }

  @media (width < 876px) {
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

    this.consoleEl = this.shadowRoot.querySelector("#console");

    window.addEventListener("message", (event) => {
      if (!event.data || event.data.type !== "sandbox-console") return;

      const line = document.createElement("div");
      line.className = "console-line";
      line.textContent = event.data.message;
      this.consoleEl.appendChild(line);

      this.consoleEl.scrollTop = this.consoleEl.scrollHeight;
    });

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

      <div class="header flex-align-center">
        <img src="/assets/images/icons/practice.svg" class="icon"/>
        <span class="title">Practice</span>
      </div>

      <div class="sandbox">
        <div class="editors">

          ${
            enableHTML
              ? /* html */ `
            <div>
              <div class="editors-header">
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
              <div class="editors-header">
                <img src="/assets/images/icons/css.svg" class="icon"/>
                <img src="/assets/images/icons/reset.svg" class="icon reset-btn" data-editor="css"/>
              </div>
              <div id="css-editor"></div>
            </div>
          `
              : ""
          }

          ${
            enableJS
              ? /* html */ `
          <div>
            <div class="editors-header">
              <img src="/assets/images/icons/javascript.svg" class="icon"/>
              <img src="/assets/images/icons/reset.svg" class="icon reset-btn" data-editor="js"/>
            </div>
            <div id="js-editor"></div>
          </div>
          `
              : ""
          }
        </div>

        <div class="preview">
          <div class="output-header flex-align-center">
            <img src="/assets/images/icons/output.svg" class="icon"/>
            <span><b>Console</b></span>  
          </div>
          <iframe id="output"></iframe>
        </div>

        <div class="console">
          <div class="console-header flex-align-center">
            <img src="/assets/images/icons/console.svg" class="icon"/>
            <span><b>Console</b></span>  
          </div>
          <div id="console" class="console-display"></div>
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
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <style>
          html, body {
            margin: 0;
            padding: 10px;
            background: white !important;
            color: black !important;
            color-scheme: light;
            font-family: "Roboto", sans-serif;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          const send = (msg) => {
            parent.postMessage({
              type: "sandbox-console",
              message: msg
            }, "*");
          };

          const originalLog = console.log;
          console.log = (...args) => {
            send(args.join(" "));
            originalLog(...args);
          };

          try {
            ${js}
          } catch (err) {
            send(err.toString());
          }
        </script>
      </body>
    </html>
  `;
  }
}

customElements.define("wc-sandbox", Sandbox);
export default Sandbox;
