import * as icons from "/src/assets/images/svg-imports";

class Icon extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name");
    this.innerHTML = icons[name]?.() ?? "";
  }
}

export default Icon;
