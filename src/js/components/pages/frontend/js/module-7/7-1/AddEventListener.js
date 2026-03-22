import styleImports from "@css/styles.css?inline";
import styles from "./addEventListener.css?inline";

class AddEventListener extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    // Select button
    const button = document.querySelector("button");

    button.addEventListener("", () => {
      console.log("Listened:", button);
    });
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${styles}
      </style>
      <span>AAA</span>
    `;
  }
}

customElements.define("wc-add-event-listener", AddEventListener);
export default AddEventListener;
