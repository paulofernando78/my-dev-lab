import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/atoms/Card.js";
import { module } from "../assets/images/svg-imports"

const style = /* css */ `
  .category-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    flex-wrap: wrap;
    margin-inline: 20px
  }

  .category-icons img {
    width: 40px;
    height: auto;
    margin-top: 3px
  }

  .category-icons-overview {
    width: 25px;
    height: auto
  }

  .card {
    border: 1px solid var(--slate-4);
    border-radius: 5px ;
    padding: 10px;
  }

  .category-label {
    margin-top: 2px
  }

  .modules:not(:last-child) {
    margin-bottom: 1rem;
  }

  .description {
    // font-size: 1rem;
  }

  hr {
    margin-block: 10px;
    border-color: var(--slate-1);
  }
`;

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const categories = [
      // HTML
      {
        icon: "/assets/images/icons/html5.svg",
        name: "HTML",
        modules: 6,
        lessons: [
          {
            title: "Module 1 • Document Foundations",
            description:
              "Understand how HTML documents are structured, including elements, tags, and the basic page skeleton used to build every webpage.",
          },
          {
            title: "Module 2 • Text and Content Structure",
            description:
              "Learn how to organize textual content using headings, paragraphs, emphasis, and semantic text elements for readable and accessible pages.",
          },
          {
            title: "Module 3 • Lists, Links & Navigation",
            description:
              "Create navigation systems using lists and hyperlinks to connect pages and improve user navigation.",
          },
          {
            title: "Module 4 • Media & Embedded Content",
            description:
              "Add images, audio, video, and external content to webpages while maintaining accessibility and performance.",
          },
          {
            title: "Module 5 • Semantic Layout",
            description:
              "Build meaningful page layouts using semantic elements that improve structure, SEO, and accessibility.",
          },
          {
            title: "Module 6 • Forms & Data Submission",
            description:
              "Create interactive forms to collect user input and understand how data is structured for submission.",
          },
        ],
      },
      // CSS
      {
        icon: "/assets/images/icons/css.svg",
        name: "CSS",
        modules: 8,
        lessons: [
          {
            title: "Module 1 • Core Fundamentals",
            description:
              "Learn how CSS applies styles to HTML using selectors, properties, and the cascade to control presentation.",
          },
          {
            title: "Module 2 • Box Model & Spacing",
            description:
              "Understand margins, padding, borders, and sizing to control layout spacing and element dimensions.",
          },
          {
            title: "Module 3 • Typography & Color",
            description:
              "Style text using fonts, sizes, colors, and readability techniques to create visually balanced interfaces.",
          },
          {
            title: "Module 4 • Flexbox",
            description:
              "Build flexible one‑dimensional layouts using alignment, distribution, and responsive flex properties.",
          },
          {
            title: "Module 5 • Grid",
            description:
              "Create complex two‑dimensional layouts using CSS Grid for precise placement and responsive design.",
          },
          {
            title: "Module 6 • Positioning & Layering",
            description:
              "Control element positioning using relative, absolute, fixed, and stacking context concepts.",
          },
          {
            title: "Module 7 • Responsive Design",
            description:
              "Adapt layouts across devices using media queries, fluid units, and mobile‑first techniques.",
          },
          {
            title: "Module 8 • Transitions & Animation",
            description:
              "Add motion and interaction using CSS transitions, transforms, and keyframe animations.",
          },
        ],
      },
      // JS
      {
        icon: "/assets/images/icons/javascript.svg",
        name: "Javascript",
        modules: 10,
        lessons: [
          {
            title: "Module 1 • Language Basics",
            description:
              "Understand variables, data types, and operators to write fundamental JavaScript logic.",
          },
          {
            title: "Module 2 • Control Flow",
            description:
              "Use conditionals and loops to control program execution and handle decision making.",
          },
          {
            title: "Module 3 • Functions",
            description:
              "Create reusable logic using function declarations, expressions, and arrow functions.",
          },
          {
            title: "Module 4 • Data Structures",
            description:
              "Work with arrays and objects to organize and manipulate structured data.",
          },
          {
            title: "Module 5 • DOM Manipulation",
            description:
              "Interact with webpage elements by selecting, creating, and updating the DOM dynamically.",
          },
          {
            title: "Module 6 • Events",
            description:
              "Handle user interactions using event listeners and event‑driven programming concepts.",
          },
          {
            title: "Module 7 • Asynchronous JS",
            description:
              "Manage asynchronous behavior using callbacks, promises, and async/await.",
          },
          {
            title: "Module 8 • APIs & Fetch",
            description:
              "Retrieve and send data using HTTP requests and the Fetch API.",
          },
          {
            title: "Module 9 • Modern JS & Modules",
            description:
              "Organize applications using ES modules, imports, exports, and modern JavaScript syntax.",
          },
          {
            title: "Module 10 • State & Architecture",
            description:
              "Structure scalable applications by managing state and separating logic across components.",
          },
        ],
      },
    ];

    /* html */
    this.shadowRoot.innerHTML = `
      <style>
        ${styleImports}
        ${style}
      </style>
      <section class="line-break home-container" aria-label="My Dev Den">
          <img src="/assets/images/my-dev-den.png"/>
          <p>Welcome to my Dev Den — a personal learning environment built with Web Components using a client-side rendered (CSR) SPA architecture. This project is organized into the following categories:</p>
          <div class="category-icons">
            <img src="/assets/images/icons/html5.svg"/>
            <img src="/assets/images/icons/css.svg"/>
            <img src="/assets/images/icons/javascript.svg"/>
            <img src="/assets/images/icons/nodejs.svg"/>
          </div>
          <h2>Overview</h2>
          ${categories.map(
            (category) => /* html */ `
            <div class="card">
              <div class="flex-align-center">
                <img src="${category.icon}" class="category-icons-overview"/>
                <h3 class="category-label" >${category.name} • ${category.modules} Modules</h3>
              </div>
              <hr />
              <ul>
                ${category.lessons
                  .map(
                    (lesson) => /* html */ `
                  <li class="modules">
                    <h4>${lesson.title}</h4>
                    <p class="description">${lesson.description}</p>
                  </li>
                  `,
                  )
                  .join("")}
              </ul>
            </div>
            `,
          ).join("")}
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home);
