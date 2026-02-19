import "../css/navbar.css";

export const links = [
  {
    href: "/",
    page: "Home",
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
            href: "/frontend/html/module-1",
            page: "Module 1 • Document Foundations",
          },
          {
            href: "/frontend/html/module-2",
            page: "Module 2 • Text and Content Structure",
          },
          {
            href: "/frontend/html/module-3",
            page: "Module 3 • Lists, Links & Navigation",
          },
          {
            href: "/frontend/html/module-4",
            page: "Module 4 • Media & Embedded Content",
          },
          {
            href: "/frontend/html/module-5",
            page: "Module 5 • Semantic Layout",
          },
          {
            href: "/frontend/html/module-6",
            page: "Module 6 • Forms & Data Submission",
          },
        ],
      },
      // CSS
      {
        category: "CSS",
        pages: [
          {
            href: "/frontend/css/module-1",
            page: "Module 1 • Core Fundamentals",
          },
          {
            href: "/frontend/css/module-2",
            page: "Module 2 • Layout Systems",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 3 • Responsive Design",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 4 • Architecture & Organization",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 5 • Transitions & Animation",
          },
        ],
      },
      // JS
      {
        category: "JS",
        pages: [
          {
            href: "/frontend/js/module-1",
            page: "Module 1 • Core Language",
          },
          {
            href: "/frontend/js/module-2",
            page: "Module 2 • DOM Manipulation",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 3 • State & Architecture",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 4 • Asynchronous JavaScript",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 5 • SPA & Application Architecture",
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

ul.innerHTML = links.map((link) => /* html */ `
    ${link.page ? /* html */ `<li><a href="${link.href}">${link.page}</a></li>` : ""}
      ${link.section ? /* html */ ` <li class="navbar-section">${link.section}</li>` : ""}
        ${link.categories ? link.categories.map((item) => /* html */ `
                  <li>
                    <details>
                      <summary>${item.category}</summary>
                      <ul>
                      ${
                        item.pages
                          ? item.pages
                              .map(
                                (item) => /* html */ `
                        <li class="page-list">
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
