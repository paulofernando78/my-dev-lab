import styleImports from "@css/styles.css?inline";
import "@/js/components/molecules/PageHeader.js";
import "@/js/components/molecules/Contents.js";
import "@/js/components/molecules/Section.js";
import "@/js/components/atoms/CardCode.js";
import "@/js/components/atoms/Wrapper.js";

import "@/js/components/molecules/Code.js";
import "@/js/components/molecules/Links.js";

import "@/js/components/molecules/LessonNav.js";
import { setupContents } from "@/js/utils/setupContents.js";
import { renderSections } from "@/js/renderers/renderSection";

const style = /* css */ `
  
`;

class Resources extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const sections = [
      {
        sectionId: "sites",
        sectionLabel: "Sites",
        sectionAriaLabel: "Sites",
        links: [
          {
            href: "https://developer.mozilla.org/en-US/",
            label: "MDN Web Docs | HTML: HyperText Markup Language | MDN",
          },
          {
            href: "https://www.landingfolio.com/",
            label:
              "Landing Folio | The Best Landing Page Design Inspiration, Templates and More",
          },
          {
            href: "https://drive.google.com/drive/u/0/folders/1A7hWfkd7FAP1ukkw2l404C2wk0NsbmeR",
            label: "Daily Dev | Where developers suffer together",
          },
          {
            href: "https://drive.google.com/drive/u/0/folders/1A7hWfkd7FAP1ukkw2l404C2wk0NsbmeR",
            label: "Google Drive | PDF Books",
          },
          {
            href: "https://caniuse.com/",
            label: "Can I use...?",
          },
        ],
      },
      {
        sectionId: "free-courses",
        sectionLabel: "Free Courses (English)",
        sectionAriaLabel: "Free Courses",
        links: [
          {
            href: "https://www.freecodecamp.org/",
            label: "Free Code Camp",
          },
          {
            href: "https://www.theodinproject.com/",
            label: "The Odin Project",
          },
          {
            href: "https://exercism.org/",
            label: "Exercism",
          },
          {
            href: "https://web.dev/",
            label: "Web Dev | Google Chrome Developers",
          },
          {
            href: "https://scratch.mit.edu/",
            label: "Scratch MIT",
          },
        ],
      },
      {
        sectionId: "free-courses",
        sectionLabel: "Free Trial Courses (English)",
        sectionAriaLabel: "Free Courses",
        links: [
          {
            href: "https://www.boot.dev/",
            label: "Boot.Dev",
          },
          {
            href: "https://scrimba.com/home",
            label: "Scrimba",
          },
        ],
      },
      {
        sectionId: "paid-courses",
        sectionLabel: "Paid Courses (English)",
        sectionAriaLabel: "Paid Courses",
        links: [
          {
            href: "https://www.coursera.org/professional-certificates/meta-front-end-developer/",
            label: "Coursera | Meta Front-End Developer",
          },
          {
            href: "https://www.rocketseat.com.br/",
            label: "Rocketseat",
          },
          {
            href: "https://frontendmasters.com/",
            label: "Frontend Masters",
          },

          {
            href: "https://www.origamid.com/",
            label: "Origamid | BR",
          },
        ],
      },
      {
        sectionId: "paid-courses",
        sectionLabel: "Paid Courses (Portuguese)",
        sectionAriaLabel: "Paid Courses",
        links: [
          {
            href: "https://www.rocketseat.com.br/",
            label: "Rocketseat",
          },
          {
            href: "https://www.origamid.com/",
            label: "Origamid | BR",
          },
        ],
      },
      {
        sectionId: "youtube-channels",
        sectionLabel: "Youtube Channels",
        sectionAriaLabel: "Youtube Channels",
        links: [
          {
            href: "https://www.youtube.com/watch?v=zutb5Clb_0Y",
            label:
              "Future Fullstack | HTML Full Course Tutorial for Beginners - Learn EVERYTHING You Need to Know in Detail (5:25: 52)",
          },
          {
            href: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
            label:
              "SuperSimpleDev | HTML & CSS Full Course - Beginner to Pro (6:31:23)",
          },
          {
            href: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
            label: "Boot dev | Math Every Programmer ACTUALLY Needs (21:56)",
          },
        ],
      },
      {
        sectionId: "practice",
        sectionLabel: "Practice",
        sectionAriaLabel: "Practice",
        links: [
          {
            href: "https://codepen.io/",
            label: "CodePen",
          },
          {
            href: "https://www.codewars.com/",
            label:
              "codewars | Achieve mastery through coding practice and developer mentorship",
          },
          {
            href: "https://www.hackerrank.com/",
            label: "HackerRank | Online Coding Tests and Technical Interviews",
          },
        ],
      },
    ];

    this.shadowRoot.innerHTML = /* HTML */ `
      <style>
        ${styleImports}
        ${style}
      </style>

      <wc-page-header></wc-page-header>

      <wc-contents></wc-contents>

      <div class="line-break">${renderSections(sections)}</div>

      <wc-lesson-nav></wc-lesson-nav>
    `;

    setupContents(this.shadowRoot, sections);
  }
}

customElements.define("wc-resources", Resources);
export default Resources;
