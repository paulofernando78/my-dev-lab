import "../css/navbar.css";

export const links = [
  {
    href: "/",
    page: "Home",
  },
  //! Frontend
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
            href: "/frontend/html/resouces",
            page: "Resources",
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
            href: "/frontend/css/resources",
            page: "Resources",
          },
          {
            href: "/frontend/css/module-1",
            page: "Module 1 • Core Fundamentals",
          },
          {
            href: "/frontend/css/module-2",
            page: "Module 2 • Box Model & Spacing",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 3 • Typography & Color",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 4 • Flexbox",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 5 • Grid",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 6 • Positioning & Layering",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 5 • Responsive Design",
          },
          {
            href: "/frontend/css/module-3",
            page: "Module 6 • Transitions & Animation",
          },
        ],
      },
      // JS
      {
        category: "JS",
        pages: [
          {
            href: "/frontend/js/module-1",
            page: "Module 1 • Language Basics",
          },
          {
            href: "/frontend/js/module-2",
            page: "Module 2 • Control Flow",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 3 • Functions",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 4 • Data Structures",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 5 • DOM Manipulation",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 6 • Events",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 7 • Asynchronous JS",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 8 • APIs & Fetch",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 9 • Modern JS & Modules",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 10 • State & Architecture",
          },
          {
            href: "/frontend/js/module-3",
            page: "Module 11 • SPA & Application Architecture",
          },
        ],
      }
    ],
  },
  //! Backend
  {
    section: "Backend",
    categories: [
      {
        category: "Node JS",
        pages: [
          {
            href: "backend/node-js/module-1",
            page: "Module 1 • ...",
          },
        ],
      },
    ],
  },
  //! Tools
  {
    section: "Tools",
    categories: [
      {
        category: "Git",
        pages: [
          {
            href: "/git/basics",
            page: "Module 1 • Basics",
          },
          {
            href: "/git/branching",
            page: "Module 2 • Branching",
          },
          {
            href: "/git/remote-repositories",
            page: "Module 3 • Remote Repositories",
          },
          {
            href: "/git/github-workflow",
            page: "Module 4 • Github Workflow",
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
