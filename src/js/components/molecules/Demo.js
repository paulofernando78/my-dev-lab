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
  0% {
    transform: translateX(0) rotate(0deg);
    background-color: green;
    border-radius: 0
  }
  33% {
    transform: translateX(50px) rotate(360deg);
    background-color: red;
    border-radius: 0%
  }
  66% {
    transform: translateX(66px) rotate(360deg);
    background-color: orange;
    border-radius: 50%
  }
  100% {
    transform: translateX(100px) rotate(360deg);
    background-color: blue;
    border-radius: 0%
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
