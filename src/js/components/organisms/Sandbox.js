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
    gap: 5px;
  }

  .header {
    border-radius: 5px 5px 0 0;
    background-color: #374152;
    background-color: var(--slate-7);
    padding: 1px 4px;
    color: #fff;
    grid-column: 1 / -1
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

  .reset-btn,
  .run-btn {
    background-color: var(--slate-7);
    border-radius: 50%;
    cursor: pointer;
    width: 19px;
    height: 19px
  }

   .monaco-editor {
    overflow: hidden;
  }

  .output {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  
  .output iframe {
    width: 100%;
    height: 100%;
    border: 0
  }

  .console {
   grid-column: 1 / -1
  }

  .console-header,
  .output-header {
    background-color: #374152;
    background-color: var(--slate-7);
    padding: 5px;
  }

  .console-display {
    border-radius: 0 0 5px 5px;
    background: #1E1E1E;
    color: #8BE9FD;
    font-family: monospace;
    font-size: 13.5px;
    padding: 8px;
    height: 150px;
    overflow: auto;
  }
  
  .console-line {
    white-space: pre-wrap;
  }
  
  .console-display *,
  .console-display summary,
  .console-object-row {
    font-size: inherit;
    font-family: inherit;
    line-height: 1.4;
  }

  .console-object-row {
    padding-left: 14px;
  }

  .console-log {
    color: #E6E6E6;
  }

  .console-warn {
    color: #F1FA8C;
  }

  .console-error {
    color: #FF5555;
  }

  .console-info {
    color: #50FA7B;
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

    this.updateOutputDebounced = this.debounce(this.updateOutput, 300);

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

    this.messageHandler = (event) => {
      if (!event.data || event.data.type !== "sandbox-console") return;

      if (event.source !== this.iframe.contentWindow) return;

      if (event.data.level === "clear") {
        this.consoleEl.innerHTML = "";
        return;
      }

      const line = document.createElement("div");
      line.className = "console-line";
      line.classList.add(`console-${event.data.level}`);

      const time = new Date().toLocaleTimeString();

      const prefix = document.createElement("span");
      prefix.textContent = `[${time}] [${event.data.level}] `;
      line.appendChild(prefix);

      const renderValue = (value) => {
        if (value === null || typeof value !== "object") {
          const span = document.createElement("span");

          if (typeof value === "string") {
            span.textContent = `"${value}" `;
            span.style.color = "#50FA7B"; // green
          } else if (typeof value === "number") {
            span.textContent = value + " ";
            span.style.color = "#8BE9FD"; // blue
          } else if (typeof value === "boolean") {
            span.textContent = value + " ";
            span.style.color = "#BD93F9"; // purple
          } else if (value === null) {
            span.textContent = "null ";
            span.style.color = "#FF79C6"; // pink
          } else {
            span.textContent = String(value) + " ";
          }

          return span;
        }

        const details = document.createElement("details");
        details.open = false;
        const summary = document.createElement("summary");

        let label;

        if (value && value.__type === "Window") {
          label = "Window";
        } else if (Array.isArray(value)) {
          const preview = value
            .slice(0, 3)
            .map((v) => String(v))
            .join(", ");
          label = `Array(${value.length}) [ ${preview}${value.length > 3 ? ", …" : ""} ]`;
        } else {
          const entries = Object.entries(value).slice(0, 3);
          const preview = entries
            .map(([k, v]) => `${k}: ${typeof v === "string" ? `"${v}"` : v}`)
            .join(", ");
          label = `Object { ${preview}${Object.keys(value).length > 3 ? ", …" : ""} }`;
        }

        summary.textContent = label;
        details.appendChild(summary);

        const entries = Object.entries(value).slice(0, 20);
        entries.forEach(([k, v]) => {
          const row = document.createElement("div");
          row.className = "console-object-row";

          const key = document.createElement("span");
          key.textContent = k + ": ";
          key.style.color = "#AAAAAA"; // key color

          const val = document.createElement("span");

          if (typeof v === "string") {
            val.textContent = `"${v}"`;
            val.style.color = "#50FA7B";
          } else if (typeof v === "number") {
            val.textContent = v;
            val.style.color = "#8BE9FD";
          } else if (typeof v === "boolean") {
            val.textContent = v;
            val.style.color = "#BD93F9";
          } else if (v === null) {
            val.textContent = "null";
            val.style.color = "#FF79C6";
          } else if (typeof v === "object") {
            val.textContent = "[Object]";
          } else {
            val.textContent = String(v);
          }

          row.appendChild(key);
          row.appendChild(val);

          details.appendChild(row);
        });

        return details;
      };

      if (event.data.args) {
        event.data.args.forEach((arg) => {
          line.appendChild(renderValue(arg));
        });
      }

      this.consoleEl.appendChild(line);
      this.consoleEl.scrollTop = this.consoleEl.scrollHeight;
    };

    window.addEventListener("message", this.messageHandler);

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

        if (editorType === "console") {
          this.consoleEl.innerHTML = "";
          return;
        }

        if (!editorType || !this.editors[editorType]) return;

        this.editors[editorType].setValue("");
        localStorage.removeItem(`sandbox-${this.id}-${editorType}`);
        this.updateOutput();
      });
    });

    this.runBtn = this.shadowRoot.querySelector(".run-btn");

    if (this.runBtn) {
      this.runBtn.addEventListener("click", () => {
        this.updateOutput();
      });
    }

    Object.entries(this.editors).forEach(([key, editor]) => {
      editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        this.saveDebounced(key, value);
        this.updateOutputDebounced();
      });
    });

    this.updateOutput();
  }

  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler);
  }

  render() {
    const enableHTML = this.hasAttribute("html");
    const enableCSS = this.hasAttribute("css");
    const enableJS = this.hasAttribute("js");
    const enableConsole = this.hasAttribute("console");

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        ${styleImports}
        ${monacoCss}
        ${style}
      </style>
      
      <div class="sandbox">
        <div class="header flex-align-center">
          <img src="/assets/images/icons/practice.svg" class="icon"/>
          <span class="title">Practice</span>
        </div>

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
            </div>`
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
            </div>`
              : ""
          }
          </div>

          <div class="output">
            <div class="output-header flex-align-center">
              <img src="/assets/images/icons/output.svg" class="icon"/>
              <span><b>Output</b></span>  
            </div>
            <iframe id="output"></iframe>
          </div>

          ${
            enableConsole
              ? /* html */ `
            <div class="console">
              <div class="console-header flex-space-between">
                <div class="flex-align-center">
                  <img src="/assets/images/icons/console.svg" class="icon"/>
                  <span><b>Console</b></span>
                </div>
                <div class="flex-align-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" class="run-btn"/></svg>
                <img src="/assets/images/icons/reset.svg" class="icon reset-btn" data-editor="console"/>
                </div>
              </div>
              <div id="console" class="console-display"></div>
            </div>
            `
              : ""
          }   
      </div>
    `;
  }

  updateOutput() {
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
            margin: 10px 9px;
            padding: 0;
            background: white !important;
            color: black !important;
            color-scheme: light;
            font-family: "Roboto", sans-serif;
          }
          ${styleImports}
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          const sanitize = (value, depth = 0) => {
            if (depth > 2) return "[Object]";
          
            if (value === window) {
              return {
                __type: "Window",
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                location: window.location.href,
                document: "[Document]"
              };
            }
            if (value === document) return "[Document]";
          
            const type = typeof value;
          
            if (
              value === null ||
              type === "string" ||
              type === "number" ||
              type === "boolean" ||
              type === "undefined"
            ) {
              return value;
            }
          
            if (type === "function") {
              return "[Function]";
            }
          
            if (Array.isArray(value)) {
              return value.slice(0, 20).map(v => sanitize(v, depth + 1));
            }
          
            if (type === "object") {
              const obj = {};
              const entries = Object.entries(value).slice(0, 20);
              entries.forEach(([k, v]) => {
                try {
                  obj[k] = sanitize(v, depth + 1);
                } catch {
                  obj[k] = "[Unserializable]";
                }
              });
              return obj;
            }
          
            return String(value);
          };
          
          const send = (type, args) => {
            const safeArgs = args.map(a => {
              try {
                return sanitize(a);
              } catch {
                return "[Unserializable]";
              }
            });
          
            parent.postMessage({
              type: "sandbox-console",
              level: type,
              args: safeArgs
            }, "*");
          };

          const intercept = (type) => {
            const original = console[type];

            console[type] = (...args) => {
              send(type, args);

              original(...args);
            };
          };

          intercept("log");
          intercept("error");
          intercept("warn");
          intercept("info");

          window.onerror = function(message, source, lineno, colno, error) {
            send("error", [message]);
          };

          window.onunhandledrejection = function(event) {
            send("error", [event.reason ? event.reason.toString() : "Unhandled Promise rejection"]);
          };

          console.clear = () => {
            send("clear", []);
          };

          try {
            const userCode = ${JSON.stringify(js)};
            if (userCode && userCode.trim()) {
              new Function(userCode)();
            }
          } catch (err) {
            send("error", [err.toString()]);
          }
        </script>
      </body>
    </html>
  `;
  }
}

customElements.define("wc-sandbox", Sandbox);
export default Sandbox;
