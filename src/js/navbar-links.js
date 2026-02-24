import "../css/navbar.css";
import { curriculum } from "../data/curriculum";

const style = /* css */ `
  .section {
  font-size: 1.5rem
  }  

  .wrapper {
    display: flex;
    align-items: center;
    gap: 7px
  }

   .icon {
    width: 20px
  }

  .category {
    font-size: 1.3rem;
    transform: translateY(1px)
  }
  
  .modules {
    display: flex;
    flex-direction: column;
    gap: 5px
  }

  .module {
    border-left: 3px solid var(--slate-4);
    padding-left: 5px;
    font-size: 1.1rem
  }
`;

const ul = document.querySelector("#navbar-links");

ul.innerHTML = /* html */ `
  <style>
    ${style}
  </style>
  
  <div class="">
    <li><a href="/">Home</a></li>
    <li><a href="/resources">Resources</a></li>
  </div>

  ${curriculum.map((section) => /* html */ `
    <span class="section">${section.section}</span>
    ${section.categories.map((category) => /* html */ `
    <li>
      <details>
        <summary>
          <div class="wrapper">
            <img src="${category.icon}" class="icon"/>
            <span class="category">${category.category}</span>
            </summary>
          </div>

        <ul class="modules">
          ${category.modules.map((module) => /* html */ `
            <li class="module"><a href="${module.href}"></a>${module.module}
          </li>
          `,
            ).join("")}
        </ul>
      </details>
    </li>
    `,
    ).join("")}
  `,
    ).join("")}`;

// ul.innerHTML = curriculum.map((link) => /* html */ `
//     ${link.page ? /* html */ `<li><a href="${link.href}">${link.page}</a></li>` : "" }
//       ${link.section ? /* html */ ` <li class="navbar-section">${link.section}</li>` : "" }
//         ${link.categories ? link.categories.map((item) => /* html */ `
//           <li>
//             <details>
//               <summary>${item.category}</summary>
//               <ul>
//                 ${item.pages
//                   ? item.pages.map((item) => /* html */ `
//                   <li class="page-list">
//                     <a href="${item.href}" class="page-link">${item.page}</a>
//                   </li>
//                 `,
//                 ).join("")
//                 : "" }
//               </ul>
//             </details>
//           </li>
//           `,
//           ).join("") : ""
//         }
// `,
// ).join("");
