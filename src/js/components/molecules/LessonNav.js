import styleImports from "@css/styles.css?inline";
import { curriculum } from "@/data/curriculum.js";

const style = /* css */ `
  nav {
    
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

  .previous,
  .next {
    margin-inline: 10px
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
    const path = window.location.pathname;
    this.render(path);
  }

  render(path) {
    // Build orders list of all modules
    const modules = curriculum
      .flatMap((section) => section.categories ?? [])
      .flatMap((category) => category.modules ?? [])
      .filter((m) => m.href);

    // Create lessons-only list (ignore Resources)
    const lessons = modules.filter((m) => m.module !== "Resources");
    // -> [Module1, Module2, Module3...]

    // Create function to get number
    const getModuleNumber = (mod) =>
      lessons.findIndex((l) => l.href === mod.href) + 1;

    const formatLabel = (mod) =>
      mod.module === "Resources"
        ? mod.module
        : `Module ${getModuleNumber(mod)} • ${mod.module}`

    // Find current module index
    const index = modules.findIndex((m) => m.href === path);

    if (index === -1) return;

    const prev = modules[index - 1];
    const next = modules[index + 1];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>
      <hr />
      <nav>
        ${prev
          ? /* html */ `
          <a href="${prev.href}" class="previous">
          <img src="/assets/images/icons/arrow-back.svg" />
          <div>
            <span>Previous</span>
            <span>${formatLabel(prev)}</span>

          </div>
        </a>
        `
          : /* html */ `<span></span>`}
        ${next
          ? /* html */ `
          <a href="${next.href}" class="next">
          <div>
            <span>Next</span>
            <span>${formatLabel(next)}</span>
          </div>
          <img src="/assets/images/icons/arrow-forward.svg" />
        </a>
        `
          : /* html */ `<span></span>`}
      </nav>
    `;
  }
}

customElements.define("wc-lesson-nav", LessonNav);
export default LessonNav;
