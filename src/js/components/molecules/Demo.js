import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  span {
    display: block;
    margin-bottom: 1rem
  }

  div {
    width: 50px;
    height: 50px;
    background-color: red;
    animation: roll 2s infinite alternate;
    margin-bottom: 10px
  }

  @keyframes roll {
    from {
      transform: translateX(0) rotate(0deg);
    }
    to {
      transform: translateX(100px) rotate(360deg);
    }
  }
`;

class Demo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // cleanup (events, intervals, observers)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <span>Hello World!</span>
      <div></div>
      `;
    }
  }

customElements.define("wc-demo", Demo);
export default Demo;