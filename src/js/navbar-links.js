import "../css/navbar.css";

export const links = [
  {
    href: "/",
    page: "Home",
  },
  {
    href: "/about",
    page: "About",
  },
  {
    section: "Frontend",
    categories: [
      // Architecture
      {
        category: "Architecture",
        pages: [
          {
            href: "/frontend/architecture/atomic-design",
            page: "Atomic Design",
          },
        ],
      },
      // HTML
      {
        category: "HTML",
        pages: [
          {
            href: "/frontend/html/tags",
            page: "Tags",
          },
        ],
      },
      // CSS
      {
        category: "CSS",
        pages: [
          {
            href: "/frontend/css/selectors",
            page: "Selectors",
          },
          {
            href: "/frontend/css/flex",
            page: "Flex",
          },
          {
            href: "/frontend/css/grid",
            page: "Grid",
          },
        ],
      },
      // JS
      {
        category: "JS",
        pages: [
          {
            href: "/frontend/js/logic",
            page: "Logic",
          },
          {
            href: "/frontend/js/dom",
            page: "DOM",
          },
          {
            href: "/frontend/js/conditional-rendering",
            page: "Conditional Rendering",
          },
          {
            href: "/frontend/js/scroll-behavior",
            page: "Scroll Behavior",
          },
        ],
      },
    ],
  },
  {
    section: "Backend",
    categories: [
      {
        category: "Node JS",
        pages: [
          {
            href: "/node/...",
            page: "...",
          },
        ],
      },
    ],
  },
];

const ul = document.querySelector("#navbar-links");

ul.innerHTML = links
  .map(
    (link) => /* html */ `
    ${link.page ? /* html */ `<li><a href="${link.href}">${link.page}</a></li>` : ""}
      ${link.section ? /* html */ ` <li class="navbar-section">${link.section}</li>` : ""}
        ${
          link.categories
            ? link.categories
                .map(
                  (item) => /* html */ `
                  <li>
                    <details>
                      <summary>${item.category}</summary>
                      <ul>
                      ${
                        item.pages
                          ? item.pages
                              .map(
                                (item) => /* html */ `
                        <li>
                        <a href="${item.href}" class="page-link">${item.page}</a>
                        </li>
                        `,
                              )
                              .join("")
                          : ""
                      }
                      </ul>
                    </details>
                  </li>
                  `,
                )
                .join("")
            : ""
        } 
    `,
  )
  .join("");
