import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  h1 {
    display: block;
    margin-bottom: 1rem
  }

  div {
    width: 50px;
    height: 50px;
    animation: roll 2s infinite alternate;
    margin-bottom: 10px
  }

  @keyframes roll {
  from {
    transform: translateX(0) rotate(0deg);
    background-color: red;
    border-radius: 0
  }
  to {
    transform: translateX(200px) rotate(360deg);
    background-color: blue;
    border-radius: 50%
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
      <h1>Hello World!</h1>
      <div></div>
    `;
  }
}

customElements.define("wc-demo", Demo);
export default Demo;
