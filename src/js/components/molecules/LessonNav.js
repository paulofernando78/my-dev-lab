import styleImports from "@css/styles.css?inline";

const style = /* css */ `
  nav {
    margin-inline: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  nav a {
    color: var(--text-color)
  }

  nav a:hover {
    color: var(--blue-4)
  }

  img {
    width: 30px
  }

  .previous, .next {
    display: flex;
    gap: 10px;
  }
  
  .next > div {
    text-align: right 
  }
  
  .previous span,
  .next span {
    display: block;
  }

  .previous span:first-child,
  .next span:first-child {
    font-size: 0.9rem;
    color: var(--slate-4)
  }

  .previous span:last-child,
  .next span:last-child {
    font-weight: bold;
  }
`;

class LessonNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const path = window.location.pathname
    this.render(path);
    console.log(path)
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <hr />
      <nav>
        <a href="" class="previous">
          <img src="/assets/images/icons/arrow-back.svg"/>
          <div>
            <span>Previous</span>
            <span>...</span>
          </div>
        </a>
        <a href="" class="next">
          <div>
            <span>Next</span>
            <span>...</span>
          </div>
          <img src="/assets/images/icons/arrow-forward.svg"/>
        </a>
      </nav>
      `;
    }
  }

customElements.define("wc-lesson-nav", LessonNav);
export default LessonNav;